/* Author: 

*/

var hamburger =document.querySelector(".menu-bar");
hamburger.addEventListener("click",toggleMobileMenu);
var navbar=document.querySelector(".navbar");
var all_menu_items=document.querySelectorAll(".navbar li");
var menu_state=0;
function toggleMobileMenu(e) {
  if(menu_state===0) {
    navbar.classList.add("hamburger-menu");
    for(var i=0;i<all_menu_items.length;i++)
      {
        if(all_menu_items[i].classList.contains("hide-menu-item")) {
          all_menu_items[i].classList.remove("hide-menu-item");
        }        
      }
      menu_state=1;
    }
    else if(menu_state===1) {
      navbar.classList.remove("hamburger-menu");
      for(var i=0;i<all_menu_items.length;i++)
      {
        if(!all_menu_items[i].classList.contains("hide-menu-item")) {
          if(i==0)
          continue;
          all_menu_items[i].classList.add("hide-menu-item");
        }        
      }
      menu_state=0;
    }
  }
  
  
  
  var back_to_top =document.querySelector(".back-to-top");
  back_to_top.addEventListener("click",move_to_top);
  // back to top
  function move_to_top() {
    document.documentElement.scrollTop = 0; 
    document.body.scrollTop = 0;
  }
  
  
  
  // form validation  
  var form = document.querySelector(".subscribe-form");
  form.addEventListener('submit', validateForm);
  var form_ip=document.querySelector('.form-ip > input');
  var email;
  function validateForm(event) {
    event.preventDefault();
    console.log(form_ip);
    email=form_ip.value;
    // console.log("email is="+email);
   
   
    var formFlag=0;
    
      if(email=="")
      {
        // var err_class='.'+inputs[i]+'-error';
        var err_span=document.querySelector(".email-error");
        console.log(err_span.innerHTML);
        err_span.innerHTML="Please enter Email";
        err_span.classList.add('show-element')
        form_ip.classList.add('border-red');
        // alert("Please enter "+inputs[i]);
        formFlag=1; 
      }
      submitform();
    
    function submitform(){

      if(formFlag===0) 
      {
        var span_err_shown=document.querySelector(".email-error");
          var form_ip=document.querySelector('.form-ip > input');

              if(span_err_shown.classList.contains('show-element'))
              {
                span_err_shown.classList.remove('show-element');
            span_err_shown.classList.add('hide-element');                  
          }
          if(form_ip.classList.contains('border-red'))
          form_ip.classList.remove('border-red');
        }
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // $(document).ready(function() {
  
  //     var back_to_top =$(".back-to-top");
  //     back_to_top.on("click",move_to_top);
  //     // back to top
  //     function move_to_top() {
  //         document.documentElement.scrollTop = 0; 
  //         document.body.scrollTop = 0;
  //       }
      
  //       var menu_state=0;
  //       var hamburger =$(".menu-bar");
  //       hamburger.on("click",toggleMobileMenu);
  //       var navbar=$(".navbar");
  //       var all_menu_items = $(".navbar li");
  //       function toggleMobileMenu(e) {
  //           console.log("menu state ="+menu_state);
  //         if(menu_state===0) {
  //           alert("Hello");
  //           navbar.addClass("hamburger-menu");
            
  //           all_menu_items.each(function(){
  //               if($(this).hasClass("hide-menu-item"))
  //               {
  //                   $(this).removeClass("hide-menu-item");
  //                 }
  //             });
              
  //             menu_state=1;
  //         }
  //         else if(menu_state===1) {
  //             navbar.removeClass("hamburger-menu");
  //             var all_menu_items_recent = $(".navbar li");
  //                     all_menu_items_recent.each(function(){
  //                         if(!$(this).hasClass("hide-menu-item"))
  //                         {
  //                             $(this).addClass("hide-menu-item");
  //                         }
  //                     });
  //                     hamburger.removeClass("hide-menu-item");
  //                     menu_state=0;
                      
  //                 }        
  //             }
              
  //         });