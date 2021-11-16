const express=require('express');
const logger= require('morgan');
const mongoose= require('mongoose');

const app =express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use (express.static('public'));
app.use(require('./controllers'));


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fitness-tracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  );


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});



