const Swine = require('../models/swine');
const async = require('async');

exports.index = (req, res) => {

	res.render('index', {title: 'Pedigree Visualizer'});
};

exports.swine_list_get = (req, res) => {

	Swine.find().exec(function(err, list_swines, next) {

		if(err) return next.err;
			
		else {

			Swine.count(function(error, num, next) {

				if(error) return next.error;

				res.render('swine_list', {title: 'Swine List', data: list_swines, number: num});
			});
		};
	});
};

exports.swine_list_post = (req, res) => {

	//res.end();
	req.checkBody('regNum', 'Invalid format').notEmpty().isInt()

	req.sanitize('regNum').escape();req.sanitize('regNum').trim();

	const errors = req.validationErrors();

	if(!errors) {

		Swine.findOne({'registration_number': req.body.regNum}).exec(function(err, swine_found) {

			if(err) {
				
				res.render('not_found', {title: 'Swine not Found', regNum: req.body.registration_number});
				return;
			}

			if(swine_found) {

				res.redirect(swine_found.url);
			}

			else {

				console.log('err');
				res.render('not_found', {title: 'Swine not Found', regNum: req.body.regNum});
				return;
			}
		});
	}
}

exports.swine_detail = (req, res, next) => {

	Swine.findById(req.params.id).exec(function(err, swine_detail, next) {

		if(err) return next.err;

		else {

			res.render('swine_detail', {title: 'Swine Detail', data: swine_detail});
		}
	});
};

//Display Swine create form on GET
exports.swine_create_get = (req, res) => {

	res.render('swine_form', {title: 'Add Swine'});
};

