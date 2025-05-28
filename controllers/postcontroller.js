const connection = require("../data/db")

function index(req, res) {

    const sql = 'SELECT*FROM posts';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);
    });
};

const show = (req, res) => {
    const id = req.params.id


    const sql = 'SELECT * FROM posts WHERE id = ' + id

    connection.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error during the reading of posts' + err });
        } else {
            res.json(results);
        }
    });
};


const destroy = (req, res) => {

    const sql = 'DELETE FROM posts WHERE id = ?'
    connection.query(sql, [req.params.id], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error during the deletion of posts' + err });
        }

        res.sendStatus(204)
    });
};





module.exports = {
    index,
    show,
    destroy
}



