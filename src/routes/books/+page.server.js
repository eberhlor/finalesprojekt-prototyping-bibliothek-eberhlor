import db from "$lib/db.js"
export async function load(){ 

    return {
        books: await db.getBooks()

    }

}