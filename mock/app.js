const express = require('express')
const app = express();
const port = 3000;

const userList = require('./routes/user-list.js');

app.use('/api', userList);

app.listen(port, () => {
    console.log(`Demo app listening at http://localhost:${port}`);
})