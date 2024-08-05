const mongoose = require('mongoose');

const product = new mongoose.Schema({
	title: String,
	description: String,
	category: String,
	price: Number,
	discountPercentage: Number,
	rating: Number,
	stock: Number,
	tags: Array,
	brand: String,
	sku: String,
	weight: String,
	dimensions: Object,
	warrantyInformation: String,
	shippingInformation: String,
	availabilityStatus: String,
	reviews: Array,
	returnPolicy: String,
	minimumOrderQuantity: Number,
	meta: Object,
	images: Array,
	thumbnail: String,
	status: String,
	deleted: Boolean
});

const Product = mongoose.model('Product', product, 'products');

module.exports = Product;