module.exports.overview = function(req, res) {
    res.json({
        overview: 'overview from controller!'
    })
}

module.exports.analytics = function(req, res) {
    res.status(200).json({
        analytics: 'analytics from controller!'
    })
}
