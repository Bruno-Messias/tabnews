#!/bin/bash

function cleanup {
    npm run services:down
    kill $(lsof -t -i:3000)
    exit 0
}

trap cleanup INT

npm run services:up && npm run services:wait:database && npm run migration:up && next dev