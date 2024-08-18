async function insertMultipleDocuments() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("myNewDatabase");
        const collection = db.collection("myNewCollection");
        const documents = [
            { name: "Bob", age: 30, city: "Los Angeles" },
            { name: "Charlie", age: 28, city: "San Francisco" }
        ];
        const result = await collection.insertMany(documents);
        console.log(`${result.insertedCount} documents inserted`);
    } finally {
        await client.close();
    }
}

insertMultipleDocuments();
