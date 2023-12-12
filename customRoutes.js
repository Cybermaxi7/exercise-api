module.exports = (req, res, next) => {
    const db = require('./db.json');
    const { name } = req.query;
  
    if (name) {
      const filteredExercises = db.exercises.filter(exercise =>
        exercise.name.toLowerCase().includes(name.toLowerCase())
      );
      res.json(filteredExercises);
    } else {
      next();
    }
  };
  