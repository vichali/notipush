const webpush = require('web-push');

webpush.setVapidDetails('mailto:victorhugo.chalian@gmail.com', process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY);

// console.log(process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY);

module.exports = webpush;