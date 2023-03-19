module.exports.getByCategoryId = function(req, res) {
    res.json({
        getAll: 'getAll from controller!'
    })
}

module.exports.create = function(req, res) {
    res.status(200).json({
        create: 'create from controller!'
    })
}

module.exports.update = function(req, res) {
    res.status(200).json({
        create: 'create from controller!'
    })
}

module.exports.remove = function(req, res) {
    res.json({
        getAll: 'getAll from controller!'
    })
}
