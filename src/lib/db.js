import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("einzelarbeit");

async function getBooks() {
  let books = [];
  try {
    const collection = db.collection("books");

    //
    const query = {};

    
    books = await collection.find(query).toArray();
    books.forEach((book) => {
      book._id = book._id.toString(); 
    });
  } catch (error) {
    console.log(error);
   
  }
  return books;
}

async function getBook(id) {
  let book = null;
  try {
    const collection = db.collection("books");
    const query = { _id: new ObjectId(id) }; // filter by id
    book = await collection.findOne(query);

    if (!book) {
      console.log("No book with id " + id);
      // TODO: errorhandling
    } else {
      book._id = book._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return book;
}


async function createBook(book) {
  book.poster = "/images/default.png"; // default poster
  try {
    const collection = db.collection("books");
    const result = await collection.insertOne(book);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

async function countAuthor() {

  try {
    const collection = db.collection("authors");
    const result = await collection.countDocuments({});
    return result; 
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return 0;

}

async function createAuthor(author) {
  const authorsCount = await countAuthor();
  const date = new Date(author.birthdate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
     
  author.birthdate = `${month}/${day}/${year}`;
  author.authorId = authorsCount +1;
 
  try {
    const collection = db.collection("authors");
    const result = await collection.insertOne(author);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

async function getGenres() {
  let genres = [];
  try {
    const collection = db.collection("genres");

    //
    const query = {};

    
    genres = await collection.find(query).toArray();
    genres.forEach((genre) => {
      genre._id = genre._id.toString(); 
    });
  } catch (error) {
    console.log(error);
   
  }
  return genres;
}

async function getAuthors() {
  let authors = [];
  try {
    const collection = db.collection("authors");

    //
    const query = {};

    
    authors = await collection.find(query).toArray();
    authors.forEach((author) => {
      author._id = author._id.toString(); 
    });
  } catch (error) {
    console.log(error);
   
  }
  return authors;
}

async function getAuthor(id) {
  let author = null;
  try {
    const collection = db.collection("authors");
    const query = { _id: Number (id) }; // filter by id
    author = await collection.findOne(query);

    if (!author) {
      console.log("No author with id " + id);
      // TODO: errorhandling
    } else {
      author._id = author._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return author;
}
//wird nicht mehr benutzt ist ein simpler weg an die Bücher zu kommen
async function getBooksOfGenre(id) {
  let books = [];
  try {
    const collection = db.collection("books");

const query = { genreId: parseInt(id) };
    books = await collection.find(query).toArray();

      books.forEach((book) => {
        book._id = book._id.toString();
      });
  } catch (error) {
    console.log(error.message);
  }
  return books;
}

async function getBookDetailInfo(id) {
  let books = [];
  try {
    const collection = db.collection("books");

const query =  [{
        $match: { '_id': new ObjectId(id) } // nur dieses Buch
      },
      {
        $lookup: {
          from: 'genres',
          localField: 'genreId',
          foreignField: 'genreId',
          as: 'book_genre'
        }
      },
      {
        $lookup: {
          from: 'authors',
          localField: 'authorId',
          foreignField: 'authorId',
          as: 'book_author'
        }
      },
      {
        $unwind: '$book_genre'
      },
      {
        $unwind: '$book_author'
      },
      {
        $project: {
            _id: 1, 
            title: 1, 
            year: 1, 
            length: 1, 
            poster: 1, 
            book_genre: '$book_genre.name', 
            book_author_firstname: '$book_author.firstname', 
            book_author_lastname: '$book_author.lastname'
        }
      }
    ];
    books = await collection.aggregate(query).toArray();

      books.forEach((book) => {
        book._id = book._id.toString();
      });
  } catch (error) {
    console.log(error.message);
  }
  return books;

}
//alternative zu getBooksOfGenre
async function getBooksByGenre(id) {
  let books = [];
  try {
    const collection = db.collection("genres");
    console.log(id)

const query =  [{
        $match: { '_id': new ObjectId(id) } // nur dieses Buch
      },
      {
        '$lookup': {
            'from': 'books', 
            'localField': 'genreId', 
            'foreignField': 'genreId', 
            'as': 'books'
        }
    }, {
        '$unwind': {
            'path': '$books'
        }
    }, {
        '$project': {
            '_id': 1,
            'title': '$books.title', 
            'year': '$books.year', 
            'length': '$books.length', 
            'poster': '$books.poster'
        }
    }
    ];
    books = await collection.aggregate(query).toArray();
    books.forEach((book) => {
        book._id = book._id.toString();
      });


  } catch (error) {
    console.log(error.message);
  }
  return books;

}

async function getBooksByAuthor(id) {
  let books = [];
  try {
    const collection = db.collection("authors");

const query =  [{
        $match: { '_id': new ObjectId(id) } // nur dieses Buch
      },
      {
        '$lookup': {
            'from': 'books', 
            'localField': 'authorId', 
            'foreignField': 'authorId', 
            'as': 'books'
        }
    }, {
        '$unwind': {
            'path': '$books'
        }
    }, {
        '$project': {
            '_id': 1,
            'title': '$books.title', 
            'year': '$books.year', 
            'length': '$books.length', 
            'poster': '$books.poster'
        }
    }
    ];
    books = await collection.aggregate(query).toArray();

      books.forEach((book) => {
        book._id = book._id.toString();
      });
  } catch (error) {
    console.log(error.message);
  }
  return books;

}



// export all functions so that they can be used in other files
export default {
  getBooks,
  getBook,
  createBook,
  getGenres,
  getBooksOfGenre,
  getAuthors,
  getAuthor,
  getBookDetailInfo,
  getBooksByGenre,
  createAuthor,
  getBooksByAuthor
};