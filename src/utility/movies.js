import database from "../config/firebaseConfig";

export async function getMovies(){
      let  movies = await database.collection('movies-list').orderBy('title').get();
      return movies.docs.map(doc=>({ ...doc.data(),ID:doc.id }));
    
}

export async function findMovie(id){
      let  movie = await database.collection('movies-list').doc(id).get();
} 
export async function deleteMovie(id){
      return await database.collection('movies-list').doc(id).delete();
      
} 
export async function addMovie(movie)
{
      return database.collection('movies-list').add(movie);
}

export async function clear()
{
      return await database.collection('movies-list').get().then(async function(querySnapshot) {
            var clearBatch = database.batch();
            
            querySnapshot.forEach(function(doc) {
                  clearBatch.delete(doc.ref);
            });
             clearBatch.commit();  
      })
}

export async function reset(){
      console.log("cleared");
      let addBatch = database.batch();
      return await database.collection("movies").get().then( async(querySnapshot)=>
      {     
            querySnapshot.docs.forEach((q=>{
                  var id = database.collection("movies-list").doc();
                  addBatch.set(id,q.data());         
                  }))
            addBatch.commit();
                  })

}
   