//Handle Swine create on POST
exports.swine_create_post = (req, res) => {

	//res.send('Not implemented: Swine create POST');

	req.checkBody('registration_number', 'Registration number is required').notEmpty().isInt();
	req.checkBody('registration_number', 'Input should be in numerical format').isInt();
	req.checkBody('farm_name', 'Farm name is required!').notEmpty();
	req.checkBody('swine_breed', 'Swine breed is required!').notEmpty();
	req.checkBody('swine_sex', 'Invalid swine sex').notEmpty().isAlpha().isIn(['M', 'F']);
	req.checkBody('birthyear', 'Invalid birthyear').notEmpty().isInt().isLength(4);
	req.checkBody('weight_at_data_collection', 'Invalid weight').notEmpty().isInt();
	req.checkBody('age_at_data_collection', 'Invalid age').notEmpty().isInt();
	req.checkBody('date_registered', 'Invalid registration date').notEmpty();
	req.checkBody('registered_by', 'Registered by field is required!').notEmpty();
	req.checkBody('standardized_ave_daily_gain', 'Invalid format for Standardized average daily gain').notEmpty().isInt();
	req.checkBody('actual_ave_daily_gain', 'Invalid format for Actual average daily gain').notEmpty().isInt();
	req.checkBody('standardized_backfat_thickness', 'Invalid format for Standardized backfat thickness').notEmpty().isInt();
	req.checkBody('actual_backfat_thickness', 'Invalid format for Actual backfat thickness').notEmpty().isInt();
	req.checkBody('standardized_feed_efficiency', 'Invalid format for Standardized feed efficiency').notEmpty().isInt();
	req.checkBody('actual_feed_efficiency', 'Invalid format for Actual feed efficiency').notEmpty().isInt();
	req.checkBody('birth_weight', 'Invalid format for Birth weight').notEmpty().isInt();
	req.checkBody('total_when_born_male', 'Invalid format for Total when born (Male)').notEmpty().isInt();
	req.checkBody('total_when_born_female', 'Invalid format for Total when born (Female)').notEmpty().isInt();	
	req.checkBody('standardized_total_when_born', 'Invalid format for Standardized total when born').notEmpty().isInt();
	req.checkBody('actual_littersize_born_alive', 'Invalid format for Actual littersize born alive').notEmpty().isInt();
	req.checkBody('standardized_littersize_born_alive', 'Invalid format for Standardized littersize born alive').notEmpty().isInt();
	req.checkBody('parity', 'Invalid format for Parity').notEmpty().isInt();
	req.checkBody('standardized_littersize_at_weaning', 'Invalid format for Standardized littersize at weaning').notEmpty().isInt();
	req.checkBody('actual_littersize_at_weaning', 'Invalid format for Actual littersize at weaning').notEmpty().isInt();
	req.checkBody('litterweight_at_weaning', 'Invalid format for Litterweight at weaning').notEmpty().isInt();
	req.checkBody('maternal', 'Invalid format for Maternal registration number').notEmpty().isInt();
	req.checkBody('paternal', 'Invalid format for Paternal registration number').notEmpty().isInt();

	req.sanitize('registration_number').escape();req.sanitize('registration_number').trim();
	req.sanitize('farm_name').escape();req.sanitize('farm_name').trim();
	req.sanitize('swine_breed').escape();req.sanitize('swine_breed').trim();
	req.sanitize('swine_sex').escape();req.sanitize('swine_sex').trim();
	req.sanitize('birthyear').escape();req.sanitize('birthyear').trim();
	req.sanitize('weight_at_data_collection').escape();req.sanitize('weight_at_data_collection').trim();
	req.sanitize('age_at_data_collection').escape();req.sanitize('age_at_data_collection').trim();
	req.sanitize('date_registered').toDate();
	req.sanitize('registered_by').escape();req.sanitize('registered_by').trim();
	req.sanitize('standardized_ave_daily_gain').escape();req.sanitize('standardized_ave_daily_gain').trim();
	req.sanitize('actual_ave_daily_gain').escape();req.sanitize('actual_ave_daily_gain').trim();
	req.sanitize('standardized_backfat_thickness').escape();req.sanitize('standardized_backfat_thickness').trim();
	req.sanitize('actual_backfat_thickness').escape();req.sanitize('actual_backfat_thickness').trim();
	req.sanitize('standardized_feed_efficiency').escape();req.sanitize('standardized_feed_efficiency').trim();
	req.sanitize('actual_feed_efficiency').escape();req.sanitize('actual_feed_efficiency').trim();
	req.sanitize('birth_weight').escape();req.sanitize('birth_weight').trim();
	req.sanitize('total_when_born_male').escape();req.sanitize('total_when_born_male').trim();
	req.sanitize('total_when_born_female').escape();req.sanitize('total_when_born_female').trim();
	req.sanitize('standardized_total_when_born').escape();req.sanitize('standardized_total_when_born').trim();
	req.sanitize('actual_total_when_born').escape();req.sanitize('actual_total_when_born').trim();
	req.sanitize('standardized_littersize_born_alive').escape();req.sanitize('standardized_littersize_born_alive').trim();
	req.sanitize('actual_littersize_born_alive').escape();req.sanitize('actual_littersize_born_alive').trim();
	req.sanitize('parity').escape();req.sanitize('parity').trim();
	req.sanitize('standardized_littersize_at_weaning').escape();req.sanitize('standardized_littersize_at_weaning').trim();
	req.sanitize('actual_littersize_at_weaning').escape();req.sanitize('actual_littersize_at_weaning').trim();
	req.sanitize('litterweight_at_weaning').escape();req.sanitize('litterweight_at_weaning').trim();
	req.sanitize('maternal').escape();req.sanitize('maternal').trim();
	req.sanitize('paternal').escape();req.sanitize('paternal').trim();

	const errors = req.validationErrors();

	const swine = new Swine({

		registration_number: req.body.registration_number,
		farm_name: req.body.farm_name,
		swine_breed: req.body.swine_breed,
		swine_sex: req.body.swine_sex,
		birthyear: req.body.birthyear,
		weight_at_data_collection: req.body.weight_at_data_collection,
		age_at_data_collection: req.body.age_at_data_collection,
		date_registered: req.body.date_registered,
		registered_by: req.body.registered_by,
		standardized_ave_daily_gain: req.body.standardized_ave_daily_gain,
		actual_ave_daily_gain: req.body.actual_ave_daily_gain,
		standardized_backfat_thickness: req.body.standardized_backfat_thickness,
		actual_backfat_thickness: req.body.actual_backfat_thickness,
		standardized_feed_efficiency: req.body.standardized_feed_efficiency,
		actual_feed_efficiency: req.body.actual_feed_efficiency,
		birth_weight: req.body.birth_weight,
		total_when_born_male: req.body.total_when_born_male,
		total_when_born_female: req.body.total_when_born_female,
		standardized_total_when_born: req.body.standardized_total_when_born,
		standardized_littersize_born_alive: req.body.standardized_littersize_born_alive,
		actual_littersize_born_alive: req.body.actual_littersize_born_alive,
		parity: req.body.parity,
		standardized_littersize_at_weaning: req.body.standardized_littersize_at_weaning,
		actual_littersize_at_weaning: req.body.actual_littersize_at_weaning,
		litterweight_at_weaning: req.body.litterweight_at_weaning,
		maternal: req.body.maternal,
		paternal: req.body.paternal
	});

	if(errors) {

		res.render('swine_form', {title: 'Add Swine', swine: swine, errors: errors});
		return;
	}

	Swine.findOne({'registration_number': req.body.registration_number}).exec(function(err, swine_found) {

		if(err) return next.err;

		if(swine_found) {

			res.render('swine_form', {title: 'Add Swine', swine: swine, errors: [{msg:'Registration Number already exists!'}]});
		}

		else {

			swine.save(function(err) {

				if(err) return next.err;

				res.redirect(swine.url);
			});
		}
	});
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

		if(err) return next.err;

		const num_distinct_farms = farms.length;

		let swine_per_farm = [];

		for(let i = 0; i < num_distinct_farms; i++) {

			Swine.find({farm_name: farms[i]}).count().exec(function(err, num, next) {

				if(err) return next.err

				console.log(num);

				swine_per_farm.push(num);
			});
		}

		res.render('swine_farms', {title: 'Swine Farms', data: farms, num_farms: num_distinct_farms});
	});
};

