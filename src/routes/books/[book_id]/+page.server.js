import db from "$lib/db.js"
export async function load({params}){

    console.log(params.book_id)

    return{
        books: await db.getBookDetailInfo(params.book_id),
    }
}