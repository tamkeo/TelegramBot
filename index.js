const { Telegraf } = require('telegraf')
const YOUR_TOKEN="6167554123:AAH9XeqJlHO-GgI5rrvuF8XvnAzc8lDSnMQ"
const bot=new Telegraf(YOUR_TOKEN)
bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));

bot.on("sticker", (ctx) => ctx.reply("🐶"));

bot.on("message", async (ctx) => {
  const message = ctx.update.message.text;
  if (message.match(/hello/)) {
    ctx.reply("Xin chào");
  } else {
    ctx.reply("Hong hiểu...");
  }
});

bot.launch();

/* Creating a server */

const http = require("http");

const handleRequest = function(request, response) {
   response.setHeader("content-type", "text/plain");
   response.statusCode = 200;
   response.end("Hello NodeJS Server !");
};

const server = http.createServer(handleRequest);

   /* Start running server */

const port = 3000;
const hostname = "localhost";

const callback = function() {
   console.log("Server is running at...");
   console.log(`http://${hostname}:${port}/`);
};

server.listen(port, hostname, callback);