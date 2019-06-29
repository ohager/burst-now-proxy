# burst-now-proxy

A CORS enabled proxy for a specific Burstcoin node:

Current node is:

`https://wallet.burst-alliance.org:8125`

# Configured endpoints

| Route | Description |
|----------|-------------|
|    `/`      |  Status check   |
|  `/burst`        |   The proxied API Endpoint          |
|          |             |

# Installation

Simply run `npm i` (Node 8+)

## Run/Test locally

Prerequisite: `npx` (Linux, MacOS) needs to be installed

`npx now dev`

## Deploy to Zeit.Now

(needs a valid account)

`npm run deploy`



