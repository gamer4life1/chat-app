const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));



app.get('/', (req, res) => {
	res.render('index');
});

server = app.listen(3000);

const io = require('socket.io')(server);

io.on('connection', (scoket) => {
	console.log('New user connected');
});