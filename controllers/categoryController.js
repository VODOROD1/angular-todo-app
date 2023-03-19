module.exports.getAll = function(req, res) {
    res.json({
        getAll: 'getAll from controller!'
    })
}

module.exports.getById = function(req, res) {
    res.status(200).json({
        getById: 'getById from controller!'
    })
}

module.exports.create = function(req, res) {
    res.json({
        create: 'create from controller!'
    })
}

module.exports.update = function(req, res) {
    res.json({
        update: 'update from controller!'
    })
}

module.exports.removeById = function(req, res) {
    res.json({
        removeById: 'removeById from controller!'
    })
}
