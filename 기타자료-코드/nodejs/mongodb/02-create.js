async function createDatabaseAndCollection() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("myNewDatabase");
        const collection = db.collection("myNewCollection");
        console.log("Database and Collection created!");
    } finally {
        await client.close();
    }
}

createDatabaseAndCollection();
