import { XmlToJson } from "./modules/xmlToJson.js";
const inputFiles = document.getElementById('files');
const xmlToJson = new XmlToJson();

inputFiles.addEventListener('change', (e) => {
  xmlToJson.toJson(e.target, ['dest']);
})