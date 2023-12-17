const jsonServer = require("json-server");
const customRoutes = require("./customRoutes");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Enable CORS for a specific origin
const allowedOrigins = ["http://localhost:5173", "https://exercise-hub.vercel.app" ]
server.use(cors({ origin: allowedOrigins }));
// Custom route for exercise search
server.use("/exercises", customRoutes);

server.use(middlewares);
server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});
