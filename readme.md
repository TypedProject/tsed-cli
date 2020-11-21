# @tsed/cli 

[![Build Status](https://travis-ci.org/TypedProject/tsed-cli.svg?branch=master)](https://travis-ci.org/TypedProject/tsed-cli)
[![TypeScript](https://badges.frapsoft.com/typescript/love/typescript.svg?v=100)](https://github.com/ellerbrock/typescript-badges/) 
[![Package Quality](http://npm.packagequality.com/shield/@tsed/cli.png)](http://packagequality.com/#?package=@tsed/cli)
[![npm version](https://badge.fury.io/js/%40tsed%2Fcli.svg)](https://badge.fury.io/js/%40tsed%2Fcli)
[![Dependencies](https://david-dm.org/TypedProject/tsed-cli.svg)](https://david-dm.org/TypedProject/tsed-cli#info=dependencies)
[![img](https://david-dm.org/TypedProject/tsed-cli/dev-status.svg)](https://david-dm.org/TypedProject/tsed-cli/#info=devDependencies)
[![img](https://david-dm.org/TypedProject/tsed-cli/peer-status.svg)](https://david-dm.org/TypedProject/tsed-cli/#info=peerDependenciess)
[![Known Vulnerabilities](https://snyk.io/test/github/TypedProject/tsed-cli/badge.svg)](https://snyk.io/test/github/TypedProject/ts-express-decorators)

> CLI for the Ts.ED framework

## Features

Please refer to the [documentation](https://cli.tsed.io/) for more details.

## Installation

```bash
npm install -g @tsed/cli
```

To create a Ts.ED project, create a new directory and use the following commands:

```bash
tsed init .
npm start # or yarn start
```

## Proxy configuration

Ts.ED CLI uses the npm proxy configuration.
Use these commands to configure the proxy:

```sh
npm config set proxy http://username:password@host:port
npm config set https-proxy http://username:password@host:port
```

Or you can edit directly your ~/.npmrc file:

```
proxy=http://username:password@host:port
https-proxy=http://username:password@host:port
https_proxy=http://username:password@host:port
```

::: tip
The following environment variables can be also used to configure the proxy `HTTPS_PROXY`, `HTTP_PROXY` and `NODE_TLS_REJECT_UNAUTHORIZED`.
:::

## Contributors
Please read [contributing guidelines here](https://tsed.io/CONTRIBUTING.html)

<a href="https://github.com/TypedProject/ts-express-decorators/graphs/contributors"><img src="https://opencollective.com/tsed/contributors.svg?width=890" /></a>

## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/tsed#backer)]

<a href="https://opencollective.com/tsed#backers" target="_blank"><img src="https://opencollective.com/tsed/tiers/backer.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/tsed#sponsor)]

## License

The MIT License (MIT)

Copyright (c) 2016 - 2018 Romain Lenzotti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
