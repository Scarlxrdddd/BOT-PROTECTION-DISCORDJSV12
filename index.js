const Discord = require("discord.js");
const fs = require("fs");
const { resolve } = require("path");
const walk = require("walk");
const config = require("./config.json");
const client = new Discord.Client()
const db = require("quick.db")
const db1 = require('mongoose')
const got = require("got");
const Canvacord = require('canvacord');
const nekoclient = require("nekos.life");
const neko = new nekoclient();
const { MongoClient } = require('mongodb')
const { Events } = require('discord-addons')
new Events(client);
client.config = config



const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: config.botsCanWin,
        embedColor: config.embedColor,
        embedColorEnd: config.embedColor,
        reaction: config.reaction
    }
});
client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
});
client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
});
fs.readdir("./events/", (err, files) => {
    if (err) return
    files.forEach((file) => {
        if (!file.endsWith(".js")) return
        const event = require(`./events/${file}`)
        let eventName = file.split(".")[0]
        client.on(eventName, event.bind(null, client))
    })
})
fs.readdir("./logs/", (err, files) => {
    if (err) return
    files.forEach((file) => {
        if (!file.endsWith(".js")) return
        const event = require(`./logs/${file}`)
        let eventName = file.split(".")[0]
        client.on(eventName, event.bind(null, client))
    })
})
client.commands = new Discord.Collection()
client.categories = new Discord.Collection()
const walker = walk.walk("./commands")
walker.on("file", function (root, stats, next) {
    if (!stats.name.endsWith(".js")) return
    const category = resolve(root).split("\\").slice(-1)[0]
    if (!client.categories.has(category)) {
        client.categories.set(category, [])
    }
    let props = require(`${resolve(root)}/${stats.name}`)
    let commandName = stats.name.split(".")[0]
    console.log(`✅ ${commandName}`)
    client.commands.set(commandName, props)
    client.categories.set(category, [
        ...client.categories.get(category),
        commandName,
    ])
    next()
})
client.on("message", (message) => {
    if (message.author.bot) return
    if (!message.content.startsWith(client.config.prefix)) return
    const args = message.content.slice(client.config.prefix.length).split(/ +/g)
    const command = args.shift().toLowerCase()
    const cmd = client.commands.get(command)
    const cmdaliases = client.commands.find(
        (cmd) => cmd.help.aliases && cmd.help.aliases.includes(command)
    )
    if (cmdaliases) {
        cmdaliases.run(client, message, args)
    } else {
        if (cmd) {
            cmd.run(client, message, args)
        } else {
            return
        }
    }
})
client.on("message", async message => {
    if(message.channel.type == "dm") return;
    if(db.has(`antilinks-${message.guild.id}`)=== false) return;
    if(message.content.includes(".fr") ||
    message.content.includes("discord.gg/") ||
    message.content.includes("discord.gg") ||
    message.content.includes("discord.gg`\/") ||
   message.content.includes("https:") ||
 message.content.includes("http:") ||
   message.content.includes("www.") ||
    message.content.includes("discord.com/invite")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.delete().then((_) => {
         message.reply("**Vous ne pouvez pas envoyer de liens ici !**")

         let logchannel7 = db.fetch(`logchannel7_${message.channel.guild.id}`)
   const embed = new Discord.MessageEmbed()
    .setAuthor(`AntiLien Update`)
    .setColor("#2278fa")
    .setDescription(`${message.author} vient d'envoyer un lien! \n Le message contenait : ${message.content}`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.displayAvatarURL({dynamic : true}));
if(message){
    const zebi6 = client.channels.cache.filter((c) => c.id === logchannel7).first()
    zebi6.send(embed)}});}})
