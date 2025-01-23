import { Helpers } from "../helpers/helpers.js";

export class XmlToJson {
  constructor() {
    this.helpers = new Helpers();
    this.dbKeys = this.helpers.keys();
    this.dados = this.helpers.getDados();
  }

  xmlToTxt(xml){
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "text/xml");
    return xmlDoc;
  }

  toJson(inputFiles, tags){
    const files = this.getFiles(inputFiles);
    const objArray = []
    const obj = {};
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        const xml = reader.result;
        const xmlDoc = this.xmlToTxt(xml);
        tags.forEach((tag, index) => {
          this.dados[tag].forEach((element) => {
            if(xmlDoc.getElementsByTagName(element)[0]){
              obj[this.dbKeys[element]] = xmlDoc.getElementsByTagName(element)[0].textContent;
            }
          });
          if(index === tags.length - 1){
            console.log(obj)

          }
        })
        // if(i === files.length - 1){
        //   objArray.push(obj);
        //   console.log(obj)
        // }
      };
    }
    return objArray;
  }

  getFiles(element){
    const files = element.files;
    return files;
  }

  convert() {
    this.obj = xmlToJson(this.xml);
  }

  getObj() {
    return this.obj;
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