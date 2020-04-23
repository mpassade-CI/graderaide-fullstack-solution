const createError = function(){
    if (app.contains(document.querySelector('.error-message'))){
        app.removeChild(document.querySelector('.error-message'))
    }
    if (newStudentName.value==='' || newStudentCourse.value===''){
        const error = document.createElement('p')
        error.className = 'error-message'
        error.innerText = 'All fields are required.'
        app.insertBefore(error,studentDisplay)
        error.addEventListener('click',x => app.removeChild(x.target))
        return true
    }
    if (newStudentName.value.startsWith(' ') || newStudentName.value.endsWith(' ') ||
    newStudentCourse.value.startsWith(' ') || newStudentCourse.value.endsWith(' ')){
        const error = document.createElement('p')
        error.className = 'error-message'
        error.innerText = "The student's name or course cannot begin or end with a space."
        app.insertBefore(error,studentDisplay)
        error.addEventListener('click',x => app.removeChild(x.target))
        return true
    }
    for (const obj of students){
        if (obj.name===newStudentName.value){
            const error = document.createElement('p')
            error.className = 'error-message'
            error.innerText = 'That student already exists.'
            app.insertBefore(error,studentDisplay)
            error.addEventListener('click',x => app.removeChild(x.target))
            return true
        }
    }
}
const addError = function(addAssignment,addGrade){
    if (modal.contains(document.querySelector('.add-error'))){
        modalContent.removeChild(document.querySelector('.add-error'))
    }
    if (addStudentCourse.value===''){
        const error = document.createElement('p')
        error.className = 'add-error'
        error.innerText = "The student's course is required."
        modalContent.insertBefore(error,lastModalBtn)
        error.addEventListener('click',x => modalContent.removeChild(x.target))
        return true
    }
    if (addStudentCourse.value.startsWith(' ') || addStudentCourse.value.endsWith(' ')){
        const error = document.createElement('p')
        error.className = 'add-error'
        error.innerText = "The student's course cannot begin or end with a space."
        modalContent.insertBefore(error,lastModalBtn)
        error.addEventListener('click',x => modalContent.removeChild(x.target))
        return true
    }
    for (let i=0; i<addAssignment.length; i++){
        if ((addAssignment[i].value==='' && addGrade[i].value!=='') ||
        (addAssignment[i].value!=='' && addGrade[i].value==='')){
            const error = document.createElement('p')
            error.className = 'add-error'
            error.innerText = "If adding an assignment, it must have a name and grade."
            modalContent.insertBefore(error,lastModalBtn)
            error.addEventListener('click',x => modalContent.removeChild(x.target))
            return true
        }
    }
    for (let i=0; i<addGrade.length; i++){
        if (addAssignment[i].value!=='' && addGrade[i].value!==Number(addGrade[i].value).toString()){
            const error = document.createElement('p')
            error.className = 'add-error'
            error.innerText = "If adding an assignment, its grade must be a number."
            modalContent.insertBefore(error,lastModalBtn)
            error.addEventListener('click',x => modalContent.removeChild(x.target))
            return true
        }
    }
    for (let i=0; i<students.length; i++){
        if (students[i].name===nameHeader.innerText){
            for (let j=0; j<students[i].courses.length; j++){
                if (students[i].courses[j].course===addStudentCourse.value &&
                    students[i].courses[j].term===addStudentTerm.value){
                        const error = document.createElement('p')
                        error.className = 'add-error'
                        error.innerText = "This course and term already exist for this student."
                        modalContent.insertBefore(error,lastModalBtn)
                        error.addEventListener('click',x => modalContent.removeChild(x.target))
                        return true
                    }
            }
            
        }
    }
}