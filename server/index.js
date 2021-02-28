const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => { 
 res.send("<h1>Home page</h1>");
});

app.get('/restaurants', (req, res) => {
    const url = "https://api.yelp.com/v3/businesses/search?location=NYC&term=restaurants";
    const API_KEY = "zxPYib7pXkEmbQ_EQlnAFVft2jObkYWFjM3cJEZogrONJDL1QvhZ0eTna6HM9fOqJe4wQsI4rGvHqzxURD_adDmAUR6U41hLwuRlwWP8CAqHLds78ycDDpgfDo8dYHYx";
    const CLIENT_ID = "FkXTQwvhltXSKxat_GD9bw";

    const config = {
        headers: { 
            Authorization: `Bearer ${API_KEY}`
        }
    };

    axios.get(url, config)
     .then(response => {
       res.send(response.data);
     });
});

app.listen(3030, () => {
 console.log('server started on port 3030');
});