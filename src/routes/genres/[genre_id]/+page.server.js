import db from "$lib/db.js"
export async function load({params}){

    let genreid = params.genre_id;

    //console.log(genreid)

    return{
        books: await db.getBooksOfGenre(genreid)
        
        
    }
    
}