/* =================================== \\
 * Direitos Autorais © [2024] Zero Two Conteúdos
 * Todos os direitos reservados do início a Nueva Generación - Aleatory Conteúdos, por motivo de desde sua primeira versão é usada a base do "Bot Aleatory", que nunca será ocultada, sempre está presente e sou grato por tudo ao desenvolvedor do Ale.
  * Leia o arquivo "LICENSE" para saber mais, sobre os termos de garantia e o que não pode ou pode fazer em sua construção.
  
/* ------------------------------ AVISO  ------------------------------

Reprodução, edição e outros estão autorizados MAS SEM REMOVER MEUS CRÉDITOS.
Caso remova, resulta na quebra da licença do mesmo, o que é um crime federal.
Plagiar meus comandos não te torna coder, vá estudar, não seja um ladrão miserável.
Levei meses nesse projeto e não paro de me empenhar em deixar todos felizes.
Obrigado a todos que me apoiam, que não roubam isso, que pegam e põem os créditos etc... 

(Liberdade N° 0)
A liberdade de executar o programa 
para qualquer propósito.

(Liberdade N° 1)
A liberdade de estudar como o 
programa funciona e adaptá-lo
às suas necessidades.

(Liberdade N° 2)
A liberdade de redistribuir cópias 
de modo que voê possa ajudar
ao seu próximo.

(Liberdade N° 3)
A liberdade de aperfeiçoar o
programa é liberar os seus 
aperfeiçoamentos, de modo que
toda a comunidade se benefecie
deles.

//SE REPORTA ESSE VÍDEO E BOT SEM PERMISSÃO
//EU LUCAS MOD DOMINA VOU ATRAS DE VC, E BANIR SEU NÚMERO DO WHATS
//CUIDADO PARCEIRO!

* ------------------------------  Amo Vc  ------------------------------ */

const fs = require('fs')
const colors = require('colors')
const menu2 = (prefix, pushname, NomeDoBot, groupNome, somembros, groupAdmins, puxarInfo, tempo, data1, hora1, sender) => {

return`
╭═══════════════════ ⪩
│ㅤき⃟✰🔞𝐌𝐄𝐍𝐔🔞✰⃟⃟き
│ㅤㅤㅤㅤ*${tempo}*
╰═══════════════════ ⪨
ㅤㅤㅤㅤㅤㅤ ㅤ ✨┊ㅤ🌸 ┊✨
╭═══════════════════ ⪩
├➣ *BOT:* *${NomeDoBot}*
├➣ *GRUPO:* *${groupNome}*
├➣ *DATA:* *${data1}*
├➣ *HORA:* *${hora1}*
├➣ *MEMBROS:* *${somembros.length}*
├➣ *ADMINS:* *${groupAdmins.length}*
├➣ *TOTAL:* *${puxarInfo.participants.length} PARTICIPANTES*
├➣ *USUÁRIO:* *${pushname}*
╰═══════════════════ ⪨
ㅤㅤㅤㅤㅤㅤ ㅤ ✨┊ㅤ🌸 ┊✨
╭═══════════════════ ⪩
│ㅤき⃟✰🔞𝐌𝐄𝐍𝐔 𝐕𝐀𝐙𝐀𝐃𝐎𝐒🔞✰⃟⃟き
╰═══════════════════ ⪨
ㅤㅤㅤㅤㅤㅤ ㅤ ✨┊ㅤ🌸 ┊✨
╭═══════════════════ ⪩
> ￫ 🔞${prefix}amador (Random)
> ￫ 🔞${prefix}onlyfans (Random)
> ￫ 🔞${prefix}porno (Random)
> ￫ 🔞${prefix}egrilvideo (Random)
> ￫ 🔞${prefix}aline (Random)
> ￫ 🔞${prefix}alifox (Random)
> ￫ 🔞${prefix}alycai (Random)
> ￫ 🔞${prefix}amichan (Random)
> ￫ 🔞${prefix}aninha (Random)
> ￫ 🔞${prefix}baby (Random)
> ￫ 🔞${prefix}belle (Random)
> ￫ 🔞${prefix}brenda (Random)
> ￫ 🔞${prefix}cami (Random)
> ￫ 🔞${prefix}clowniac (Random)
> ￫ 🔞${prefix}galvao (Random)
> ￫ 🔞${prefix}giovanna (Random)
> ￫ 🔞${prefix}isadora (Random)
> ￫ 🔞${prefix}isa (Random)
> ￫ 🔞${prefix}lay (Random)
> ￫ 🔞${prefix}leticia (Random)
> ￫ 🔞${prefix}marina (Random)
> ￫ 🔞${prefix}maru (Random)
> ￫ 🔞${prefix}princesa (Random)
> ￫ 🔞${prefix}meadinha (Random)
> ￫ 🔞${prefix}nath (Random)
> ￫ 🔞${prefix}nega (Random)
> ￫ 🔞${prefix}polonesa (Random)
> ￫ 🔞${prefix}pornofot (Random)
> ￫ 🔞${prefix}rute (Random)
> ￫ 🔞${prefix}vita (Random)
> ￫ 🔞${prefix}carnie (Random)
> ￫ 🔞${prefix}egril (Random)
> ￫ 🔞${prefix}neter (Random)
╰═══════════════════ ⪨
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(colors.red(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
exports.menu2 = menu2