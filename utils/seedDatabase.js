//does not currenly have id for users, would create in user.js under routes
const { Exercise, User } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Exercise.create({
      name: "Push Ups",
<<<<<<< HEAD
      muscleGroup: "Back, Chest",
=======
     muscleGroup: "Back, Chest",
      imageUrl: "https://images.unsplash.com/photo-1544216428-3d4ad849ae40?ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80",
>>>>>>> f8eb727a5b8977d0aa9861757a7acfb4d786446f
      description: "Users can push ther body in a upwards motion from the ground",
      recomendedReps: 5
    }),
    Exercise.create({
        name: "Bench Press",
        muscleGroup: "Chest",
<<<<<<< HEAD
=======
        imageUrl: "https://images.unsplash.com/photo-1534368959876-26bf04f2c947?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
>>>>>>> f8eb727a5b8977d0aa9861757a7acfb4d786446f
        description: "Using a bench press, users can push up the bar and slowly repeat",
        recomendedReps: 7
    }),
    Exercise.create({
        name: "Hammer Curl",
<<<<<<< HEAD
        muscleGroup: "Arms, Tricep",
=======
       muscleGroup: "Arms, Tricep",
       imageUrl: "https://images.unsplash.com/photo-1585342565162-3704ff9b221d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
>>>>>>> f8eb727a5b8977d0aa9861757a7acfb4d786446f
        description: "Using a dumbell users should ...",
        recomendedReps: 10
    
    }),
    User.create({ 
      firstName: "Daniel",
      lastName:"Dolan",
      email:"dolan@gmail.com",
      weight:170, 
      exerciseId:2
    }),
    User.create({ 
      firstName: "Dante",
      lastName:"Angelone",
      email:"dangelone@gmail.com",
      weight:165,
      exerciseId:1
     }),
  ]);
};

module.exports = seedDatabase;