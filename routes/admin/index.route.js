const dashboard = require('./dashboard.route');
const product = require('./product.route');

module.exports.index = (app) => {
	const admin = process.env.admin;
	app.use(`/${admin}/main`, dashboard);
	app.use(`/${admin}/product`, product)
};