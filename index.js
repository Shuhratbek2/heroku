const TeleBot = require('telebot');
const dotenv = require("dotenv");
dotenv.config();
const TELEGRAM_BOT_TOKEN = process.env.BOT_TOKEN;
const bot = new TeleBot(TELEGRAM_BOT_TOKEN);


bot.on("/start", (msg) => {
    bot.sendMessage(msg.chat.id, `
    Assalomu aleykum men Hisobchi do'stingizman 
        men sizga Metamatik hisob kitobigizga yodam beraman,
        mendan foydalanisihingiz uchun oldin foydalanish  
        qoidalar bilan tanishing,
        qoidalar bilan tanishish uchun /qoidalar1 buyorug'ini bering!
        Yoki hisoblamoqchi bo'lgan amalni 
        oddiy qilib  2*3/6+7-2 kabi yuboring!

    `)
})
bot.on("text", (msg) => {
    let text = msg.text;
    let hisob = eval(msg.text);
    if (!isNaN(hisob)) {
        return bot.sendMessage(msg.chat.id, `
            ${text}= ${hisob}
        `)
    } else { bot.sendMassage(msg.chat.id, `
        Iltimos qoidaga amal qilgan holda amlarni jo'nating.
        Qoidalarni bilish uchun  /qoidalar1 buyurug'ini bering!
    `) }
});
bot.on("/qoidalar1", (msg) => {
    return bot.sendMessage(msg.chat.id, `
                Qoidalar.
        Siz ushbu botdan foydalanishingiz uchun ba'zi qoidalarni bilishingiz kerak!

        ko'paytirish uchun bu belgidan foydalaning (*),
        Bo'lish amali uchun bu belgidan fodalaning (/),
        Qo'shish va ayirish uchun esa (+ va - ) amalidan foydalning,
        Bo'lib qoldiqni olish uchun foiz(%) belgisidan foydalaning, 
        Ko'proq amal bajarishingiz uchun ko'proq  o'qib tanishib chiqqing /qoidalar2
    `)
});

bot.on("/qoidalar2", (msg) => {
    return bot.sendMessage(msg.chat.id, `
     Biz qoidalarning qolganini tez orada yozib chiqzmiz!
     Ungacha oddiy hisob-kitob ishlarini bajarib turing!
    `)
})
bot.start();

// shuhratreyimboyevcoder@gmail.com
// const TELEGRAM_BOT_TOKEN = '';
// evening-stream-64178
// https://evening-stream-64178.herokuapp.com/