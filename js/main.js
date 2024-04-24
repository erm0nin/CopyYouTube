 const showMenu = (headerToggle, navBarId)=>{
  const toggleBtn = document.getElementById(headerToggle);
  if(headerToggle && navBarId){
    toggleBtn.addEventListener('click', ()=>{
      nav.classList.toggle('show-menu');
      toggleBtn.classList.toggle('fa-times');
    })
  }
 }

 showMenu('header-toggle', 'navbar');

 const linkColor = document.querySelectorAll('.nav-link');

 function colorLink(){
  linkColor.forEach(link = link.classList.remove('active'));
  this.classList.add('active');
  
 }

 linkColor.forEach(link = link.addEventListener('click', colorLink));