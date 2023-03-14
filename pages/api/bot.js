import { Bot, webhookCallback } from "grammy";

const bot = new Bot(process.env.BOT_TOKEN)


bot.on("message", ctx => {
    ctx.reply("hello world")
})

export default function handler(req, res) {
    res.status(200).json({"status": "hello world"})
}