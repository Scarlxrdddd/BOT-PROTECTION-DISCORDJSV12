const Discord = require("discord.js");
const moment = require('moment');


exports.run = async (client, msg) => {

  const { MessageEmbed} = require("discord.js");
  const Discord = require("discord.js")
  const moment = require("moment");
  
  exports.run = async (client, msg, args, level) => { // eslint-disable-line no-unused-vars
      function checkDays(date) {
          let now = new Date();
          let diff = now.getTime() - date.getTime();
          let days = Math.floor(diff / 86400000);
          return days + (days == 1 ? " day" : " days") + " ago";
      };
      let user;
      if (msg.mentions.users.first()) {
        user = msg.mentions.users.first();
      } else {
          user = msg.author;
      }
      const member = msg.guild.member(user);
      let rolemap = member.roles
      const embed = new Discord.MessageEmbed()
      .setThumbnail(user.avatarURL({dynamic : true}))
      .setTitle(`${user.username}#${user.discriminator}`)
      .addField("ID:", `${user.id}`, true)
      .addField("Surnom:", `${member.nickname !== null ? `${member.nickname}` : 'Aucun'}`, true)
      .addField("Crée le:", `${user.createdAt.toUTCString().substr(0, 16)} (${checkDays(user.createdAt)})`, false)
      .addField("À rejoint le serveur le:", `${member.joinedAt.toUTCString().substr(0, 16)} (${checkDays(member.joinedAt)})`, false)
      .setFooter(`YOUR BOT NAME | +info pour plus d'infos.`, client.user.displayAvatarURL())
      msg.channel.send({embed});
  }
}
exports.help = {
    name : "userinfo",
    aliases: [""],
    description : "Affiche les information d'un user.",
    usage : `userinfo`,
    type : "general",
    maj: "false"
}