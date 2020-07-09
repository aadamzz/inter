const express = require('express');
const cors = require('cors');
const Datastore = require('nedb');
const app = express();

app.listen(5000, () => console.log("listening at http://localhost:5000/"))
app.use(cors());
app.use(express.json({ limit: '1mb' }));

const database = new Datastore("database.db");
database.loadDatabase();

app.get('/get', (request, response) => {
    database.find({ type: "posts" }, (err, data) => {
        if (err) {
            response.end()
            return;
        }
        response.json(data.sort((x, y) => {
            return x.date - y.date;
        }).reverse());
    });
})

app.post('/post', (request, response) => {
    const data = request.body
    database.insert(data)
    response.json({
        status: "success",
        response: data
    })
})

app.get('/get_profile_picture', (request, response) => {
    database.find({ type: "profile_picture" }, (err, data) => {
        if (err) {
            response.end()
            return;
        }
        response.json(data)
    })
})

app.post('/profile_picture', (request, response) => {
    const data = request.body
    database.find({ type: "profile_picture", user: data.user }, (err, databaseData) => {
        if (err) {
            response.end()
            return;
        }
        if (!databaseData) {
            database.insert(data)
        }
        if (databaseData) {
            database.remove({ type: "profile_picture", user: data.user }, (err, numRemoved) => {
            })
            database.insert(data)
        }
    })
    response.json({
        status: "success",
        response: data
    })
})
