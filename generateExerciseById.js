const fs = require('fs').promises;
const path = require('path');

const dbFilePath = path.join(__dirname, 'db.json');

async function generateExercisesById() {
  try {
    // Read the existing db.json file
    const data = await fs.readFile(dbFilePath, 'utf-8');
    const dbData = JSON.parse(data);

    // Generate exercisesById mapping
    const exercisesById = {};
    dbData.exercises.forEach((exercise) => {
      exercisesById[exercise.id.toString()] = exercise;
    });

    // Add exercisesById to the existing data
    dbData.exercisesById = exercisesById;

    // Write the updated data back to db.json
    await fs.writeFile(dbFilePath, JSON.stringify(dbData, null, 2), 'utf-8');

    console.log('ExercisesById mapping generated successfully.');
  } catch (error) {
    console.error('Error generating ExercisesById mapping:', error);
  }
}

generateExercisesById();
