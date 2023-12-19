// server.js
const jsonServer = require('json-server');
const customRoutes = require('./customRoutes');
const cors = require('cors');
const fs = require('fs').promises;

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Enable CORS for all origins during development
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? ['https://exercise-hub.vercel.app']
  : ['*'];
server.use(cors({ origin: allowedOrigins }));

// Custom route for exercise search
server.use('/exercises', customRoutes());

// Handle preflight requests
server.options('*', cors());

server.use(middlewares);
server.use(router);

const PORT = 3000;

async function loadDatabase() {
  try {
    const content = await fs.readFile('./db.json', 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Error loading database:', error);
    throw error;
  }
}

const dbPromise = loadDatabase();

// Start the server
dbPromise
  .then(() => {
    server.listen(PORT, () => {
      console.log(`JSON Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error starting the server:', error);
    process.exit(1);
  });
