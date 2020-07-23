
const Discord = require("discord.js");

const bot = new Discord.Client();

const animeQuotes = require("animequotes");


var random_number;

function gRandom() {
  random_number = Math.floor(Math.random() * 82);
}

var state = 1;

bot.on("ready", function () {
  console.log(`${bot.user.username} is on!`);

  (function loop() {
		var rand = Math.round(Math.random() * (9000-5001))  + 5000;
		console.log(rand);
		setTimeout(function() {
	gRandom();
	let quote = animeQuotes.randomQuote();
	bot.guilds.get('316787148038733834').channels.get('735664752839360513').send(`${quote.quote} - ${quote.name}, ${quote.anime}.`);
	if (state === 1 ) {
		loop();
	}
		},rand);
	}());

  // bot.user.setActivity(`Deus vult`);
});

bot.on("message", (msg) => {
  
  prefix = "b."; 

  if (msg.content.substring(0,2) !== prefix) return;  

  if (msg.channel.type === "dm") return;

  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

  if (command === "say" && msg.author.id === "316149143078961152") {
    let arg = msg.content.slice(" ");
    let m = arg.slice(1);
    m = arg.slice(2);
    m = arg.slice(3);
    m = arg.slice(4);
    m = arg.slice(5);
    msg.channel.send(m);
  }

  if (command === "start") {
    state = 1;
    (function loop() {
      var rand = Math.round(Math.random() * (9000-5001))  + 5000;
      console.log(rand);
      setTimeout(function() {
    gRandom();
    let quote = animeQuotes.randomQuote();
    bot.guilds.get('316787148038733834').channels.get('735664752839360513').send(`${quote.quote} - ${quote.name}, ${quote.anime}.`);
    if (state === 1 ) {
      loop();
    }
      },rand);
    }());

  }

  if (command === "stop") {
    state = 0;
  }

  if (command === "restart" && msg.author.id === "316149143078961152") {
    bot.destroy();
    setTimeout(function () {
      bot.login(process.env.token);
    }, 5 * 1000);
  }

});

bot.login(process.env.token);
