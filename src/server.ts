import * as express from "express";
import * as mongoose from 'mongoose';
import { getEnvironmentVariables } from "./environments/env";
import UserRouter from "./routers/userRouter";

export class Server {
    public app: express.Application = express();

    constructor() {
        this.setConfigurations();
        this.setRoutes()
    }

    setConfigurations = () => {
        this.setMongodb();
    }

    setRoutes = () => {
        this.app.use('/api/user', UserRouter);
    }

    setMongodb = () => {
        mongoose.connect(

            getEnvironmentVariables().mongodbUrl,
            { useNewUrlParser: true, useUnifiedTopology: true }

        ).then(() => {
            console.log('db is connected');
        });
    }

    listen = (port) => {
        this.app.listen(port, () => {
            console.log('app is listening on', port);
        })
    }

}
