import express from 'express';
import indexRouter from './routes/index.routes.js';
import employeesRouter from './routes/employees.routes.js';

const app = express();

//middleware
app.use(express.json());

//routes
app.use(indexRouter);

app.use(employeesRouter);

export default app;
