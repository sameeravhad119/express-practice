import User from "../models/User";

export class UserController {

    static login(req, res, next) {
        let username = req.query.username;
        let email = req.query.email;
        res.send(req.query);
    }

    static async signup(req, res, next) {
        let username = req.body.username;
        let email = req.body.email;
        let user = new User({ username: username, email: email });
        let data = await user.save();
        res.send(data);
    }
}