const ms = require('ms');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')


    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send(':x: Vous devez définir une ID de message valide!');
    }

    // try to found the giveaway with prize then with ID
    let giveaway = 
    // Search with giveaway prize
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway){
        return message.channel.send('Je n\'ai pas réussi à trouver un giveaway pour `'+ args.join(' ') + '`.');
    }

    // Edit the giveaway
    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    // Success message
    .then(() => {
        // Success message
        message.channel.send('Le giveaway va prendre fin dans moins de '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' secondes...');
    })
    .catch((e) => {
        if(e.startsWith(`Le giveaway ${giveaway.messageID} est déjà fini.`)){
            message.channel.send('Ce giveaway est déjà fini!');
        } else {
            console.error(e);
            message.channel.send('Une erreur est survenue!');
        }
    });

};

exports.help = {
    name : "end",
    aliases: [""],
    description : "Permet de end un giveaway",
    usage : `end`,
    type : "other",
    maj: "false"
}