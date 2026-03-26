class IndexController {
    getIndex(req, res) {
        res.sendFile('index.html', { root: './src/public' });
    }
}

module.exports = IndexController;