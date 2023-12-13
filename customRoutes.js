module.exports = (req, res, next) => {
  try {
      const db = require('./db.json');
      const { name } = req.query;

      console.log('db:', db);
      console.log('name:', name);

      if (db && db.exercises && name) {
          const filteredExercises = db.exercises.filter(exercise =>
              exercise.name.toLowerCase().includes(name.toLowerCase())
          );
          console.log('filteredExercises:', filteredExercises);
          res.json(filteredExercises);
      } else {
          next();
      }
  } catch (error) {
      console.error('Error in custom middleware:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};
