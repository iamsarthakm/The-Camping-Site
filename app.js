var express=require("express");
var app=express();
var mongoose=require("mongoose");
var Comment =require("./models/comment");
var passport   =require("passport");
var LocalStrategy=require("passport-local");
var User =require("./models/user");  
var methodOverride=require("method-override");
var Campground=require("./models/campground");
var flash=require("connect-flash");

var bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({encoded:true,useUnifiedTopology:true,extended:true}));

var seedDB=require("./seeds");
const { serializeUser } = require("passport");
const { deserializeUser } = require("./models/comment");

var commentRoutes       = require("./routes/comments"),
    campgroundRoutes    = require("./routes/campgrounds"),
    indexRoutes         = require("./routes/index");

mongoose.connect("mongodb://localhost:27017/YelpCampFinal",{useNewUrlParser:true,useUnifiedTopology:true});
 
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);



app.use(express.static(__dirname+"/public"));
app.set("view engine","ejs");
app.use(methodOverride("_method"));
app.use(flash());
//seedDB();

//passport =========== config
app.use(require("express-session")({
    secret:"I am the best",
    resave:false,
    saveUninitialized:false
}));



app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){

res.locals.currentUser=req.user;
res.locals.error= req.flash("error");
res.locals.success=req.flash("success");
next();

});


app.use("/",indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes); 




app.listen(69,function(){
    console.log("server ok");
});