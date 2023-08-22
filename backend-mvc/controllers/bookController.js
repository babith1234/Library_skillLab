const bookModel = require("../models/bookModel")

//create
const createBook = async (req, res) => {
  try {
    let data = req.body;
    if (Object.keys(data) == 0) {
      return res.status(400).send({ status: false, msg: "no data provided" });
    }
    let saveData = await bookModel.create(data); //insertOne
    return res.status(201).send({ status: true, msg: "data insert success" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: "error" });
  }
};

//delete
const deleteBook = (req, res) => {
  try {
    const searchValue = req.params.searchValue;
      bookModel.deleteMany({
      $or: [
        { Title: searchValue },
        { Author: searchValue }
      ]
    }).then((response)=>{
          res.status(201).send(response)
          console.log(response)
    })
  }catch(e){
    res.status(401).send(e);
    console.log(e)
  }
}
//update

const updateBook = (req, res) => {
  try {
    const _id = req.params.id;
    bookModel
      .findByIdAndUpdate(_id, req.body, {
        new: true,
      })
      .then((data) => {
        res.status(201).send(data);
        console.log(data);
      });
  } catch (e) {
    res.status(401).send(data);
  }
};

//display

const displayBook = (req, res) => {
  try {
    bookModel.find({}).then((data) => {
      res.status(201).send(data);
      console.log(data);
    });
  } catch (e) {
    res.status(400).send(e);
  }
};

const searchBook = (req, res) => {
  try {
    const searchValue = req.params.searchValue
    const query={
      $or: [
      { Title: searchValue },
      { Author: searchValue }
    ]
  }
    bookModel.find(query).then((data) => {
      res.status(201).send(data);
      console.log(data);
    });
  } catch (e) {
    res.status(400).send(e);
  }
};


module.exports = {
  createBook,
  deleteBook,
  displayBook,
  updateBook,
  searchBook
};
