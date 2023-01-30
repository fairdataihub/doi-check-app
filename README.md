# DOI-Checker

A GitHub App built with [Probot](https://github.com/probot/probot). This app checks for DOI links in the README.md file of a repository and warns the user if no DOI is found.

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
docker build -t doi-check-app .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> doi-check-app
```

## Contributing

If you have suggestions for how doi-check-app could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2023 fairdataihub
