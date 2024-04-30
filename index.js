#!/usr/bin/env node

if (!process.env.SLACK_TOKEN || !process.env.SLACK_CHANNEL_ID) {
  throw new Error('TOKEN and CHANNEL ID are missing, Please set the TOKEN and CHANNEL ID environment variables.');
}

const token = process.env.SLACK_TOKEN;
const channelID = process.env.SLACK_CHANNEL_ID;

async function sendMessage(token, channel, message) {
  return fetch('https://slack.com/api/chat.postMessage', {
    method: 'post',
    body: JSON.stringify({
      channel,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: message,
          },
        },
      ],
    }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`,
    },
  });
}


if (process.argv.length < 3) {
  console.error('Usage: @rvgpl/slack-message "Your message here"');
}

const message = process.argv[2];
sendMessage(token, channelID, message)
  .then(() =>  console.log('Slack Message sent successfully'))
  .catch((error) => console.error(error));