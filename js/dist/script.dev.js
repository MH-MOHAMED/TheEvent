"use strict";

var header = document.querySelector("header");
var about_item = document.querySelector(".about .back .contener .about-content").children;
var speakers_item = document.querySelector(".speakers  .contener .speakers-content ").children;
var speakers_head = document.querySelector(".speakers  .head");
var schedule_head = document.querySelector(".schedule .contener .head");
var schedule_ul = document.querySelector(".schedule .contener ul");
var schedule_p = document.querySelector(".schedule .contener>p");
var schedule_event = document.querySelector(".schedule .contener .content-schedule").children;
var venue = document.querySelector(".venue .find").children;
var venue_head = document.querySelector(".venue .head");
var venue_gallery = document.querySelector(".venue .gallery").children;
var hotel_head = document.querySelector(".hotels .head");
var hotel = document.querySelector(".hotels .contener .content").children;
var sponsors_head = document.querySelector(".sponsors .head");
var sponsors = document.querySelector(".sponsors .contener .content").children;
var faq_head = document.querySelector(".faq .head");
var faq_contener = document.querySelector(".faq .contener");
var newsletter_head = document.querySelector(".newsletter .head");
var newsletter_form = document.querySelector(".newsletter .form");
var ticket_head = document.querySelector(".buy_ticket .head");
var ticket = document.querySelector(".buy_ticket .contener .buy_ticket_content").children;
var contact_head = document.querySelector(".contact .head");
var contact_item = document.querySelector(".contact .contener .contact-content").children;
var right = " position:relative; right:0px;  visibility: visible;";
var left = " position:relative; left:0px;  visibility: visible;";
var bottom = " position:relative;  bottom:0px; visibility: visible;";
var upPage = document.querySelector(".up");

