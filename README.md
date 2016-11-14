# music-async
async-music by drag and drop action. music will be synced to my local computer at home.

## Overview

I want to build a web app that helps to sync my music (download from human media) among my laptops onto a server. This server is going to be the the iMac in my room. When i drop a mp3 music into a drop zone, it synced! Its somewhat like dropbox but music version.

## Why?

- learning purpose.
- it really is a complicated process to have iTunes sync music among computers and iphone, I rather do a drop sync myself.
- why not?

## Tech stack:

- frontend uses react + webpack + redux + redux-saga.
- backend uses nodes. Might progress to *golang*. IF NEEDED.
- probably need socket.io to continuously listen to change in directory in order to renew music list. IF NEEDED!

## TODO

- Add eslint follow the rule of Migme.
- Create configureStore makesure frontend and backend maintains the same way of creating a store.
