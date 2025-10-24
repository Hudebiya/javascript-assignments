              //  Chapter 49

/* Qno:1. Create a signup form and display form data in your web page on submission.  */
/* function handleFormSubmission() {
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    var outputDiv = document.getElementById('output');

    var submittedDataHTML = 
        '<p><strong>Name:</strong> ' + name + '</p>' +
        '<p><strong>Email:</strong> ' + email + '</p>';

    outputDiv.innerHTML = submittedDataHTML;
    
    return false;
} */

/* Qno:2. Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on "Read more" button, full detail of that particular item will be displayed. */
/* function toggleDetails(detailsId, buttonElement) {
    
    var fullDetailsDiv = document.getElementById(detailsId);

    if (fullDetailsDiv.style.display === 'none' || fullDetailsDiv.style.display === '') {
    
        fullDetailsDiv.style.display = 'block';
        
        buttonElement.textContent = 'Read less';
    } else {
        
        fullDetailsDiv.style.display = 'none';
    
        buttonElement.textContent = 'Read more';
    }
} */

/* Qno:3. Modify table with delete and edit buttons using inline handlers. */
/*var students = []; 
var studentIdCounter = 1; 

var studentTableBody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
var editFormContainer = document.getElementById('editFormContainer');

function renderTable() {
    studentTableBody.innerHTML = ''; 

    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        
        var row = studentTableBody.insertRow();
        row.setAttribute('data-id', student.id); 


        row.insertCell(0).textContent = student.id;
        row.insertCell(1).textContent = student.name;
        row.insertCell(2).textContent = student.age;

    
        var actionsCell = row.insertCell(3);

        var editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        
        editBtn.setAttribute('onclick', 'editStudent(' + student.id + ')');
        actionsCell.appendChild(editBtn);

        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        
        deleteBtn.setAttribute('onclick', 'deleteStudent(' + student.id + ')');
        actionsCell.appendChild(deleteBtn);
    }
}

function addStudent() {
    var name = document.getElementById('s-name').value;
    var age = document.getElementById('s-age').value;

    var newStudent = {
        id: studentIdCounter++,
        name: name,
        age: age
    };

    students.push(newStudent); 
    renderTable(); 
    
    document.getElementById('s-name').value = '';
    document.getElementById('s-age').value = '';

    return false; 
}


function deleteStudent(studentId) {
    if (confirm('Kya aap student ID ' + studentId + ' ko delete karna chahte hain?')) {
        
        for (var i = 0; i < students.length; i++) {
            if (students[i].id === studentId) {
                students.splice(i, 1); 
                break;
            }
        }
        renderTable(); 
    }
}


function editStudent(studentId) {
    var studentToEdit = null;


    for (var i = 0; i < students.length; i++) {
        if (students[i].id === studentId) {
            studentToEdit = students[i];
            break;
        }
    }

    if (studentToEdit) {
        
        document.getElementById('edit-id').value = studentToEdit.id;
        document.getElementById('edit-name').value = studentToEdit.name;
        document.getElementById('edit-age').value = studentToEdit.age;

        editFormContainer.style.display = 'block';
    }
}


function saveChanges() {
    var id = parseInt(document.getElementById('edit-id').value);
    var newName = document.getElementById('edit-name').value;
    var newAge = document.getElementById('edit-age').value;

    for (var i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students[i].name = newName;
            students[i].age = newAge;
            break;
        }
    }

    renderTable();
    editFormContainer.style.display = 'none'; 
    
    return false; 
} */