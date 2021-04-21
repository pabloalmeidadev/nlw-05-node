import express, { response } from "express";


//const app será o servidor
const app = express();

//criando uma rota para a aplicação

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = dah?
 * PATCH = Alterar uma informação especifiaca
 */

/**app.get("/", (request, response) => {
    return response.send("More one NWL 05");
});
*/
app.get("/", (request, response) => {
    return response.json({
        message: "hello my besto friendo"
    });
});

app.post("/users", (request, response) => {
    return response.json({
        message: "Usuário cadastrado!"
    })
})

app.listen(1234, () => console.log("servidor rodando que eh uma belezinha"));