let AntiSpam = require('discord-anti-spam');
let antiSpam = new AntiSpam({  
    warnThreshold: 5, 
   kickThreshold: 7,
    maxInterval: 3000, 
    warnMessage: '**{@user}** arrête de spam !', 
    kickMessage: '**{@user}** a été kick pour **spam**!', 
   maxDuplicatesWarning: 5, 
    maxDuplicatesKick: 12, 
    exemptPermissions: ['ADMINISTRATOR'], 
   ignoreBots: false, 
   verbose: true, 
   ignoredUsers: [], 
   warnEnabled: true,
	kickEnabled: false,
	banEnabled: false 
})
client.snipes = new Map();
client.on('messageDelete', function(message, channel){
client.snipes.set(message.channel.id,{
    content: message.content,
    author: message.author.tag,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
})})
client.on('message', (message) => {
if(message.channel.type == "dm") return;
if(db.has(`antispam-${message.guild.id}`)=== false) return;
 antiSpam.message(message);})

      client.on('message', message => {
        if (!message.content.startsWith(config.prefix)) return;
        var args = message.content.split(' ').slice(1);
        var argresult = args.join(' ');
        if (message.author.id !== "YOURID") return;
      
      if (message.content.startsWith(config.prefix + 'setstream')) {
        client.user.setPresence({
              status: '',
             activity: {
                 name: argresult,
                  type: 'STREAMING',
                  url: 'https://www.twitch.tv/tfue'
                }
            })
          message.channel.send(`Je stream maintenant **${argresult}**`)
    }
})
client.on('guildBanAdd', async (guild, user) => {
    if(!user.bot){

        const fetchedLogs = await guild.fetchAuditLogs({
            limit: 1,
            type: 'MEMBER_BAN_ADD',
        });
        const banLog = fetchedLogs.entries.first();
        const { executor, target } = banLog;
        
        let logchannel3 = db.fetch(`logchannel3_${guild.id}`)
        if (target.id === user.id) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`Bannissement d'un membre`)
            .setColor("#104b14")
            .setDescription(`${user} vient d'être **ban** par ${executor}`)
            .setTimestamp()
            .setFooter(executor.username, executor.displayAvatarURL({dynamic : true}));
            if(guild){
                const zebi1 = client.channels.cache.filter((c) => c.id === logchannel3).first()
                zebi1.send(embed)}}};
            })
                client.on('guildBanRemove', async (guild, user) => {
                    if(!user.bot){

        const fetchedLogs = await guild.fetchAuditLogs({
            limit: 1,
            type: 'MEMBER_BAN_REMOVE',
        });
        const banLog2 = fetchedLogs.entries.first();
        const { executor, target } = banLog2;
        let logchannel3 = db.fetch(`logchannel3_${guild.id}`)
        if (target.id === user.id) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`Unbannissement d'un membre`)
            .setColor("#104b14")
            .setDescription(`${user} vient d'être **unban** par ${executor}`)
            .setTimestamp()
            .setFooter(executor.username, executor.displayAvatarURL({dynamic : true}));
            if(guild){
                const zebi2 = client.channels.cache.filter((c) => c.id === logchannel3).first()
                zebi2.send(embed)}}};
            })


client.on('webhookUpdate', async (channel, message) => {
if(db.has(`antiwebhook-${channel.guild.id}`)=== false) return;
channel.guild.fetchWebhooks().then((webhooks) => { webhooks.forEach((webhook) => {
const member = channel.guild.members.cache.get(webhook.owner.id)
let whitelist = db.fetch(`whitelist1_${member.id}.${channel.guild.id}`)
if(whitelist === 1) return;
if(!member.user.bot) {
    member.roles.cache.forEach((role) => {
        member.roles.remove(role.id).catch((_) => 0)})
    
    member.ban()
    }  else {
        member.ban("Va raid plus loin bg")

    }           
    
    let logchannel7 = db.fetch(`logchannel7_${channel.guild.id}`)
    const embed = new Discord.MessageEmbed()
    .setAuthor(`WebHook Update`)
    .setColor("#880000")
    .setDescription(`${webhook.owner} vient de toucher au webhook sous le nom de : ${webhook.name} dans le channel ${webhook.channelID}.`)
    .addFields({ 
        name: "**Action intégrations**",
        value: "Suppression des webhooks en cours <a:loading:787035516972957696>"
    },  
    { 
        name: "**Action rôles**",
        value: "Dérank/Bannissement de la personne/du bot en cours <a:loading:787035516972957696>"
    },)          
    .setTimestamp()
    .setFooter(webhook.owner.tag, webhook.owner.displayAvatarURL({dynamic : true}));
    if(channel){
        const zebi2 = client.channels.cache.filter((c) => c.id === logchannel7).first()
        zebi2.send(embed)
    }})})})
 
