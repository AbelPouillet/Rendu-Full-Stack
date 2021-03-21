import express from 'express';
import cors from 'cors';
import { router } from './app.router';
import { errorMiddleware } from './common/error/error.middleware';
import { logMiddleware } from './common/log.middleware';

export const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Abel:111520@cluster0.o98rq.mongodb.net/movieCharacter?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(cors());
app.use(logMiddleware);
app.use(express.json());
app.use(router);
app.use(errorMiddleware);
