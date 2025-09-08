# Paystack OpenAPI Specification
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The OpenAPI specification for the [Paystack API](https://paystack.com/docs/api).

## Getting Started
The [OpenAPI specification](https://swagger.io/specification/) provides another alternative to test the Paystack API.
You can download the specification and make use of it on:
- [SwaggerHub](https://swagger.io/tools/swaggerhub/)
- [OpenAPI (Swagger) Editor](https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi)

## Set up locally
- Clone repo
  ```sh
  git clone git@github.com:PaystackOSS/openapi.git
  ```
- Navigate to the cloned project and install dependencies
  ```sh
  cd openapi
  pnpm install
  ```
- Start the server to view the spec in your browser
  ```sh
  pnpm dev
  ```
  > [!NOTE]
  > At the moment, the `paystack.yaml` file is the only spec that is automatically opened in your browser. If the spec doesn't open automatically in your browser, you can manually open http://localhost:3031 in your browser.

## Components
There are two top-level folders of interest in this repo:
- `src`: This contains the assets, scripts and basic .html for working and viewing the OpenAPI Specification (OAS) file.
  - `assets`: This contains the Paystack OAS files:
    - `base`: Default single OAS file that was used to rebuild codebase (to be removed)
    - `openapi`: This contains the individual, manageable parts of the OAS
    - `sdk`: This is a single file specification being used for client library generation. It contains just enough parameters for our client libraries (might be removed later).
    - `use_cases`: This is a collection of specifications containing APIs for common use cases of the Paystack API. For example, the `wallet.yaml` contains the APIs needed to build a wallet feature into your application. The specifications in this directory are used to create the collections in our [Postman Workspace](https://www.postman.com/paystack-developers?tab=collections).
- `dist`: Not all OpenAPI readers can read from different file sources, so we built a single file from all the components in the `main` directory.

## Contributing
Here are some of the ways to contribute to this repository:
- Create a use case
- Raise an issue
- Suggest an improvement

## Issues
You can [open an issue](https://github.com/PaystackOSS/openapi/issues) if you discover any bug or have problems using this repo.

## License
This repository is made available under the MIT license. Kindly read the [LICENSE](https://github.com/PaystackOSS/openapi/blob/main/LICENSE) file for more information.