import express from 'express'
import cors from 'cors'
import { userRouter } from './router/userRouter';
import { productsRouter } from './router/productsRouter';
import { purchaseRouter } from './router/purchaseRouter';
import { accountRouter } from './router/AccountRouter';
<<<<<<< Updated upstream
import { carsRouter } from './router/carsRouter';
import session from 'express-session'
import bodyParser from "body-parser";

=======
>>>>>>> Stashed changes

const app = express()
app.use(express.json())
app.use(cors())

app.use("/Clients",userRouter)
app.use("/products", productsRouter)
app.use("/purchases", purchaseRouter)
app.use("/accounts", accountRouter)


app.use(session({secret: process.env.JWT_KEY as string}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
let sess;
app.get('/',function(req,res){
    sess = req.session;
    console.log(sess)
});
app.listen(3003, ()=>{ console.log(`SERVER IS RUNNING IN PORT 3003`);
})