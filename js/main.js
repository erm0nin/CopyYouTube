 const showMenu = (headerToggle, navBarId)=>{
  const toggleBtn = document.getElementById('headerToggle');
   navBarId = document.getElementById('navbar');

  if(headerToggle && navBarId){
    toggleBtn.addEventListener('click', ()=>{
      navBarId.classList.toggle('show-menu');
    })
  }
 }

 showMenu('header-toggle', 'navbar');

 const linkColor = document.querySelectorAll('.nav_link');

 function colorLink(){
  linkColor.forEach(l = l.classList.remove('active'));
  this.classList.add('active');
 }

 linkColor.forEach(link => link.addEventListener('click', colorLink));