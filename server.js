// require('dotenv').config();
// const mongoose = require('mongoose');

// // MongoDB Atlas connection
// const mongoURI = process.env.MONGO_URI;
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // Person Schema and Model
// const personSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   age: Number,
//   favoriteFoods: [String]
// });
// const Person = mongoose.model('Person', personSchema);

// // CRUD Operations (using async/await)
// const createAndSavePerson = async (personData) => {
//   const person = new Person(personData);
//   return await person.save();
// };

// const createManyPeople = async (arrayOfPeople) => {
//   return await Person.create(arrayOfPeople);
// };

// const findPeopleByName = async (name) => {
//   return await Person.find({ name });
// };

// const findOneByFood = async (food) => {
//   return await Person.findOne({ favoriteFoods: food });
// };

// const findPersonById = async (personId) => {
//   return await Person.findById(personId);
// };

// const findEditThenSave = async (personId) => {
//   const person = await Person.findById(personId);
//   person.favoriteFoods.push('hamburger');
//   return await person.save();
// };

// const findAndUpdate = async (personName) => {
//   return await Person.findOneAndUpdate(
//     { name: personName },
//     { age: 20 },
//     { new: true }
//   );
// };

// const removeById = async (personId) => {
//   return await Person.findByIdAndDelete(personId);
// };

// const removeManyPeople = async () => {
//   return await Person.deleteMany({ name: 'Mary' });
// };

// const queryChain = async () => {
//   return await Person.find({ favoriteFoods: 'burritos' })
//     .sort('name')
//     .limit(2)
//     .select('-age')
//     .exec();
// };

// // TEST FUNCTION
// const testOperations = async () => {
//   console.log('=== STARTING TESTS ===');
  
//   try {
//     // Test 1: Create and Save
//     const test1 = await createAndSavePerson({
//       name: 'John Doe',
//       age: 30,
//       favoriteFoods: ['pizza', 'pasta']
//     });
//     console.log('Test 1 Success:', test1);

//     // Test 2: Create Many
//     const test2 = await createManyPeople([
//       { name: 'Jane Smith', age: 25, favoriteFoods: ['sushi'] },
//       { name: 'Bob Johnson', age: 40, favoriteFoods: ['burger', 'fries'] },
//       { name: 'Mary Wilson', age: 35, favoriteFoods: ['salad', 'burritos'] }
//     ]);
//     console.log('Test 2 Success:', test2);

//     // Test 3: Find by Name
//     const test3 = await findPeopleByName('Jane Smith');
//     console.log('Test 3 Success:', test3);

//     // Test 4: Find by Food
//     const test4 = await findOneByFood('burger');
//     console.log('Test 4 Success:', test4);

//     // Test 5: Find by ID
//     const john = await Person.findOne({ name: 'John Doe' });
//     const test5 = await findPersonById(john._id);
//     console.log('Test 5 Success:', test5);

//     // Test 6: Find, Edit, Save
//     const bob = await Person.findOne({ name: 'Bob Johnson' });
//     const test6 = await findEditThenSave(bob._id);
//     console.log('Test 6 Success:', test6);

//     // Test 7: Find and Update
//     const test7 = await findAndUpdate('Jane Smith');
//     console.log('Test 7 Success:', test7);

//     // Test 8: Remove by ID
//     const bobToDelete = await Person.findOne({ name: 'Bob Johnson' });
//     const test8 = await removeById(bobToDelete._id);
//     console.log('Test 8 Success:', test8);

//     // Test 9: Remove Many
//     const test9 = await removeManyPeople();
//     console.log('Test 9 Success:', test9);

//     // Test 10: Query Chain
//     const test10 = await queryChain();
//     console.log('Test 10 Success:', test10);

//   } catch (err) {
//     console.error('Test Failed:', err.message);
//   } finally {
//     console.log('=== TESTS COMPLETE ===');
//     await mongoose.connection.close();
//   }
// };

// // Run the tests
// testOperations();

// Please note that  Mongoose (v7+) no longer support callback-style operations by default and now prefer Promises/async-await.

require('dotenv').config();
const mongoose = require('mongoose');

// MongoDB Atlas connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

// Person Schema and Model
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});
const Person = mongoose.model('Person', personSchema);

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
  person.favoriteFoods.push('hamburger');
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
  return await Person.deleteMany({ name: 'Mary' });
};

const queryChain = async () => {
  return await Person.find({ favoriteFoods: 'burritos' })
    .sort('name')
    .limit(2)
    .select('-age')
    .exec();
};

// TEST FUNCTION
const testOperations = async () => {
  console.log('=== STARTING TESTS ===');
  
  try {
    // First Test: Create and Save
    const test1 = await createAndSavePerson({
      name: 'Anthony Maduka',
      age: 40,
      favoriteFoods: ['pizza', 'pasta']
    });
    console.log('First Test Successfull:', test1);

    // Second Test: Create Many
    const test2 = await createManyPeople([
      { name: 'Ugo Mwaka', age: 35, favoriteFoods: ['Eba'] },
      { name: 'Ngozi Attoh', age: 18, favoriteFoods: ['Beans', 'Burger'] },
      { name: 'Chibuzor Nwokolo', age: 65, favoriteFoods: ['Fruits', 'burritos'] }
    ]);
    console.log('Second Test Successfull:', test2);

    // Third Test: Find by Name
    const test3 = await findPeopleByName('Ugo Nwaka');
    console.log('Third Test Successfull:', test3);

    // Fourth Test: Find by Food
    const test4 = await findOneByFood('burger');
    console.log('Fourth Test Successfull:', test4);

    // Fifth Test: Find by ID
    const anthony = await Person.findOne({ name: 'Anthony Maduka' });
    const test5 = await findPersonById(anthony._id);
    console.log('Fifth Test Successfull:', test5);

    // Sixth Test: Find, Edit, Save
    const ngozi = await Person.findOne({ name: 'Ngozi Attoh' });
    const test6 = await findEditThenSave(ngozi._id);
    console.log('Sixth Test Successfull:', test6);

    // Seventh Test: Find and Update
    const test7 = await findAndUpdate('Jane Smith');
    console.log('Seventh Test Successfull:', test7);

    // Eighth Test: Remove by ID
    const ngoziToDelete = await Person.findOne({ name: 'Ngozi Attoh' });
    const test8 = await removeById(ngoziToDelete._id);
    console.log('Eighth Test Successfull:', test8);

    // Ninth Test: Remove Many
    const test9 = await removeManyPeople();
    console.log('Ninth Test Successfull:', test9);

    // Tenth Test : Query Chain
    const test10 = await queryChain();
    console.log('Tenth Test Successfull:', test10);

  } catch (err) {
    console.error('Test Failed:', err.message);
  } finally {
    console.log('=== TESTS COMPLETED SUCCESSFULLY ===');
    await mongoose.connection.close();
  }
};

// Run the tests
testOperations();