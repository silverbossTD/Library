const express        = require('express');
const connect        = require('./server');

const bodyParser     = require('body-parser');
const cookieParser   = require('cookie-parser');

const app            = express();
const port           = process.env.PORT || 5050;
const cors           = require('cors')

const authRoute      = require('./routes/auth.route');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieParser())

app.use(cors())

connect();

app.use('/auth', authRoute);

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
