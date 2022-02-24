# Paystack OpenAPI Specification
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The OpenAPI specification for the Paystack API

## Getting Started
The [OpenAPI specification](https://swagger.io/specification/) provides another alternative to test the Paystack API.
You can download the specification and make use of it on:
- [SwaggerHub](https://swagger.io/tools/swaggerhub/)
- [OpenAPI (Swagger) Editor](https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi)

## Components
There are three main folders of interest in this repo:
- `main`: This contains a comprehensive specification of the Paystack API:
  - resources: This contains individual endpoints in each API category
  - responses: This contains the models for responses
  - schemas: This contains models for each endpoint 
  - paystack.yml: This is the entry point for all components
- `dist`: In order to allow making use of the specification, we built a single file from all components in `main` folder.
- `sdk`: This is a single file specification being used to client library generation. It contains just enough parameters for our client libraries.

## Issues
Kindly [open an issue](https://github.com/PaystackOSS/openapi/issues) if you discover any bug or have problems using this library.

## License
This repository is made available under the MIT license. Kindly read the [LICENSE](https://github.com/PaystackOSS/openapi/blob/main/LICENSE) file for more information.