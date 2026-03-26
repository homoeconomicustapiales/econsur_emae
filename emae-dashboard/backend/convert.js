const XLSX = require("xlsx");
const fs = require("fs");

const workbook = XLSX.readFile("./data/emae.xls");

// IMPORTANTE: hoja "Tabla Letras"
const sheet = workbook.Sheets["Tabla Letras"];

const data = XLSX.utils.sheet_to_json(sheet);

// Transformación limpia
const parsed = data.map(row => ({
    fecha: new Date(row.Fecha),
    valor: Number(row.Valor || row.EMAE || Object.values(row)[1])
}));

fs.writeFileSync("./data/emae.json", JSON.stringify(parsed, null, 2));

console.log("✅ JSON generado");
