import * as express from "express";
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import { getEnvironmentVariables } from "./environments/env";
import UserRouter from "./routers/user";

export class Server {
    public app: express.Application = express();

    constructor() {
        this.setConfigurations();
        this.setRoutes();
        this.error404Handler();
        this.errorHandler();
    }

    setConfigurations = () => {
        this.setMongodb();
        this.setBodyParser();
    }

    setMongodb = () => {
        mongoose.connect(

            getEnvironmentVariables().mongodbUrl,
            { useNewUrlParser: true, useUnifiedTopology: true }

        ).then(() => {
            console.log('db is connected');
        });
    }

    setBodyParser = () => {
        this.app.use(bodyParser.urlencoded({ extended: true }))
    }

    setRoutes = () => {
        this.app.use('/api/user', UserRouter);
    }

    error404Handler = () => {
        this.app.use((req, res, next) => {
            res.send('Page Not found');
        })
    }

    errorHandler = () => {
        this.app.use((error, req, res, next) => {
            let status_code = req.errorStatus;
            let message = error.message;
            res.json({
                message: message,
                status_code: status_code
            })
        })
    }

    listen = (port) => {
        this.app.listen(port, () => {
            console.log('app is listening on', port);
        })
    }

}
