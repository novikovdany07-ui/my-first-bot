
require('dotenv').config();
const {Bot, InlineKeyboard} = require('grammy');
const bot = new Bot(process.env.BOT_TOKEN);
const menu = new InlineKeyboard()
      .text('Услуги', 'services').row()
      .text('Цены', 'price').row()
      .text('Контакты', 'about');
      bot.command('start', async(ctx)=>{
        await ctx.reply('Привет, выбери пункт',{
            reply_markup: menu
        });
      });
bot.callbackQuery('services', async(ctx)=>{
    await ctx.reply('Наши услуги сайты и боты');
});
bot.callbackQuery('price', async(ctx)=>{
    await ctx.reply('Простой веб сайт-1200 руб и бот тгк-900 руб');
});
bot.callbackQuery('about', async(ctx)=>{
    await ctx.reply('пиши сюда: @web_projectt');
});
bot.start();
console.log("бот запущен");