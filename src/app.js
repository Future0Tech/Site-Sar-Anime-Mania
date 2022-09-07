const express = require("express");
const path = require("path");
const ejs = require("ejs");
const morgan = require("morgan");

const app = express();

//env
const envConfig = require('./envConfig');
const env = envConfig.data; 
console.log(env)

// Settings
app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', require("./routes/site/index"));
app.use('/index.html', require("./routes/site/index"));
app.use('/page.html', require("./routes/site/page"));
app.use('/post.html', require("./routes/site/post"));
app.use('/genres.html', require("./routes/site/genres"));
app.use('/search.html', require("./routes/site/search"));
app.use('/search-noresults.html', require("./routes/site/search-noresults"));

//, Routes teste
app.use('/ind', require("./routes/index"));

// Routes Api
app.use('/api', require("./routes/indexApi"));

// Static files
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/fonts", express.static(path.join(__dirname, "public/fonts")));
app.use("/img", express.static(path.join(__dirname, "public/img")));
app.use("/js", express.static(path.join(__dirname, "public/js")));

module.exports = app;