let butunKat=document.querySelector('.btn-main')
let pJs=document.querySelector('.p-js')
let spantext=document.querySelector('span')
let seherZ=document.querySelector('.seher-z')
let şəhər=document.querySelector('.şəhər')
let  Inp=document.querySelector('.textt')
let pass=document.querySelector('.pass')
butunKat.addEventListener('click',function () {
this.nextElementSibling.classList.toggle('d-none')
seherZ.classList.add('d-none')

   })
şəhər.addEventListener('click',function () {
    seherZ.classList.toggle('d-none')
    pJs.classList.add('d-none')
    
})
let listtalk=document.querySelector('.bi-list-task')
let down=document.querySelector('.dowwn')
let pjsNav=document.querySelector('.p-jsNav')
listtalk.addEventListener('click',function () {
   
      pjsNav.classList.toggle('d-none') 
   
   
      
   

   
})


const inpFile=document.querySelector('.filee')
const body=document.querySelector('body');
const elan=document.querySelector('.ddd')
const dd=document.querySelector('.dd')
// dd.addEventListener('click',function () {
//    body.classList.toggle('dark')
   
// })
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

let ImgIcon=document.querySelector('.cart')
let zzz=document.querySelector('.zzz')
ImgIcon.addEventListener('click',function () {
   zzz.classList.toggle('d-none')
   zIki.classList.add('d-none')
   zuc.classList.add('d-none')
   zdord.classList.add('d-none')
   zbes.classList.add('d-none')
   zalti.classList.add('d-none')
   zyeddi.classList.add('d-none')
})
let iki=document.querySelector('.iki')
let zIki=document.querySelector('.z-iki')
iki.addEventListener('click',function () {
   zIki.classList.toggle('d-none')
   zzz.classList.add('d-none')
   zuc.classList.add('d-none')
   zdord.classList.add('d-none')
   zbes.classList.add('d-none')
   zalti.classList.add('d-none')
   zyeddi.classList.add('d-none')
})
let cart=document.querySelector('.uc')
let  zuc=document.querySelector('.z-uc')
cart.addEventListener('click',function () {
   zuc.classList.toggle('d-none')
   zIki.classList.add('d-none')
   zzz.classList.add('d-none')
   zdord.classList.add('d-none')
   zbes.classList.add('d-none')
   zalti.classList.add('d-none')
   zyeddi.classList.add('d-none')
})
let dort=document.querySelector('.dord')
let zdord=document.querySelector('.z-dord')
dort.addEventListener('click',function () {
   zdord.classList.toggle('d-none')
   zuc.classList.add('d-none')
   zIki.classList.add('d-none')
   zzz.classList.add('d-none')
   zbes.classList.add('d-none')
   zalti.classList.add('d-none')
   zyeddi.classList.add('d-none')
   
})
let bes=document.querySelector('.bes')
let zbes=document.querySelector('.z-bes')
bes.addEventListener('click',function () {
   zbes.classList.toggle('d-none')
   zdord.classList.add('d-none')
   zuc.classList.add('d-none')
   zIki.classList.add('d-none')
   zzz.classList.add('d-none')
   zalti.classList.add('d-none')
   zyeddi.classList.add('d-none')
})
let alti=document.querySelector('.alti')
let zalti=document.querySelector('.z-alti')
alti.addEventListener('click',function () {
   zyeddi.classList.add('d-none')
   zalti.classList.toggle('d-none')
   zbes.classList.add('d-none')
   zdord.classList.add('d-none')
   zuc.classList.add('d-none')
   zIki.classList.add('d-none')
   zzz.classList.add('d-none')
})
let yeddi=document.querySelector('.yeddi')
let zyeddi=document.querySelector('.z-yeddi')
yeddi.addEventListener('click',function () {
   zyeddi.classList.toggle('d-none')
   zalti.classList.add('d-none')
   zbes.classList.add('d-none')
   zdord.classList.add('d-none')
   zuc.classList.add('d-none')
   zIki.classList.add('d-none')
   zzz.classList.add('d-none')
})
// let saglamliq=document.querySelector('.ttt')
// let addd=document.querySelector('.addd')
// saglamliq.addEventListener('change',function () {
//    [...this.files].forEach(file=>{
//    addd.innerHTML+=
//    `
//    <!-- <div class="elan d-flex flex-column">
//    <img class="w-100 h-75" src="" alt="">
//    <span>Name:</span>
//    <span>Qiymet:</span>
//    <button class="sa">Satin Al</button>
// </div> -->
//    `
//    })
// })
