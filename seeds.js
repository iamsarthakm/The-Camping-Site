var mongoose=require("mongoose");

var Campground = require("./models/campground");
const campground = require("./models/campground");

var Comment=require("./models/comment");

var data =  [
    {name: "Cloud's Rest",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIoI4pJSzw4129ssfSfEvF11Tjk2zh6EUQ8Q&usqp=CAU",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut sem nec urna dictum cursus. Praesent luctus auctor ipsum, eget congue dolor aliquam eget. Cras vitae erat viverra risus laoreet pulvinar. Aliquam at felis vitae ante efficitur imperdiet sit amet in neque. Morbi a sem quis tellus tincidunt vulputate eget ut ipsum. Donec pellentesque nisi eu metus venenatis, luctus pellentesque sapien mollis. Morbi viverra massa in magna varius posuere. Nullam malesuada, leo id aliquam rutrum, sapien ipsum mattis tortor, nec tincidunt orci est rutrum felis."
    },
    {name: "Desert lop",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlUvYUk85kZ6-g4vCc5PuC8pn8HxWuPnmAKw&usqp=CAU",
    description: "Sed imperdiet iaculis dapibus. Fusce a mi sem. Cras et velit sit amet erat sodales euismod eu nec sapien. Proin at sapien sodales, sodales leo at, faucibus purus. Nunc eget laoreet enim. Vivamus gravida tristique cursus. In suscipit, sapien a blandit vehicula, nisi augue euismod dui, id rutrum ipsum eros vel tortor. Nullam quis lacus volutpat, dignissim nunc quis, dignissim metus. Nam ut pharetra ex, quis semper lectus. Maecenas facilisis urna et ex bibendum aliquet. Maecenas id orci scelerisque dolor blandit porttitor"
   },
   {name: "Bengal pride",
   image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5dktox51jKGHtpEe7tYm2kAzOtnghyjfPew&usqp=CAU",
   description: "Proin vulputate interdum purus rhoncus rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum lorem nunc, vulputate in pulvinar non, mollis eget urna. Maecenas ligula lectus, placerat et ultricies sollicitudin, lobortis pharetra leo. Ut quis massa cursus metus tempor euismod. Vestibulum elementum a ligula id efficitur. Morbi sed semper neque. Sed in est vitae nulla faucibus suscipit a quis tellus. Etiam tempus facilisis ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"
  },

]
function seedDB(){
    //Remove all campgrounds
    Campground.deleteMany({}, function(err){
     
     /*   if(err){
             console.log(err);
         }
         console.log("removed campgrounds!");
          //add a few campgrounds
         data.forEach(function(seed){
             Campground.create(seed, function(err, campground){
                 if(err){
                     console.log(err)
                 } else {
                     console.log("added a campground");
                     //create a comment
                     Comment.create(
                         {
                             text: "This place is great, but I wish there was internet",
                             author: "Homer"
                         }, function(err, comment){
                             if(err){
                                 console.log(err);
                             } else {
                                 campground.comments.push(comment);
                                 campground.save();
                                 console.log("Created new comment");
                             }
                         });
                 }
             });
         });*/
     }); 
     //add a few comments
 }






module.exports = seedDB;