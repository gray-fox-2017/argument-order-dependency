Array.prototype.each = function (callback) {
	for (var i = 0; i < this.length; i++)
	callback(this[i]);
}
var people = ["Bonnie", "Isaac", "Bridget", "Ted", "Jamey"];
for (var person in people) {
	console.log("Hello, " + people[person]);
}
people.each(function (i) {
	console.log(i);
});
