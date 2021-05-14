module.exports = {
    onsite_entry: {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
            "type": "AdaptiveCard",
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.3",
            "body": [
                {
                    "type": "TextBlock",
                    "text": "${$root.formTitle}",
                    "wrap": true,
                    "size": "Large",
                    "weight": "Bolder"
                },
                {
                    "type": "TextBlock",
                    "text": "${$root.formDescription}",
                    "wrap": true
                }
            ],
            "actions": [
                {
                    "type": "Action.ShowCard",
                    "title": "${entryOne.title}",
                    "card": {
                        "type": "AdaptiveCard",
                        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                        "body": [
                            {
                                "type": "Container",
                                "id": "${entryOne.idPrefix}Properties",
                                "items": [
                                    {
                                        "$data": "${entryOne.fields}",
                                        "type": "Input.Text",
                                        "label": "${label}",
                                        "id": "${id}",
                                        "isRequired": "${required}",
                                        "errorMessage": "'${label}' is required"
                                    }
                                ]
                            }
                        ],
                        "actions": [
                            {
                                "type": "Action.Submit",
                                "title": "Submit"
                            },
                            {
                                "type": "Action.ShowCard",
                                "title": "${entryTwo.title}",
                                "card": {
                                    "type": "AdaptiveCard",
                                    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                                    "body": [
                                        {
                                            "type": "Container",
                                            "id": "${entryOne.idPrefix}Properties",
                                            "items": [
                                                {
                                                    "$data": "${entryOne.fields}",
                                                    "type": "Input.Text",
                                                    "label": "${label}",
                                                    "id": "${id}",
                                                    "isRequired": "${required}",
                                                    "errorMessage": "'${label}' is required"
                                                }
                                            ]
                                        }
                                    ],
                                    "actions": [
                                        {
                                            "type": "Action.Submit",
                                            "title": "Submit"
                                        },
                                        {
                                            "type": "Action.ShowCard",
                                            "title": "${entryThree.title}",
                                            "card": {
                                                "type": "AdaptiveCard",
                                                "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                                                "body": [
                                                    {
                                                        "$data": "${entryThree.fields}",
                                                        "type": "Input.Text",
                                                        "label": "${label}",
                                                        "id": "${id}",
                                                        "isRequired": "${required}",
                                                        "errorMessage": "'${label}' is required"
                                                    }
                                                ],
                                                "actions": [
                                                    {
                                                        "type": "Action.Submit",
                                                        "title": "Submit"
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        }
    },
    fallout_result: {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.2",
            "body": [
                {
                    "type": "TextBlock",
                    "size": "Medium",
                    "weight": "Bolder",
                    "text": "${title}",
                    "wrap": true
                },
                {
                    "type": "TextBlock",
                    "text": "${description}",
                    "wrap": true
                },
                {
                    "type": "FactSet",
                    "facts": [
                        {
                            "$data": "${properties}",
                            "title": "${key}:",
                            "value": "${value}"
                        }
                    ]
                }
            ]
        }
    },
    onsite_error: {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.2",
            "body": [
                {
                    "type": "TextBlock",
                    "size": "Medium",
                    "weight": "Bolder",
                    "text": "${title}",
                    "wrap": true
                },
                {
                    "type": "TextBlock",
                    "text": "${description}",
                    "wrap": true
                },
                {
                    "type": "TextBlock",
                    "text": "${error}",
                    "wrap": true
                }
            ]
        }
    },
    onsite_help: {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.2",
            "body": [
                {
                    "type": "TextBlock",
                    "size": "Medium",
                    "weight": "Bolder",
                    "text": "${title}",
                    "wrap": true
                },
                {
                    "type": "TextBlock",
                    "text": "${description}",
                    "wrap": true
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "${supported_commands_title}",
                            "wrap": true,
                            "weight": "Bolder"
                        },
                        {
                            "type": "FactSet",
                            "facts": [
                                {
                                    "$data": "${commands}",
                                    "title": "${key}",
                                    "value": "${value}"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "${getting_started_title}",
                            "wrap": true,
                            "weight": "Bolder"
                        },
                        {
                            "type": "TextBlock",
                            "text": "${getting_started}",
                            "wrap": true
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "${error_title}",
                            "wrap": true,
                            "weight": "Bolder"
                        },
                        {
                            "type": "TextBlock",
                            "text": "${error}",
                            "wrap": true
                        },
                        {
                            "type": "TextBlock",
                            "text": "${$root.error_checks}",
                            "wrap": true
                        }
                    ]
                }
            ]
        }
    }
}
