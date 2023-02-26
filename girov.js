const inpFile=document.querySelector('.filee')
const body=document.querySelector('body');
const elan=document.querySelector('.ddd')
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
let baskub=document.querySelector('.bas-kub')
let kub=document.querySelector('.kub')
let kubA=document.querySelector(".kub-a")
let kubB=document.querySelector(".kub-b")
let kubC=document.querySelector(".kub-c")
let kubD=document.querySelector(".kub-d")
kub.addEventListener('click',function () {
    baskub.setAttribute('src','https://banker.az/wp-content/uploads/2022/01/756431119617832.jpg')
    
})

kubA.addEventListener('click',function () {
    baskub.setAttribute('src','https://masin.az/uploads/posts/2022-03/f010f76976f9033e7e226cea7cf7d1f5d97c74c0.jpg' )
})
kubB.addEventListener('click',function () {
    baskub.setAttribute('src','https://fed.az/upload/news/2454706.jpg' )
})
kubC.addEventListener('click',function () {
    baskub.setAttribute('src','https://video.azertag.az/store/videofiles/Dekabr%202019/thumbs_b2_b4628d4035b31daafd914f97573140ee.jpg' )
})
kubD.addEventListener('click',function () {
    baskub.setAttribute('src','https://azertag.az/files/2022/2/1200x630/16530395962348025323_1200x630.jpg' )
})
