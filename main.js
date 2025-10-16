document.addEventListener('DOMContentLoaded',()=>{
  const years=["year","year2","year3","year4"];
  years.forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=new Date().getFullYear();});
});