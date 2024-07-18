const fs = require("fs")

const comandos = JSON.parse(fs.readFileSync("./settings/media/comandos.json"))

const addComandosId = (from) => { 
const obj = { groupId : from, comandos:[]};
comandos.push(obj); 
fs.writeFileSync('./settings/media/comandos.json', JSON.stringify(comandos))};
const getComandos = (from) => { 
let position = false; Object.keys(comandos).forEach((i) => { 
if (comandos[i].groupId === from) { position = i }});
if (position !== false) { 
return comandos[position].groupId 
}}
const addComandos = (from, oq) => { 
let position = false;
Object.keys(comandos).forEach((i) => { 
if (comandos[i].groupId === from ){ 
position = i 
}}); 
if (position !== false) { 
comandos[position].comandos.push(oq); fs.writeFileSync('./settings/media/comandos.json', JSON.stringify(comandos))}
}
const deleteComandos = (from, oq) => { let position = false; Object.keys(comandos).forEach((i) => { if (comandos[i].groupId === from ){ position = i }}); if (position !== false) { comandos[position].comandos.splice(oq, 1); fs.writeFileSync('./settings/media/comandos.json', JSON.stringify(comandos))}}
const getComandoBlock = (from) => { let position = false; Object.keys(comandos).forEach((i) => { if (comandos[i].groupId === from) { position = i }}); if (position !== false) { return comandos[position].comandos}}

module.exports = {
addComandosId, deleteComandos,
getComandoBlock, getComandos, 
addComandos
}