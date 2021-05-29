let header = document.querySelector("header");
let about_item = document.querySelector(".about .back .contener .about-content").children;
let speakers_item = document.querySelector(".speakers  .contener .speakers-content ").children;
let speakers_head= document.querySelector(".speakers  .head");
let schedule_head = document.querySelector(".schedule .contener .head");
let schedule_ul = document.querySelector(".schedule .contener ul");
let schedule_p = document.querySelector(".schedule .contener>p");
let schedule_event = document.querySelector(".schedule .contener .content-schedule").children;
let venue = document.querySelector(".venue .find").children;
let venue_head = document.querySelector(".venue .head");
let venue_gallery = document.querySelector(".venue .gallery").children;

let hotel_head = document.querySelector(".hotels .head");
let hotel = document.querySelector(".hotels .contener .content").children;
let sponsors_head  = document.querySelector(".sponsors .head");
let sponsors  = document.querySelector(".sponsors .contener .content").children;
let faq_head  = document.querySelector(".faq .head");
let faq_contener  = document.querySelector(".faq .contener");
let newsletter_head  = document.querySelector(".newsletter .head");
let newsletter_form = document.querySelector(".newsletter .form");
let  ticket_head  = document.querySelector(".buy_ticket .head");
let  ticket = document.querySelector(".buy_ticket .contener .buy_ticket_content").children;
let  contact_head  = document.querySelector(".contact .head");
let  contact_item = document.querySelector(".contact .contener .contact-content").children;
let right = " position:relative; right:0px;  visibility: visible;";
let left = " position:relative; left:0px;  visibility: visible;";
let bottom = " position:relative;  bottom:0px; visibility: visible;";
let upPage = document.querySelector(".up");

