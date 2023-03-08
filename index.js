require('dotenv').config()
const { createAudioPlayer, NoSubscriberBehavior } = require('@discordjs/voice');
//Load discord.js
const { generateDependencyReport } = require('@discordjs/voice');
console.log(generateDependencyReport());
const { Client, GatewayIntentBits, Events } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});


const { DisTube } = require("distube");

client.DisTube = new DisTube(client, {
    leaveOnStop: false,
    emitNewSongOnly: true,
    emitAddSongWhenCreatingQueue: false,
    emitAddListWhenCreatingQueue: false,
})

client.on("messageCreate", message => {
    if (message.author.bot || !message.guild) return;
    const prefix = "+"
    const args = message.content.slice(prefix.length).trim().split(/ +/g)

    if (!message.content.toLowerCase().startsWith(prefix)) return;

    if (args.shift().toLowerCase() === "play") {
        client.DisTube.play(message.member.voice.channel, args.join(" "), {
            member: message.member,
            textChannel: message.channel,
            message
        })
    }

    if (message.content.toLowerCase() === prefix + "pause") {
        client.DisTube.pause(message);
        message.reply("Musiikin tauolla.");
    }

    if (message.content.toLowerCase() === prefix + "resume") {
        client.DisTube.resume(message);
        message.reply("Musiikki jatkuu.");
    }

    if (message.content.toLowerCase() === prefix + "stop") {
        client.DisTube.stop(message);
        message.reply("Musiikki lopetettu.");
    }
});




// Create a client
//const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// This code will run once the bot has started up.
client.on("ready", function ()
{
    console.log("Ready to begin! Serving in " + client.channels.length + " channels");
});

// This code will run once the bot has disconnected from Discord.
client.on("disconnected", function () {
    // alert the console
    console.log("Disconnected!");

    // exit node.js with an error
    process.exit(1);
});


// This code will run once the bot receives any message.
client.on('messageCreate', msg => {

    if (msg.author.id !== client.user.id) {
        if(msg.content.indexOf("uijuma") === 0)
        {
            console.log(msg.author.id);
            //msg.channel.send(msg.content.split('').reverse().join(''));
            msg.channel.send("tulkaa äkkiä auttaa mää oon iha jäässä");
        }
    }
});
client.login(process.env.TOKEN)