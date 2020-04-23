const students = []

const Course = (course,term,assignments,grades) => {
  return {
    course,
    term,
    assignments,
    grades
  }
}

const Student = (name, course, term) => {
    return {
      name,
      courses: [Course(course,term,[],[])],

      addCourse: function(course,term,assignments,grades) {
        this.courses.push(Course(course,term,assignments,grades));
      },

      getGPA: function(courseToFind = this.course, termIndex = this.term - 1) {
        let foundCourse;
        for (const course of this.courses) {
          if (course.name === courseToFind) {
            foundCourse = course;
          }
        }
        const grades = foundCourse.terms[termIndex].grades;
        if (grades.length === 0) {
          return 'No grades yet.'
        }
        let sum = 0;
        for (const grade of grades) {
          sum += grade.score;
        }
        return sum / grades.length;
      },
    }
}

