# Just Another Loading Indicator

### About

A run-of-the-mill loading indicator that can be imported as an npm module in React apps.

### Steps to import

Run `npm i just-another-loading-indicator` within your React app.

### Usage

1. `import Loader from 'just-another-loading-indicator'`
2. Render using `<Loader>` within component

### API

| Prop  | Default   |  Type   | Description                                        |
| ----- | --------- | ------- | -------------------------------------------------- |
| color | `#000000` | `string`| Primary coloring                                   |
| type  | `ring`    | `string`| Also `bouncymoon`, `clock`, `pulse`, `jumpingdots` |
| width | varies    | `number`| Relevant width per type                            |
| height| varies    | `number`| Relevant height per type                           |

### Run demo locally

1. Clone repository
2. Run `npm run watch` to watch the loading indicator source and refresh the demo accordingly
3. Navigate to `/demo`
4. Run `npm install`
5. Run `npm start`


