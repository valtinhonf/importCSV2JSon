import cstToJson from 'convert-csv-to-json';
import fs from 'fs';
import path from 'path';

let arquivos = fs.readdirSync('ibpt'); //carrega todos os arquivos da pasta

arquivos.map(arquivo => { //percorre arquivo por arquivo
    arquivo = fs.path('ibpt', arquivo)
    let conteudo = cstToJson.utf8Encoding().getJsonFromCsv(arquivo) //obtem o conteudo de cada um...
    
    console.log(conteudo)
})