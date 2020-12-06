module.exports = app => {
  const notes = require("../controllers/notes.controller.js");
  ;

  console.log("hereeeeeee")
  var router = require("express").Router();

  router.post("/", notes.create);

  router.get("/", notes.findAll);


  router.get("/:id", notes.findOne);

  router.put("/:id", notes.update);

  router.delete("/:id", notes.delete);


  app.use("/api/notes", router);
};
