import jsonwebtoken from "jsonwebtoken";
import { User } from "../../database/models/user.js";

export function JWTAuthMiddleware(req, res, next) {
    const authHeader = req.headers.authorization

    if (authHeader) {
        const token = authHeader.split(' ')[1];
    
        jsonwebtoken.verify(token, process.env.JWT_KEY, (err, userId) => {
            if (err) {
                res.sendStatus(403);
                return 
            }
            User.findOne({_id:userId}).then((user) => {
                req.user = user
                next();
            }).catch(() => {
                res.sendStatus(401);
            })
        });
      } else {
        res.sendStatus(401);
      }
}