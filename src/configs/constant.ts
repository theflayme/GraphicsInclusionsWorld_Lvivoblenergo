import dotenv from "dotenv";

dotenv.config({
  path: "./.env.development.local",
  override: true,
});

console.log("[ENV] Loaded API_URL =", process.env.API_URL);
console.log("[ENV] Loaded TOKEN =", process.env.BOT_TOKEN);

const token__telegram = process.env.BOT_TOKEN;
const api__url = process.env.API_URL;

export { token__telegram, api__url };
