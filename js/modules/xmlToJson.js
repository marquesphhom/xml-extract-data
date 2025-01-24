import { Helpers } from "../helpers/helpers.js";

export class XmlToJson {
  constructor() {
    this.helpers = new Helpers();
    this.dbKeys = this.helpers.keys();
    this.dados = this.helpers.getDados();
    this.objArray = [];
  }

  parseXMLFromFiles(inputFile, tags) {
    return new Promise((resolve, reject) => {
      const files = inputFile.files;
      const results = [];
  
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
  
          tags.forEach((tag) => {
            const elements = xmlDoc.getElementsByTagName(tag);
            if (elements.length > 0) {
              // Pega o valor do primeiro elemento correspondente à tag
              extractedData[tag] = elements[0].textContent;
            }
          });
  
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