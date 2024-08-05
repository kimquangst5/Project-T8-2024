const Product = require('../../models/product.model');

module.exports.index = async (req, res) => {

	let find = {
		deleted: false
	};

	if(req.query.status){
		find.status = req.query.status
	}

	// Tính Năng Tìm Kiếm Cơ Bản
	let key = ''
	if(req.query.key){
		const regex = RegExp(req.query.key, 'i');
		find.title = regex
		key = req.query.key
	}

	
	// Hết Tính Năng Tìm Kiếm Cơ Bản
	
	const product = await Product.find(find);

	res.render('admin/pages/product/index.pug', {
		pageTitle: 'Trang sản phẩm',
		product: product,
		key: key
	});
};

// [PATCH] admin/product/change-status/:status/:id
module.exports.changeStatus = async (req, res) => {
	const { status, id} = req.params;
	await Product.updateOne({
		_id: id
	}, {
		status: status
	});
	res.json({
		code: 200,
		message: 'OK nha'
	});
};

// [PATCH] /admin/product/change-multi
module.exports.changeMulti = async (req, res) => {
	const { status, ids} = req.body;
	
	await Product.updateMany({
		_id: ids
	}, {
		status: status
	});

	res.json({
		code: 200
	});
}
