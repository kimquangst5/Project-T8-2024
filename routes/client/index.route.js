const home = require('./home.route');
const product = require('./product.route');

module.exports.index = (app) => {
	app.use('/', home);
	app.use('/product', product);
};