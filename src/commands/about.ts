import { Context } from 'telegraf';
import { InlineKeyboardMarkup } from 'telegraf/typings/core/types/typegram';
import createDebug from 'debug';

const debug = createDebug('bot:about_command');

const about = () => async (ctx: Context) => {
  debug('Triggered "about" command');

  const keyboard: InlineKeyboardMarkup = {
    inline_keyboard: [
      [
        { text: '🌐 X.com', url: 'https://x.com/arenarise' },
        { text: '💬 Community', url: 'https://t.me/arenarisecommunity' },
      ],
      [{ text: '🎮 Play Now', url: 'https://arenarise.vercel.app' }],
    ],
  };

  await ctx.reply(
    '🏟️ *About ArenaRise*\n\n' +
    '⚔️ The ultimate NFT Beast battle arena where strategy meets power!\n\n' +
    '🎯 *Features:*\n' +
    '• Epic NFT Beast battles\n' +
    '• Strategic gameplay\n' +
    '• Competitive leaderboards\n' +
    '• Community tournaments\n\n' +
    '🚀 Join the arena and prove your worth!',
    {
      parse_mode: 'Markdown',
      reply_markup: keyboard,
    }
  );
};

export { about };
