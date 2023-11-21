const express = require('express');
const redis = require('redis');


const app = express();
const client = redis.createClient({
  host: '192.168.2.54',
  port: 6379
});
client.set('visits', 0);

client.on('connect', () => {
  console.log('Connected to Redis server');
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
      res.send('访问次数 ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('监听8081端...');
});