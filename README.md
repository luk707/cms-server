# CMS Server

> Note, this project is under development and by no means ready for any kind of production use. Feel free to play around with it and submit any issues / pull requests.

## Getting started

First clone the repository to your computer and `cd` into the root folder:

```
$ git clone https://github.com/luk707/cms-server.git
$ cd cms-server
```

### Quick (docker)

Run `docker-compose up` and wait for the application to start

### Manual

Install all of the project's dependencies:

```
$ npm install
```

Build the source files:

```
$ npm run build
```

Start the server:

```
$ npm start
```

## Contrubuting

Pull requests are welcome, use this guide to make yourself familliar with the project:

### Formatting

I format all code using [Prettier's](https://prettier.io/) default settings. I'd ask you install it and format any changes you make to prevent me from having to run it. In the future I may add a format command in the package json and a pre-commit hook.

### Project structure

All source code sits inside of the `src` directory in the root of the project. The `build` script defined in the package json will transform all files in this project and output to a non-commited directory called `lib`.

### Dependency resolution

All imports prefixed with a tilde i.e.

```js
import foo from "~/bar";
```

will resolve to an absolute import from the `src` directory: `/src/bar`.

### Environment variables

During development you will need to populate a `.env` file any required variables.

In production the environment variables will not be loaded from a file and must be present in the system's environment.
