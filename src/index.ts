import { Bot, Keyboard } from "grammy";
import { token__telegram } from "./configs/constant";
import { messageTime } from "./features/timetable/timetable.service";
import timeout from "../src/features/utils/timeout";

if (!token__telegram) {
  throw new Error("BOT_TOKEN is missing in .env");
}

export const bot = new Bot(token__telegram);

bot.command("start", async (ctx) => {
  const keyboard = new Keyboard().text("Перевірити графік").row();

  await ctx.reply("Оберіть дію:", {
    reply_markup: keyboard,
  });
});

bot.hears("Перевірити графік", async (ctx) => {
  await timeout(300);
  await messageTime(ctx);
});

bot.start();
