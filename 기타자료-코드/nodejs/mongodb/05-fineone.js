async function findOneDocument() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("myNewDatabase");
        const collection = db.collection("myNewCollection");
        const document = await collection.findOne({ name: "Alice" });
        console.log("Found document:", document);
    } finally {
        await client.close();
    }
}

findOneDocument();
