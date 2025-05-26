import db from "$lib/db.js"
export async function load({params}){

    console.log(params.author_id)

    return{
        books: await db.getBooksByAuthor(params.author_id)
    }
}