const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const connection = require("./config/connection")
const routes = require('./route');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(routes);
connection.once("open", () => {
    app.listen(PORT, () => {
        console.log(`App listening on http://localhost:${PORT}!`);
    })

})
