const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const stockRoutes = require('./routes/stock');
app.use('/api/stock', stockRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend listening on http://localhost:${PORT}`);
});
