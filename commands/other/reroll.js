const ms = require('ms');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')


    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send(':x: Vous n\'avez pas mentionné un ID Message valide!');
    }

    // try to found the giveaway with prize then with ID
    let giveaway = 
    // Search with giveaway prize
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway){
        return message.channel.send('Impossible de trouver un giveaway pour `'+ args.join(' ') +'`.');
    }

    // Reroll the giveaway
    client.giveawaysManager.reroll(giveaway.messageID, {
        messages: {
            congrat: ":tada: Nouveau(x) Gagnant(s) : {winners}! Félicitations!",
            error: "Aucune participation valide, aucun gagnant choisis !"
        }

    })
    //.then(() => {
        // Success message
    //message.channel.send('Le Giveaway a été reroll !');
    //})
    
    .catch((e) => {
        if(e.startsWith(`Giveaway avec comme ID ${giveaway.messageID} n'est pas fini.`)){
            message.channel.send('Ce Giveaway n\'est pas fini.');
        } else {
            console.error(e);
            message.channel.send('Une erreur est survenue !');
        }
    })

}
    exports.help = {
        name : "reroll",
        aliases: [""],
        description : "Permet de reroll un giveaway",
        usage : `reroll`,
        type : "other",
        maj: "false"
    }