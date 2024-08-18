async function insertDocument() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("myNewDatabase");
        const collection = db.collection("myNewCollection");
        const result = await collection.insertOne({ name: "Alice", age: 25, city: "New York" });
        console.log(`Document inserted with _id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}

insertDocument();