client.on("webhookUpdate", channel => {
    if(db.has(`antiwebhook-${channel.guild.id}`)=== false) return;
    let whitelist = db.fetch(`whitelist1_${channel}.${channel.guild.id}`)
if(whitelist === 1) return;
    channel.fetchWebhooks().then((webhooks) => {
        webhooks.forEach((webhook) => {
            const embed = new Discord.MessageEmbed()
            .setAuthor("Kuroko No Protect")
            .addField(`Le meilleur bot de protection **${client.user.username}** vous a encore sauvé la vie.`,`Ajoutez moi à votre serveur en cliquant [ici](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)`)
            .setColor('#0ba2e9')

            const owner = webhook.owner
             const position = channel.position
           channel.clone().then((c) => {c.setPosition(position),c.send(embed)})
            channel.delete().catch((_) => webhook.delete())
             //webhook.delete().catch((_) => channel.send("Le meilleur bot de protection vous a encore sauvé la vie, ajoutez moi à votre serveur."))
})
})
})


    const welcome = require("./welcome");
    welcome(client);
    const bye = require("./bye");
    const { send } = require("process");
    const { discordTime } = require("canvacord/src/Util");
    bye(client);
    client.on('guildMemberAdd',  member => {
        setInterval(() => {
    const serverstats = new db.table('ServerStats');
    let sguildid =  serverstats.fetch(`Stats_${member.guild.id}`, { target: '.guildid' })
    let tusers =  serverstats.fetch(`Stats_${member.guild.id}`, { target: '.totusers' })
    let membs =  serverstats.fetch(`Stats_${member.guild.id}`, { target: '.membcount' })
    let bots =  serverstats.fetch(`Stats_${member.guild.id}`, { target: '.botcount' })

      const totalsize = member.guild.memberCount;
      const botsize = member.guild.members.cache.filter(m => m.user.bot).size;
      const humansize = totalsize - botsize;

    if(member.guild.id === sguildid) { 
          member.guild.channels.cache.find(channel => channel.id === tusers).setName("⚡‍・Membre total : " + member.guild.memberCount);
          member.guild.channels.cache.find(channel => channel.id === membs).setName("🧑・Membres : " + humansize);
          member.guild.channels.cache.find(channel => channel.id === bots).setName("🤖・Bots : " + member.guild.members.cache.filter(m => m.user.bot).size);
        }},)});

    client.on('guildMemberRemove', member => {
        setInterval(() => {
    const serverstats = new db.table('ServerStats');
    let sguildid =  serverstats.fetch(`Stats_${member.guild.id}`, { target: '.guildid' })
    let tusers =  serverstats.fetch(`Stats_${member.guild.id}`, { target: '.totusers' })
    let membs =  serverstats.fetch(`Stats_${member.guild.id}`, { target: '.membcount' })
    let bots = serverstats.fetch(`Stats_${member.guild.id}`, { target: '.botcount' })
      const totalsize = member.guild.memberCount;
      const botsize = member.guild.members.cache.filter(m => m.user.bot).size;
      const humansize = totalsize - botsize;
    if(member.guild.id === sguildid) { 
          member.guild.channels.cache.find(channel => channel.id === tusers).setName("⚡‍・Membre total : " + member.guild.memberCount);
          member.guild.channels.cache.find(channel => channel.id === membs).setName("🧑・Membres : " + humansize);
          member.guild.channels.cache.find(channel => channel.id === bots).setName("🤖・Bots : " + member.guild.members.cache.filter(m => m.user.bot).size);}},)});
    client.on('guildMemberAdd', async (member) => {
        let blacklist = db.fetch(`blacklist1_${member.id}.${member.guild.id}`)
        if(blacklist === 1) return member.ban()
        let logchannel7 = db.fetch(`logchannel7_${member.guild.id}`)
if(db.has(`antibot-${member.guild.id}`)=== false) return;
let whitelist = db.fetch(`whitelist1_${member.id}.${member.guild.id}`)
    if(whitelist !== 1) {
        let user = member.user.bot
        if(!user) return;
            
            const embed = new Discord.MessageEmbed()
    .setAuthor(`AntiAddBot`)
    .setColor("#880000")
    .setDescription(`${user} a voulu rejoindre le serveur mais a été ban car la protection est activée. Veuillez désactiver la protection pour le laisser rentrer.`)
    .setTimestamp()
            client.channels.cache.get(logchannel7).send(embed)}})
client.on("voiceChannelJoin", (member, channel) => {
    let logchannel8 = db.fetch(`logchannel8_${member.guild.id}`)
    const embed = new Discord.MessageEmbed()
    .setTitle('<:appel:790731352172527657>')
    .setColor("#014cc0")
    .setDescription(`**${member}** a rejoint le vocal **${channel.name}**.`)
    .setTimestamp()
    client.channels.cache.get(logchannel8).send(embed);})
client.on("voiceChannelLeave", (member, channel) => {
    let logchannel8 = db.fetch(`logchannel8_${member.guild.id}`)
    const embed = new Discord.MessageEmbed()
    .setTitle("<:deconnexion:790408928449396776>")
    .setColor("#014cc0")
    .setDescription(`**${member}** a quitté le vocal **${channel.name}**.`)
    .setTimestamp()
    client.channels.cache.get(logchannel8).send(embed);})
