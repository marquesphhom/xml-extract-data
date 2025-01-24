import { XmlToJson } from "./modules/xmlToJson.js";
const inputFile = document.getElementById('files');
const table = document.querySelector('.table')
const xmlToJson = new XmlToJson();

const tags = xmlToJson.dados

inputFile.addEventListener('change', () => {
  xmlToJson.parseXMLFromFiles(inputFile, tags.dest)
  .then(data => {
    data.forEach((d, index) => {
      console.log(d)
    })
  })
})


