const { server, startServer } = require('./server');

const PORT = Number(process.env.PORT || 3001);

startServer()
    .then(() => {
        server.listen(PORT, '0.0.0.0', () => {
            console.log(`Readers Line Grammer School Jand API and frontend server running on port ${PORT}.`);
        });
    })
    .catch((err) => {
        console.error('Startup failed:', err?.message || err);
        process.exit(1);
    });
