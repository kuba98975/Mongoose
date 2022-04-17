const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitsSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Name is required!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitsSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit"
});

// fruit.save();

// const kiwi = new Fruit ({
//   name: "Kiwi",
//   rating: 10,
//   review: "Super Duper"
// });
//
// const banana = new Fruit ({
//   name: "Banana",
//   rating: 8,
//   review: "Great fruit"
// });
//
// const orange = new Fruit ({
//   name: "Orange",
//   rating: 6,
//   review: "Pretty nice"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err) {
//     console.log("Error!");
//   } else {
//     console.log("Succes!");
//   }
// });

const peoplesSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitsSchema
});

const People = mongoose.model("People", peoplesSchema);

const cherry = new Fruit({
  name: "Cherry",
  rating: 4,
  review: "Quite sour"
});

cherry.save();

People.updateOne({name: "John"}, {favouriteFruit: cherry}, function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Updated!");
  }
});

// const people = new People ({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });

// people.save();

Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {



    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });

    // mongoose.connection.close();
  }
});


// Fruit.updateOne({_id: "123456789"}, {name: "Peach"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Updated!");
//   }
// });

// Fruit.deleteOne({_id: "123456789"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Deleted!");
//   }
// });

// People.deleteMany({name: "John"}, function(err){
//     if (err){
//       console.log(err);
//     } else {
//       console.log("Deleted!");
//
//       mongoose.connection.close();
//     }
// });
