const config = {
    container: "#tree-simple"
};
const parent_node = {
    text: { name: "Parent node" }
};
const first_child = {
    parent: parent_node,
    text: { name: "First child" }
};
const second_child = {
    parent: parent_node,
    text: { name: "Second child" }
};
const simple_chart_config = [
    config, parent_node,
    first_child, second_child
];

// console.log('fak');

var my_chart = new Treant(simple_chart_config, function(){alert('Tree Loaded')}, $);

// var storedPigs = JSON.parse(localStorage.getItems("pigArr"));

// console.log(storedPigs);

// $.get({
// 	url:'../../controllers/swineController.js',
// }).done(function(data) {

// 	console.log(data);
// });

// $.getJSON('../../controllers/swineController.js', function(data) {

// 	const arr = JSON.parse(data);

// 	console.log(arr);
// });

// console.log('fak');