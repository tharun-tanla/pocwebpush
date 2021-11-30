const webPush=require("web-push");
let vapidkeys= {
    publicKey: 'BJihJTmJyvrLZegaH5Z8mmZ24ctvrX4pdb58AM7b2fn3mC9I-2miUvZXexOo0qCX4GfUl8LCcvsz8wyOvavNtfU',
    privateKey: 'OwMR5La-CofKI5ql4YDHmTRZIooveabl-_1NRg2BdTk'
  }
// webPush.generateVAPIDKeys();
// console.log(vapidkeys)
webPush.setVapidDetails('mailto:test@gmail.com',vapidkeys.publicKey,vapidkeys.privateKey)
let sub={} 
webPush.sendNotification(sub,'test message')