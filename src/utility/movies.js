import database from "../config/firebaseConfig";

export async function getMovies(){
    console.log("yo");
      let  movies = await database.collection('movies-list').get();
      return movies.docs.map(doc=>({ ...doc.data(),ID:doc.id }));
    
}

export async function findMovie(id){
      let  movie = await database.collection('movies-list').doc(id).get();
      console.log(movie.data());
} 
export async function addMovie(movie)
{
      return database.collection('movies-list').add(movie);
}

export async function reset()
{
      database.collection('movies-list').get().then(function(querySnapshot) {
            var clearBatch = database.batch();
    
            querySnapshot.forEach(function(doc) {
                  clearBatch.delete(doc.ref);
            });
            clearBatch.commit().then( ()=>{
                  let addBatch = database.batch();
                  database.collection("movies").get().then((querySnapshot)=>{     
                        querySnapshot.docs.forEach((q=>{
                        var id = database.collection("movies-list").doc();
                        addBatch.set(id,q.data());         
                        }))
                        return addBatch.commit();
                        })

            }
            )
      
            
      }).then(function() {
          console.log("done")
      
      }); 
}