client.on("voiceChannelSwitch", (member, oldChannel, newChannel) => {
    let logchannel8 = db.fetch(`logchannel8_${member.guild.id}`)
    const embed = new Discord.MessageEmbed()
    .setColor("#880000")
    .setDescription(`**${member}** s'est déplacé du salon **${oldChannel.name}** vers **${newChannel.name}**.`)
    .setTimestamp()
    client.channels.cache.get(logchannel8).send(embed);});
client.on('messageUpdate', async(oldMessage, newMessage) => {
    if(oldMessage.author.bot) return;
    if(oldMessage.content == newMessage.content) return;
    const channel = oldMessage.guild.channels.cache.get(db.fetch(`logchannel2_${oldMessage.guild.id}`));
    if(!channel) return;
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${oldMessage.author.tag}`, `${oldMessage.author.displayAvatarURL({dynamic : true})}`)
    .addField("**Avant** : ",`${oldMessage.content}`)
    .addField("**Après** : ",`${newMessage.content}`)
    .addField("**Channel** : ",`${oldMessage.channel}`)
    .setTimestamp()
    .setColor("#104b14")
    channel.send(embed)});
client.on('roleCreate', async (role) => {  
    if(db.has(`antirole-${role.guild.id}`)=== false) return; 
    let whitelist = db.fetch(`whitelist1_${role.id}.${role.guild.id}`)
    if(whitelist === 1) return;
    const fetchGuildAuditLogs = await role.guild.fetchAuditLogs({
        limit: 1,
        type: 'ROLE_CREATE'
    });
    const latestChannelCreated = fetchGuildAuditLogs.entries.first();
    const { executor } = latestChannelCreated; 
    const channmember = role.guild.member(executor)
    const channel = role.guild.channels.cache.get(db.fetch(`logchannel7_${role.guild.id}`));
    channmember.roles.cache.forEach((role) => {
        channmember.roles.remove(role.id).catch((_) => 0)
    })
  if (!channel) return;
    let embed = new Discord.MessageEmbed()
.addField(`Rôle crée`, `Nom du rôle crée: \`${role.name}\`\nID du rôle crée: \`${role.id}\`\n Membre: ${channmember}`)                    
.setTimestamp()
.setColor("#014cc0")
.addField("Couleur du rôle : ",`${role.hexColor}`)
    channel.send(embed)});
client.on('roleDelete', async (role) => {    
    if(db.has(`antirole-${role.guild.id}`)=== false) return; 
    let whitelist = db.fetch(`whitelist1_${role.id}.${role.guild.id}`)
    if(whitelist === 1) return;
    const fetchGuildAuditLogs = await role.guild.fetchAuditLogs({
        limit: 1,
        type: 'ROLE_DELETE'
    });
    const latestChannelCreated = fetchGuildAuditLogs.entries.first();
    const { executor } = latestChannelCreated; 
    const channmember = role.guild.member(executor)
    const channel = role.guild.channels.cache.get(db.fetch(`logchannel7_${role.guild.id}`));
  if (!channel) return;
    let embed = new Discord.MessageEmbed()
.addField(`Rôle supprimé`, `Nom du rôle supprimé: \`${role.name}\`\nID du rôle supprimé: \`${role.id}\`\n Membre: ${channmember}`)                    
.setTimestamp()
.setColor("#01317a")
    .addField("Couleur du rôle : ",`${role.hexColor}`)
    channel.send(embed)})
client.on('voiceChannelMute', async (member, muteType) => {    
    const fetchGuildAuditLogs = await member.guild.fetchAuditLogs({
        limit: 1,
        type: 'MEMBER_MUTE'
    });
    const latestChannelCreated = fetchGuildAuditLogs.entries.first();
    const { executor } = latestChannelCreated; 
    const channmember = member.guild.member(executor)
    const channel = member.guild.channels.cache.get(db.fetch(`logchannel8_${member.guild.id}`));
    let embed = new Discord.MessageEmbed()
    .setTitle('<:mute:790405949764010015>')
    .setDescription(`${member} s'est mute.`)                    
    .setTimestamp()
    .setColor("#880000")
        channel.send(embed)})
