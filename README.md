<p align="center">
  <img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/05/How-to-Add-a-Bot-in-Telegram.jpg?fit=602%2C372&ssl=1" alt="Bot Icon" width="400"/>
</p>

```markdown
# Telegram Bot with Node.js

This is a Telegram bot created using Node.js. The bot can respond to specific commands and provide various functionalities within the Telegram messaging platform.

## Installation

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Configure your Telegram Bot API token:**

   Create a file named `.env` in the project root and add your Telegram Bot API token:

   ```plaintext
   MY_BOT_TOKEN=your_telegram_bot_token
   ```

3. **Start the Bot:**

   ```bash
   node index.js
   ```

## Usage

1. Start a conversation with your bot on Telegram.
2. Send messages with the specified commands to interact with the bot.

### Example:

- **User:** `/whatyoudo`
- **Bot:** I'm a simple bot created using Node.js. Currently, I don't have many functions, but I'm here to learn and assist you as much as I can!

- **User:** `/whocreatedyou`
- **Bot:** I was created by Rahul Sharma.
```
