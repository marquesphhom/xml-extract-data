import { Helpers } from "../helpers/helpers.js";

export class XmlToJson {
  constructor() {
    this.helpers = new Helpers();
    this.dbKeys = this.helpers.dbKeys
    this.dados = this.helpers.dados
    this.dest = this.helpers.dest
    this.objArray = [];
  }

  parseXMLFromFiles(inputFile, tags) {
    return new Promise((resolve, reject) => {
      const files = inputFile.files;
      const results = [];
      let stringForArray = ''
      let tagsArray = []
  
      if (!files || files.length === 0) {
        reject(new Error('Nenhum arquivo selecionado.'));
        return;
      }
  
      Array.from(files).forEach((file, index) => {
        const reader = new FileReader();
  
        reader.onload = (event) => {
          const xmlContent = event.target.result;
  
          // Parse o conteúdo XML usando DOMParser
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xmlContent, 'text/xml');

          const extractedData = {};          
     
          const entidades = {}
          
          tags.forEach((tag) => {
            if(xmlDoc.getElementsByTagName(tag)[0]){
              entidades[tag] = (xmlDoc.getElementsByTagName(tag)[0])
            }
          })
          
          tags.forEach((tag) => {
            this.dados[tag].forEach((dado) => {
              if(entidades[tag].getElementsByTagName(dado)[0]){
                console.log(this.dbKeys[entidades[tag].getElementsByTagName(dado)[0].tagName], entidades[tag].getElementsByTagName(dado)[0].textContent)
              }
            })
          })
         
          //entidades.forEach(e => console.log(e.prod))
          
          //const destinatario = xmlDoc.getElementsByTagName(tags[0])[0]
          

          //TESTE ATUAL

          // tags.forEach((tag) => {
          //   this.dados[tag].forEach((t) => {
          //     if(destinatario.getElementsByTagName(t)[0]){
          //       console.log(destinatario.getElementsByTagName(t)[0].tagName, destinatario.getElementsByTagName(t)[0].textContent)
          //       extractedData[destinatario.getElementsByTagName(tag)[0].tagName] = destinatario.getElementsByTagName(tag)[0].textContent;
          //     }
          //   })  
          // })


          // tags.forEach((tag) => {
          //     const elements = xmlDoc.getElementsByTagName(tag);
          //     if (elements.length > 0) {
          //       // Pega o valor do primeiro elemento correspondente à tag
          //       extractedData[tag] = elements[0].textContent;
          //     }
          //   });
          

          results.push(extractedData);
  
          // Quando todos os arquivos forem processados, resolvemos a Promise
          if (index === files.length - 1) {
            resolve(results);
          }
        };
  
        reader.onerror = () => reject(new Error(`Erro ao ler o arquivo: ${file.name}`));
  
        reader.readAsText(file);
      });
    });
  }

  getFiles(element){
    const files = element.files;
    return files;
  }
}

// upload.addEventListener('change', (e) => {
//   const parser = new DOMParser();
//   const file = e.target.files[0];
//   const reader = new FileReader();
//   dragDrop.innerHTML = `<p>${file.name}</p>`;
//   reader.readAsText(file);
//   reader.onload = () => {
//       const base64 = reader.result;
//       xmlDoc = parser.parseFromString(base64, "text/xml");
//       const dest = xmlDoc//.getElementsByTagName('dest')[0]
//       destinatarioTags.forEach(tag => {
//           const element = dest.getElementsByTagName(tag)[0];
//           if(element) {
//               console.log(element.tagName, element.textContent);
//           }
//       });
//   };
// })