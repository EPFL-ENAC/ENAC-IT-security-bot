# enac-it-security-bot

> A GitHub App built with [Probot](https://github.com/probot/probot) that Github app to scan for security issues

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t enac-it-security-bot .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> enac-it-security-bot
```

## Contributing

If you have suggestions for how enac-it-security-bot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2026 Quentin Eschmann
