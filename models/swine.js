var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SwineSchema = Schema({

	registration_number: {type: Number, required: true},
	farm_name: {type: String, required: true, max: 100},
	swine_breed: {type: String, required: true, max: 50},
	swine_sex: {type: String, required: true, max: 10},
	birthyear: {type: Number, required: true},
	weight_at_data_collection: {type: Number, required: true},
	age_at_data_collection: {type: Number, required: true},
	date_registered: {type: Date, required: true},
	registered_by: {type: String, required: true, max: 100},
	standardized_ave_daily_gain: {type: Number, required: true},
	actual_ave_daily_gain: {type: Number, required: true},
	standardized_backfat_thickness: {type: Number, required: true},
	actual_backfat_thickness: {type: Number, required: true},
	standardized_feed_efficiency: {type: Number, required: true},
	actual_feed_efficiency: {type: Number, required: true},
	birth_weight: {type: Number, required: true},
	total_when_born_male: {type: Number, required: true},
	total_when_born_female: {type: Number, required: true},
	standardized_total_when_born: {type: Number, required: true},
	actual_littersize_born_alive: {type: Number, required: true},
	standardized_littersize_born_alive: {type: Number, required: true},
	parity: {type: Number, required: true},
	standardized_littersize_at_weaning: {type: Number, required: true},
	actual_littersize_at_weaning: {type: Number, required: true},
	litterweight_at_weaning: {type: Number, required: true},
	maternal: {type: Number, required: true},
	paternal: {type: Number, required: true}
});

SwineSchema
	.virtual('url')
	.get(function() {
		return '/swine/' + this._id;
	});

module.exports = mongoose.model('Swine', SwineSchema);