const Discord = require("discord.js")
module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {

let rps = ["ciseau", "papier", "pierre"];
let i;
if(!rps.includes(args[0])) return message.reply("S'il te plait choisi soit pierre, papier ou ciseau.");
if(args[0].includes("pierre")) {
i = 2;
}
if(args[0].includes("papier")) {
i = 1;
}
if(args[0].includes("ciseau")) {
i = 0;
}
if(rps[i]) {
let comp = Math.floor((Math.random() * 3) + 1);
let comp_res = parseInt(comp) - parseInt("1");
let comp_val = rps[parseInt(comp_res)];
if(i === comp_res) {
return message.channel.send(`Tu as choisi **${args[0]}** Et j'ai choisi **${comp_val}** **égalité**, Recommence!`); 
}
if(i > comp_res) {
return message.channel.send(`Tu as choisi **${args[0]}** Et j'ai choisi **${comp_val}** et **j'ai gagné** ! Bien joué, recommence!`);
} 
if(i < comp_res) {
return message.channel.send(`Tu as choisi **${args[0]}** Et j'ai choisi **${comp_val}** et **j'ai perdu**! Félicitations pour ta victoire!`);
}
}
}
exports.help = {
    name: "rps",
    aliases: [""],
    description: "",
    usage: `rps`,
    type: "games",
    maj: "false",
}