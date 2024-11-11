//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VavOG5W4CrfiM7zHWI30";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VavOG5W4CrfiM7zHWI30";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0xlbmFwN3g2OFh2NzNPWCt5aUpnS3F6b24wR29UUkdub0szR3kvK1EzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0NPQWhQNklFZkhJRVVYYXpHeEtqcnhLVGNWREx1Q0xlVnhYZzNqWDJ5UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTnNiQmRISTk1emVsNXNsQngyUTdwWUs2OTBzNGx4OEcyYzNBSTZ3cEZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkaXdkaWxhWTl6M0FmZDZlb0xWeDFrM2hxbjZlRDRBWTlYZ2J0dWxmZ0NvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFIVklxeFpsRjVmTVE3SCtKeHprN2w0WlJOK0Jia0d2SHRNbTNYKzg2R0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9mTUI2TmhyQkUvbUFkYnlhQUs1Vk9DN0psWTZUT3FMd1RxaDJZN0FuaTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEpKdGhHdENEeDloS3pFNlFhQnAvTHY4cFkzRGwvcGRSVVBKWlEyYTkwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3BuR215NDZZYk9ucEVoanhUeDZ4N2hweCtyajN6ZnJ4REUzTDE4SFRDOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlqeXdBNmRjdUNSSDNtRkhFL29pcTNLb2ZlZnhnQThoQi9LN2JTQ1pHZng3MFU5RWRoTmpybW1hRzJlNEhFMzVCa1BYRFZaM2pSa21HMXl3S2V1TkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYxLCJhZHZTZWNyZXRLZXkiOiJETzkwRWhEV2NOa1d0RGpWdjQraHZmRE9STHNJOHFML1l1bXhqMGkzeEgwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ3NDU2MzM1OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEODQwNzE2MDY2QUU0MzlDNUM5NTlCNDRCMTY4MTc5NiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMxMzQwMTgwfV0sIm5leHRQcmVLZXlJZCI6NjUsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2NSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXUnRjdTRoX1FlU25oNWdYSUdISmlRIiwicGhvbmVJZCI6ImY1ZmU2MTU0LTE0YmItNGE4Yy1iZGJhLTBhNDU1N2JkNmQ3YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMdTI4V0h6OXRVazVMVWpGK3FrTXhyNGUyS3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVVuQjhCU0s1d1VpUHdwamloV0NBU0g4WXdzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilo3UTJZUko3IiwibWUiOnsiaWQiOiI5MjM0NzQ1NjMzNTk6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLjgL3vuI8u8J2QlPCdkKzwnZCm8J2QmvCdkKfwn4yIwqDCoMKgwqDCoCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTno1KzQ4RkVJSFB5TGtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoibmlid3VWbkRua3FuM2ZhVkw3bzkrVkQwOXZsSXNlZ29qZmc4YW9QTmVTND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVXJhYjdFZ29JLzZZakVvVVF6Kzc4Q0ZRaWFLSmROUEtaek5UT2V0NHJMVHU3TWljWDQ1YWRDaE1QNVh2MkEwc09PTDd5SWxkOWRPbll6aWtYOGRkQWc9PSIsImRldmljZVNpZ25hdHVyZSI6InVDNXRLQy9SczhsZTR4QS9ENTRYMlB1MGtJL0tzMmdtRTdQVTVhTkhvd3hkYU84dnUxUHRPYmNPMXhkM2JkY3dJMzNSNThaQnoxcjh1dXAvZXpTRER3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDc0NTYzMzU5OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWjRtOExsWnc1NUtwOTMybFMrNlBmbFE5UGI1U0xIb0tJMzRQR3FEelhrdSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTM0MDM2MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFZDQifQ==";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "https://whatsapp.com/channel/0029VavOG5W4CrfiM7zHWI30",
  ownername: process.env.OWNER_NAME || "ᗰᑌᗞᗩᔑᏆᖇ",
  errorChat: process.env.ERROR_CHAT || "923239956476",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
 
