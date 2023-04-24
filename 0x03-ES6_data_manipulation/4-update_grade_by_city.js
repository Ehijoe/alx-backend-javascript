export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students
    .filter((student) => (student.location === city))
    .map((student) => {
      let grade = newGrades.filter((grade) => (student.id === grade.studentId));
      if (grade.length === 0) {
        grade = 'N/A';
      } else {
        grade = grade[0].grade;
      }
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade,
      };
    });
}
