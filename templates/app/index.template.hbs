import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';

import swaggerSpecs from './swaggerOptions.js';
import { databaseInstance, connectDatabase, associateTables } from './src/database/index.js';
import router from './src/routes/index.routes.js';


export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.use(router);


(function initializeApp() {

    try {
        associateTables(databaseInstance);

        databaseInstance.sync({ alter: true })

        app.listen(`${process.env.PORT}`, () => {
            console.log(`app on port > ${process.env.PORT}`);
        });

        connectDatabase(databaseInstance);

        return;

    } catch (error) {
        console.error('There was an error trying to initialize the app >', error)
        return;
    };
})();