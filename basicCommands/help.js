const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const db = require("../mongodb");

module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;

    const embed = new MessageEmbed()
      .setColor('#2b71ec')
      .setAuthor('Im here to Help!', 'https://cdn.discordapp.com/attachments/1175487983915376662/1175667506791325706/communication.png?ex=656c10b0&is=65599bb0&hm=e378f1b355a2401bcab504b08a0766001d6b7c090c91ce0a7a7a87c868feb955&', 'https://discord.gg/FUEHs7RCqz')
      .setDescription(`Here are some available commands:\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [GlaceYT](https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A)**`)
      .addFields(
        // Music commands category
        {
          name: '▶️  Music',
          value: '`play`, `stop`, `history`,`volume`,`pause`,`resume`,`247`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage('https://cdn.discordapp.com/attachments/1170652474563117138/1224660177039396876/MULTI_MUSIC_v1.5.png?ex=661e4cab&is=660bd7ab&hm=f7a542462fabaf9c1530ece5aa72597cff3ac032876bba46df5ddba7e122ea99&');

    const button1 = new MessageButton()
      .setLabel('YouTube')
      .setURL('https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A')
      .setStyle('LINK');

    const button2 = new MessageButton()
      .setLabel('Discord')
      .setURL('https://discord.gg/FUEHs7RCqz')
      .setStyle('LINK');

    const button3 = new MessageButton()
      .setLabel('Code')
      .setURL('https://replit.com/@BEASTGAMERS1/MULTI-MUSIC-BOT-v200?v=1')
      .setStyle('LINK');

    const row = new MessageActionRow()
      .addComponents(button1, button2, button3);

    message.reply({ embeds: [embed], components: [row] });
  },
};
