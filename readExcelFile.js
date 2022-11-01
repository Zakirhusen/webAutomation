const fs=require("fs")


const xlsx=require("xlsx")
let file=xlsx.readFile("./bendigeriExcel/(100)GHPS CHIKKABENDIGERI.xls")
// console.log('file',xlsx.utils.sheet_to_json(file.Sheets["Sheet1"]).slice(-1)[0]["Sr. No.   "]);
console.log(file.SheetNames);
console.log('asdf',[2,2,4,5,7,2,88].slice(-1));
console.log("bendigeriExcel".slice(0,-5));