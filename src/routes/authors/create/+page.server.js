import db from '$lib/db.js'

export const actions = {
    create: async ( { request }) => { 

        const data = await request.formData();

        let author = {
            firstname: data.get("firstname"),
            lastname: data.get("lastname"),
            gender: data.get("gender"),
            birthdate: data.get("birthdate")
        }
        db.createAuthor(author)
        console.log("create")
    }
}