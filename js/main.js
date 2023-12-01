var images=document.querySelectorAll('img')
img.forEach(play =>play.addEventListener('click',()=>{ 
    play.classList.toggle('Active');   
}));