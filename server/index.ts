import express from 'express';
import cors from 'cors';

import betRouter from '../api/bet.api';
import foodRouter from '../api/food.api';
import matchRouter from '../api/match.api';
import teamRouter from '../api/team.api';
import userRouter from '../api/user.api';

const app: express.Express = express();

app.use(cors({origin: '*'}));
app.use(express.json());
app.use(betRouter);
app.use(foodRouter);
app.use(matchRouter);
app.use(teamRouter);
app.use(userRouter);

app.listen({
    port: 3333
});