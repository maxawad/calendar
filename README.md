# Calendar

A small web app that draws a 24-hour day as a circular chart and lets you add colored, named "people" to it. It is an early experiment with the Napchart library, meant as the starting point for a shared day or schedule planner.

## What it does

- Shows an interactive circular 24-hour chart (drawn on a canvas by [Napchart](https://napchart.com)).
- Lets you type a name, pick a color from a palette, and click "add person" to add a new lane to the chart with a full-day block in that color.
- You can draw and edit time blocks directly on the chart with the mouse.
- Nothing is saved. The chart lives only in the browser tab, and there is no server or account.

## Tech stack

- JavaScript with React 17 (class components), bootstrapped with Create React App (react-scripts 4)
- [napchart](https://www.npmjs.com/package/napchart) for the chart
- [react-color](https://www.npmjs.com/package/react-color) for the color picker

## Run it locally

You need Node.js and npm (or yarn). Node 16 or older is the safest choice for react-scripts 4. On newer Node versions, set `NODE_OPTIONS=--openssl-legacy-provider` before running the commands below.

```bash
npm install
npm start
```

Then open http://localhost:3000.

## Build a static demo

The app has no backend and needs no API keys or environment variables, so it builds to plain static files:

```bash
npm run build
```

Serve the `build/` folder with any static host (GitHub Pages, Netlify, `npx serve build`, and so on). Asset paths are relative, so it also works from a sub-folder.

## Status

Prototype. The chart works and people can be added, but there is no saving, no real calendar features yet, and the bundled test file is still the Create React App placeholder and does not pass.

## Credits

Built on [Napchart](https://github.com/larskarbo/napchart) by Lars Karbo, and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
