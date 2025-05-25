import db from "$lib/db.js"
export async function load(){ 

    return {
        genres: await db.getGenres()

    }

}