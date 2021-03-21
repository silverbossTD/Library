const express        = require('express');
const connect        = require('./server');

const bodyParser     = require('body-parser');
const cookieParser   = require('cookie-parser');

const app            = express();
const port           = process.env.PORT || 5050;
const cors           = require('cors')
const fileUpload     = require('express-fileupload');

const authRoute      = require('./routes/auth.route');
const settingRoute   = require('./routes/setting.route');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieParser())

app.use(express.static('public'))

app.use(cors())
app.use(fileUpload())

connect();

app.use('/auth', authRoute);
app.use('/setting', settingRoute);

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
