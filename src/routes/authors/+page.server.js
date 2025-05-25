import db from "$lib/db.js"
export async function load(){ 

    return {
        authors: await db.getAuthors()

    }

}