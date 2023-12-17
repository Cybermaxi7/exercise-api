module.exports = (req, res, next) => {
  try {
    const db = require('./db.json');
    const { name, id, limit } = req.query;

    if (db && db.exercises) {
      let filteredExercises = [...db.exercises]; // Use spread to create a copy

      if (id) {
        // Search by ID
        const exerciseById = db.exercises.find(exercise => exercise.id === id);
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
