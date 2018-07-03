const Discord = require('discord.js');

const bot = new Discord.Client();
var prefix = ("/");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '#PrayForFoxDemon_', type: 0}})
    console.log("Pret");
});

bot.login('process.env.TOKEN');

bot.on('message', message => {
    if (message.content === "ping"){
        message.reply("pong");
        console.log('Ping pong');
    }

    if (message.content === prefix + "soutien"){
        message.channel.sendMessage("-MicroVoca : J'espère que tu va t en sortir toute la team te soutien le tournoi on va la gagner pour toi \n -Xelios_S : Soutient mec profite a font \n -ZioRaxSurRoblox : Profite des tes proches gros bonne chance :fingers_crossed: \n -Faynoz : Mec, franchement, tu as des grosses couilles pour pouvoir le dire comme ça ! Bref je voulais te dire de rester avec tes amis et ta famille pour le temps qu'il te reste (en espérant que tu sois soigné et que tu reste très longtemps) si tu veux vocal, jouer ou quoi que ce soit je suis dispo pour toi ! Gros soutien.");
        console.log("FOX !");
    }
    
    if (message.content === prefix +"FoxDemon_"){
        var embed = new Discord.RichEmbed()
             .setTitle("FoxDemon_")
             .setDescription("FoxDemon_ Membre NuZiia parti trop tot")
             .addField("Hommage","Si vous pouvez lui rendre hommage de n'importe quelle manière faites le !", true)
             .setColor("0xF7FE2E")
             .setFooter("FoxDemon_ Parti Trop tot")
          message.channel.sendEmbed(embed);

    }

    if (message.content === prefix + "bug"){
        message.channel.sendMessage("Bug du bot : \n -/embed envoie le message 2fois. \n -Commande /help indisponible");
        console.log("Commande help demandée !");
    }})
