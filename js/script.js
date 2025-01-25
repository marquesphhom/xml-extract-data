import { XmlToJson } from "./modules/xmlToJson.js";
import { Helpers } from "./helpers/helpers.js";
const inputFile = document.getElementById('files');
const table = document.querySelector('.table')
const xmlToJson = new XmlToJson();
const helpers = new Helpers()
const dbKeys = helpers.dbKeys
let dados

const entidades = ['dest', 'emit', 'prod']

inputFile.addEventListener('change', async () => {
  dados = await xmlToJson.parseXMLFromFiles(inputFile, entidades)
  .then(data => data)
  //teste()
})


function teste(){
  dados.forEach(d => console.log(d))
}