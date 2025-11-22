import { Context } from 'telegraf';
import { InlineKeyboardMarkup } from 'telegraf/typings/core/types/typegram';
import createDebug from 'debug';

const debug = createDebug('bot:greeting_text');

const greeting = () => async (ctx: Context) => {
  debug('Triggered "greeting" text command');

  const userName = ctx.message?.from.first_name || 'Champion';

  const keyboard: InlineKeyboardMarkup = {
    inline_keyboard: [
      [{ text: '🎮 Enter Arena', url: 'https://arenarise.vercel.app' }],
    ],
  };

  await ctx.reply(
    `👋 Hey ${userName}! Ready for battle?\n\n` +
    '⚔️ Use /start to see all options or jump straight into the arena!',
    {
      parse_mode: 'Markdown',
      reply_markup: keyboard,
    }
  );
};

export { greeting };
