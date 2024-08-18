async function updateDocument() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("myNewDatabase");
        const collection = db.collection("myNewCollection");
        const result = await collection.updateOne(
            { name: "Alice" },
            { $set: { city: "Boston" } }
        );
        console.log(`${result.matchedCount} document matched, ${result.modifiedCount} document updated`);
    } finally {
        await client.close();
    }
}

updateDocument();
