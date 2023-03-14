import { Bot, webhookCallback } from "grammy";

const bot = new Bot(process.env.BOT_TOKEN)


bot.on("message", ctx => {
    ctx.reply("hello world")
})

bot.command("start", ctx => {
    ctx.reply("settings here")
})

export default webhookCallback(bot, "next-js")