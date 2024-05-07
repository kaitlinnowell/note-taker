// imports
const express = require('express');
const { pageRouter } = require('./routes/pages');
const { apiPageRouter } = require('./routes/notes');
const app = express();

// use 3001 or use env variable
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/', apiPageRouter);
app.use('/', pageRouter);

app.listen(PORT, () => {
  console.info(`Server started on http://localhost:${PORT}`);
});