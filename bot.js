//  __   __  ___        ___
// |__) /  \  |  |__/ |  |  
// |__) \__/  |  |  \ |  |  

// This is the main file for the Reminder Bot bot.

// Import Botkit's core features
const { Botkit } = require('botkit');
const { BotkitCMSHelper } = require('botkit-plugin-cms');

// Import a platform-specific adapter for webex.

const { WebexAdapter } = require('botbuilder-adapter-webex');

const { MongoDbStorage } = require('botbuilder-storage-mongodb');

// Load process.env values from .env file
require('dotenv').config();

let storage = null;
if (process.env.MONGO_URI) {
    storage = mongoStorage = new MongoDbStorage({
        url : process.env.MONGO_URI,
    });
}


const adapter = new WebexAdapter({
    // REMOVE THIS OPTION AFTER YOU HAVE CONFIGURED YOUR APP!
    enable_incomplete: true,

    
    access_token: process.env.ACCESS_TOKEN,
    public_address: process.env.PUBLIC_ADDRESS
})    


const controller = new Botkit({
    webhook_uri: '/api/messages',

    adapter: adapter,

    storage
});

if (process.env.CMS_URI) {
    controller.usePlugin(new BotkitCMSHelper({
        uri: process.env.CMS_URI,
        token: process.env.CMS_TOKEN,
    }));
}

// Once the bot has booted up its internal services, you can use them to do stuff.
controller.ready(() => {

    // load traditional developer-created local custom feature modules
    controller.loadModules(__dirname + '/features');

    /* catch-all that uses the CMS to trigger dialogs */
    if (controller.plugins.cms) {
        controller.on('message,direct_message', async (bot, message) => {
            let results = false;
            results = await controller.plugins.cms.testTrigger(bot, message);

            if (results !== false) {
                // do not continue middleware!
                return false;
            }
        });
    }

});

controller.ready(async function () {
    await controller.adapter.registerAdaptiveCardWebhookSubscription('/api/messages');
});

controller.webserver.get('/', (req, res) => {

    res.send(`This app is running Botkit ${ controller.version }.`);

});





