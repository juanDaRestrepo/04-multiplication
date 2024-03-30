const fs = require('fs');

const base = 5;
let fiveTable:string = `
=====================     
     Tabla del ${ 5 }
======================\n`;

for( let i = 1; i < 11; i++ ) {
    fiveTable += `5 x ${ i } = ${ base * i }\n`;
}

const outputsPath = 'outputs';


fs.mkdirSync(outputsPath, {recursive: true});
fs.writeFileSync(`${ outputsPath }/tabla-${ base }`, fiveTable);
console.log('File created!!')





