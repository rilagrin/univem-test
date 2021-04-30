const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const cmd = require('node-cmd');

const userID = 0

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async (message) => {
  if (message.author.id == userID) {
    if (message.member.voice.channel) {
      cmd.run(`espeak -v pt -p 99 "${message.content}" --stdout > audio.wav`);
      async function play(voiceChannel) {
        const connection = await voiceChannel.join();
        connection.play('audio.wav');
      }

      play(message.member.voice.channel);
    }
  }

});

client.login(token);
