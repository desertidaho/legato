var expressSession = require("express-session");
var mongoStore = require("connect-mongodb-session")(expressSession);

var store = new mongoStore({
  uri: "mongodb://legato:legatopass1!@den1.mongo1.gear.host:27001/legato",
  collection: "Sessions"
});

store.on("error", function (err) {
  console.log("[SESSION ERROR]", err);
});

// @ts-ignore
var session = expressSession({
  secret: "We did change this for Legato",
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 52,
  },
  store,
  resave: true,
  saveUninitialized: true
});

module.exports = session;