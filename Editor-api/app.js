const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
// form submmission middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// Body parser middleware
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Index Page'));
app.use('/files', require('./routes/routes'));

const port = process.env.PORT || 9999;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
