# Clevy chatbox

Customize your Clevy chatbox to your liking using this boilerplate code (based off of Clevy's own one-line chatbox installation).

## Requirements

- node and npm. This code has been tested with node 8.11 and npm 6.4
- a webpage with write access to the source code
- set the URL or relative path to the style file in script.js
- a Clevy account with an active Clevy Webapp (not Chatbox)

## How to use

```
npm install
npm run build
```

The minified files are in the `dist/` folder.

Insert the following script in your webpage (insert your own Clevy Webapp URL).

```
<script src="/path/to/script.min.js?webapp_url=YOUR_WEBAPP_URL_HERE" id="clevy-chatbox"></script>
```

## Demo

Try the demo by modifying `demo/index.html` with your own Clevy Webapp URL and running `npm run demo`.
