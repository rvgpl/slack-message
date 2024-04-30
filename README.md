
# Slack Message
> A simple CLI to send messages to a Slack channel

## Install

You can either use `npx` or install it globally:

```
npm install -g @rvgpl/slack-message
```

## Usage

After installation, you can send a message to a Slack channel with a single command:

```sh
SLACK_TOKEN=AAA SLACK_CHANNEL_ID=BBB npx @rvgpl/slack-message "Message (supports markdown))"
```

 Replace `AAA` with your Slack token and `BBB` with the channel ID.

 > You can create a Slack app and generate a token from [here](https://api.slack.com/tutorials/tracks/getting-a-token).

## License

MIT © [Ravigopal Kesari](https://ravigopal.com)