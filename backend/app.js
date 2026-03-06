const express = require('express');
const redis = require('redis');
const app = express();

app.use(express.json());

const client = redis.createClient({
  url: 'redis://redis-service:6379'
});
client.connect().catch(console.error);

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'backend' });
});

app.get('/api/visits', async (req, res) => {
  try {
    const visits = await client.incr('visit_count');
    res.json({ visits, message: 'Hello from Backend API!' });
  } catch (err) {
    res.json({ visits: 0, message: 'Hello from Backend API!' });
  }
});

app.listen(3000, () => console.log('Backend running on port 3000'));