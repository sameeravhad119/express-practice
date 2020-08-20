export class UserController {

    static login(req, res, next) {
        let username = req.query.username;
        let email = req.query.email;
        res.send(req.query);
    }

}