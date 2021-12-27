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
  "Small Pies (13cm)"
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

const svenskaFormWords = [
  "Belgisk Bageri Marlie",
  "Använd detta formulär för att göra din beställning direkt hos oss.",
  "Håll ett öga på vår facebooksida för månadens paj och andra nya smaker.",
  "Namn",
  "E-post",
  "Telefonnummer",
  "Ta ut datum",
  "Extra anteckningar"
];
const svenskaDessertWords = [
  "Våfflor och pannkakor",
  "Våfflor",
  "Pannkakor",
  "Stora pajer (31 cm)",
  "Små pajer (13cm)"
]
const svenskaPies = [
  "Äppelsmula",
  "Ostkaka",
  "Tarte Tatin Äpple",
  "Tarte Tatin Päron",
  "Knölpaj Pudding",
  "Knölpaj Aprikos",
  "Knölpaj Äpple",
  "Knölpaj Paron"
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

app.get("/handla", function(req, res) {
  res.render("handla");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.get("/kontakt", function(req, res) {
  res.render("kontakt");
});

app.get("/formenglish", function(req, res) {
  res.render("form", {
    form: englishFormWords,
    dessert: englishDessertWords,
    pies: englishPies
  });
});

app.get("/formsvenska", function(req, res) {
  res.render("form", {
    form: svenskaFormWords,
    dessert: svenskaDessertWords,
    pies: svenskaPies
  });
});

app.get("/hem", function(req, res) {
  res.render("hem");
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
