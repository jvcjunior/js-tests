import express from 'express';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';

import { MongoClient } from 'mongodb';

let app = express();

app.use(express.static('public'));

let db;

MongoClient.connect(process.env.MONGO_URL, (err, database) => {
    if(err) throw err;

    db = database;
    app.use('/graphql', GraphQLHTTP({ 
        schema: schema(db),
        graphiql: true 
    }));

    app.listen(3000, () => console.log('Listening on port 3000...'));
});

// app.get("/data/links", (req, res) => {
//     db.collection("links").find({}).toArray((err, links) => {
//         if(err) throw err;

//         res.json(links);
//     });
// });
