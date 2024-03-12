# Finance tracker

App to keep track of your finances.
The app is an experiment created from a simple web framework built from scratch without the react library.

Ideal to be used in a local network in the family. No log in is needed.

## Setup

Install the packages by

<code>npm run install</code>

## Run the app

### Front-end

Run parcel by

<code>npm run start-parcel</code>

### Back-end

The back-end is handled by the json-server package. Simply start it and you are good to go.
Run the json server by

<code>npm run start-db</code>

If it is not already present, the file <code>db.json</code> will be created, make sure to create a <em>transactions</em> field in the json file in such way

<code>{"transactions": []}</code>

To show some data at first run, the db.json file in the repo already has 4 dummy transactions, you can delete them from the file or from the app.

In the <code>Config.ts</code>, you can set the url of the backend server if your server is not in localhost.

## Issues

When using a browser different than Chrome, when saving [resp: editing] a transaction, it semes that the user is re-directed to the root page before the POST [resp: PUT] request is able to event be sent to the back-end server.
This problem is solved by delaying the re-direction by 500 milliseconds. This is NOT the correct solution, but it is the approach that I have found at the moment without changing the <code>save</code> mehod.
