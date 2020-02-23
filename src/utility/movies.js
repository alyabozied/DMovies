import database from "../config/firebaseConfig";

export async function getMovies(){
    console.log("yo");
      let  movies = await database.collection('movies-list').get();
      return movies.docs.map(doc=>doc.data());
}