# 💻 MERN stack template

Template for building projects with the MERN (MongoDB, Express, React, Node.js) stack.
This template was generated using `create-next-app` and `express-generator` for the
client and server, respectively.

## Prerequisites

- Install Node and npm [here](https://nodejs.org/en/download/)
- Install `yarn` with the command `npm install -g yarn`
- Set up a [MongoDB Atlas](https://www.mongodb.com/) instance. See [this video](https://www.youtube.com/watch?v=CcOL5h_ZFJM) for help!
- Create a `.env` file with a variable called `DB_URL` and paste your MongoDB url:

```bash
DB_URL=mongodb://mongodburl.example.com:portnumber
```

## Running
Note: MongoDB database is setup on UCSD account

1. `cd` into `client` and run the command `yarn install` to install all dependencies
2. To start the client, run `yarn dev` or `npm run start` in the same directory
3. In another command window, `cd` into `server` and run `yarn install` and `yarn start`
   or `npm run start` to install all dependencies and start the server.
4. To establish connection to MongoDB database, login to MongoDB and navigate to 
hack-team-3 project. From there you can proceed and click on "connect",
follow the instructions there by installing MongoDB, go to server and create a .env file,
create two variables; DB_URL="contains the provided code given", PORT=5000
5. Now you can run `yarn start`
   or `npm run start` to start the server.
6. Website will now be fully functional!
