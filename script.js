let scrollBtn=document.querySelector(".scroll-button a");
window.onscroll=function(){
if(document.documentElement.scrollTop>20)
{
    scrollBtn.style.display= "block";
}
else{
    scrollBtn.style.display= "none";
}
}