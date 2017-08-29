const express=require('express');
const morgan=require("morgan");
const bodyParser=require('body-parser');
const app= express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','pug');

app.listen(3001, ()=>{
	console.log(" Vous étes connectés au port 3001");
	});