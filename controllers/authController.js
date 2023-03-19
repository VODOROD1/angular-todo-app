module.exports.login = function(req, res) {
    res.json({
        login: {
            email: req.body.email,
            password: req.body.password
        }
    })
}

module.exports.register = function(req, res) {
    res.status(200).json({
        register: 'Register from controller!'
    })
}
