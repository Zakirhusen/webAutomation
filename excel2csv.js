
// Import filesystem module
const fs = require("fs");
const excel2csv = require("excel2csv");

let allCluster = [
    "tadasExcel",
  "bendigeriExcel",
  "hulagurExcel",
  "dundasiExcel",
  "chandapurExcel",
];

allCluster.forEach((clusterName) => {
    let filesNames = [];
    // console.log('cluseter',clusterName);
    fs.readdir(`./${clusterName}`, (err, files) => {
      if(err){
          console.log(err);
      }else{
          filesNames = [...files];
        }
//   console.log('files',filesNames);
    // check folder is exist ,if not create folder
  clusterName=clusterName.slice(0,-5)
  if (!fs.existsSync(`./${clusterName}Csv`)) {
    fs.mkdirSync(`./${clusterName}Csv`);
  }

  filesNames.forEach((fileName) => {
    // conver excel to csv"
    console.log(fileName)
    // "./bendigeriExcel/(100)GHPS CHIKKABENDIGERI.xls"
    let a = excel2csv.convert(`./bendigeriExcel/(100)GHPS CHIKKABENDIGERI.xls`, {
    // let a = excel2csv.convert(`./${clusterName}Excel/${fileName}`, {
      sheetIndex: 0,
      csvPath: `./${clusterName}Csv/${fileName.slice(0,-4)}.csv`,
      sheetName: "Sheet1",
      writeCsv: true,
    });
    console.log('a',a);
    a.then((res) => console.log(res));
  });
});
});

    // let a = excel2csv.convert(`./bendigeriExcel/(100)GHPS CHIKKABENDIGERI.xls`, {
    //     sheetIndex: 0,
    //   csvPath: `./bendigeriCsv/(100)GHPS CHIKKABENDIGERI.csv`,
    //   sheetName: "Sheet1",
    //   writeCsv: true,
    // });
    // console.log(a)


      // https://drive.google.com/drive/folders/1N-3sUDzsV9Cm868Dw-xvlsc1JoWNAfod?usp=sharing