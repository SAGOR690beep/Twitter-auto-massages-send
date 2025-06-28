import { TwitterApi } from 'twitter-api-v2';
import cron from 'node-cron';
import 'dotenv/config';

// ========== SAGOR ASCII + Loading ================
console.clear();
console.log(`
▒█▀▀▀█ ░█▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ 
░▀▀▀▄▄ ▒█▄▄█ ▒█░▄▄ ▒█░░▒█ ▒█▄▄▀ 
▒█▄▄▄█ ▒█░▒█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ 

✨ Islamic Auto Tweet Bot by Sagor
🚀 Loading Bot, please wait...
------------------------------------------
✅ Tweets automatically every 5 minutes.
✅ View live status in Replit console.
------------------------------------------
`);

// ========== Twitter Client Config ================
const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_KEY_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET
});

// ========== Islamic Tweet List ===================
const tweets = [
  "✨ ﷽ ✨",
  "🌸 আজ শুক্রবার, সূরা কাহফ পড়তে ভুলবেন না।",
  "🤲 হে আল্লাহ, আমাকে উপকারী জ্ঞান, হালাল রিজিক এবং কবুল হওয়া আমল দান করুন।",
  "📿 বেশি বেশি ইস্তেগফার পড়ুন: أستغفر الله العظيم واتوب إليه",
  "🕋 পাঁচ ওয়াক্ত নামাজ পড়ুন, আল্লাহর রহমত নেমে আসবে ইনশাআল্লাহ।",
  "💖 সবার জন্য হেদায়েতের দোয়া করুন।",
  "🕌 সালাম ছড়িয়ে দিন, মুসলিম ভাইদের ভালোবাসুন।",
  "🌺 হাসি মুখে কথা বলাও সদকা।",
  "💚 আল্লাহর উপর তাওয়াক্কুল করুন।",
  "🕊️ দুনিয়া ক্ষণস্থায়ী, আখিরাতের জন্য প্রস্তুতি নিন।"
];

// ========== Post Tweet Function =================
async function postTweet() {
  try {
    const status = tweets[Math.floor(Math.random() * tweets.length)];
    await client.v2.tweet(status);
    console.log(`✅ টুইট হয়েছে: ${status}`);
  } catch (error) {
    console.error('❌ টুইট করতে সমস্যা:', error);
  }
}

// ========== Cron Job Every 5 Minutes ============
cron.schedule('*/5 * * * *', () => {
  console.log('🕔 ৫ মিনিট পার হলো, নতুন টুইট দিচ্ছে...');
  postTweet();
});

// ========== Post Immediately at Start ===========
postTweet();