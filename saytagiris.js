let username=document.querySelector('input')
let aa=document.querySelector('.aa')
let pasword=document.querySelector('.pass')
let bb=document.querySelector('.bb')
let btnn=document.querySelector('.btnn')
username.addEventListener('click',function () {
    if (username.value=="") {
        aa.classList.remove('d-none')

        
    } else {
        aa.classList.add('d-none')
        
    }
    
})
username.addEventListener('focus',function () {
    if (username.value=="") {
        aa.classList.remove('d-none')

        
    } else {
        aa.classList.add('d-none')
        
    }
    
})
username.addEventListener('blur',function () {
    if (username.value=="") {
        aa.classList.remove('d-none')

        
    } else {
        aa.classList.add('d-none')
        
    }
    
})
username.addEventListener('keyup',function () {
    if (username.value=="") {
        aa.classList.remove('d-none')

        
    } else {
        aa.classList.add('d-none')
        
    }
    
})
username.addEventListener('keydown',function () {
    if (username.value=="") {
        aa.classList.remove('d-none')

        
    } else {
        aa.classList.add('d-none')
        
    }
    
})
pasword.addEventListener('click',function () {
    if (this.value=='') {
        bb.classList.remove('d-none')
        

    } else {
      bb.classList.add('d-none')  
    }
    
})
pasword.addEventListener('focus',function () {
    if (this.value=='') {
        bb.classList.remove('d-none')
        

    } else {
      bb.classList.add('d-none')  
    }
    
})
pasword.addEventListener('blur',function () {
    if (this.value=='') {
        bb.classList.remove('d-none')
        

    } else {
      bb.classList.add('d-none')  
    }
    
})
pasword.addEventListener('keydown',function () {
    if (this.value=='') {
        bb.classList.remove('d-none')
        

    } else {
      bb.classList.add('d-none')  
    }
    
})
pasword.addEventListener('keyup',function () {
    if (this.value=='') {
        bb.classList.remove('d-none')
        

    } else {
      bb.classList.add('d-none')  
    }
    
})
btnn.addEventListener('click',function () {
    if (username.value=="" && pasword.value=="") {
        aa.classList.remove('d-none')
        bb.classList.remove('d-none')

        
    }
    else{
        aa.classList.add('d-none')
        bb.classList.add('d-none')
    }
})


