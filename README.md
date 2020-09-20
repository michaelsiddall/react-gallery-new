## React Gallery

## Description

This project allows the user to add pictures to a gallery. This gallery will be rendered at URL (localhost:3000/gallery). When the user clicks on an image, the image will be hidden and a description of the image will be displayed. When image is clicked again, the image will return and the description will become hidden. The user can click the "Like Me!" button if they like a picture. The "like" counter below each image will be updated with each button click.

## Screen Shot

 <a href="https://gyazo.com/3ef7bd1ec3046d3db91ac80ec72973d1"><img src="https://i.gyazo.com/3ef7bd1ec3046d3db91ac80ec72973d1.gif" alt="Image from Gyazo" width="1000"/></a>

## Prerequistes

You will need to install the following before beginning the project.

- React
- Node.js
- Nodemon
- Axios

## Instructions

There is no database component. All data is stored in an array on the server. Before you get started, user should add a few images to the public/images folder and modify the server/modules/data.js to include the following properties

for each image..

- id
- title
- description
- path.

Each id should be a unique number (e.g. 1, 2, 3...).

Running the server code requires nodemon. If you don't already have nodemon, install it globally...

- npm install nodemon --global.
- npm install
- npm run server

Now that the server is running, open a new terminal tab with cmd + t and start the react client app.

- npm run client

Between the server and client, you'll need two terminal tabs! Because we're using nodemon, both our client side and server side will automatically spin back up when changes are made!

Each picture in the gallery will have the properties: "id", "path", "description", and "likes".

## Usage

User is able to display a gallery of pictures. Clicking on each picture reveals a description of said picture. Clicking image again returns the image. User can "Like" a specific picture by clicking the button below that image. A counter below each "like" button adds and keeps running total of all likes.


