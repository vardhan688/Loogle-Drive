const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const router = require('./routes/api');

const app = express();


mongoose.connect('mongodb://localhost/cloudapi', {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

app.use(cors());
app.use(fileUpload({
    createParentPath: true
}));
app.use(bodyParser.json());

app.use('/api', router);

app.listen(process.env.port || 4000, function(){
    console.log('Server running on port ' + 4000);
});