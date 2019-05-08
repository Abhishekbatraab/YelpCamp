const express = require("express");
const route = express.Router();
const campgrounds = require('../campgroundsData');
// console.log("Campgrounds Data : ", campgrounds);
route.get("/", function(req,res){
    res.render("landing");
});
route.get("/campgrounds", (req,res)=>{
    res.render("campgrounds", {campgrounds: campgrounds});
});
route.post("/campgrounds", (req,res)=>{
     //res.render("campgrounds", {campgrounds: campgrounds});
     const name = req.body.name;
     const imageUrl = req.body.image;
     var newCampground = {name: name, image: imageUrl};
     campgrounds.push(newCampground);
     res.redirect("/campgrounds");
});
route.get("/campgrounds/new", (req,res)=>{
    res.render("new");
})
// route.post("/campgrounds/", (req,res)=>{
//     res.render()
// })
module.exports = route;