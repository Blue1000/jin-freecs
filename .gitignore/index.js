const Discord=require('discord.js');

var bot=new Discord.Client();
var prefix=("$");

bot.on('ready', () => {
    console.log("Bot Ready !");
});

bot.login('process.env.TOKEN');

bot.on('message', message => {
     if (message.content === "Ou est Gon?"){
         message.channel.sendMessage("J'ai pas le temps.");
     }

     if (message.content === prefix + "help"){
        message.channel.sendMessage("Commande: :\n -$help : affiche les commandes");
        console.log("Help Utilisé");
     }

});
