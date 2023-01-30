[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![DOI][zenodo-shield]][zenodo-url]

[contributors-shield]: https://img.shields.io/github/contributors/fairdataihub/doi-check-app.svg?style=flat-square
[contributors-url]: https://github.com/fairdataihub/FAIRshare/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/fairdataihub/doi-check-app.svg?style=flat-square
[stars-url]: https://github.com/fairdataihub/doi-check-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/fairdataihub/doi-check-app.svg?style=flat-square
[issues-url]: https://github.com/fairdataihub/doi-check-app/issues
[license-shield]: https://img.shields.io/github/license/fairdataihub/doi-check-app.svg?style=flat-square
[license-url]: https://github.com/fairdataihub/doi-check-app/blob/main/LICENSE
[zenodo-shield]: https://zenodo.org/badge/DOI/10.5281/zenodo.7587127.svg
[zenodo-url]: https://doi.org/10.5281/zenodo.7587127

# DOI Checker GitHub App

A GitHub App built with [Probot](https://github.com/probot/probot). This app checks for DOI links in the README.md file of a repository and warns the user if no DOI is found.

## Usage

Install the app on the intended repositories. The app can be found here: https://github.com/apps/doi-checker-app

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

[MIT](LICENSE) © 2023 fairdataihub
