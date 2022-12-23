import cstToJson from 'convert-csv-to-json';

let conteudo = cstToJson.utf8Encoding().getJsonFromCsv('./ibpt/TabelaIBPTaxTO22.2.G.csv')

console.log(conteudo)