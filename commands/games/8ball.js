

const Discord = require("discord.js")

const db = require('quick.db');

module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {

    let question = args[0]

    if (!question) {
      message.channel.send("Vous devez mettre votre questions juste après la commande.")
    }

    else {

      let responses = ["Comme je le vois, oui.", "Demandez le moi plus tard.", "Il vaut mieux que je ne le vous dise pas tout de suite.", "Je ne peux pas le prédire maintenant.", "Concentre toi et redemande le moi.", "N'y comptez pas", "C'est sûr!", "C'est décidément le cas.", "Très probablement.", "Ma réponse est non.", "Mes sources disent non.", "Outlook n'est pas très bon.", "Outlook good.", "Répondre flou, réessayer . "," Les signes indiquent oui. "," Très douteux. "," Sans aucun doute. "," Oui. "," Oui - définitivement. "," Vous pouvez vous y fier. "]

      let response = Math.floor(Math.random() * responses.length)

      message.reply(responses[response])

    }


  }

  exports.help = {
    name: "8ball",
    aliases: [""],
    description: "",
    usage: `8ball`,
    type: "games",
    maj: "false",
}
