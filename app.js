const { server, startServer } = require('./backend/server');

const PORT = Number(process.env.PORT || 3001);

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Readers Line Grammer School Jand API and frontend server running on port ${PORT}.`);
    startServer().catch((err) => {
        console.error('Startup background initialization failed:', err?.message || err);
    });
});