window.onscroll = function () {
  if (window.scrollY >= 200) {
    upPage.style.visibility = "visible";
  }

  if (window.scrollY < 200) {
    upPage.style.visibility = "hidden";
  } //start header


  if (window.scrollY >= 20) {
    header.style.backgroundColor = "rgba(2, 2, 20, 1)";
  }

  if (window.scrollY <= 20) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }

  console.log(window.pageYOffset);

  if (window.outerWidth >= 1024) {
    // about 
    if (window.scrollY >= 300) {
      for (var i = 0; i < 3; i++) {
        about_item[i].style.cssText = bottom;
      }
    } // .speakers-content


    if (window.scrollY >= 500) {
      speakers_head.style.cssText = bottom;

      for (var i = 0; i < 3; i++) {
        speakers_item[i].style.cssText = bottom;
      }
    }

    if (window.scrollY >= 700) {
      for (var j = 3; j <= 5; j++) {
        speakers_item[j].style.cssText = bottom;
      }
    } // start schedule


    if (window.scrollY >= 1300) {
      schedule_head.style.cssText = bottom;
      schedule_ul.style.cssText = bottom;
      schedule_p.style.cssText = bottom;
    }

    if (window.scrollY >= 1800) {
      for (var i = 0; i < 7; i++) {
        schedule_event[i].style.cssText = bottom;
      }
    } // start venue


    if (window.scrollY >= 2200) {
      venue_head.style.cssText = bottom;
    }

    if (window.scrollY >= 2700) {
      venue[0].style.cssText = left;
      venue[1].style.cssText = right;
    } // gallery


    if (window.scrollY >= 3100) {
      for (var i = 0; i <= 3; i++) {
        venue_gallery[i].style.cssText = bottom;
      }
    }

    if (window.scrollY >= 3250) {
      for (var i = 4; i <= 7; i++) {
        venue_gallery[i].style.cssText = bottom;
      }
    } // hotel


    if (window.scrollY >= 3600) {
      hotel_head.style.cssText = bottom;
    }

    if (window.scrollY >= 4000) {
      hotel[0].style.cssText = left;
      hotel[1].style.cssText = bottom;
      hotel[2].style.cssText = right;
    } // .sponsors


    if (window.scrollY >= 4480) {
      sponsors_head.style.cssText = bottom;
    }

    if (window.scrollY >= 4550) {
      for (var i = 0; i <= 3; i++) {
        sponsors[i].style.cssText = bottom;
      }
    }

    if (window.scrollY >= 4650) {
      for (var i = 4; i <= 7; i++) {
        sponsors[i].style.cssText = bottom;
      }
    } // head_faq


    if (window.scrollY >= 5100) {
      faq_head.style.cssText = bottom;
    }

    if (window.scrollY >= 5200) {
      faq_contener.style.cssText = bottom;
    } // start .newsletter


    if (window.scrollY >= 5700) {
      newsletter_head.style.cssText = bottom;
    }

    if (window.scrollY >= 5800) {
      newsletter_form.style.cssText = bottom;
    } // start buy ticket


    if (window.scrollY >= 5800) {
      ticket_head.style.cssText = bottom;
    }

    if (window.scrollY >= 6200) {
      ticket[0].style.cssText = left;
      ticket[1].style.cssText = bottom;
      ;
      ticket[2].style.cssText = right;
    } // start contact us


    if (window.scrollY >= 6700) {
      contact_head.style.cssText = bottom;
    }

    if (window.scrollY >= 6800) {
      for (var i = 0; i < 3; i++) {
        contact_item[i].style.cssText = bottom;
      }
    }
  }

  console.log(window.pageYOffset); // phone animation

  if (window.outerWidth <= 767) {
    // about 
    if (window.scrollY >= 250) {
      for (var i = 0; i < 3; i++) {
        about_item[i].style.cssText = bottom;
      }
    } // .speakers-content


    if (window.scrollY >= 600) {
      speakers_head.style.cssText = bottom;
      speakers_item[0].style.cssText = bottom;
    }

    if (window.scrollY >= 900) {
      speakers_item[1].style.cssText = bottom;
    }

    if (window.scrollY >= 1150) {
      speakers_item[2].style.cssText = bottom;
      ;
    }

    if (window.scrollY >= 1600) {
      speakers_item[3].style.cssText = bottom;
    }

    if (window.scrollY >= 1850) {
      speakers_item[4].style.cssText = bottom;
    }

    if (window.scrollY >= 2100) {
      speakers_item[5].style.cssText = bottom;
    } // end speakers
    // start schedule


    if (window.scrollY >= 2800) {
      schedule_head.style.cssText = bottom;
      schedule_ul.style.cssText = bottom;
      schedule_p.style.cssText = bottom;
    }

    if (window.scrollY >= 3200) {
      schedule_event[0].style.cssText = bottom;
    }

    if (window.scrollY >= 3400) {
      schedule_event[1].style.cssText = bottom;
    }

    if (window.scrollY >= 3700) {
      schedule_event[2].style.cssText = bottom;
    }

    if (window.scrollY >= 3900) {
      schedule_event[3].style.cssText = bottom;
    }

    if (window.scrollY >= 4250) {
      schedule_event[4].style.cssText = bottom;
    }

    if (window.scrollY >= 4550) {
      schedule_event[5].style.cssText = bottom;
    }

    if (window.scrollY >= 4800) {
      schedule_event[6].style.cssText = bottom;
    } // end schedule
    // start venue


    if (window.scrollY >= 5000) {
      venue_head.style.cssText = bottom;
    }

    if (window.scrollY >= 5200) {
      venue[0].style.cssText = left;
    }

    if (window.scrollY >= 5800) {
      venue[1].style.cssText = right;
    } // end venue
    // start gallery


    if (window.scrollY >= 6150) {
      venue_gallery[0].style.cssText = bottom;
    }

    if (window.scrollY >= 6450) {
      venue_gallery[1].style.cssText = bottom;
    }

    if (window.scrollY >= 6700) {
      venue_gallery[2].style.cssText = bottom;
    }

    if (window.scrollY >= 6900) {
      venue_gallery[2].style.cssText = bottom;
    }

    if (window.scrollY >= 7250) {
      venue_gallery[3].style.cssText = bottom;
    }

    if (window.scrollY >= 7600) {
      venue_gallery[4].style.cssText = bottom;
    }

    if (window.scrollY >= 7900) {
      venue_gallery[5].style.cssText = bottom;
    }

    if (window.scrollY >= 8150) {
      venue_gallery[6].style.cssText = bottom;
    }

    if (window.scrollY >= 8450) {
      venue_gallery[7].style.cssText = bottom;
    } // end gallery
    // start hotel


    if (window.scrollY >= 9100) {
      hotel_head.style.cssText = bottom;
    }

    if (window.scrollY >= 9250) {
      hotel[0].style.cssText = left;
    }

    if (window.scrollY >= 9500) {
      hotel[1].style.cssText = bottom;
    }

    if (window.scrollY >= 9700) {
      hotel[2].style.cssText = right;
    } // end hotel
    // start sponsors


    if (window.scrollY >= 10300) {
      sponsors_head.style.cssText = bottom;
    }

    if (window.scrollY >= 10400) {
      sponsors[0].style.cssText = bottom;
    }

    if (window.scrollY >= 10600) {
      sponsors[1].style.cssText = bottom;
    }

    if (window.scrollY >= 10900) {
      sponsors[2].style.cssText = bottom;
    }

    if (window.scrollY >= 11000) {
      sponsors[3].style.cssText = bottom;
    }

    if (window.scrollY >= 11200) {
      sponsors[4].style.cssText = bottom;
    }

    if (window.scrollY >= 11400) {
      sponsors[5].style.cssText = bottom;
    }

    if (window.scrollY >= 11600) {
      sponsors[6].style.cssText = bottom;
    }

    if (window.scrollY >= 11800) {
      sponsors[7].style.cssText = bottom;
    } // end sponsors
    // head_faq


    if (window.scrollY >= 12000) {
      faq_head.style.cssText = bottom;
    }

    if (window.scrollY >= 12200) {
      faq_contener.style.cssText = bottom;
    } // end faq
    // start .newsletter


    if (window.scrollY >= 13000) {
      newsletter_head.style.cssText = bottom;
    }

    if (window.scrollY >= 13200) {
      newsletter_form.style.cssText = bottom;
    } // end newsletter
    // start buy ticket


    if (window.scrollY >= 13450) {
      ticket_head.style.cssText = bottom;
    }

    if (window.scrollY >= 13600) {
      ticket[0].style.cssText = left;
    }

    if (window.scrollY >= 14100) {
      ticket[1].style.cssText = bottom;
      ;
    }

    if (window.scrollY >= 14400) {
      ticket[2].style.cssText = right;
    } // end buy ticket
    // start contact us


    if (window.scrollY >= 14550) {
      contact_head.style.cssText = bottom;
    }

    if (window.scrollY >= 15000) {
      contact_item[0].style.cssText = bottom;
    }

    if (window.scrollY >= 15300) {
      contact_item[1].style.cssText = bottom;
    }

    if (window.scrollY >= 15600) {
      contact_item[2].style.cssText = bottom;
    } // end contact us

  }
};

