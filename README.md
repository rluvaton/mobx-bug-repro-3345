# Repro for [mobx#3345](https://github.com/mobxjs/mobx/issues/3345) bug

## Folders explaination

This repo contains 4 folders:

Folders `child1` (which is the content for package [`@rluvaton-debugging/child1`](https://www.npmjs.com/package/@rluvaton-debugging/child1)) and `child2` (which is the content for package [`@rluvaton-debugging/child2`](https://www.npmjs.com/package/@rluvaton-debugging/child2)) are helper packages to reproduce the bug.

each folder is published as NPM package. that is the dependency of the `sandbox` and `parent`.

> Not using local dependencies or local link as NPM does problem with installing their deps [npm/cli#2339](https://github.com/npm/cli/issues/2339)...

`parent` folder is for using plain JS for requiring the packages.

`sandbox` folder is tiny react app for actually running build in it ([`sandbox/src/App.ts`](https://github.com/rluvaton/mobx-bug-repro-3345/blob/master/sandbox/src/App.js) is where importing the helper packages).

## Usage

### Plain node (`parent` folder)

Run:
```bash
git clone https://github.com/rluvaton/mobx-bug-repro-3345.git

cd mobx-bug-repro-3345/parent

npm i

node index.js
```

### React build (`sandbox` folder)

Run:
```bash
git clone https://github.com/rluvaton/mobx-bug-repro-3345.git

cd mobx-bug-repro-3345/sandbox

npm i

npm run build
```
