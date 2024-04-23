module.exports = {
  name: 'repeat',
  aliases: ['rep'],
  description: 'Повторяет текущий трек',
  execute(message, args) {
    // Получаем аудио плеер для сервера
    const player = message.client.manager.players.get(message.guild.id);
    
    // Проверяем, есть ли аудио плеер и играет ли музыка
    if (!player || !player.queue.current) {
      return message.reply('На сервере не играет музыка.');
    }

    // Переключаем флаг повтора текущего трека
    player.setTrackRepeat(!player.trackRepeat);

    // Отправляем сообщение об изменении состояния повтора
    const state = player.trackRepeat ? 'включен' : 'выключен';
    message.reply(`Повтор трека теперь ${state}.`);
  },
};
