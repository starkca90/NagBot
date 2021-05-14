const cards = require('../lib/cards')
const ACData = require('adaptivecards-templating')
const assert = require('assert')

module.exports = function (controller) {

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'onsite', ['message', 'direct_message'], async (bot, message) => {
        // Get the fallout card template from the card library
        let cardTemplate = new ACData.Template(cards['onsite_entry'])

        // Fill in the card template
        // TODO: Possible multiple language support???
        let cardPayload = cardTemplate.expand({
            $root: {
                "formTitle": "RC Onsite Notifier",
                "formDescription": "Let me know if you will be on site with customers this week. Thank You!",
                "entryOne": {
                    "title": "Entry 1",
                    "idPrefix": "entry1",
                    "fields": [
                        {
                            "label": "Customer",
                            "id": "Customer",
                            "required": true
                        },
                        {
                            "label": "Address",
                            "id": "Address",
                            "required": true
                        },
                        {
                            "label": "Date",
                            "id": "Date",
                            "required": true
                        }
                    ]
                },
                "entryTwo": {
                    "title": "Entry 2",
                    "idPrefix": "entry2",
                    "fields": [
                        {
                            "label": "Customer",
                            "id": "Customer",
                            "required": true
                        },
                        {
                            "label": "Address",
                            "id": "Address",
                            "required": true
                        },
                        {
                            "label": "Date",
                            "id": "Date",
                            "required": true
                        }
                    ]
                },
                "entryThree": {
                    "title": "Entry 3",
                    "idPrefix": "entry3",
                    "fields": [
                        {
                            "label": "Customer",
                            "id": "Customer",
                            "required": true
                        },
                        {
                            "label": "Address",
                            "id": "Address",
                            "required": true
                        },
                        {
                            "label": "Date",
                            "id": "Date",
                            "required": true
                        }
                    ]
                }
            }
        })

        // Send the card out to the requester
        await bot.reply(message, {
            text: "Cards are not supported on this platform yet",
            attachments: cardPayload
        })

    })

    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'help', ['message', 'direct_message'], async (bot, message) => {
        // Get the fallout card template from the card library
        let cardTemplate = new ACData.Template(cards['fallout_help'])

        // Fill in the card template
        // TODO: Possible multiple language support???
        let cardPayload = cardTemplate.expand({
            $root: {
                "version": "1.0.0",
                "title": "Fallout76 Silo Decoder",
                "description": "I aid in decoding weekly nuclear silo codes in Fallout 76",
                "supported_commands_title": "Supported Commands",
                "commands": [
                    {
                        "key": "fallout",
                        "value": "Displays the Entry Card"
                    },
                    {
                        "key": "help",
                        "value": "Displays this card"
                    }
                ],
                "getting_started_title": "Getting Started",
                "getting_started": "Request the entry card by sending me the *fallout* command",
                "error_title": "Errors",
                "error": "Errors are inevitable, if I run into one, I will try to help narrow down the issue, but no promises. Things to check include:",
                "error_checks": "- The Correct Silo Keyword is entered (from the printer)\n - All 8 Code fragments from the right silo is entered properly\n - The Keyword and/or code fragments are from the same week"
            }
        })

        // Send the card out to the requester
        await bot.reply(message, {
            text: "Cards are not supported on this platform yet",
            attachments: cardPayload
        })

    })

    // User submitted the card back, time to decode
    controller.on('attachmentActions', async (bot, message) => {
        console.log(message.value)
    })
}