function turnKayaking(card1Id,card2Id,imageId){
    var kayaking = document.getElementById(card1Id);
    var camping  = document.getElementById(card2Id);
    var tent     = document.getElementById("tent-image");
    var kano     = document.getElementById("kano-image");
    
    kano.style.transform      = "translate(-20px,-20px)"; 
    kano.style.transform      = "rotate(-10deg)";
    tent.style.transform      = "scale(0,0)";  
    kayaking.style.transform  = "rotateY(0deg)";
    kayaking.style.opacity    = "1";
    camping.style.opacity     = "0";
    camping.style.transform   = "rotateY(180deg)";
    kano.style.top            = "-40px"; 
    kano.style.left           = "-50px";
    kayaking.style.zIndex     = "3";
    camping.style.zIndex      = "2";
    
}

   function turnCamping(){
   var camping  = document.getElementById("card-part2");
   var kayaking = document.getElementById("card-part1");
   var tent     = document.getElementById("tent-image");
   var kano     = document.getElementById("kano-image");

   kano.style.top           = "-30px"; 
   kano.style.left          = "-300px";
   kano.style.transform     = "scale(0,0)"; 
   tent.style.transform     = "scale(1,1)";   
   kayaking.style.opacity   = "0";
   kayaking.style.transform = "rotateY(180deg)";
   camping.style.transform  = "rotateY(360deg)";
   camping.style.opacity    = "1";
   camping.style.zIndex     = "2";
   kayaking.style.zIndex    = "1";
}