async function runTransaction() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const session = client.startSession();
        session.startTransaction();

        const db = client.db("myNewDatabase");
        const collection = db.collection("myNewCollection");

        await collection.insertOne({ name: "Eve", age: 22, city: "Miami" }, { session });
        await collection.updateOne({ name: "Bob" }, { $set: { city: "Houston" } }, { session });

        await session.commitTransaction();
        console.log("Transaction committed successfully");
    } catch (err) {
        console.error("Transaction aborted due to an error:", err);
        await session.abortTransaction();
    } finally {
        await session.endSession();
        await client.close();
    }
}

runTransaction();
