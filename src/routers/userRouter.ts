import { Router } from 'express';

class UserRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
        this.putRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }

    getRoutes = () => {

    }

    postRoutes = () => {

    }

    putRoutes = () => {

    }

    patchRoutes = () => {

    }

    deleteRoutes = () => {

    }

}
export default new UserRouter().router