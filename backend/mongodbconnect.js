// import { MongoClient } from 'mongodb';

// // Replace the placeholder values with your actual username, password, and host details
// const url = 'mongodb://edenvoice:PrImlcwkLkJk5pSXysYio7SB57LTZIe0ZDHOXWoLx7DqAZgf5ifO7d7ki50JBfSfvcvQwQ4REqahACDb8RfBDQ==@edenvoice.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@edenvoice@';

// const client = new MongoClient(url);

// async function connect() {
//   try {
//     await client.connect();
//     console.log('Connected to the MongoDB server.');

//     const db = client.db('EdenVoice'); // Replace with your actual database name
//     const collection = db.collection('Posts'); // Replace with your actual collection name

//     // You can now perform database operations here

//   } catch (err) {
//     console.error('Connection to MongoDB failed:', err);
//   } finally {
//     // Ensure you close the connection when you're done
//     await client.close();
//   }
// }

// connect();
// import { MongoClient as mongoClient } from "mongodb";
// mongoClient.connect("mongodb://edenvoice:PrImlcwkLkJk5pSXysYio7SB57LTZIe0ZDHOXWoLx7DqAZgf5ifO7d7ki50JBfSfvcvQwQ4REqahACDb8RfBDQ%3D%3D@edenvoice.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@edenvoice@", function (err, client) {
//   client.close();
// });