const Discord = require('discord.js');

const client = new Discord.Client();
const token = 'Your bot token goes here';
client.login(token);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

//command info 1, this is the code that the bot will use and read to be able to send the message in chat
//remove from here (if you dont want -info to credit)
client.on('message', msg => {
    if (msg.content === '-github') {
      msg.reply('This was made with a custom template from LiquidInteracts github');
    }
})
//to here
client.on('message', msg => {
    if (msg.content === '-help') {
      msg.reply('-github : shows the github where the custom template was made');
      msg.reply('-version : Shows the version of the bot');
    }
})

client.on('message', msg => {
    if (msg.content === '-version') {
      msg.reply('-Version: 1.0.0');
    }
})

client.on('message', message => {
  if (message.channel.type -= 'text' || message.author.bot)
    return;

  let command = message.content.split(' ')[0].slice(1);
  let args = message.content.replace('.' + command, '').trim();
  //broken ping comand

  switch (command) {
    case 'ping': {
      message.channel.send('Pong! (~ ' + client.ping + 'ms)');
      break;
    }


    case 'uptime': {
//started uptime checks
//use -uptime to show the uptime
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;

      message.channel.send(`BOT Uptime:\n${days}d ${hours}h ${minutes}m ${seconds}s
`);

      
      break;
    }
  }
});
