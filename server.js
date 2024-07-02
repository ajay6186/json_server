const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Path to your db.json file
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/customRoute', (req, res) => {
  res.json({ message: 'This is a custom GET route' });
});

server.post('/customRoute', (req, res) => {
  // Handle POST request here
  res.json({ message: 'This is a custom POST route' });
});

// Use default router
server.use(router);

const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