client.on('voiceChannelUnmute', async (member, muteType) => {    
    const fetchGuildAuditLogs = await member.guild.fetchAuditLogs({
        limit: 1,
        type: 'MEMBER_UNMUTE'
    });
    const latestChannelCreated = fetchGuildAuditLogs.entries.first();
    const { executor } = latestChannelCreated; 
    const channmember = member.guild.member(executor)
    const channel = member.guild.channels.cache.get(db.fetch(`logchannel8_${member.guild.id}`));
    let embed = new Discord.MessageEmbed()
    .setTitle(`<:micro:790746812825862195>`)
    .setDescription(`${member} s'est unmute.`)                    
    .setTimestamp()
    .setColor("#880000")
        channel.send(embed)
    })
client.on('voiceChannelDeaf', async (member, deafType) => {    
    const fetchGuildAuditLogs = await member.guild.fetchAuditLogs({
        limit: 1,
        type: 'MEMBER_UPDATE'
    });
    const latestChannelCreated = fetchGuildAuditLogs.entries.first();
    const { executor } = latestChannelCreated; 
    const channmember = member.guild.member(executor)
    const channel = member.guild.channels.cache.get(db.fetch(`logchannel8_${member.guild.id}`));
    let embed = new Discord.MessageEmbed()
    .setTitle('<:casque:790406085621973002>')
    .setDescription(`${member} s'est mute casque.`)                    
    .setTimestamp()
    .setColor("#880000")
        channel.send(embed)})
client.on('voiceChannelUndeaf', async (member, deafType) => {    
    const fetchGuildAuditLogs = await member.guild.fetchAuditLogs({
        limit: 1,
        type: 'MEMBER_UPDATE'
    });
    const latestChannelCreated = fetchGuildAuditLogs.entries.first();
    const { executor } = latestChannelCreated; 
    const channmember = member.guild.member(executor)
    const channel = member.guild.channels.cache.get(db.fetch(`logchannel8_${member.guild.id}`));
    let embed = new Discord.MessageEmbed()
    .setTitle("<:casque:790744721457938474>")
    .setDescription(`${member} s'est unmute casque.`)                    
    .setTimestamp()
    .setColor("#880000")
        channel.send(embed)})
        moment = require("moment-timezone"),
        fetch = require('node-fetch');
  
  class Main {
      constructor() {
          this.sniperInterval;
      }
  
      async setVanityURL(url, guild) {
          const time = moment.tz(Date.now(), "Europe/Paris").format("HH:mm:ss");
          console.log(`[${time}] [INFO] Sniping discord.gg/${url}`);
          return await fetch(`https://discord.com/api/v8/guilds/${guild.id}/vanity-url`, {
              "credentials": "include",
              "headers": {
                  "accept": "*/*",
                  "authorization": "Bot " + client.token,
                  "content-type": "application/json",
              },
              "referrerPolicy": "no-referrer-when-downgrade",
              "body": JSON.stringify({
                  "code": url
              }),
              "method": "PATCH",
              "mode": "cors"
          });
      }
      async checkVanityURL(url) {
          return await fetch(`https://discord.com/api/v8/guilds/${guild.id}/vanity-url`, {
              "credentials": "include",
              "headers": {
                  "accept": "*/*",
                  "authorization": "Bot " + client.token,
                  "content-type": "application/json",
              },
              "referrerPolicy": "no-referrer-when-downgrade",
              "method": "GET",
              "mode": "cors"
          });
      }
  
      async startSnipe(url, guild) {
          this.sniperInterval = setInterval(async () => {
              await this.setVanityURL(url, guild);
          }, 1000);
      }
  
      stopSnipe() {
          return clearInterval(this.sniperInterval);
      }
  }
  


  let handler = new Main();
  
  client.on('message', async (message) => {
      let messageArray = message.content.split(" "),
          args = messageArray.slice(1);
      const args1 = message.content.slice(config.prefix.length).split(/ +/),
            command = args1.shift().toLowerCase();
  
      if (command === "start-snipe") {
          let url = args[0];
          
  
          if (!message.guild.features.includes('VANITY_URL')) {
              return message.reply("Vous n'avez pas d'URL personnalisée. Veuillez atteindre le Niveau 3 de boost sur votre serveur pour utiliser cette fonctionnalité.");
          };
  
          message.reply(`Je commence à sniper l'URL ${url}!`);
          await handler.startSnipe(url, message.guild);
      };
  
      if (command === "stop-snipe") {
        if (!message.guild.features.includes('VANITY_URL')) {
            return message.reply("Vous n'avez pas commencer à start snipe votre URL.");
        };
          handler.stopSnipe();
      };
      
  
  });

client.login(config.token)