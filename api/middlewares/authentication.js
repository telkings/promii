
const jwt = require('jsonwebtoken');

let checkAuth = (req, res, next) => {

    let token = req.get('Authorization');

    jwt.verify(token, "aquiUnaClaveSuperSegura", (err, decoded) => {

        if (err) {
            return res.status(401).json({
                status: "error",
                error: err
            });
        }

        req.userData = decoded.userData;

        next();

    });

}


module.exports = { checkAuth }
