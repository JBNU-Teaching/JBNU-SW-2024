async function findMultipleDocuments() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("myNewDatabase");
        const collection = db.collection("myNewCollection");
        const documents = await collection.find({}).toArray();
        console.log("Found documents:", documents);
    } finally {
        await client.close();
    }
}

findMultipleDocuments();