window.onload = function () {
  setTimeout(function () {
    // start louding
    var loud = document.querySelector(".louding");
    loud.style.display = "none";
    document.documentElement.style.overflowY = "visible";
    hero_content = document.querySelector(".hero-content"); // start hero_content

    hero_content.style.cssText = "transform:scale(1,1);";
  }, 2000);
}; // aside


var menu = document.querySelector("header .content i"),
    aside = document.querySelector(".aside"),
    close = document.querySelector(".aside i");

menu.onclick = function () {
  aside.style.display = "block";
  document.body.style.overflowY = "hidden";
};

close.onclick = function () {
  aside.style.display = "none";
  document.body.style.overflowY = "visible";
}; // stary faq


var head_faq = document.querySelectorAll(".faq .contener .head_faq");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = head_faq[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    item = _step.value;

    item.onclick = function () {
      w = this.nextElementSibling.scrollHeight;

      if (this.nextElementSibling.style.maxHeight == 0) {
        this.nextElementSibling.style.maxHeight = w + "px";
        this.nextElementSibling.style.overflow = "visible";
        this.children[0].style.cssText = " transform:rotateZ(180deg) ; -webkit-transform:rotateZ(180deg) ; -moz-transform:rotateZ(180deg) ; -ms-transform:rotateZ(180deg) ;-o-transform:rotateZ(180deg) ;";
      } else {
        this.nextElementSibling.style.maxHeight = null;
        this.nextElementSibling.style.overflow = "hidden";
        this.children[0].style.cssText = " transform:rotateZ(360deg) ; -webkit-transform:rotateZ(360deg) ; -moz-transform:rotateZ(360deg) ; -ms-transform:rotateZ(360deg) ;-o-transform:rotateZ(3600deg) ;";
      }
    };
  } //  login_ticket

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var login = document.querySelector(".login_ticket"),
    buy = document.querySelectorAll(".buy_ticket .contener .buy_ticket_content .item"),
    cansel = document.querySelector(".login_ticket .heads i");
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = buy[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    item = _step2.value;

    item.onclick = function () {
      login.style.display = "flex";
    };
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

cansel.onclick = function () {
  login.style.display = "none";
};