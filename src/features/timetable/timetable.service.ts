import { fetchMenus } from "../api/api.service";
import formatGroups from "../../utils/formatGroups";

import type { Context } from "grammy";

export const messageTime = async (ctx: Context) => {
  const menus = await fetchMenus();

  if (!menus.length) {
    return ctx.reply("Немає даних");
  }

  const today = menus[0];
  const tomorrow = menus[1];

  if (!today || !tomorrow) {
    return ctx.reply(
      "Відсутні дані про відключення для сьогоднішнього і завтрашнього дня",
    );
  }

  const [tTitle, tSubtitle, ...tGroups] = today.rawHtml;
  const [tmTitle, tmSubtitle, ...tmGroups] = tomorrow.rawHtml;

  try {
    if (tGroups.length > 0) {
      const messageToday = `
        <b>⏱️ ${tTitle}</b>
        <i>${tSubtitle}\n</i>
        ${formatGroups(tGroups)}
      `
        .replace(/^[ \t]+/gm, "")
        .trim();

      return await ctx.reply(messageToday, { parse_mode: "HTML" });
    }

    if (tmGroups.length > 0) {
      const messageTomorrow = `
        <b>⏱️ ${tmTitle}</b>
        <i>${tmSubtitle}</i>
        ${formatGroups(tmGroups)}
      `
        .replace(/^[ \t]+/gm, "")
        .trim();

      return await ctx.reply(messageTomorrow, { parse_mode: "HTML" });
    }

    return ctx.reply("Графіки не застосовані");
  } catch (error) {
    console.error(error);
    return ctx.reply("Помилка при отриманні даних");
  }
};
