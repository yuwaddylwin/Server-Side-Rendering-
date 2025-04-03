const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files 
app.use(express.static(path.join(__dirname, 'public'))); 

// Routes
app.get('/', (req, res) => {
    res.render('pages/home', { title: 'Yu Waddy Lwin | Computer Science Portfolio' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});