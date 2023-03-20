const { QueryType, useMasterPlayer, useQueue } = require('discord-player')


module.exports = {
    name: 'ruokakello',
    description: 'käynnistä ruokakello!',
    voiceChannel: true,
    options: [
        {
            name: 'ruokakello',
            description: 'aseta ruokakellon aika?',
            type: 3,
            required: true
        }
    ],

    async execute(interaction) {
        try {
            //const tracks = interaction.options.getInteger("value")
            const queue = useQueue(interaction.guild.id);
            const index = queue.getSize();

            const channel = interaction.member.voice.channel;
            if (!channel) return interaction.reply('You are not connected to a voice channel!');

            const player = useMasterPlayer();

            if (!queue) {
                return interaction.reply({content: "There is no queue!"})
            }

            const biisit = queue.getSize;

            const randommusa = Math.random( 1, (biisit));
            console.log(`${randommusa}`);

            function getRandomIntInclusive(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1) + min);
            }

            var aikavali = random(18, 54) * 100000;

            AloitaAika();
            function AloitaAika() {
                const aika = new Date();
                let h = aika.getHours() + 2;
                let m = aika.getMinutes();
                let s = aika.getSeconds();
                m = TarkistaAika(m);
                s = TarkistaAika(s);
                console.log("Minuutit seruraavaan biisiin: " + minuutteihin(aikavali));
                if (h == 8 && m == 0 && s == 0) {
                    console.log("Hei kello on 8 aika herätä");
                }
                if (h == 11 && m == 30 && s == 0) {
                    console.log("Hei ruoka aika");
                }
                console.log(h + ":" + m + ":" + s);
                setTimeout(AloitaAika, 1000);
                aikavali -= 1000;
                if (aikavali <= 0) {
                    console.log("Hei biisi" + random(1, 10));


                     player.play(channel, getRandomIntInclusive, {
                        nodeOptions: {
                            metadata: {
                                channel: interaction.channel,
                                client: interaction.guild?.members.me,
                                requestedBy: interaction.user.username
                            },
                            bufferingTimeout: 5000,
                            leaveOnEnd: false,
                        }
                    });

                    aikavali = random(18, 54) * 100000;
                }
            }

            function TarkistaAika(i) {
                if (i < 10) { i = "0" + i };  // Lisää nollan numroiden eteen jotka ovat < 10

                return i;
            }

            function random(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }

            function minuutteihin(millit) {
                var minuutit = Math.floor(millit / 60000);
                var sekunnit = ((millit % 60000) / 1000).toFixed(0);
                return minuutit + ":" + (sekunnit < 10 ? '0' : '') + sekunnit;
            }

            function checkTime(i) {
                if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
                return i;
            }

            let sleep = async (ms) => await new Promise(r => setTimeout(r, ms));
            message.channel.send('Going to sleep!')
            await sleep(2000)
            message.channel.send("I'm awake!!")


            await queue.node.jump(trackIndex)

            return interaction.reply({content: "Jumped successfully successfully!"})
        } catch (error) {
            console.log(error)
        }
    }
}
