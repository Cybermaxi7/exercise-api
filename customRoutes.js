// customRoutes.js
const db = require('./db.json');

module.exports = () => {
  return (req, res, next) => {
    try {
      const { name, id, limit } = req.query;
      console.log('Received id:', id); // Add this line for debugging


      if (db && db.exercises) {
        let filteredExercises = [...db.exercises];

        if (id) {
          // Search by ID
          const exerciseById = db.exercises.find(exercise => exercise.id === String(id));
          return res.json(exerciseById ? [exerciseById] : []);
        }

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

        return res.json(filteredExercises);
      } else {
        next();
      }
    } catch (error) {
      console.error('Error in custom middleware:', error);
      res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
  };
};
