/*
██╗███╗░░██╗███████╗██╗███╗░░██╗██╗████████╗██╗░░░██╗
██║████╗░██║██╔════╝██║████╗░██║██║╚══██╔══╝╚██╗░██╔╝
██║██╔██╗██║█████╗░░██║██╔██╗██║██║░░░██║░░░░╚████╔╝░
██║██║╚████║██╔══╝░░██║██║╚████║██║░░░██║░░░░░╚██╔╝░░
██║██║░╚███║██║░░░░░██║██║░╚███║██║░░░██║░░░░░░██║░░░
╚═╝╚═╝░░╚══╝╚═╝░░░░░╚═╝╚═╝░░╚══╝╚═╝░░░╚═╝░░░░░░╚═╝░░░ 
Pᴏssɪʙɪʟɪᴛɪᴇs ᴀʀᴇ ɪɴ ᴏᴜᴛ ɴᴀᴍᴇ 💫
Creator: Ari_Senpai ⚜ || Also thanks to Team Infinity© !
Remove this logo or text your code and bot will be automatically 
removed and all code will be obfusicated! 
Its not a treat, Its a promise from our Team!
*/
require("dotenv").config();
const fs = require("fs");

let gg = process.env.MODS;
if (!gg) {
  gg = ""; // add your number
}

global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || ""; // add your mongouri
global.mainlogo = fs.readFileSync("./Assets/inflogo.jpg");
global.prefa = process.env.PREFIX || "-"; //add random prefix like: - , . 
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c"; // add yours
global.packname = process.env.PACKNAME || `Infinity Bot`;
global.author = process.env.AUTHOR || "by: Team Infinity";
global.port = process.env.PORT || "0";
global.openAiAPI = process.env.OPENAI_API || "Put your openai API key here";
global.owner = gg.split(",");
global.autopurge = 'true'

module.exports = {
  mongodb: global.mongodb,
};
