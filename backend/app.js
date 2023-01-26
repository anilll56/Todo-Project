const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
const app = express();
port=3001;


const todoRoutes = require('./Routes/TodoRoutes');

const mongoUrl="mongodb+srv://anil58:anil58@cluster0.eklffik.mongodb.net/todoApp?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors());

mongoose.connect(mongoUrl)
.then(() => {
    console.log("MongoDB Connected");
}).catch((err) => {
    console.log(err);
});

app.use(todoRoutes);


app.listen(port, () => {
    console.log(`Server listening port  ${port}`);
    }
);




