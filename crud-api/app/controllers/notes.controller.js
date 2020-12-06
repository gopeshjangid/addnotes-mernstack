const db = require("../models");
const notes = db.notes;

// Create and Save a new notes
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a notes
  const notesO = new notes({
    title: req.body.title,
    body: req.body.body,
  });

  // Save notes in the database
  notesO
    .save(notesO)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the notes."
      });
    });
};

// Retrieve all notess from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
   
  notes.find(condition).sort({'_id': -1})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving notess."
      });
    });
};

// Find a single notes with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  notes.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found notes with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving notes with id=" + id });
    });
};

// Update a notes by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  notes.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update notes with id=${id}. Maybe notes was not found!`
        });
      } else res.send({ message: "notes was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating notes with id=" + id
      });
    });
};

// Delete a notes with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  notes.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete notes with id=${id}. Maybe notes was not found!`
        });
      } else {
        res.send({
          message: "notes was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete notes with id=" + id
      });
    });
};



