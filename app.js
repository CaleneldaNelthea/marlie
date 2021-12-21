const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const englishFormWords = [
  "Belgian Bakery Marlie",
  "Use this form to place your order directly with us.",
  "Keep an eye on our facebook page for the pie of the month and other new flavours.",
  "Name",
  "Email",
  "Telephone Number",
  "Take out date",
  "Extra notes"
];
const englishDessertWords = [
  "Waffles and Pancakes",
  "Waffles",
  "Pancakes",
  "Large Pies (31cm)",
  "Small Pies"
]
const englishPies = [
  "Apple Crumble",
  "Cheesecake",
  "Tarte Tatin Apple",
  "Tarte Tatin Pear",
  "Nodule Pudding",
  "Nodule Apricot",
  "Nodule Apple",
  "Nodule Pear"
]

//must be below app express
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.get("/", function(req, res) {
  res.render("home")

});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/formenglish", function(req, res) {
  res.render("formenglish", {
    form: englishFormWords,
    dessert: englishDessertWords,
    pies: englishPies
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
