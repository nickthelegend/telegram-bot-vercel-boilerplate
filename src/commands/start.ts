import { Context } from 'telegraf';
import { InlineKeyboardMarkup } from 'telegraf/typings/core/types/typegram';
import createDebug from 'debug';

const debug = createDebug('bot:start_command');

const start = () => async (ctx: Context) => {
  debug('Triggered "start" command');

  const keyboard: InlineKeyboardMarkup = {
    inline_keyboard: [
      [
        // { text: '🌐 X.com', url: 'https://x.com/arenarise' },
        { text: '💬 Community', url: 'https://t.me/arenarisecommunity' },
      ],
      [{ text: '🎮 Play', url: 'https://arenarise.nickthelegend.tech' }],
    ],
  };

  await ctx.reply(
    '👋 Welcome to *ArenaRise*, the ultimate battle of NFT Beasts!\n\n' +
    '⚔️ Compete, evolve, and dominate the leaderboard.\n' +
    '🧠 Strategy meets power — will you rise as Champion?\n\n' +
    '👉 Tap *Play* to enter the arena!',
    {
      parse_mode: 'Markdown',
      reply_markup: keyboard,
    }
  );
};

export { start };