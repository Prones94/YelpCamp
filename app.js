const express = require('express');
const app = express();
const port = 3000;
const request = require('request');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var campgrounds = [
    {name:"Salmon Hill", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
    {name:"Little Creek", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
    {name:"Sutter's Mine", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"}
];

app.get('/', (req,res) => {
    res.render("home");
});

app.get('/campgrounds', (req,res) => {
    res.render('campgrounds',{campgrounds:campgrounds});
});

app.post('/campgrounds', (req,res) => {
    var name = req.body.name;
    var image = req.body.image
    var newCampGround = {name:name,image:image};
    campgrounds.push(newCampGround);
    res.redirect('/campgrounds')
});

app.get('/campgrounds/new', (req,res) => {
    res.render('new')
})

app.get('*', (req,res) => {
    res.render('mistake');
})


app.listen(port, () => {
    console.log(`YelpCamp V1 is now runnning on http://localhost:${port}/`)
})