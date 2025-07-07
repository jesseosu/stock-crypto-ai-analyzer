import { useEffect, useState } from 'react';

function StockViewer({ symbol }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/api/stock/${symbol}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, [symbol]);

    if (loading) return <p>Loading stock data...</p>;

    return (
        <div>
            <h2>{symbol} Stock Info</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default StockViewer;
