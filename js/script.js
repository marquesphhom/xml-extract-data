import { XmlToJson } from "./modules/xmlToJson.js";
import { Helpers } from "./helpers/helpers.js";
const inputFile = document.getElementById('files');
const table = document.querySelector('.table')
const xmlToJson = new XmlToJson();
const helpers = new Helpers()

const entidades = ['emit','dest','prod']
const modal = document.querySelector('.modal')

inputFile.addEventListener('change', async () => {
  modal.classList.add('active')
  dados = await xmlToJson.parseXMLFromFiles(inputFile, ['emit'])
  .then(data => {
    let temp = []
    table.innerHTML = ''
    data.forEach((d, index) => {
      index === 0 ? table.innerHTML += `<tr style="background: rgb(25, 32, 159);"><th>CNPJ</th><th>RAZÃO SOCIAL</th><th>INSCRICAO ESTADUAL</th><th>BAIRRO</th></tr>` : null
      if(!temp.includes(d.emit.inscricao_juridica)){
        table.innerHTML += `<tr><td>${d.emit.inscricao_juridica}</td><td>${d.emit.razao_social.toUpperCase()}</td><td>${d.emit.inscricao_estadual.toUpperCase()}</td><td>${d.emit.bairro.toUpperCase()}</td></tr>`
        temp.push(d.emit.inscricao_juridica)
      }
      //console.log(d)
      if(index === data.length - 1){
        modal.classList.remove('active')
      }
    })
  })
})

