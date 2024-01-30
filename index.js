const Discord = require('discord.js-selfbot-v13');


const keep_alive = require('./keep_alive.js')



const express = require('express');
const app = express();
const port = 3100;//buraya karışmayın.

app.get('/', (req, res) => res.send('we discord'));//değiştirebilirsiniz.

app.listen(port, () =>
console.log(`Bot bu adres üzerinde çalışıyor: http://localhost:${port}`)//port
);



const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1123452468966211674')
    .setType('STREAMING')
    .setURL('https://twitch.tv/RTErdogan') //Must be a youtube video link 
    //.setState('1')
    .setName('﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽')
    //.setDetails(`3 [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media1.tenor.com/m/oFQ0C9daHj0AAAAd/tezgel-bigjobs.gif') //You can put links in tenor or discord and etc.
    //.setAssetsLargeText('Large Text') //Text when you hover the Large image
    //.setAssetsSmallImage('Small Image URL') //You can put links in tenor or discord and etc.
    //.setAssetsSmallText('Small Text') //Text when you hover the Small image
    //.addButton('BAGLANTILAR', 'http://discordp.gq/GDBAGLANTILAR')
    //.addButton('SUNUCU', 'http://discordp.gq/GUNDOGUMU');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `PUT WHAT IT SAYS YOUR STREAMING HERE [${newTime}]`;
      //r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);