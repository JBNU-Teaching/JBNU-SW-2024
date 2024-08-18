const { MongoClient } = require('mongodb');

async function connectToDatabase() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected to MongoDB!");
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

connectToDatabase();
