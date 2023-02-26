const inpFile=document.querySelector('.geyim-file')
const body=document.querySelector('body');
const elan=document.querySelector('.geyim-elan')
inpFile.addEventListener('change',function () {
   

   [...this.files].forEach(file=>{
      let reader=new FileReader();
      reader.onload=function () {
 
   elan.innerHTML+=
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