window.onscroll = function(){
 if(window.scrollY >= 200){
   upPage.style.visibility = "visible";
 }
 if(window.scrollY < 200){
   upPage.style.visibility = "hidden";
 }
 //start header
   if(window.scrollY >= 20){
      header.style.backgroundColor = "rgba(2, 2, 20, 1)"; 
    
  }
  if(window.scrollY <= 20){
   header.style.backgroundColor = "rgba(0, 0, 0, 0)"; 
  }
   console.log(window.pageYOffset);
  if(window.outerWidth >= 1024) {
  
   
// about 
   if(window.scrollY >= 300){
      
      for(var i =0; i<3;  i++){

         about_item[i].style.cssText = bottom;
         
      }
   }
      // .speakers-content

      if(window.scrollY >= 500){
        
         speakers_head.style.cssText = bottom;
         for(var i =0; i<3;  i++){
            speakers_item[i].style.cssText = bottom;
         }
   }


   if(window.scrollY >= 700){
     
      for(var j =3; j <= 5;  j++){     
            speakers_item[j].style.cssText = bottom;
      }
}

// start schedule
if(window.scrollY >= 1300){
 
   schedule_head.style.cssText = bottom;
   schedule_ul.style.cssText = bottom;
   schedule_p.style.cssText =bottom;
  
}


if(window.scrollY >= 1800){
  
   for(var i =0; i<7;  i++){
      schedule_event[i].style.cssText = bottom;
   }
}
// start venue

if(window.scrollY >= 2200){
  
   venue_head.style.cssText =  bottom;

}
if(window.scrollY >= 2700){
   venue[0].style.cssText = left;
   venue[1].style.cssText = right;
}

// gallery
if(window.scrollY >= 3100){
  
   for(var i =0; i<= 3;  i++){
      venue_gallery[i].style.cssText = bottom;
   }
}

if(window.scrollY >= 3250){
  
  
   for(var i =4; i<=7;  i++){
      venue_gallery[i].style.cssText = bottom;
   }
}

// hotel

if(window.scrollY >= 3600){ 
   
   hotel_head.style.cssText =bottom;
}
if(window.scrollY >= 4000){
  
      hotel[0].style.cssText = left;
      hotel[1].style.cssText = bottom;
      hotel[2].style.cssText = right;
}

 

// .sponsors

if(window.scrollY >= 4480){
  
   sponsors_head.style.cssText =bottom;
}
if(window.scrollY >= 4550){
  
   for(var i =0; i<= 3;  i++){
      sponsors[i].style.cssText = bottom;
   }
}

if(window.scrollY >= 4650){
  
  
   for(var i =4; i<=7;  i++){
      sponsors[i].style.cssText =bottom;
   }
}

// head_faq

if(window.scrollY >= 5100){
 
    faq_head.style.cssText = bottom;
}
if(window.scrollY >= 5200){
  
   faq_contener.style.cssText = bottom;
}
// start .newsletter
if(window.scrollY >= 5700){
  
    newsletter_head.style.cssText = bottom;
}
if(window.scrollY >= 5800){
  
   newsletter_form.style.cssText = bottom;
}

// start buy ticket

if(window.scrollY >= 5800){
  
    ticket_head.style.cssText = bottom;
}

if(window.scrollY >= 6200){
  
   ticket[0].style.cssText = left;
   ticket[1].style.cssText = bottom;;
   ticket[2].style.cssText = right;
     
}

// start contact us
if(window.scrollY >= 6700){
 
       contact_head.style.cssText = bottom;
}

if(window.scrollY >= 6800){
  
   for(var i = 0; i<3; i++){

      contact_item[i].style.cssText = bottom;
   }
     
}

}

console.log(window.pageYOffset);
// phone animation
if(window.outerWidth <= 767 ){
 
   // about 
   if(window.scrollY >= 250){      
      for(var i =0; i<3;  i++){

         about_item[i].style.cssText = bottom;
         
      }
   }

    // .speakers-content

    if(window.scrollY >= 600){
      speakers_head.style.cssText = bottom;
         speakers_item[0].style.cssText = bottom;
      }


   if(window.scrollY >= 900){
         speakers_item[1].style.cssText = bottom;
   }
   if(window.scrollY >= 1150){
      speakers_item[2].style.cssText = bottom;;
   }

   if(window.scrollY >= 1600){
      speakers_item[3].style.cssText = bottom;
   }

   if(window.scrollY >= 1850){
      speakers_item[4].style.cssText = bottom;
  }

  if(window.scrollY >= 2100){
   speakers_item[5].style.cssText = bottom;
  }


// end speakers

// start schedule
if(window.scrollY >= 2800){
   schedule_head.style.cssText = bottom;
   schedule_ul.style.cssText = bottom;
   schedule_p.style.cssText = bottom;
}



if(window.scrollY >= 3200){
      schedule_event[0].style.cssText = bottom;
}

if(window.scrollY >= 3400){
   schedule_event[1].style.cssText = bottom;
}

if(window.scrollY >= 3700){
   schedule_event[2].style.cssText = bottom;
}

if(window.scrollY >= 3900){
   schedule_event[3].style.cssText = bottom;
}

if(window.scrollY >= 4250){
   schedule_event[4].style.cssText = bottom;
}

if(window.scrollY >= 4550){
   schedule_event[5].style.cssText = bottom;
}

if(window.scrollY >= 4800){
   schedule_event[6].style.cssText = bottom;
}

// end schedule

// start venue
if(window.scrollY >= 5000){
   venue_head.style.cssText =  bottom;
}

if(window.scrollY >= 5200){
   venue[0].style.cssText = left;
}


if(window.scrollY >= 5800){
   venue[1].style.cssText = right;
}

// end venue


// start gallery
if(window.scrollY >= 6150){
      venue_gallery[0].style.cssText = bottom;
}

if(window.scrollY >= 6450){
      venue_gallery[1].style.cssText = bottom;
}

if(window.scrollY >= 6700){
   venue_gallery[2].style.cssText = bottom;
}

if(window.scrollY >= 6900){
   venue_gallery[2].style.cssText = bottom;
}

if(window.scrollY >= 7250){
   venue_gallery[3].style.cssText = bottom;
}

if(window.scrollY >= 7600){
   venue_gallery[4].style.cssText = bottom;
}
if(window.scrollY >= 7900){
   venue_gallery[5].style.cssText = bottom;
}
if(window.scrollY >= 8150){
   venue_gallery[6].style.cssText = bottom;
}

if(window.scrollY >= 8450){
   venue_gallery[7].style.cssText = bottom;
}

// end gallery


// start hotel

if(window.scrollY >= 9100){ 
   
   hotel_head.style.cssText = bottom;
}
if(window.scrollY >= 9250){
      hotel[0].style.cssText = left;
}

if(window.scrollY >= 9500){
   hotel[1].style.cssText = bottom;
}

if(window.scrollY >= 9700){
   hotel[2].style.cssText = right;
}
// end hotel


// start sponsors

if(window.scrollY >= 10300){
  
   sponsors_head.style.cssText =bottom;
}
if(window.scrollY >= 10400){
      sponsors[0].style.cssText = bottom;
}

if(window.scrollY >= 10600){
   sponsors[1].style.cssText = bottom;
}

if(window.scrollY >= 10900){
   sponsors[2].style.cssText = bottom;
}

if(window.scrollY >= 11000){
   sponsors[3].style.cssText = bottom;
}

if(window.scrollY >= 11200){
   sponsors[4].style.cssText = bottom;
}

if(window.scrollY >= 11400){
   sponsors[5].style.cssText = bottom;
}

if(window.scrollY >= 11600){
   sponsors[6].style.cssText = bottom;
}

if(window.scrollY >= 11800){
   sponsors[7].style.cssText = bottom;
}


// end sponsors


// head_faq

if(window.scrollY >= 12000){
 
   faq_head.style.cssText = bottom;
}
if(window.scrollY >= 12200){
 
  faq_contener.style.cssText = bottom;
}

// end faq

// start .newsletter
if(window.scrollY >= 13000){
  
   newsletter_head.style.cssText = bottom;
}
if(window.scrollY >= 13200){
 
  newsletter_form.style.cssText = bottom;
}

// end newsletter

// start buy ticket

if(window.scrollY >= 13450){
  
   ticket_head.style.cssText = bottom;
}

if(window.scrollY >= 13600){
  ticket[0].style.cssText = left;    
}

if(window.scrollY >= 14100){
   ticket[1].style.cssText = bottom;;
 }


 if(window.scrollY >= 14400){
   ticket[2].style.cssText = right;
 }
// end buy ticket

// start contact us
if(window.scrollY >= 14550){
 
   contact_head.style.cssText = bottom;
}

if(window.scrollY >= 15000){
  contact_item[0].style.cssText = bottom; 
}
if(window.scrollY >= 15300){
   contact_item[1].style.cssText = bottom; 
 }
 if(window.scrollY >= 15600){
   contact_item[2].style.cssText = bottom; 
 }

// end contact us

  }
};






