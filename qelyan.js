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
    baskub.setAttribute('src','https://img5.lalafo.com/i/posters/original/cb/68/b6/ec89ac587d7bcbaa46c2956937.jpeg')
    
})

kubA.addEventListener('click',function () {
    baskub.setAttribute('src','http://unimall.az/images/detailed/203/accesshop_on_Instagram___Orginal_elektron_qelyan_%E2%9C%94_JPG_.jpg' )
})
kubB.addEventListener('click',function () {
    baskub.setAttribute('src','https://s.ucuztap.az/storage/a/2664693/lg/5ba5497e2ad38.jpg' )
})
kubC.addEventListener('click',function () {
    baskub.setAttribute('src','http://unimall.az/images/detailed/203/accesshop_on_Instagram___P8_Elektron_qelyan_%E2%9C%8580W_%E2%9C%94_JPG_.jpg' )
})
kubD.addEventListener('click',function () {
    baskub.setAttribute('src','https://vapeartbaku.com/storage/media/BZxrzGT49fcJmTvi6ARCoywqrBdamOpcbkaIRfpw.jpg' )
})
