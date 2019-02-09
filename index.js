const Discord = require('discord.js');
   
    if (message.content === 'dito kamu kenal?') {
        message.channel.send('aku kenal dia teitoku ku aku dulu kenal omelnya fufufu.. tapi dito ku suka dia baik banget biar pun aku di omelin saat pertemuan pertama :( tapii... kini dito suka sama tita aku sudah tidak di perdulikan lagiT_T')
    }
    
    if (message.content === ':(') {
        message.channel.send('aku cuman mau dito menepati janjinya saja menikah dengan ku T_T')
  }  
});
client.login('NTQzODczMjEwOTM3MTE0NjI1.D0C8Gg.1cKNC_ZEF8mCOl5PKmqsVAa3AWo');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
  });
  client.on('message', message => {
    if (message.content === 'zuikaku') {
        message.channel.send('Apa Sayang ??^_^');
    }

    if (message.content === 'kamu siapa?') {
        message.channel.send('aku...dan han chan sama karena han chan membuat ku seperti ini^_^') 
    }
     
