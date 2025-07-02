import express from "express";

const app=express();

// Define a route
app.get('/', (req, res) => {
  console.log('Hello World'); // Logs to console
  res.send('Hello from Express!');
});

app.listen(3001);