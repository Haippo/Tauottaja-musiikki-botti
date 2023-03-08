require("dotenv").config();
//console.log(process.env)
//const { generateDependencyReport } = require('@discordjs/voice');
//console.log(generateDependencyReport());
const {Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent ],
});


const {
    joinVoiceChannel,
    createAudioPlayer,
    createAudioResource
} = require('@discordjs/voice');


var item = ['A', 'B', 'C', 'D', 'E'].find((_, i, ar) => Math.random() < 1 / (ar.length - i));
console.log(item);

client.on(Events.MessageCreate, message => {
    if (message.author.bot || !message.guild) return;
    const prefix = "+"
    const args = message.content.slice(prefix.length).trim().split(/ +/g)

    if (message.content.toLowerCase() === prefix + "biisi") {
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guildId,
            adapterCreator: message.guild.voiceAdapterCreator
        })

        if (item === 'A') {

            const player = createAudioPlayer()
            const resource = createAudioResource('./musa1.mp3')

            connection.subscribe(player)

            player.play(resource)

        } else if (item === 'B') {

            const player = createAudioPlayer()
            const resource = createAudioResource('./musa2.mp3')

            connection.subscribe(player)

            player.play(resource)

        } else if (item === 'C') {

            const player = createAudioPlayer()
            const resource = createAudioResource('./musa3.mp3')

            connection.subscribe(player)

            player.play(resource)

        } else if (item === 'D') {

            const player = createAudioPlayer()
            const resource = createAudioResource('./musa4.mp3')

            connection.subscribe(player)

            player.play(resource)
        }
            else if (item === 'E') {

            const player = createAudioPlayer()
            const resource = createAudioResource('./musa5.mp3')

            connection.subscribe(player)

            player.play(resource)
        }
    }


});
    client.login(process.env.TOKEN)