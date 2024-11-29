import express from 'express';
import betRouter from '../api/betRouter';
import foodRouter from '../api/foodRouter';
import teamRouter from '../api/teamRouter';
import userRouter from '../api/userRouter';

const app: express.Express = express();

app.use(betRouter);
app.use(foodRouter);
app.use(teamRouter);
app.use(userRouter);

app.listen({
    port: 3333
})