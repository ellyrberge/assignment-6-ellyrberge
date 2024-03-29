const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("user_api/db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use("/api", router);

server.listen(port);