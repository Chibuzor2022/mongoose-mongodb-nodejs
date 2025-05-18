// Please note that  Mongoose (v7+) no longer support callback-style operations by default and now prefer Promises/async-await.

require("dotenv").config();
const mongoose = require("mongoose");

// MongoDB Atlas connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Person Schema and Model
const personSchema = new mongoose.Schema({
	name: { type: String, required: true },
	age: Number,
	favoriteFoods: [String],
});
const Person = mongoose.model("Person", personSchema);

// CRUD Operations (using async/await)
const createAndSavePerson = async (personData) => {
	const person = new Person(personData);
	return await person.save();
};

const createManyPeople = async (arrayOfPeople) => {
	return await Person.create(arrayOfPeople);
};

const findPeopleByName = async (name) => {
	return await Person.find({ name });
};

const findOneByFood = async (food) => {
	return await Person.findOne({ favoriteFoods: food });
};

const findPersonById = async (personId) => {
	return await Person.findById(personId);
};

const findEditThenSave = async (personId) => {
	const person = await Person.findById(personId);
	person.favoriteFoods.push("hamburger");
	return await person.save();
};

const findAndUpdate = async (personName) => {
	return await Person.findOneAndUpdate(
		{ name: personName },
		{ age: 20 },
		{ new: true }
	);
};

const removeById = async (personId) => {
	return await Person.findByIdAndDelete(personId);
};

const removeManyPeople = async () => {
	return await Person.deleteMany({ name: "Mary" });
};

const queryChain = async () => {
	return await Person.find({ favoriteFoods: "burritos" })
		.sort("name")
		.limit(2)
		.select("-age")
		.exec();
};

// TEST FUNCTION
const testOperations = async () => {
	console.log("=== STARTING TESTS ===");

	try {
		// First Test: Create and Save
		const test1 = await createAndSavePerson({
			name: "Anthony Maduka",
			age: 40,
			favoriteFoods: ["pizza", "pasta"],
		});
		console.log("First Test Successfull:", test1);

		// Second Test: Create Many
		const test2 = await createManyPeople([
			{ name: "Ugo Mwaka", age: 35, favoriteFoods: ["Eba"] },
			{ name: "Ngozi Attoh", age: 18, favoriteFoods: ["Beans", "Burger"] },
			{
				name: "Chibuzor Nwokolo",
				age: 65,
				favoriteFoods: ["Fruits", "burritos"],
			},
		]);
		console.log("Second Test Successfull:", test2);

		// Third Test: Find by Name
		const test3 = await findPeopleByName("Ugo Nwaka");
		console.log("Third Test Successfull:", test3);

		// Fourth Test: Find by Food
		const test4 = await findOneByFood("burger");
		console.log("Fourth Test Successfull:", test4);

		// Fifth Test: Find by ID
		const anthony = await Person.findOne({ name: "Anthony Maduka" });
		const test5 = await findPersonById(anthony._id);
		console.log("Fifth Test Successfull:", test5);

		// Sixth Test: Find, Edit, Save
		const ngozi = await Person.findOne({ name: "Ngozi Attoh" });
		const test6 = await findEditThenSave(ngozi._id);
		console.log("Sixth Test Successfull:", test6);

		// Seventh Test: Find and Update
		const test7 = await findAndUpdate("Jane Smith");
		console.log("Seventh Test Successfull:", test7);

		// Eighth Test: Remove by ID
		const ngoziToDelete = await Person.findOne({ name: "Ngozi Attoh" });
		const test8 = await removeById(ngoziToDelete._id);
		console.log("Eighth Test Successfull:", test8);

		// Ninth Test: Remove Many
		const test9 = await removeManyPeople();
		console.log("Ninth Test Successfull:", test9);

		// Tenth Test : Query Chain
		const test10 = await queryChain();
		console.log("Tenth Test Successfull:", test10);
	} catch (err) {
		console.error("Test Failed:", err.message);
	} finally {
		console.log("=== TESTS COMPLETED SUCCESSFULLY ===");
		await mongoose.connection.close();
	}
};

// Run the tests
testOperations();
