import database from "../config/firebaseConfig";

export async function getMovies(){
    console.log("yo");
      let  movies = await database.collection('movies').get();
      return movies.docs.map(doc=>doc.data());
}

export async function findMovie(id){
      let  movies = await database.collection('movies').where('_id','==',id).get();
      return movies.docs.map(doc=>doc.data())[0];
}