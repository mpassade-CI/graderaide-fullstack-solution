const modal = document.querySelector('.modal');
const nameHeader = document.querySelector('.name-header')
const addStudentCourse = document.querySelector('.new-course')
const modalContent = document.querySelector('.modal_content');
const lastModalBtn = document.querySelector('.close_modal')
const addStudentTerm = document.querySelector('.new-term')



const addRowBtn = document.querySelector('.add-row-btn')

function attachModalListeners() {
  document.querySelector('.submit-new-course').addEventListener('click', toggleModal);
}
function detachModalListeners() {
  document.querySelector('.submit-new-course').removeEventListener('click', toggleModal);
}
const addRow = function(){
    const section = document.createElement('section')
    section.className = 'add-assignment-grade'
    const input1 = document.createElement('input')
    input1.type = 'text'
    input1.name = 'new-assignment'
    input1.className = 'new-assignment'
    const input2 = document.createElement('input')
    input2.type = 'text'
    input2.name = 'new-grade'
    input2.className = 'new-grade'

    modalContent.insertBefore(section,addRowBtn)
    section.appendChild(input1)
    section.appendChild(input2)
}
function toggleModal() {
  const currentState = modal.style.display;
  const addAssignment = document.querySelectorAll('.new-assignment')
  const addGrade = document.querySelectorAll('.new-grade')
  const assignGradeSect = document.querySelectorAll('.add-assignment-grade')
  // If modal is visible, hide it. Else, display it.
  if (currentState === 'none') {
    modal.style.display = 'block';
    attachModalListeners();
  } else {
    
    if (addError(addAssignment,addGrade)){
        return
    }
    const studentAssignments = []
    const studentGrades = []
    for (const x of addAssignment){
        studentAssignments.push(x.value)
    }
    for (const x of addGrade){
        studentGrades.push(Number(x.value))
    }
    for (const x of students){
        if (x.name===nameHeader.innerText){
            x.addCourse(addStudentCourse.value,addStudentTerm.value,studentAssignments,studentGrades)
        }
    }

    modal.style.display = 'none';
    detachModalListeners();  
    addStudentCourse.value = ''
    addStudentTerm.value = '1'
    addAssignment[0].value = ''
    addGrade[0].value = ''
    for (let i=1; i<assignGradeSect.length; i++){
        modalContent.removeChild(assignGradeSect[i])
    }
  }
}

addRowBtn.addEventListener('click', addRow)