import db from '$lib/db.js'

export const actions = {
    create: async ( { request }) => { 

        const data = await request.formData();

        let book = {
            title: data.get("title"),
            year: data.get("year"),
            length: data.get("length"),
            genreId: Number(data.get("genre_id")),
            authorId: Number(data.get("author_id"))
        }
        db.createBook(book);
        console.log("create")
    }
}
export async function load(){

    return{
        genres: await db.getGenres(),
        authors: await db.getAuthors()
    }
}
