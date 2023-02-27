# Haippo_botti
kuvaus
tauottaja soittaa musiikkia random ajankohtina, aikaan ja kohdasta. Poikkeuksena klo 11.30 ruoka, jolloin botti soittaa aina jotakin musiikkia. 
kielenä käytetään java scrptiä

asennuspaketit
discord, discord.js, node.js, joku haluamasi koodin käsittely ohjelma esim. visualstudio code tai web storm

riippvuudet


oikeudet
puhumis
joinata mille tahansa kanavalle
soundcloud listaan

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
(/alita tauottaja komento, jolloin ajastin alkaa käydä ja loppuu /lopeta tauottaja)
soittoajan määritys 30min-90min 
arpoo monenko minuutin kuluttua musiikki alkaa soida
ajastin käynnistyy
kun, ajastin on 0 musiikki käynnistyy
seurvaana tauon arvonta alkaa kun musiikki on soitettu
soittoajan pituuden arvonta 15sec-30sec
ajastimen käynnistys
valitsee musiikin soundcloud listalta
musiikissa jäljellä ainakin botin arpoman ajan verran (jos ei toteudu vaihtaa uuteen musiikkiin.)

botti liittyy palvelimelle ja sitten puhekanavalle,


jolla olet ja alkaa soittamaan musiikkia hetken aikaa jostain satunnaisesta kohdasta, jonka se on ottanut jostakin musiikintoisto palvelusta. /quit komento poistaisi botin kanavalata ja /ruoka voisi säätää ruuan alkamis ajankohtaa.
