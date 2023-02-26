let ttt=document.querySelector('.ttt')
let addd=document.querySelector('.addd')
ttt.addEventListener('change',function () {
    [...this.files].forEach(file=>{
        let reader=new FileReader();
        reader.onload=function () {
   
    addd.innerHTML+=
    `
    <div class="elan d-flex justify-content-between  flex-column">
    <p>
    <img width=100% height=75% src="${this.result}" alt="">
                 <span>Name:${file.name}</span>
                 </p>
                 <p>
                 <button class="sa">${file.size}Azn</button>
                 </p>
                 </div>
    `
    
}
reader.readAsDataURL(file)
    })
    
})