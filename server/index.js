import express from 'express';
import connection from './databaseConnection.js';
import dotenv from 'dotenv';
import DefaultData from './Default.js'
import cors from 'cors';
import Routes from './routes/router.js'

dotenv.config()

const app = express();

const PORT = 8000;

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

app.use('/', Routes);


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
   
connection(username, password);
 
app.listen(PORT, ()=> console.log(`Running on port no ${PORT}`));

DefaultData();