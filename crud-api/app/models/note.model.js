module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      body: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Notes = mongoose.model("notes", schema);
  return Notes;
};
