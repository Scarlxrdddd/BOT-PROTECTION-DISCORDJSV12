const Discord = require("discord.js")
const db = require("quick.db")


module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {


        if(message.member.hasPermission("ADMINISTRATOR")){
            let args = message.content.trim().split(/ +/g);

            if(args[1]){

                if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 100){
                    message.channel.bulkDelete(args[1])
                    message.channel.send(`Vous avez supprimé **${args[1]}** message(s)!`).then(message => message.delete({timeout: 5000}))
                    
                }
                else{
                    message.channel.send(`Vous devez indiquer **une valeur** entre **1** et **100**!`)
                }
            }
            else{
                message.channel.send(`Vous devez indiquer un nombre de messages à supprimer !`)
                }
        }
        else {
            message.channel.send(`Vous n\'avez pas la permission d\'utiliser cette commande.`)
        }
    
    }
    

exports.help = {
    name: "clear",
    aliases: [""],
    description: "",
    usage: `clear <amount of messages>`,
    type: "moderation",
    maj: "false",
}
