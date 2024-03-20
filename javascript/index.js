
let searches=document.querySelector(".search");
searches.addEventListener("click",(e)=>{
 searches.style.border="1px groove #3ddcfc";
 searches.style.outline="2px groove #3ddcfc";
 searches.style.borderTopWidth="2px";
 searches.style.borderRadius="8px";
});
function search(){
 let url="https://www.google.com/search?client=firefox-b-d&q="+searches.value;

 // let url="https://www.google.com/search?q="+searches.value;
 window.open(url,'_self');
}

setInterval((e)=>{
searches.addEventListener("keyup",(e)=>{
 if(e.keyCode===13){
search();
 }
})
},10000);