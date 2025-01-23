export class XmlToJson {
  constructor() {
    this.destObj = {
      CNPJ: '',
      xNome: '',
      xFant: '',
      IE: '',
      IM: '',
      CNAE: '',
      email: ''
    };
    this.dest = ['CNPJ', 'xNome', 'xFant', 'IE', 'IM', 'CNAE', 'email'];

    this.enderDest = ['xLgr', 'nro', 'xCpl', 'xBairro', 'cMun', 'xMun', 'UF', 'CEP', 'cPais', 'xPais', 'fone'];
  }

  xmlToTxt(xml){
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "text/xml");
    return xmlDoc;
  }

  toJson(inputFiles, tags){
    const files = this.getFiles(inputFiles);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        const xml = reader.result;
        const xmlDoc = this.xmlToTxt(xml);
        this.dest.forEach(tag => {
          const element = xmlDoc.getElementsByTagName(tag)[0];
          if(element) {
            console.log(element.tagName, element.textContent);
          }
        })
      };
    }
    //return filesArray;
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