const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const db = require("../mongodb");

module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    message.reply('Here are some available music commands:\n\n`play`, `stop`, `history`, `volume`, `pause`, `resume`, `247`').catch(console.error);
  },
};
