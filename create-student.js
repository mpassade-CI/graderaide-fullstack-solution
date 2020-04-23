const newStudentName = document.querySelector('.new-student-name')
const newStudentCourse = document.querySelector('.new-student-course')
const newStudentTerm = document.querySelector('.new-student-term')
const newStudentBtn = document.querySelector('.new-student-button')
const studentDisplay = document.querySelector('.student-display')
const app = document.querySelector('.app')


const createStudent = function(){
    if (createError()){
        return
    }
    const studentSection = document.createElement('section')
    studentSection.className = 'student'
    const studentInfoList = document.createElement('ul')
    studentInfoList.className = 'student-info'
    const nameItem = document.createElement('li')
    const nameSpan1 = document.createElement('span')
    nameSpan1.innerText = 'Name:'
    const nameSpan2 = document.createElement('span')
    nameSpan2.innerText = newStudentName.value
    const courseItem = document.createElement('li')
    courseItem.innerText = 'Course:'
    const courseSelect = document.createElement('select')
    courseSelect.className = 'course-selection'
    const courseOption = document.createElement('option')
    courseOption.value = newStudentCourse.value.toLowerCase()
    courseOption.innerText = newStudentCourse.value
    const termItem = document.createElement('li')
    termItem.innerText = 'Term:'
    const termSelect = document.createElement('select')
    termSelect.className = 'term-selection'
    const termOption = document.createElement('option')
    termOption.value = newStudentTerm.value
    termOption.innerText = newStudentTerm.value
    const gpaItem = document.createElement('li')
    const gpaSpan1 = document.createElement('span')
    gpaSpan1.innerText = 'GPA:'
    const gpaSpan2 = document.createElement('span')
    gpaSpan2.innerText = 'No grades yet'
    const btnSection1 = document.createElement('section')
    btnSection1.className = 'course-btns'
    const addBtn = document.createElement('button')
    addBtn.className = 'add-course-btn'
    addBtn.innerText = 'Add Course/Term'
    const editBtn = document.createElement('button')
    editBtn.className = 'edit-course-btn'
    editBtn.innerText = 'Edit Course/Term'
    const btnSection2 = document.createElement('section')
    btnSection2.className = 'course-btns'
    const dltBtn = document.createElement('button')
    dltBtn.className = 'delete-student-btn'
    dltBtn.innerText = 'Delete Student'

    studentDisplay.appendChild(studentSection)
    studentSection.appendChild(studentInfoList)
    studentInfoList.appendChild(nameItem)
    nameItem.appendChild(nameSpan1)
    nameItem.appendChild(nameSpan2)
    studentInfoList.appendChild(courseItem)
    courseItem.appendChild(courseSelect)
    courseSelect.appendChild(courseOption)
    studentInfoList.appendChild(termItem)
    termItem.appendChild(termSelect)
    termSelect.appendChild(termOption)
    studentInfoList.appendChild(gpaItem)
    gpaItem.appendChild(gpaSpan1)
    gpaItem.appendChild(gpaSpan2)
    studentSection.appendChild(btnSection1)
    btnSection1.appendChild(addBtn)
    btnSection1.appendChild(editBtn)
    studentSection.appendChild(btnSection2)
    btnSection2.appendChild(dltBtn)

    students.push(Student(newStudentName.value,newStudentCourse.value,newStudentTerm.value))

    dltBtn.addEventListener('click', function(e){
        for (let i=0; i<students.length; i++){
            if (students[i].name===nameSpan2.innerText){
                students.splice(i,1)
            }
        }
        studentDisplay.removeChild(e.target.parentElement.parentElement)
    })
    addBtn.addEventListener('click', function(){
        nameHeader.innerText = nameSpan2.innerText
        toggleModal()
    })

    newStudentName.value = ''
    newStudentCourse.value = ''
    newStudentTerm.value = '1'
}

newStudentBtn.addEventListener('click', createStudent)