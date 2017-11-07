const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let light;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send(light));

app.post('/', (req, res) => {
	light = req.body.light;
	res.send("Light set to " + light);
});

app.listen(3000, () => console.log('Started'));

