import express, { request, response } from "express";
import { v4 as uuid } from "uuid";

const app = express();

app.use(express.json());

interface IUsers {
    id: string;
    name: string;
    email: string;
    phone: string;
    password: string
}

// [ {}, {}, {}]
/**
 * CRUD
 * Create -> C
 * Read -> R
 * Update -> U
 * Delete -> D
 */

const users: IUsers[] = [];

// Read
app.get("/users", (request, response) => {

    return response.status(200).json(users);
});

// Create 
app.post("/users", (request, response) => {

    const { name, email, phone, password } = request.body;

    const newUser = {
        id: uuid(),
        name,
        email,
        phone,
        password
    }

    users.push(newUser);

    return response.status(201).json(newUser);

});


// const usuario2 = {
//     name: "Dembo",
//     email: "josedembo@gmail.com"
// }

// const { name, email } = usuario2

// console.log(name, email)


app.listen(3333);