exports.breed_list = (req, res) => {

	Swine.distinct('swine_breed', function(err, breeds, next) {

		if(err) return next.err;

		const num_distinct_breeds = breeds.length;

		res.render('swine_breeds', {title: 'Swine Breeds', data: breeds, num_breeds: num_distinct_breeds});
	});
};

exports.visualize_get = (req, res) => {

	// res.render('visualize', {title: 'Visualize Swine'});
	res.render('visualize', {title: 'Visualize'});
};

exports.visualize_post = (req, res) => {

	req.checkBody('enterRegNum', 'Registration number is required').notEmpty().isInt();
	req.checkBody('numGen', 'Number of generations is required').notEmpty().isInt();

	req.sanitize('enterRegNum').escape();req.sanitize('enterRegNum').trim();
	req.sanitize('numGen').escape();req.sanitize('numGen').trim();

	const errors = req.validationErrors();

	if(errors) {

		res.render('visualize', {title: 'Visualize', errors: errors});
		return;
	}

	if(parseInt(req.body.numGen)<0) res.render('visualize', {title: 'Visualize', errors: [{msg: 'Invalid number of generations'}]});

	let pigArr = [];
	let simple_chart_config = [];
	const init_gen = parseInt(req.body.numGen);
	let pow = 1;

	addToTree = (regnum, generation, callback) => {

		Swine.findOne({'registration_number': regnum}, function(err, pig) {

			if(err) return callback(err);

			pigArr.push({
				
				pig: pig,
				generation: generation
			});

			if(pigArr.length == Math.pow(2, init_gen+1)-1) {

				const config = {
					container: '#tree-simple',
				}

				const rootSwine = {
					text: {
						name: (pigArr[0].pig.registration_number).toString()
					}
				}

				simple_chart_config.push(config);
				simple_chart_config.push(rootSwine);

				let index = 1;

				for(let i=1; i<Math.pow(2,init_gen); i++) { //index 1 yung rootnode, 0 yung config

					for(let x=0; x<pigArr.length; x++) {

						if(parseInt(simple_chart_config[i].text.name) === pigArr[x].pig.registration_number) { //find the pig object with the same regnum

							simple_chart_config.push({
								parent: simple_chart_config[i],
								text: {
									name: (pigArr[x].pig.maternal).toString()
								}
							});

							simple_chart_config.push({
								parent: simple_chart_config[i],
								text: {
									name: (pigArr[x].pig.paternal).toString()
								}
							});

							break;
						}
					}
				}

				console.log(simple_chart_config);
				res.render('visualized', {title: 'Visualized', regnum: req.body.enterRegNum, numgen: req.body.numGen, pigArr: pigArr, init_gen: init_gen, pigarray: JSON.stringify(pigArr)});
			}

			if(generation != 0) {
				generation--;
				addToTree(pig.maternal, generation, callback);
				addToTree(pig.paternal, generation, callback);
			}
		});
	}

	addToTree(parseInt(req.body.enterRegNum), parseInt(req.body.numGen), function(err) {

		console.log(pigArr); 
	});
};