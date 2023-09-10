const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "studentdb"
});

app.get("/", (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database error" });
        }
        return res.json(data);
    });
});

app.post('/Create', (req, res) => {
    console.log('Received POST request:', req.body);

    const sql = "INSERT INTO student (`Name`, `City`) VALUES (?, ?)";
    const values = [
        req.body.name,
        req.body.city
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: "Database error" });
        }
        console.log('Inserted data:', data);
        return res.json(data);
    });
});

app.put('/Update/:id', (req, res) => {
    console.log('Received PUT request:', req.body);

    const sql = "UPDATE student SET `Name` = ?, `City` = ? WHERE ID = ?";
    const values = [
        req.body.name,
        req.body.city,
    ];
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: "Database error" });
        }
        console.log('Updated data:', data);
        return res.json(data);
    });
});

app.delete('/student/:id', (req, res) => {
    console.log('Received DELETE request for ID:', req.params.id);

    const sql = "DELETE FROM student WHERE ID=?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: "Database error" });
        }
        console.log('Deleted data:', result);
        return res.json(result);
    });
});




app.listen(8081, () => {
    console.log("Listening on port 8081");
});
