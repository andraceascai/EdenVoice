// import { MongoClient } from 'mongodb';

// const url = 'AccountEndpoint=https://edenvoice.documents.azure.com:443/;AccountKey=xYQYeEyrtJtHLi4rCxXKe0k5VIRpeQAYyikqrTSPK8JqNxCs6JcCzQ19QIyduCBOAr31Mn4dSvq0ACDbANhPbg==;'; // Replace with your connection string
// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// async function connect() {
//   try {
//     await client.connect();
//     console.log('Connected to the MongoDB server.');

//     const db = client.db('EdenVoice'); // Replace with your database name
//     const collection = db.collection('Posts'); // Replace with your collection name

//     // You can now perform database operations here

//   } catch (err) {
//     console.error('Connection to MongoDB failed:', err);
//   }
// }

// connect();