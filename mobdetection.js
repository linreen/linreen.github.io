function detectmob() {
   if(window.innerWidth <= 800 || window.innerHeight <= 600) {
     return true;
   } else {
     return false;
   }
}

if (detectmob()){
top.location.href="mobile.html";
}