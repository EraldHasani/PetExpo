const express =(require('express'));
const app=express();
const cors = require('cors');
const cookieParser = require('cookie-parser');



const port= 3000;

require('dotenv').config();

app.use(express.json() ) ;
app.use(express.urlencoded({extended:true}));

app.use(cors(
    {
        credentials:true,
        origin: 'http://localhost:5173'
    }
));
app.use(cookieParser());
require('./config/mongoose.config');  

require('./routes/pets.routes')(app);
require('./routes/user.routes')(app);



app.listen(3000, () => {
    console.log("Listening at Port 3000")
})
