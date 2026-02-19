const http = require("http");
const express = require("express");
const path = require("path");

const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// parse request body to be used by most/all other middlewares
app.use(express.urlencoded({ extended: false }));

// serve static files
app.use(express.static(path.join(__dirname, "../", "public")));
console.log(__dirname);

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
