# Haippo_botti
kuvaus
tauottaja soittaa musiikkia random ajankohtina, aikaan ja kohdasta. Poikkeuksena klo 11.30 ruoka, jolloin botti soittaa aina jotakin musiikkia. 
kielenä käytetään java scrptiä

asennuspaketit
discord, discord.js, node.js, joku haluamasi koodin käsittely ohjelma esim. visualstudio code tai web storm

riippvuudet


oikeudet
discord botti tarvitsee puhumis oikeuden ja oikeuden joinata mille tahansa kanavalle

kehitysalusta 
webstorm

pystytyksen kuvaus
discordin tarvii
node.js käyttöjärjestelmän asennus rutiinin mukaisesti
mene webstormin terminaaliin ja varmista että olet projektin omassa kansiossa sen jälkeen

npm init -y
npm install discord.js 
yarn add discord.js
pnpm add discord.js
(npm install @discordjs/rest) 
(npm install @discordjs/voice)

.env, jos haluaa että salasana api-avain tai muu herkkä data ei näy koodissa.
npm install dotenv --save


https://github.com/Baanaani/Haippo_botti

selkokielellä
liitä botti jäseneksi serverille.
soittoajan määrityksen ajastin alkaa klo 8.00 ja loppuu 15.00 ihan sama mitä tekee
(/ajastin komento, jolloin ajastin alkaa käydä ja loppuu /lopeta ajastin)
soittoajan määritys 30min-90min 
arpoo monenko minuutin kuluttua musiikki alkaa soida
alkaa soida uudelleen (loop)
soittoaika 15sec-30sec
valitsee musiikin ennalta määritetystö paikasta
musiikissa jäljellä ainakin botin arpoman ajan verran (jos ei toteudu vaihtaa uuteen musiikkiin.)

botti liittyy palvelimelle ja sitten puhekanavalle,


jolla olet ja alkaa soittamaan musiikkia hetken aikaa jostain satunnaisesta kohdasta, jonka se on ottanut jostakin musiikintoisto palvelusta. /quit komento poistaisi botin kanavalata ja /ruoka voisi säätää ruuan alkamis ajankohtaa.