window.onload = function(){

   setTimeout(function() {
      // start louding
   let loud = document.querySelector(".louding");
   loud.style.display = "none";
   document.documentElement.style.overflowY = "visible";

   hero_content = document.querySelector(".hero-content");
   // start hero_content
      hero_content.style.cssText = "transform:scale(1,1);";
   },2000);

  
};


// aside
let  menu = document.querySelector("header .content i"),
     aside = document.querySelector(".aside"),
     close = document.querySelector(".aside i");

     menu.onclick = function(){
       aside.style.display = "block";
       document.body.style.overflowY = "hidden";
     };

     close.onclick = function(){
        aside.style.display = "none";
        document.body.style.overflowY = "visible";
      };

    
 // stary faq
 let head_faq = document.querySelectorAll(".faq .contener .head_faq");
 for(item of head_faq) {
   
    item.onclick = function(){
      w = this.nextElementSibling.scrollHeight;
       if(this.nextElementSibling.style.maxHeight == 0  ){
          this.nextElementSibling.style.maxHeight = w + "px";
           this.nextElementSibling.style.overflow = "visible";
           this.children[0].style.cssText = " transform:rotateZ(180deg) ; -webkit-transform:rotateZ(180deg) ; -moz-transform:rotateZ(180deg) ; -ms-transform:rotateZ(180deg) ;-o-transform:rotateZ(180deg) ;";
       }
       else{
           this.nextElementSibling.style.maxHeight = null;
          this.nextElementSibling.style.overflow = "hidden";
          this.children[0].style.cssText = " transform:rotateZ(360deg) ; -webkit-transform:rotateZ(360deg) ; -moz-transform:rotateZ(360deg) ; -ms-transform:rotateZ(360deg) ;-o-transform:rotateZ(3600deg) ;";
       }
    };
 }


 //  login_ticket
let login = document.querySelector(".login_ticket"),
    buy = document.querySelectorAll(".buy_ticket .contener .buy_ticket_content .item"),
    cansel = document.querySelector(".login_ticket .heads i");

    for(item of buy) {

      item.onclick = function(){

         login.style.display = "flex";
      }
    }
 
cansel.onclick = function(){
   login.style.display = "none";
}