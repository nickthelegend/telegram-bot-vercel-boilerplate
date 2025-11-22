import { Telegraf } from 'telegraf';

import { about, start } from './commands';
import { greeting } from './text';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { development, production } from './core';

const BOT_TOKEN = process.env.BOT_TOKEN || '';
const ENVIRONMENT = process.env.NODE_ENV || '';

const bot = new Telegraf(BOT_TOKEN);

// Set persistent menu button
bot.telegram.setChatMenuButton({
  menuButton: {
    type: 'web_app',
    text: 'Play 🎮',
    web_app: { url: 'https://arenarise.nickthelegend.tech' }
  }
}).then(() => {
  console.log('✅ Menu button set successfully!');
}).catch(console.error);

bot.command('start', start());
bot.command('about', about());
bot.on('message', greeting());

//prod mode (Vercel)
export const startVercel = async (req: VercelRequest, res: VercelResponse) => {
  await production(req, res, bot);
};
//dev mode
ENVIRONMENT !== 'production' && development(bot);
