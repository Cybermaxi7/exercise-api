module.exports = (req, res, next) => {
    try {
      const db = require('./db.json');
      const { name, limit } = req.query;
  
      if (db && db.exercises) {
        let filteredExercises = db.exercises;
  
        if (name) {
          // Filter by name
          filteredExercises = filteredExercises.filter(exercise =>
            exercise.name.toLowerCase().includes(name.toLowerCase())
          );
        }
  
        if (limit) {
          // Limit the number of results
          const limitValue = parseInt(limit, 10);
          filteredExercises = filteredExercises.slice(0, limitValue);
        }
  
        res.json(filteredExercises);
      } else {
        next();
      }
    } catch (error) {
      console.error('Error in custom middleware:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  