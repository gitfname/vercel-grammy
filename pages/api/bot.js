import { Bot, webhookCallback } from "grammy";

const bot = new Bot(process.env.BOT_TOKEN)


bot.command("start", ctx => {
    ctx.reply("settings here")
})

bot.on("message", ctx => {
    ctx.reply("hello world")
})


export default webhookCallback(bot, "next-js")