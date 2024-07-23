const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝓢𝓮𝔂𝓭𝓲𝓷𝓪🤴🏽🌪️" 


global.devs = "221774096195" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "221774096195";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_44_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMyxcbiAgICAgICAgMjksXG4gICAgICAgIDc1LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDgwLFxuICAgICAgICAzMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDMyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDU5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDk1LFxuICAgICAgICA2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyLFxuICAgICAgICA0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlkvVFBqS0dnMkxhRS9tS2pNcC9RdzZDVStPVythd2hvSitnaGFBcUI4UlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjIxNzc0MDk2MTk1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTZFRjAyNTA0NjEzRjIxRkJFMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE3MDk4NTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicVJieUpGYU5RZTZPczZMUTE1ODJQQVwiLFxuICBcInBob25lSWRcIjogXCI0MjcxMTlhYy1jNDVhLTQyMjctYjFmYy01NmU1M2VlYzEzMjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTMsXG4gICAgICA2MSxcbiAgICAgIDU1LFxuICAgICAgNDgsXG4gICAgICAyOSxcbiAgICAgIDIxOCxcbiAgICAgIDI5LFxuICAgICAgOTksXG4gICAgICAyNDYsXG4gICAgICAxNDEsXG4gICAgICAxOTcsXG4gICAgICAxLFxuICAgICAgMjU0LFxuICAgICAgMTIxLFxuICAgICAgNixcbiAgICAgIDYxLFxuICAgICAgMjE4LFxuICAgICAgMjA1LFxuICAgICAgMTA0LFxuICAgICAgMTUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg2LFxuICAgICAgMzEsXG4gICAgICAyMzksXG4gICAgICAxMTksXG4gICAgICAyMTEsXG4gICAgICAxOSxcbiAgICAgIDMsXG4gICAgICAxOCxcbiAgICAgIDQ5LFxuICAgICAgMzIsXG4gICAgICAxNDcsXG4gICAgICA5NCxcbiAgICAgIDI1LFxuICAgICAgMjEyLFxuICAgICAgOCxcbiAgICAgIDUxLFxuICAgICAgMTA2LFxuICAgICAgMjM2LFxuICAgICAgMTMxLFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVKTDkzRVZOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjE3NzQwOTYxOTU6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2Mjg2NjUwMjQ1MzUyOjU3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdk6LwnZOu8J2UgvCdk63wnZOy8J2Tt/Cdk6rwn6S08J+PvfCfjKrvuI9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPU1V1ZkFIRUpQcS9MUUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkYxK3BLSzZYbWVpKzVCWEplS2srYThqN0puVDkwUExNTlg5aThQZjlBVFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZkFydC82TG1HR2lMT1JNL1M1Qi9XVzU4MHRFUHRZTFBRaXdIWW1RUkNzQnM3VTJMMGpSKzRpa1lOM2xONkhDOEk3eG96aXArMzdSUFRFSmg3aCtOQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT2dlcWo3b2F1b0p3RU42S3NSSXVrMUlFYnAzT0RCTlZUREQrUjdHYTBqM21sN01NMGJncm52aXQ2MElCODM0aTNhVlo5d1cyZmEwYzNOQVhyZkpkaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIxNzc0MDk2MTk1OjU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzA5ODQ2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS1pkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLWmQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4OXZjYks5VWlMNmRsTnQrOHNZejNJOTJYK25zeVUyWDM4SXM4djNwS2hFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMTQ4NjU3NjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODY3MzU4OTg0OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "•",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝓢𝓮𝔂𝓭𝓲𝓷𝓪🤴🏽🌪️",
  packname: process.env.PACK_NAME || "𝓢𝓮𝔂𝓭𝓲𝓷𝓪🤴🏽🌪️",
  botname : process.env.BOT_NAME  || "𝓢𝓮𝔂𝓭𝓲𝓷𝓪🤴🏽🌪️",
  ownername:process.env.OWNER_NAME|| "𝓢𝓮𝔂𝓭𝓲𝓷𝓪🤴🏽🌪️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
