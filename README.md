# Senate Stacks Serverless Server

## About

_Serverless server for senatestacks.com_

## Build

* Clone this repository
* Install Serverless if you don't already have it
  ```
  npm install -g serverless
  ```
* Install required dependencies
  ```
  npm install
  ```
* Get a [Open Secrets API key](https://www.opensecrets.org/open-data/api)
* Create a ```.env``` file in the projects root directory and add your Open Secrets API key
  ```
  OPEN_SECRETS_API=*******************************
  ```

* Run local server
  ```
  $ serverless offline
  ```

## Support and Contact Details

Please contact [Rafael Furry](rfurry@gmail.com) with questions or comments.


## Technologies Used

* [Serverless](https://serverless.com/)
* [NodeJS](https://nodejs.org/)


## Contributors

| [<img alt="Rafa" src="https://avatars0.githubusercontent.com/u/13779974?s=460&v=4" width="117">](https://github.com/bullthistle) |
|:---:|
|[Rafa](https://github.com/bullthistle)

### License

Copyright (c) 2018 **Rafael Furry**

*This software is licensed under the MIT license.*