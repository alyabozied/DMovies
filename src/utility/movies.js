import database from "../config/firebaseConfig";

export async function getMovies(){
    console.log("yo");
      let  movies = await database.collection('movies-list').get();
      return movies.docs.map(doc=>({ ...doc.data(),ID:doc.id }));
    
}

export async function findMovie(id){
      let  movies = await database.collection('movies-list').where('_id','==',id).get();
      return movies.docs.map(doc=>doc.data())[0];
}