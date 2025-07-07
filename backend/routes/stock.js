const express = require('express');
const router = express.Router();

router.get('/:symbol', async (req, res) => {
    const { symbol } = req.params;
    // Simulate a real stock lookup (replace with API or logic later)
    const data = {
        symbol: symbol.toUpperCase(),
        price: 123.45,
        timestamp: new Date().toISOString(),
    };
    res.json(data);
});

module.exports = router;
