 
 const $profile = document.querySelectorAll('.profile');
 const $detail = document.querySelector('.details');
 const $close1 = document.querySelector('.cancel');
 document.querySelector('.plus')
 function addActive(i) {
     return function() {
         this.$profile = $detail.classList.add('active');
     }
 }

 for(var i=0; i <$profile.length; i++) {
     $profile[i].onclick = addActive(i);
 }

 $close1.addEventListener('click',()=> {
     $detail.classList.remove('active');
 })
