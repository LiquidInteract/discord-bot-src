# Discord bot js source code

Hi, this project is aimed at giving everyone a free open source discord bot template. This was coded by me (LiquidInteract) with help from the discord.js library. You can find the discord.js website <a href="https://discord.js.org/#/">here</a>.
I decided to make this project open source to give people, who are not so experianced with javascript and node.js, a template for some code and describe exactly what it is and what it does so people can learn easily.

# Dependencies
Please make sure you have Node.js installed. You can obtain a copy of it which suits your OS <a href="https://nodejs.org/en/download/">here</a>.

# FAQ:
Q) What is it?<br>
A) This is a discord bot that runs on a node.js server.

Q) Does this require any additional ports to be opened in my router configuration?<br>
A) No, this discord bot server does not reqire any additional ports to be opened.

Q) Can people obtain my ip through this bot?<br>
A) I'm not sure, i don't think they can but there is a possibility that a database leak or something on discord's end could occur which would leak the bot server's IP. (this is all unconfirmed, you can do your own research if you would like.)

Q) How hard is it to add to the template?<br>
A) It's relatively easy to add onto the bot.

# Steps on how to set up

1) Go to <a href="https://discord.com/developers">https://discord.com/developers</a>
2) Create a new bot
3) Within that bot you just made, make an application
4) Get the bot token and copy it to your clipboard
5) Paste the bot token at
```js 
const token = 'Your token goes here';
```
on line 4 of index.js
6) Now, you can either execute the start.bat file, or you can just manually type out
```shell
node index.js
```
to start the bot server yourself
7) Go to https://discordapi.com/permissions.html and enter the client id for the application
8) You can now use the generated link to add the bot to your server

Just remember to change the bot token, as shown on step 5

<p align="center">
  <img src="https://i.imgur.com/CpPw5PY.png" width="350" title="Node.js">
</p>