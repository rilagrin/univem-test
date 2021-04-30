const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

var router = express.Router();

router.get('/', function(req, res) {
    res.json({
        message: "OK"
    });
});

router.get('/a', function(req, res) {
    res.json({
        message: "funciona pai"
    });
});

app.use('/api', router);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server running!");
})