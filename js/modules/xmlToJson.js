import { Helpers } from "../helpers/helpers.js";

export class XmlToJson {
  constructor() {
    this.helpers = new Helpers();
    this.dbKeys = this.helpers.dbKeys
    this.dados = this.helpers.dados
    this.dest = this.helpers.dest
  }

  parseXMLFromFiles(inputFile, tags) {
    return new Promise((resolve, reject) => {
      const files = inputFile.files;
      const results = []
      
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
          
          let obj = {}

          tags.forEach((tag) => {
            if(xmlDoc.getElementsByTagName(tag)[0]){
              entidades[tag] = (xmlDoc.getElementsByTagName(tag)[0])
            }
          })

          tags.forEach((tag) => {
            this.dados[tag].forEach((dado) => {
              if(entidades[tag].getElementsByTagName(dado)[0]){
                obj[this.dbKeys[entidades[tag].getElementsByTagName(dado)[0].tagName]] = entidades[tag].getElementsByTagName(dado)[0].textContent
              }
            })
            extractedData[tag] = obj
            obj = {}
          })
          
          results.push(extractedData);
  
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