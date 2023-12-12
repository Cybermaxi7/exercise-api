const jsonServer = require('json-server');
const customRoutes = require('./customRoutes');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Custom route for exercise search
server.use('/exercises', customRoutes);

server.use(middlewares);
server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
