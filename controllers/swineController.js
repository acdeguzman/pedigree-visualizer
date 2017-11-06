const Swine = require('../models/swine');
const async = require('async');

exports.index = (req, res) => {

	//res.send('Not implemented: Site homepage');

	// async.parallel({

	// 	swine_count: function(callback) {

	// 		Swine.count(callback);
	// 	},

	// 	breed_count: function(callback) {
	// 		console.log(Swine.distinct('swine_breed'));
	// 		Swine.distinct('swine_breed').count(callback);
	// 	},

	// 	farm_count: function(callback) {

	// 		Swine.distinct('farm_name').count().exec(callback);
	// 	},

	// }, function(err, results) {

	// 	res.render('index', {title: 'Pedigree Visualizer', error: err, data: results});
	// });

	res.render('index', {title: 'Pedigree Visualizer'});
};

exports.swine_list = (req, res) => {

	Swine.find().exec(function(err, list_swines, next) {

		if(err) return next.err;
			
		else {

			Swine.count(function(error, num, next) {

				if(error) return next.error;

				res.render('swine_list', {title: 'Swine List', data: list_swines, number: num});
			});
		};
	});

	// res.send('Not implemented: Swine List');
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

	Swine.distinct('farm_name', function(err, farms, next) {

		if(err) return next.err

		const num_distinct_farms = farms.length;

		let swine_per_farm = [];

		for(let i = 0; i < num_distinct_farms; i++) {

			Swine.find({farm_name: farms[i]}).count(function(err, num, next	) {

				if(err) return next.err

				swine_per_farm.push(num);
			})
		}

		console.log(swine_per_farm);

		res.render('swine_farms', {title: 'Swine Farms', data: farms, num_farms: num_distinct_farms, spf: swine_per_farm});
	});
;
};

exports.breed_list = (req, res) => {

	res.send('Not implemented: Breed List');
};