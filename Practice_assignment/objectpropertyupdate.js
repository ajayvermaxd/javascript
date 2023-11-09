// Question 10: Object Property Update

// Description: You have an object representing a student record. Write a function that takes the student object and a new grade as input and updates the grade property with the new value.

// Input: Student object: { name: "John", grade: 85 }, New grade: 90

// Output: The updated student object: { name: "John", grade: 90 }

function updateGrade(student, newGrade) {
    student.grade = newGrade;
    return `The updated student object: ${JSON.stringify(student)}`;
  }
  
  // Example usage:
  const studentObject = { name: "John", grade: 85 };
  const newGrade = 90;
  const updatedStudent = updateGrade(studentObject, newGrade);
  
  console.log(updatedStudent);
  // Output: The updated student object: {"name":"John","grade":90}
  