# React node editors!!

This is a testing repo for evaluating 2 different (maybe more in time?) node editor libraries for React:
- [Flume](https://flume.dev/)
- [React flow](https://reactflow.dev/)

## Basics
To start this project you need to have [Node.js](https://nodejs.org/en/) and NPM installed (NPM is bundled with Node by default).

### First time
You need to run
```
npm install
```
if this is your first time starting this project. For subsequent runs, it's not necessary :)

### Running this project
To start up the development server run 
```
npm run dev
```
from the root directory of this repo. Then navigate to `http://localhost:5173/` in your browser
and prepared to amazed!!

## Notes
### Flume
- First bummer: it *requires* React 17, not possible to use React 18 :'(
- Second bummer: no support for TypeScript :(

Other than that, seems to work. I imagine that the config quickly becomes VERY difficult to manage and 
the editor is a little stiff and doesn't exactly feel natural, but I see that it works.

