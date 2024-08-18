async function deleteDocument() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("myNewDatabase");
        const collection = db.collection("myNewCollection");
        const result = await collection.deleteOne({ name: "Charlie" });
        console.log(`${result.deletedCount} document deleted`);
    } finally {
        await client.close();
    }
}

deleteDocument();
