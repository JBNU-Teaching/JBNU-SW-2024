const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const database = client.db('mydatabase');
        const collection = database.collection('mycollection');

        // CRUD 작업 수행
        await createDocument(collection);
        await readDocument(collection);
        await updateDocument(collection);
        await deleteDocument(collection);

    } finally {
        await client.close();
    }
}

async function createDocument(collection) {
    const doc = { name: "John Doe", age: 30, profession: "Engineer" };
    const result = await collection.insertOne(doc);
    console.log(`New document inserted with _id: ${result.insertedId}`);

    const docs = [
        { name: "Alice", age: 25, profession: "Designer" },
        { name: "Bob", age: 28, profession: "Manager" }
    ];
    const insertManyResult = await collection.insertMany(docs);
    console.log(`${insertManyResult.insertedCount} documents were inserted`);
}

async function readDocument(collection) {
    const query = { name: "John Doe" };
    const foundDoc = await collection.findOne(query);
    console.log("Found document:", foundDoc);

    const ageQuery = { age: { $gte: 25 } };
    const foundDocs = await collection.find(ageQuery).toArray();
    console.log("Found documents:", foundDocs);
}

async function updateDocument(collection) {
    const query = { name: "John Doe" };
    const updateDoc = { $set: { age: 31 } };
    const updateResult = await collection.updateOne(query, updateDoc);
    console.log(`${updateResult.matchedCount} document(s) matched the query, ${updateResult.modifiedCount} was/were updated`);

    const ageQuery = { age: { $lt: 30 } };
    const updateManyResult = await collection.updateMany(ageQuery, { $set: { profession: "Updated Profession" } });
    console.log(`${updateManyResult.matchedCount} document(s) matched the query, ${updateManyResult.modifiedCount} was/were updated`);
}

async function deleteDocument(collection) {
    const query = { name: "John Doe" };
    const deleteResult = await collection.deleteOne(query);
    console.log(`${deleteResult.deletedCount} document(s) was/were deleted`);

    const ageQuery = { age: { $gte: 30 } };
    const deleteManyResult = await collection.deleteMany(ageQuery);
    console.log(`${deleteManyResult.deletedCount} document(s) was/were deleted`);
}

run().catch(console.dir);
