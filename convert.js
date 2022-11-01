const xlsx = require("xlsx");
// Import filesystem module
const fs = require("fs");

// List all the filenames before renaming

let bendigeri = [
  "RMSA UPGRADED HIGH SCHOOL HIREMANKATTI",
  "GHPS CHIKKABENDIGERI",
  "GHPS HIREBENDIGERI",
  "GHPS BELAGALI",
  "GHS HIREBENDIGERI",
  "GLPS CHIKKAMANAKATTI",
  "GLPS HIREBENDIGERI PLOT",
];
let chandapur = [
  "GHPS CHANDAPUR",
  "GHPS HOTANAHALLI",
  "GHPS HUNAGUND",
  "GHPS LAKKIKOPPA",
  "GHPS MUGALIKATTI",
  "GHPS NIDAGUNDI",
  "GHPS SHINGAPUR",
  "GHS CHANDAPUR",
  "GHS HOTANHALLI",
  "GHS HUNAGUND",
  "GLPS HOTANAHALLI (PLOT)",
  "GLPS HULIKATTI",
  "GLPS KALAKATTI",
  "GLPS MANCHINKOPPA",
  "GLPS NEERALAKATTI",
  "GLPS RAJIV GRAM",
  "GLPS SHIDLAPUR",
  "JAGA JYOTHI BASAWESHWAR LOWER PRIMARY SCHOOL CHANDAPUR",
];
let dundasi = [
  "SARASWATHI LOWER PRIMARY SCHOOL HOSUR",
  "KITTUR RANI CHENAMMA RESIDENTIAL SCHOOL DHUNDASI",
  "GOVT MLA GHPS MODEL DUNDSHI",
  "GOVT HIGHER MODEL PRIMARY SCHOOL HOSUR",
  "GLPS KANNADA SCHOOL L.T. DUNDSHI",
  "GLPS YATTINAHALLI TANDA",
  "GLPS MAKAPUR",
  "GLPS JONDALAGATTI",
  "GLPS BASAVANAKOPPA",
  "GLPS B BASAPUR",
  "GLPS ARATAL",
  "GLPKGS DHUNDASHI",
  "GHS HOSUR",
  "GHPS KANNADA SCHOOL SHEELVANT SOMAPUR",
  "GAYATRI LOWER PIMARY SCHOOL HOSUR",
  "SHRI SWAMI VIVEKANAND HIGH SCHOOL, ARTAL-DHUNDASHI",
];

let hulagur = [
  "GHPS KYALKOND",
  "GHPS SHISHUVINAHAL",
  "GHPS KANNADA GIRLS SCHOOL HULAGUR",
  "GHPS MODEL SCHOOL ATTIGERI",
  "GHPS PANIGATTI",
  "GHS ATTIGERI",
  "GHS BASAVANAL",
  "GHS KYALKONDA",
  "GOVT UPGRADED HPS AND HS BELAVALAKOPPA",
  "GOVT UPGRADED HPS AND HS KANNADA BOYS SCHOOL HULAGUR",
  "PRASANNA NEW LIFE CONVENT SCHOOL HULAGUR",
  "SANJEEVINI CONVENT HIGHER PRIMARY SCHOOL HULAGUR",
  "SHRI KHADARALINGA HIGH SCHOOL HULAGUR",
  "SHRI SADGURU VENKATESHWARA MAHASWAMIGALA H S HULGUR",
  "SS GADDEPPANAVAR HIGHER PRIMARY SCHOOL HULAGUR",
  "SSS HIGH SCHOOL SHISHUVINAHAL",
  "YESHWANTH LOWER PRIMARY SCHOOL ATTIGERI",
  "GHPS BASAVANAL",
];
let tadas = [
  "DUNDI BASAVESHWAR HIGH SCHOOL TADAS",
  "GHPS KUNNUR",
  "GHPS ADAVISOMAPUR",
  "GHPS KANNADA BOYS SCHOOL TADAS",
  "GHPS KANNADA GIRLS SCHOOL TADAS",
  "GHS KUNNUR",
  "GLPKG SCHOOL KUNNUR",
  "GLPS KAMALANAGAR (TANDA)",
  "GLPS KUNNUR PLOT",
  "GLPS MUTTALLI",
  "GLPS TARALAGATTA",
  "GLPS HONNAPUR",
  "GLPS MAMADAPUR",
  "GOVT UPGARDED HPS AND HS V D TADAS",
  "MOULANA AZAD MODEL SCHOOL KUNNUR",
  "OMKAR GURUKUL SCHOOL TADAS",
  "SDB HIGHER PRIMARY SCHOOL TADAS",
  "SHREE VEDA MATHA LOWER PRIMARY SCHOOL TADAS",
];
// getCurrentFilenames();
let allCluster = { tadas, bendigeri, hulagur, dundasi, chandapur };
// Rename the file
Object.keys(allCluster).forEach((clusterKey, clusterIndex) => {
  // console.log("cluster", allCluster[clusterKey]);
  allCluster[clusterKey].forEach((schooName, index) => {
    // console.log("cluseter", clusterKey);
    let fileName =
      clusterKey == "bendigeri" || clusterKey == "chandapur"
        ? `${clusterKey}/Enrolled Student List (${index + 1}).xls`
        : `./${clusterKey}/Enrolled Student List(${index + 1}).xls`;
    // console.log("fileName", fileName);
    let file = xlsx.readFile(fileName);
    let noOfStudents = xlsx.utils
      .sheet_to_json(file.Sheets["Sheet1"])
      .slice(-1)[0]["Sr. No.   "];
    fs.rename(
      fileName,
      `./${clusterKey}Excel/(${noOfStudents})${schooName}.xls`,
      (error) => {
        if (error) {
          // Show the error
          console.log(error);
        } else {
          // List all the filenames after renaming
          console.log("\nFile Renamed\n");

          // List all the filenames after renaming
          getCurrentFilenames();
        }
      }
    );
  });
});
// Function to get current filenames
// in directory
function getCurrentFilenames() {
  console.log("Current filenames:");
  fs.readdirSync(__dirname).forEach((file) => {
    // console.log(file);
  });
}

