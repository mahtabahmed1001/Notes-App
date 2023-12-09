const noteContainer=document.querySelector('.notes_container');
const createBtn=document.querySelector('.btn');

let notes=document.querySelectorAll('.input-box');

function showNotes(){
    noteContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();

function updateStroge(){
    localStorage.setItem('notes', noteContainer.innerHTML)
}

createBtn.addEventListener('click', ()=>{
    let inputBox=document.createElement('p');
    let img=document.createElement('img');
    inputBox.className='input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src='images/delete.png';
    noteContainer.appendChild(inputBox).appendChild(img);
})

noteContainer.addEventListener('click', function(e){
 if (e.target.tagName==='IMG'){
    e.target.parentElement.remove();
    updateStroge();
 } else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt=> {
            nt.onkeyup = function(){
                updateStroge();
            }
        })
 }
})

document.addEventListener('keydown', event=>{
    if(event.key==='Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})