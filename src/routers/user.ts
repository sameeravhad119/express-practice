import { Router } from 'express';
import { UserController } from '../controllers/user';

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
        this.router.get('/login', UserController.login);
    }

    postRoutes = () => {
        this.router.post('/signup', UserController.signup);
    }

    putRoutes = () => {

    }

    patchRoutes = () => {

    }

    deleteRoutes = () => {

    }

}
export default new UserRouter().router