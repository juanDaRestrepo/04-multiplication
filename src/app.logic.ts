import { yarg } from "./config/plugins/args.plugin";

const fs = require('fs');



const { b:base, l:limit , s:showTable } = yarg;

let fiveTable:string = `
=====================     
     Tabla del ${ base }
======================\n`;

for( let i = 1; i <= limit; i++ ) {
    fiveTable += `${ base } x ${ i } = ${ base * i }\n`;
}

if( showTable ) {
    console.log(fiveTable)
}

const outputsPath = 'outputs';

fs.mkdirSync(outputsPath, {recursive: true});
fs.writeFileSync(`${ outputsPath }/tabla-${ base }`, fiveTable);
console.log('File created!!')





