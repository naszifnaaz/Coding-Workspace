const express = require('express');
const mongoose = require('mongoose');

const app = express();

const connect = () => {
    return mongoose.connect('mongodb+srv://naszifnaaz:hustleandcode@naaz-cluster.omf4h.mongodb.net/library?retryWrites=true&w=majority');
}

// Create section schema
const sectionSchema = new mongoose.Schema(
    {
        sectionName : {type : String, required : true},
        bookId : [{type : mongoose.Schema.Types.ObjectId, ref : 'book', required : true}]
    },
    {
        versionKey : false,
        timestamps : true
    }
);

//Create section model
const Section = mongoose.model('section',sectionSchema);

//Create book schema
const bookSchema = mongoose.Schema(
    {
        bookName : {type : String, required : true},
        bookBody : {type : String, required : true},
        checkedOut : {type : String, default : null},
        checkedIn : {type : String, default : null},
        authorId : [{type : mongoose.Schema.Types.ObjectId, ref : 'author'}],
        sectionId : {type : String, required : true}
    },
    {
        versionKey : false,
        timestamps : true,
    }
);

//Creating book model
const Book = mongoose.model('book',bookSchema);

//Creating author schema
const authorSchema = mongoose.Schema(
    {
        firstName : {type : String, required : true},
        lastName : {type : String, required : false},
        bookId : [{type : mongoose.Schema.Types.ObjectId, ref : 'book'}]
    }
);

//Creating author model
const Author = mongoose.model('author',authorSchema);


//Route handler
//find all books written by this author
app.get('author/:id', async (req, res) => {
    try{
        const books = await Author.findById(req.params.id).populate('bookId')
        .lean().exec();
        return res.status(200).send(books);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message})
    }
});


//find books in a section
app.get('section/:id', async  (req, res) => {
    try{
        const books = await Section.findById(req.params.id)
        .populate('bookId')
        .lean().exec();

        return res.status(200).send(books);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message})
    }
});

//find books that are not checked out
app.get('/books/available', async (req, res) => {
    try{
        const books = await Books.find({checkedOut : null}).lean().exec();
        return res.status(200).send(books);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message})
    }
});






app.listen(5000, async () => {
    try{
        await connect();
        console.log("Connection Successful");
    }
    catch(err)
    {
        console.log(err);
    }
});