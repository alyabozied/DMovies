import database from "../config/firebaseConfig";

export async function getMovies(){
    console.log("yo");
      let  movies = await database.collection('movies-list').get();
      return movies.docs.map(doc=>({ ...doc.data(),ID:doc.id }));
    
}

export async function findMovie(id){
      let  movie = await database.collection('movies-list').doc(id).get();
      console.log(movie.data());
} export async function addMovie(movie)
{
      return database.collection('movie-list').add(movie);
}