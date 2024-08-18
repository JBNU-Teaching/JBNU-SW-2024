async function createIndex() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("myNewDatabase");
        const collection = db.collection("myNewCollection");
        const result = await collection.createIndex({ name: 1 });
        console.log(`Index created: ${result}`);
    } finally {
        await client.close();
    }
}

createIndex();
