const Discord = require("discord.js")
const got = require("got");
const db = require('quick.db');

module.exports.run = async (
    client = new Discord.Client(),
    message = new Discord.Message(),
    args = []
) => {
    //if(console.error) return message.channel.send(`Veuillez spécifier un memechannel avec la commande : +setmemechannel <#channel>`)

    const embed = new Discord.MessageEmbed()
    got('https://www.reddit.com/r/Memes_Of_The_Dank/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.fr${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${memeTitle}`)
        embed.setURL(`${memeUrl}`)
        embed.setImage(memeImage)
        embed.setColor('RANDOM')
        embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
    
        let memechannel = db.fetch(`memechannel_${message.guild.id}`)
        const channel = message.guild.channels.cache.filter(ch => ch.id === memechannel);
       client.channels.cache.get(memechannel).send(embed)
    
    })
}

exports.help = {
    name: "meme",
    aliases: [""],
    description: "",
    usage: `meme`,
    type: "games",
    maj: "false",
}