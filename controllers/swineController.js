const Swine = require('../models/swine');
const async = require('async');

exports.index = (req, res) => {

	//res.send('Not implemented: Site homepage');

	async.parallel({

		swine_count: function(callback) {

			Swine.count(callback);
		},

		breed_count: function(callback) {
			console.log(Swine.distinct('swine_breed'));
			Swine.distinct('swine_breed').count(callback);
		},

		farm_count: function(callback) {

			Swine.distinct('farm_name').count().exec(callback);
		},

	}, function(err, results) {

		res.render('index', {title: 'Pedigree Visualizer', error: err, data: results});
	});
};

exports.swine_list = (req, res) => {

	res.send('Not implemented: Swine List');
};

exports.swine_detail = (req, res) => {

	res.send('Not implemented: Swine Detail');
};

//Display Swine create form on GET
exports.swine_create_get = (req, res) => {

	res.send('Not implemented: Swine create GET');
};

//Handle Swine create on POST
exports.swine_create_post = (req, res) => {

	res.send('Not implemented: Swine create POST');
};

//Display Swine delete form on GET
exports.swine_delete_get = (req, res) => {

	res.send('Not implemented: Swine delete GET');
};

//Handle Swine delete POST
exports.swine_delete_post = (req, res) => {

	res.send('Not implemented: Swine delete POST');
};

//Display Swine update form on GET
exports.swine_update_get = (req, res) => {

	res.send('Not implemented: Swine update GET');
};

//Handle Swine update POST
exports.swine_update_post = (req, res) => {

	res.send('Not implemented: Swine update POST');
};

exports.farm_list = (req, res) => {

	res.send('Not implemented: Farm List');
};

exports.breed_list = (req, res) => {

	res.send('Not implemented: Breed List');
};