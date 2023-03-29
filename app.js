document.addEventListener('DOMContentLoaded',function(){
    const list = document.querySelector('#book-list ul');
    //delete books
    list.addEventListener('click',function(e){
      if(e.target.className=='delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
      }
    })
    
   //add books



   
    const addForm = document.forms['add-book'];
    
    addForm.addEventListener('submit',function(e){
        e.preventDefault();
        const value =addForm.querySelector('input[type="text"]').value;
        console.log(value);
    
    
    //create element
    
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteButton= document.createElement('span');
    
    // add content
    deleteButton.textContent='delete';
    bookName.textContent = value;
    
    bookName.classList.add('name');
    deleteButton.classList.add('delete');
    
    li.appendChild(bookName);
    li.appendChild(deleteButton);
    list.appendChild(li);
    
    });
    
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change',function(event){
        if(hideBox.checked){
            list.style.display ="none";
        } else{
            list.style.display ="initial";
        }
    })
    
    //search books
    
    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup',function(e){
        const term = e.target.value.toLowerCase();
        const books = list.getElementsByTagName('li');
        Array.from(books).forEach(function(book){
            const title = book.firstElementChild.textContent;
            if(title.toLowerCase().indexOf(term)!=-1){
                book.style.display='block'; 
            }else{
                book.style.display = 'none'; 
            }
        }) 
    })
     
    //tabbed content
    const tabs =document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click',function(e){
        if(e.target.tagName=="LI"){
            const targetPanel = document.querySelector(e.target.dataset.target);
            panels.forEach(function(panel){
                if(panel == targetPanel){
                    panel.classList.add('active');
                }else{
                    panel.classList.remove('active');
                }
            })
        }
    })


})

