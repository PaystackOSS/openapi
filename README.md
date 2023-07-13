# Paystack OpenAPI Specification
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The OpenAPI specification for the [Paystack API](https://paystack.com/docs/api).

## Getting Started
The [OpenAPI specification](https://swagger.io/specification/) provides another alternative to test the Paystack API.
You can download the specification and make use of it on:
- [SwaggerHub](https://swagger.io/tools/swaggerhub/)
- [OpenAPI (Swagger) Editor](https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi)

## Components
There are three main folders of interest in this repo:
- `main`: This contains a comprehensive specification of the Paystack API:
  - `resources`: This contains individual endpoints in each API category
  - `responses`: This contains the models for responses
  - `schemas`: This contains models for each endpoint 
  - `paystack.yml`: This is the entry point for all components
- `dist`: Not all OpenAPI readers can read from different file sources, so we built a single file from all the components in the `main` directory.
- `sdk`: This is a single file specification being used for client library generation. It contains just enough parameters for our client libraries.
- `use_cases`: This is a collection of specifications containing APIs for common use cases of the Paystack API. For example, the `wallet.yaml` contains the APIs needed to build a wallet feature into your application. The specifications in this directory are used to create the collections in our [Postman Workspace](https://www.postman.com/paystack-developers?tab=collections).

## Contributing
Here are some of the ways to contribute to this repository:
- Create a use case
- Raise an issue
- Suggest an improvement

## Issues
Kindly [open an issue](https://github.com/PaystackOSS/openapi/issues) if you discover any bug or have problems using this library.

## License
This repository is made available under the MIT license. Kindly read the [LICENSE](https://github.com/PaystackOSS/openapi/blob/main/LICENSE) file for more information.


