const Book = require("../model/Book");

const getAllBooks = async(req,res,next)=>{
    let books=[];
    try{
        books = await Book.find();
    }
    catch(err){
        console.log("Error",err);
    }
    if(!books){
        return res.status(404).json({message:"No Books Found"})
    }
    return res.status(200).json({books});
}

const addBook = async(req,res,next)=>{
    const {name,author,description,price,available,image} = req.body;
    let book;
    try{
        book = new Book({name,author,description,price,available,image});
        await book.save();
    }
    catch(err){console.log(err);}

    if(!book){
        return res.status(500).json({message:'unable to Add Book'})
    }
    return res.status(201).json({book})
}

const getById = async(req,res,next)=>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findById(id);
    }
    catch(err){
        console.log("error",err);
    }
    if(!book){
        return res.status(404).json({message:"Book Not Found"});
    }
    return res.status(200).json({book});
}
const updateBook = async(req,res,next)=>{
    const id = req.params.id;
    const {name,author,description,price,available,image} = req.body;
    let book;
    try{
        book = await Book.findByIdAndUpdate(id,{name,author,description,price,available,image});
        book = await book.save();
    }
    catch(err){
        console.log("error",err);
    }
    if(!book){
        return res.status(404).json({message:"Unable to update this book"});
    }
    return res.status(200).json({book});
}
const deleteBook = async(req,res,next)=>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndDelete(id)
        book = await book.save();
    }
    catch(err){
        console.log("error",err);
    }
    if(!book){
        return res.status(404).json({message:"Unable to delete this book"});
    }
    return res.status(200).json({book});
}
exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;