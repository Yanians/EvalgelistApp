(function($b){
        
             $b('.dropdown-button').dropdown({
          inDuration: 300,
          outDuration: 225,
          constrainWidth: false, // Does not change width of dropdown to that of the activator
          hover: true, // Activate on hover
          gutter: 0, // Spacing from edge
          belowOrigin: false, // Displays dropdown below the button
          alignment: 'left', // Displays dropdown with edge aligned to the left of button
          stopPropagation: false // Stops event propagation
        }); 
                                               function hide_ipad_keyboard(){
                                                  document.activeElement.blur();
                                                   $b('input').blur();
                                               }     

                                               function show_lightbox(){
                                                    $b('.lightbox_bg').show();
                                                    $b('.lightbox_container').show();
                                              }
                                                                                            
                                               function hide_lightbox(){
                                                  $b('.lightbox_bg').hide();
                                                  $b('.lightbox_container').hide();
                                                  $b('#HOme').show();
                                                  $b('#video').show(); 
                                                  // this.video();
                                                  // this.Home();
                                             }
                                                                                               
                                              function show_videobox(){
                                                    $b('.videobox_bg').show();
                                                    $b('.videobox_container').show();
                                                   
                                              }


                                              function hide_videobox(){
                                                  $b('.videobox_bg').hide();
                                                  $b('.videobox_container').hide();

                                                  $b('.videobox_close').hide();
                                             }
                                              function hide_message(){
                                                  $b('#message').html('').attr('class', '');
                                                  $b('#message_container').hide();
                                             }

                                             function showMessage(message_text,message_type){
                                                    $b('#message').html('<p>'+ message_text + '<p>').attr('class',message_type);
                                                    $b('#message_container').show();
                                                    if(typeof timeout_message !== 'undefined'){
                                                      window.clearTimeout(timeout_message);
                                                    }
                                                      timeout_message = setTimeout(function(){
                                                        hide_message();
                                                      },8000);
                                                  }  
                                                   
                                             
// Action Side
      $b(document).on('click','#registration',function(e){
                  e.preventDefault();
                        show_lightbox();
                        hide_message();
              }); 

               $b(document).on('click','.lightbox_close', function(){
                           hide_lightbox();
                     });

      $b(document).on('click','#play1',function(e){
                  e.preventDefault();
                        show_videobox();
              }); 

       $b(document).on('click', '.videobox_close', function(){
                           hide_videobox();
                     });

       $b(document).on('click', '#close', function(e){
                e.preventDefault();
                           hide_videobox();
                     });

        $b('.carousel.carousel-slider').carousel({full_width: true});
                  $b(document).ready(function(){
                  $b('.slider').slider({full_width: true});
              });

      $b(document).on('click','#showNav',function(e){
                  e.preventDefault();
                 $b('.button-collapse').sideNav('show');
                         $b('.collapsible').collapsible();  
         });


          $b(document).on('click','#download-button',function(){
                                 // hide_ipad_keyboard();
                                 // hide_videobox();
                                var fullname = $b("#full_name").val('');
                                var religion = $b("#religion").val('');
                                var country = $b("#country").val('');
                                var email = $b("#email").val('');
                                var contact = $b("#contact").val('');
                                var password = $b("#password").val('');
                              
                                   $b.ajax({
                                          url: 'php/user.php',
                                         type: "POST",
                                        async: false,
                                         data: {
                                                  "id":1,
                                                  "full_name": fullname,
                                                  "religion": religion,
                                                  "country": country,
                                                  "email": email,
                                                  "contact": contact,
                                                  "password": password
                                               },
                                                success:function(data){
                                                  // $b("#full_name").val('');
                                                  // $b("#religion").val('');
                                                  // $b("#country").val('');
                                                  // $b("#email").val('');
                                                  // $b("#contact").val('');
                                                  // $b("#password").val('');
                                               }
                             });
                       });
               // $b('#insert_user_data #full_name').val('');
               // $b('#insert_user_data #country').val('');
               // $b('#insert_user_data #religion').val('');
               // $b('#insert_user_data #email').val('');
               // $b('#insert_user_data #contact').val('');
               // $b('#insert_user_data #password').val('');
})(jQuery);


 //                    $b('#insert_user_data').validate({
 //                                          success: 'valid',
 //                                          rules: {
 //                                              full_name: {
 //                                             validators: {
 //                                                notEmpty: {
 //                                                    message: 'The input is required and can\'t be empty'
 //                                                 }
 //                                                }
 //                                              },
 //                                               religion:{
 //                                                 validators: {
 //                                                 notEmpty: {
 //                                                    message: 'The input is required and can\'t be empty'
 //                                                 }
 //                                                }
 //                                              },  
 //                                                country: {
 //                                                   validators: {
 //                                                notEmpty: {
 //                                                    message: 'The input is required and can\'t be empty'
 //                                                  }
 //                                                 }
 //                                                },
 //                                                contact: {
 //                                                   validators: {
 //                                                notEmpty: {
 //                                                    message: 'The input is required and can\'t be empty'
 //                                                 }
 //                                               },
 //                                                  regexp: {
 //                                                    regexp: /^[0-9-0-9_]+$/,
 //                                                    message: 'The input can only consist of number,'
 //                                                }
 //                                            }, 
 //                                                  email: {
 //                                                         validators: {
 //                                                            notEmpty: {
 //                                                                message: 'The email address is required and can\'t be empty'
 //                                                            },
 //                                                              emailAddress: {
 //                                                                  message: 'The input is not a valid email address'
 //                                                              }
 //                                                         }
 //                                                    },
 //                                                password: {
 //                                                   validators: {
 //                                                notEmpty: {
 //                                                    message: 'The password is required and can\'t be empty'
 //                                                }
 //                                             }
 //                                           }
 //                                         },  
 //                                      errorPlacement: function(error, element){
 //                                        error.insertBefore(element);
 //                                      },
 //                                      highlight: function(element){
 //                                        $b(element).parent('.input-field').removeClass('valid').addClass('error');
 //                                      },
 //                                      unhighlight: function(element){
 //                                        $b(element).parent('.input-field').addClass('valid').removeClass('error');
 //                                }
 //                           });


    "use stric";
class app {

  constructor(){

this.about_paralax_detail = [{
    "id":0,
    "info_text1":"To be one of the country’s reliable partner in technology and innovative solutions, providing quality service in a sustainable and cost efficient way.",
    "info_text2":"To provide excellent services to our clients in a timely manner, optimal cost and quality  To establish long term partnership with our suppliers working towards a common goal that is mutually beneficial. To contribute in the development of the society’s infrastructure compliant to required standards, specifications and best engineering practices. To encourage employees by providing opportunities for personal and career growth. To maintain an atmosphere of trust and sustainable partnership with our investors and business partners.",
    "photo1":"images/homitory.jpg",
    "photo2":"images/parallax2.jpg",
    "photo3":"images/parallax1.jpg",
    "header1":"CCTV/ IP CCTV System: Home or Business Security",
    "info1":"Supply of Security Cameras and Digital Video Recorder, CCTV System Design, Installation and Service, Rehabilitation or Upgrade of CCTV System, 24/7 Surveillance; Remote or Internet Viewing, Installation of Spy Cameras.",
    "header2":"Home & Office Alarm & Security Access System",
    "info2":"System Design, Installation & Service Intruder Alarm Systems: GSM-Automated Single/Multiple Door Access Control Bio-metric, Proximity Card, Pass Code, Gate Automation Proximity Door Lock.",
    "header3":"Electrical System",
    "info3":"Electrical System Design & Installation: Residential or Commercial Design & Installation of Industrial Solar Array Systems. AC Systems, Power Backup UPS Systems Supply of Electric Steel Post Supply & System Automation of Electric Prepaid Meter (GSM-Automated)",
    "header4":"Structured Cabling/ Networking",
    "info4":"System Design & Installation Data Cabling Data Centers/ Servers Voice Cabling Fiber Optic Cabling Wireless Network Infrastructure Wiring Rehabilitation Upgrade or extension of current network",
    "header5":"Communication Systems",
    "info5":"Phone Systems Paging System IP Phones/ IP Conferencing Phones PABX/ IP PABX Implementation, Relocation, Service, Upgrades, Design Build",
    "header6":"Fire Alarm & ProtectionSystem",
    "info6":"Property Risk-based Analysis, Consultation Fire Alarm System Design, Installation & Service Supply of Fire Extinguisher and Maintenance Water Sprinkler System Design & Installation Fire Suppression Systems Design & Installation",
    "header7":"Biometrics",
    "info7":"Biometric-Fingerprint Attendance Management Device Biometric-Face Recognition Door Access & Attendance Management Biometric Single/Multiple Door Access Control",
    "header8":"Architectural 3d Rendering/Animation",
    "info8":"FOR: Residential Housing Scheme, Commercial Complex, Multi-purpose, facility, Hospital,Fitness facility, School, Restaurant or Hotel.",
    "header9":"Building Management System(BMS)",
    "info9":"Regulates automatically Building’s Lighting, Security Devices and Fire-Safety Alarms & etc.",
    "header10":"Sales & Service of IT Equipment",
    "info10":"Server, Desktops, Laptops, Printers, UPS, NAS, Monitors, and Computer Hardware, Parts & Accessories. Data Center Solutions, Server Racks, Cable Tray, Switches, Modem & Router.",
    "header11":"Website Design & Development",
    "info11":"Web Design/ Development Web Hosting Web Revamped/ Redesign E-Commerce Solutions SEO (Search Engine Optimization) Branding/ Logo Design",
    "header12":"Software Products",
    "info12":"License Software, Anti-Virus & Firewall (software based)"}];

        this.Home_images = [{
          "photo1":"images/b6.jpg",
          "photo2":"images/b2.jpg",
          "photo3":"images/b3.jpg",
          "photo4":"images/b4.jpg",
          "photo5":"images/b5.jpg",
          "desc1":"Providers of network Connectivity",
          "desc2":"Provides HD CCTV SYSTEM",
          "desc3":"Toubleshoot network sensitivity",
          "desc4":"Provides cabling structure",
          "desc5":"Daltans IT Solution",
          "verse1":"Eclesiastes 12:13",
          "verse2":"",
          "verse3":"",
          "verse4":"",
          "verse5":""

        }];

         this.video_chapter = [{
          "photo1":"images/b6.jpg",
          "photo2":"images/b2.jpg",
          "photo3":"images/b3.jpg",
          "photo4":"images/b4.jpg",
          "photo5":"images/b5.jpg",
          "desc1":"Know Your Destiny",
          "desc2":"Provides HD CCTV SYSTEM",
          "desc3":"Toubleshoot network sensitivity",
          "desc4":"Provides cabling structure",
          "desc5":"Daltans IT Solution",
          "verse1":"Eclesiastes 12:13",
          "verse2":"",
          "verse3":"",
          "verse4":"",
          "verse5":""

        }];

         this.video_link = [{
         "id":1,
         "link_video":"video/ph.mov",
         "desc":"photoshop introduction the whole concept of use to guide you along."

          }];

  }// end of constructor
  
     render(html,component){
        component.innerHTML += html;
     }
     reRender(html,component){
          component.innerHTML = html;
     }

     accessData(id){
      let r = this.about_paralax_detail;
    for(let i=0;i<r.length;i++){
      if(r[i].id===id){
        return r[i];
      }
    }
     
     } 
 

     create(){

     }

     update(){

     }

     Delete(){

     }

     search(){

     }

     bind(){

     }
}

class Component extends app{
        constructor(){
          super();
        }
//small material-icons right  md-18

  container(){
    let html = `
 <nav>
    <div class="nav-wrapper blue-grey darken-2 button-content">
     &nbsp;<a  href="#registration" onclick="component.registration()" id="registration" class="waves-effect waves-light btn green">Register</a>
          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons md-18">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#Homen" onclick="component.HOme()"><i class="small material-icons right">home</i>HOME</a>
        </li>
        <li><a href="#About" onclick="component.about()"><i class="small material-icons right orange600 md-18">persons_pin</i>About Daltans</a></li>
        <li><a href="#"><i class="small material-icons right  md-18">business</i>Work</a></li>
        <li><a href="#" id="location"><i class="small material-icons right shadow-red md-24">my_locations</i>Location</a></li>
        <li><a href="#" id="showNav"><i class="material-icons right">view_module</i>Products</a>
        </li>
        <li><a href="#" onclick="component.minifiedDesign()"><i class="small material-icons left md-18">help</i>Help</a></li>
      </ul>

  <ul id="mobile-demo" class="side-nav">
      <li><div class="userView">
                  <div class="background">
                     <img src="images/slidepic.jpg">
                  </div>
                <a href="#!user"><img class="circle" src="images/b6.jpg"></a>
                <a href="#!name"><h5 class="cta"><span class="red-text">Telescuro III @wap</span><h5></a>
                <a href=""><span class="white-text-email cta">Contact Me!</span></a>
          </div>
      </li>
        <li><a href="#">Registration</a></li>
        <li><a href="Bootstrap.html">Bootstrap</a></li>
        <li><a href="">Work</a></li>
        <li><a href="Navigate.html">Materialize</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Help</a></li>
      </ul>
    </div>
  </nav>
             <div class="container">
                 <div class="row">
                   
                      <div id="iframe_layout"></div>
                      <div id="HOme"></div>
                      <div id="semifooter"></div>
                      <div id="about"></div>
                      <div id="registration1"></div>
                       <div id="minified"></div>
                  </div>
                </div>    
           
  <footer class="page-footer  blue-grey darken-4">
          <div class="container">
            <div class="row">
              <div class="col l6 s6">
                <h5 class="white-text">ABOUTS US</h5>
                <p class="grey-text text-lighten-4"><a href=""/>Tour yourself around the world.</p>
                 <div class="row">
              <div class="black-text col s3"><a href="#showStarter" onclick="">HOME</div>
              <div class="col s12"><a href="#showForm" onclick=")">RESERVED YOUR Flight</div>
              <div class="col s6"><a href="#passView" onclick="">PEOPLE ON YOUR FLIGHT</div>
            </div>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">FOLLOW</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="">SHARE </a></li>
                  <li><a class="grey-text text-lighten-3" href="">SHARE</a></li>
                  <li><a class="grey-text text-lighten-3" href="">SHARE </a></li>
                  
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-copyright blue darken-4">
            <div class="container">
            <div class="row">© 2016 2017  Web - Developer Design @Adlawan
             <div class="col 1 offset-2 s1">
             <img src="" class="none">
              </div>
                <div class="col 1 offset-2 s1">
                     <img src="" class="none">
                     </div>      
                        <div class="col 1 offset-1 s1">      
                           <img src="" class="none">
                           </div>
                              <div class="col 1 offset-0 s1">      
                                <img src="" class="none">
                                </div>
                                   <div class="col 1 offset-0 s1">      
                                     <img src="" class="none">
                                     </div>
                    <a class="grey-text text-lighten-4 right" href="">FLIGHT HISTORY AROUND THE WORLD</a>
                    </div>
                  </div>
                </footer></div>
           </div>
         </div>
    `;
    this.reRender(`${html}`,document.getElementById("app"));  
    this.HOme();
    this.semifooter();
  } // end of function container

     
     HOme(){

       let html =``;
        let r = this.Home_images;
         for(let i=0;i<r.length;i++){
       html +=`
             <div class="row">
             </div>
          <div class="row">
              <div class="col s8">
                              
                         <div class="slider">
                  <ul class="slides">
                    <li>
                    <img src="${r[i].photo1}"> <!-- random image -->
                      <div class="caption right-align">
                        <h1 class="light red-text text-lighten-900 cta">${r[i].desc1}</h1>
                        <p class=" orange-text text-lighten-900 cta">${r[i].verse1}</p>
                    </li>
                    <li>
                      <img src="${r[i].photo2}"> <!-- random image -->
                      <div class="caption center-align blue-text cta">
                        <h3>${r[i].desc2}</h3>
                      </div>
                    </li>
                    <li>
                      <img src="${r[i].photo3}"> <!-- random image -->
                      <div class="caption right-align">
                        <h2 class="light grey-text text-lighten-2 cta">${r[i].desc3}</h2>
                      </div>
                    </li>
                     <li>
                      <img src="${r[i].photo4}"> <!-- random image -->
                      <div class="caption center-align cta">
                        <h3>${r[i].desc4}</h3>   
                      </div>
                    </li>
                    <li>
                      <img src="${r[i].photo5}"> <!-- random image -->
                      <div class="caption center-align cta">
                        <h3>${r[i].desc5}</h3>
                        
                      </div>
                    </li>
                  </ul>
                </div> 

       </div>
             
               <div class="col s4">
                  <div class="scroll_page"> 

                               <div class="card horizontal">
                                   <div class="card-image">
                                      
                                  </div>
                              <div class="card-stacked">
                                  <div class="card-content">
                                       <p>CS5 Intro. where you can learn much easier in a very compresive topic</p>
                                   </div>
                                    <div class="card-action">
                                      <a href="#" id="play1" onclick="component.iframe_layout()">PLAY</a>
                                    </div>
                              </div>
                          </div>


                               <div class="card horizontal">
                                   <div class="card-image">
                                      
                                  </div>
                              <div class="card-stacked">
                                  <div class="card-content">
                                       <p>CS5 Intro. where you can learn much easier in a very compresive topic</p>
                                   </div>
                                    <div class="card-action">
                                      <a href="#" id="play1" onclick="component.iframe_layout()">PLAY</a>
                                    </div>
                              </div>
                          </div>
           </div>  
      </div> 
  </div>     
      `;
 }
       this.reRender(`${html}`,document.getElementById("HOme"));
         this.showHOme();
     }

   iframe_layout(){
        let html = ``;
            let r = this.video_link;
               for(let i = 0; i < r.length; i++) {
                       html += `
                         <div class="videobox_close">
                              <div class="videobox_bg"></div>
                                 <div class="videobox_container">
                                        <div class="videobox_content">
                                             <div class="card horizontal">
                                                   <div class="card-image">
                                                       <video class="responsive-video" controls>
                                                          <source src="${r[i].link_video}" type="video/mp4"> 
                                                        </video>
                                                  </div>

                                                  <div class="card-stacked">
                                                          <div class="card-content">
                                                               <p>${r[i].desc}</p>
                                                          </div>
                                                          <div class="card-action">
                                                            <a href="#" id="close">CLOSE</a>
                                                          </div>
                                                  </div>
                                            </div>
                                        </div>      
                                 </div>   
                         </div>                                
                      `;
               }             
                       this.reRender(`${html}`,document.getElementById("iframe_layout"));
                       this.showIframe();   

                 }

  /*           </br>
  <div class="parallax-container valign-wrapper"> 
    <div class="container-fixed">  
            <div class="row">
              <div class="col s6">
                  <a href="#" id="download-button" class="waves-effect btn-large hoverable purple accent-8">Vision</a>
                  <h5 class="thin-text left-align white-text valign canter">${r[i].info_text1}</h5>
                    </div>
                    <div class="col s6">
                    <a href="#" id="download-button" class="waves-effect btn-large hoverable purple accent-8">Mission</a>
                     <h5 class="thin-text left-align white-text valign canter">${r[i].info_text2}</h5>
                       </div>
                   <div class="col 16 s12 m12 l6">
                  <h5 class="thin-text left-align white-text valign">${r[i].info_text2}</h5>
                   </div>
            </div> 
    </div>
       <div class="parallax"><img src="${r[i].photo2}"></div> 
  </div>   
      */

        about(){
    let html = ``;      
    let r = this.about_paralax_detail;
    for(let i=0;i<r.length;i++){
         html += `
 
     <div class="container-fixed">  
       <div class="row">
        <ul class="thin-text">
            <li>
              <div class="col s6"><a href="#" id="download-button" class="waves-effect btn-large hoverable purple accent-8">Vision</a></div>
              <div class="col s6"><h5 class="thin-text l white-text valign center">${r[i].info_text1}</h5></div>
            </li>
            <li>
              <div class="col s6"><a href="#" id="download-button" class="waves-effect btn-large hoverable purple accent-8">Mission</a></div>
              <div class="col s6"><h5 class="thin-text l white-text valign center">${r[i].info_text2}</h5></div>
            </li>
        </ul>
       </div>
     </div>

   <div class="container-fixed" id="services">
           <div class="row">
             <h2 class="blue-text center section-header ctad">Services</h2>
               </div>

             <div class="row">

                     <div class="col 12 s12 m6 l4">
                                   <div class="card black accent-4 z-deep-2 fixThis">
                                      <span class="card-title blue-text">${r[i].header1}</span>
                                         <div class="divider"></div>
                                            <div class="card-content white-text">
                                                <p>${r[i].info1}</p>
                                            </div>
                                            <div class="card-action">

                                               <a href="#modal3">Find out more</a>

                                                  <div id="modal3" class="modal bottom-sheet">
                                                    <div class="modal-content">
                                                      <h4>Modal Header</h4>
                                                            <ul class="collection">
                                                            <li class="collection-item avatar">
                                                            <p>Daltans IT Solution is an authorized distributor of HIKVISION Products</>
                                                            </li>
                                                              <li class="collection-item avatar">
                                                                <img src="images/yuna.jpg" alt="" class="circle">
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle">folder</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle green">assessment</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle red">play_arrow</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                           </ul>
                                                    </div>
                                                </div>  
                                           </div>

                                   </div>
                           </div>

                      <div class="col 12 s12 m6 l4">
                               <div class="card black accent-4 z-deep-2 fixThis">
                                   <span class="card-title blue-text">${r[i].header2}</span>
                                        <div class="divider"></div>
                                            <div class="card-content white-text">
                                               <p>${r[i].info2}</p>
                                            </div>
                                            <div class="card-action">
                                              <a href="#modal3">Find out more</a>

                                                  <div id="modal3" class="modal bottom-sheet">
                                                    <div class="modal-content">
                                                      <h4>Modal Header</h4>
                                                            <ul class="collection">
                                                            <li class="collection-item avatar">
                                                            <p>Daltans IT Solution is an authorized distributor of HIKVISION Products</>
                                                            </li>
                                                              <li class="collection-item avatar">
                                                                <img src="images/yuna.jpg" alt="" class="circle">
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle">folder</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle green">assessment</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle red">play_arrow</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                           </ul>
                                                    </div>
                                                </div>  
                                           </div>

                                         
                               </div>
                      </div>

                     <div class="col 12 s12 m6 l4">
                                   <div class="card black accent-4 z-deep-2 fixThis">
                                      <span class="card-title blue-text">${r[i].header3}</span>
                                         <div class="divider"></div>
                                            <div class="card-content white-text">
                                                <p>${r[i].info3}</p>
                                            </div>
                                            <div class="card-action">
                                            <a href="#modal3">Find out more</a>

                                                  <div id="modal3" class="modal bottom-sheet">
                                                    <div class="modal-content">
                                                      <h4>Modal Header</h4>
                                                            <ul class="collection">
                                                            <li class="collection-item avatar">
                                                            <p>Daltans IT Solution is an authorized distributor of HIKVISION Products</>
                                                            </li>
                                                              <li class="collection-item avatar">
                                                                <img src="images/yuna.jpg" alt="" class="circle">
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle">folder</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle green">assessment</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle red">play_arrow</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                           </ul>
                                                    </div>
                                                </div>  
                                           </div>
                              </div>
                     </div>
             </div><!--end of row-->

                    <div class="row">

                            <div class="col 12 s12 m6 l4">
                                 <div class="card black accent-4 z-deep-2 fixThis">
                                      <span class="card-title blue-text">${r[i].header4}</span>
                                           <div class="divider"></div>
                                              <div class="card-content white-text">
                                                 <p>${r[i].info4}</p>
                                              </div>
                                            <div class="card-action">
                                              <a href="#modal3">Find out more</a>

                                                  <div id="modal3" class="modal bottom-sheet">
                                                    <div class="modal-content">
                                                      <h4>Modal Header</h4>
                                                            <ul class="collection">
                                                            <li class="collection-item avatar">
                                                            <p>Daltans IT Solution is an authorized distributor of HIKVISION Products</>
                                                            </li>
                                                              <li class="collection-item avatar">
                                                                <img src="images/yuna.jpg" alt="" class="circle">
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle">folder</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle green">assessment</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle red">play_arrow</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                           </ul>
                                                    </div>
                                                </div>  
                                           </div>

                                 </div>
                            </div>
                    

                           <div class="col 12 s12 m6 l4">
                                   <div class="card black accent-4 z-deep-2 fixThis">
                                       <span class="card-title blue-text">${r[i].header5}</span>
                                         <div class="divider"></div>
                                          <div class="card-content white-text">
                                            <p>${r[i].info5}</p>
                                          </div>
                                            <div class="card-action">
                                              <a href="#modal3">Find out more</a>

                                                  <div id="modal3" class="modal bottom-sheet">
                                                    <div class="modal-content">
                                                      <h4>Modal Header</h4>
                                                            <ul class="collection">
                                                            <li class="collection-item avatar">
                                                            <p>Daltans IT Solution is an authorized distributor of HIKVISION Products</>
                                                            </li>
                                                              <li class="collection-item avatar">
                                                                <img src="images/yuna.jpg" alt="" class="circle">
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle">folder</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle green">assessment</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle red">play_arrow</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                           </ul>
                                                    </div>
                                                </div>  
                                           </div>

                                   </div>
                           </div>
              

                           <div class="col 12 s12 m6 l4">
                                <div class="card black accent-4 z-deep-2 fixThis">
                                       <span class="card-title blue-text">${r[i].header6}</span>
                                       <div class="divider"></div>
                                          <div class="card-content white-text">
                                       <p>${r[i].info6}</p>
                                          </div>
                                        <div class="card-action">
                                          <a href="#modal3">Find out more</a>

                                                  <div id="modal3" class="modal bottom-sheet">
                                                    <div class="modal-content">
                                                      <h4>Modal Header</h4>
                                                            <ul class="collection">
                                                            <li class="collection-item avatar">
                                                            <p>Daltans IT Solution is an authorized distributor of HIKVISION Products</>
                                                            </li>
                                                              <li class="collection-item avatar">
                                                                <img src="images/yuna.jpg" alt="" class="circle">
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle">folder</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle green">assessment</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle red">play_arrow</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                           </ul>
                                                    </div>
                                                </div>  
                                           </div>
                                  </div>
                          </div>
                    </div><!--end of row-->

                <div class="row">
                     <div class="col 12 s12 m6 l4">
                           <div class="card black accent-4 z-deep-2 fixThis">
                               <span class="card-title blue-text">${r[i].header7}</span>
                                   <div class="divider"></div>
                                      <div class="card-content white-text">
                                         <p>${r[i].info7}</p>
                                      </div>
                                    <div class="card-action">
                                      <a href="#modal3">Find out more</a>

                                                  <div id="modal3" class="modal bottom-sheet">
                                                    <div class="modal-content">
                                                      <h4>Modal Header</h4>
                                                            <ul class="collection">
                                                            <li class="collection-item avatar">
                                                            <p>Daltans IT Solution is an authorized distributor of HIKVISION Products</>
                                                            </li>
                                                              <li class="collection-item avatar">
                                                                <img src="images/yuna.jpg" alt="" class="circle">
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle">folder</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle green">assessment</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle red">play_arrow</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                           </ul>
                                                    </div>
                                                </div>  
                                           </div>
 
                           </div>
                     </div>

                     <div class="col 12 s12 m6 l4">
                           <div class="card black accent-4 z-deep-2 fixThis">
                               <span class="card-title blue-text">${r[i].header8}</span>
                                   <div class="divider"></div>
                                      <div class="card-content white-text">
                                         <p>${r[i].info8}</p>
                                      </div>
                                    <div class="card-action">
                                     <a href="#modal3">Find out more</a>

                                                  <div id="modal3" class="modal bottom-sheet">
                                                    <div class="modal-content">
                                                      <h4>Modal Header</h4>
                                                            <ul class="collection">
                                                            <li class="collection-item avatar">
                                                            <p>Daltans IT Solution is an authorized distributor of HIKVISION Products</>
                                                            </li>
                                                              <li class="collection-item avatar">
                                                                <img src="images/yuna.jpg" alt="" class="circle">
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle">folder</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle green">assessment</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle red">play_arrow</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                           </ul>
                                                    </div>
                                                </div>  
                                           </div>
  
                           </div>
                     </div>

                  <div class="col 12 s12 m6 l4">
                          <div class="card black accent-4 z-deep-2 fixThis">
                               <span class="card-title blue-text">${r[i].header9}</span>
                                 <div class="divider"></div>
                                    <div class="card-content white-text">
                                      <p>${r[i].info9}</p>
                                    </div>
                                  <div class="card-action">
                                    <a href="#modal3">Find out more</a>

                                                  <div id="modal3" class="modal bottom-sheet">
                                                    <div class="modal-content">
                                                      <h4>Modal Header</h4>
                                                            <ul class="collection">
                                                            <li class="collection-item avatar">
                                                            <p>Daltans IT Solution is an authorized distributor of HIKVISION Products</>
                                                            </li>
                                                              <li class="collection-item avatar">
                                                                <img src="images/yuna.jpg" alt="" class="circle">
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle">folder</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle green">assessment</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle red">play_arrow</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                           </ul>
                                                    </div>
                                                </div>  
                                           </div>
                              </div>
                   </div>
              </div><!--end of row-->  
                 
                 <div class="row">
                         <div class="col 12 s12 m6 l4">
                               <div class="card black accent-4 z-deep-2 fixThis">
                                     <span class="card-title blue-text">${r[i].header10}</span>
                                     <div class="divider"></div> 
                                        <div class="card-content white-text">
                                     <p>${r[i].info10}</p>
                                        </div>
                                      <div class="card-action">
                                         <a href="#modal3">Find out more</a>

                                                  <div id="modal3" class="modal bottom-sheet">
                                                    <div class="modal-content">
                                                      <h4>Modal Header</h4>
                                                            <ul class="collection">
                                                            <li class="collection-item avatar">
                                                            <p>Daltans IT Solution is an authorized distributor of HIKVISION Products</>
                                                            </li>
                                                              <li class="collection-item avatar">
                                                                <img src="images/yuna.jpg" alt="" class="circle">
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle">folder</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle green">assessment</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle red">play_arrow</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                           </ul>
                                                    </div>
                                                </div>  
                                           </div>
  
                               </div>
                        </div>

                        <div class="col 12 s12 m6 l4">
                                 <div class="card black accent-4 z-deep-2 fixThis">
                                     <span class="card-title blue-text">${r[i].header11}</span>
                                     <div class="divider"></div>
                                        <div class="card-content white-text">
                                     <p>${r[i].info11}</p>
                                        </div>
                                      <div class="card-action">
                                         <a href="#modal3">Find out more</a>

                                                  <div id="modal3" class="modal bottom-sheet">
                                                    <div class="modal-content">
                                                      <h4>Modal Header</h4>
                                                            <ul class="collection">
                                                            <li class="collection-item avatar">
                                                            <p>Daltans IT Solution is an authorized distributor of HIKVISION Products</>
                                                            </li>
                                                              <li class="collection-item avatar">
                                                                <img src="images/yuna.jpg" alt="" class="circle">
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle">folder</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle green">assessment</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle red">play_arrow</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                           </ul>
                                                    </div>
                                                </div>  
                                           </div>

                                 </div>
                         </div>

                          <div class="col 12 s12 m6 l4">
                                  <div class="card black accent-4 z-deep-2 fixThis">
                                         <span class="card-title blue-text">${r[i].header12}</span>
                                         <div class="divider"></div>
                                            <div class="card-content white-text">
                                         <p>${r[i].info12}</p>
                                            </div>
                                          <div class="card-action">
                                            <a href="#modal3">Find out more</a>

                                                  <div id="modal3" class="modal bottom-sheet">
                                                    <div class="modal-content">
                                                      <h4>Modal Header</h4>
                                                            <ul class="collection">
                                                            <li class="collection-item avatar">
                                                            <p>Daltans IT Solution is an authorized distributor of HIKVISION Products</>
                                                            </li>
                                                              <li class="collection-item avatar">
                                                                <img src="images/yuna.jpg" alt="" class="circle">
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle">folder</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle green">assessment</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                              <li class="collection-item avatar">
                                                                <i class="material-icons circle red">play_arrow</i>
                                                                <span class="title">Title</span>
                                                                <p>First Line <br>
                                                                   Second Line
                                                                </p>
                                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                                              </li>
                                                           </ul>
                                                    </div>
                                                </div>  
                                           </div>

                          </div>
                 </div><!--end of row-->
        </div><!--end of container-->   
           
                 <div class="parallax-container valign-wrapper">
                    <div class="container">
                      <div class="row center">
                         <div class="col l10 offset-11 valign">
                             <h2 class="center-align white-text cta">interested in Working Together</h2>
                              <a href="#" class="center waves-effect btn-large hoverable purple accent-8">Get in touch</a>
                         </div>        
                      </div>
                    </div>
                       <!--<div class="parallax"><img src="${r[i].photo1}"></div> -->
                 </div> 


                <div class="container-fixed">
                        <div class="row">
                        
                      <div class="col 12 offset-4 s12 m6 l4">
                         <h3 class="center section-header">Selected Work</h3> 
                            <div class="card">
                              <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" src="images/">
                                    </div>
                                      <div class="card-content">
                                        <span class="card-title activator grey-text text-darken-4">Brytup@gmail.com<i class="material-icons right">more_vert</i></span>
                                        <p><a href="#">follow</a>
                                       </div>
                                     <div class="card-reveal">
                                       <span class="card-title grey-text text-darken-4">Brytup@gmail.com<i class="material-icons right">close</i></span>
                                       <p>You need a website, why bothering yourself, just login to our stunnig page and make it your own.</p>
                                       </div>
                                  </div>
                          </div>

                             <div class="col 12 offset-4 s12 m6 l4">
                         <h3 class="center section-header">Stunnig Page</h3> 
                            <div class="card">
                              <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" src="images/">
                                    </div>
                                      <div class="card-content">
                                        <span class="card-title activator grey-text text-darken-4">Brytup@gmail.com<i class="material-icons right">more_vert</i></span>
                                        <p><a href="#">follow</a>
                                       </div>
                                     <div class="card-reveal">
                                       <span class="card-title grey-text text-darken-4">Brytup@gmail.com<i class="material-icons right">close</i></span>
                                       <p>You need a website, why bothering yourself, just login to our stunnig page and make it your own.</p>
                                       </div>
                                  </div>
                          </div>

                              <div class="col 12 offset-8 s12 m6 l4">
                         <h3 class="center section-header">Try yourself</h3> 
                            <div class="card">
                              <div class="card-image waves-effect waves-block waves-light">
                               <img class="activator" src="images/">
                                   </div>
                                      <div class="card-content">
                                        <span class="card-title activator grey-text text-darken-4">###<i class="material-icons right">more_vert</i></span>
                                        <p><a href="#">follow</a>
                                       </div>
                                     <div class="card-reveal">
                                       <span class="card-title grey-text text-darken-4">###<i class="material-icons right">close</i></span>
                                       <p>You need a website, why bothering yourself, just login to our stunnig page and make it your own.</p>
                                       </div>
                                  </div>
                            </div>  

                  </div>
           </div>
          `;
      }
          $b(document).ready(function(){
          // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
          $b('.modal').modal();
  });
          this.reRender(`${html}`,document.getElementById("about"));
          this.showAbout();
 }

    registration(){        
     let html = `
     <div class="lightbox_bg"></div>
        <div class="lightbox_container"> 
              <div class="lightbox_close"></div>
                    <div class="lightbox_content">

                     <div class="container white lighten-2" id="form">

                          <div class="row">
                               <div class="col s12">
                                  <h2 class="section-header white-text darken-20" id="contact-me">Registration</h2>
                               </div>

                             <div class="col 18 offset-12 m12 s12">
                                <form class="col s12 add" id="insert_user_data" method="get" action="php/user.php">
                                    <div class="row">
                                      <div class="input-field col s6">
                                            <input id="full_name" type="text" class="validate">
                                            <label for="full_name">Full Name</label>
                                      </div>

                                      <div class="input-field col s6">
                                            <input id="country" type="text" class="validate">
                                            <label for="last_name">Country</label>
                                      </div>
                                    </div>
                                      
                                        <div class="row">
                                          <div class="input-field col s6">
                                            <input id="religion" type="text" class="validate">
                                            <label for="Religion">Religion</label>
                                          </div>
                                    
                                          <div class="input-field col s6">
                                            <input id="email" type="email" class="validate">
                                            <label for="email">Email</label>
                                          </div>
                                        </div>

                                    <div class="row">
                                          <div class="input-field col s6">
                                            <input id="password" type="password" class="validate">
                                            <label for="password">Password</label>
                                          </div>

                                           <div class="input-field col s6">
                                            <input id="contact" type="text" class="validate">
                                            <label for="contact">Contact</label>
                                          </div>
                                    </div>

                                   <!-- <div class="row">
                                          <div class="input-field col s6">
                                            <input id="cnfrmpswd" type="password" class="validate">
                                            <label for="cnfrmpswd">Confirm Password</label>
                                          </div> -->
                                          <div class="input-field col s6">
                                               <a href="#" id="download-button" value="POST" class="waves-effect btn-large hoverable green accent-8">Submit</a>
                                          </div>
                                    </div>
                                </form>
                              </div>
                          </div>
                      </div>
                          <div id="message_container">
                          <div id="message" class="success">
                          <p>This is a success message</p>
                      </div>
                    </div>
              </div>   
                     `; this.reRender(`${html}`,document.getElementById("registration1"));
                      this.showRegistration();   
              }        

           semifooter(){
              let html =`

                          <table width="100%" border="0" height="60"> 
                                <tr valign="top">
                            <!--<td bgcolor="#aaa" width="2%"> 
                             </td> -->    
                                            <td bgcolor="#b5dcb3" width="40%">

                                          Technical and Managerial Tutorials
                                       </td>

                                        <td bgcolor="#aaa" width="60%"> 
                  
                                      </td>
                               </tr>
                        <table> 


                         `;
                      this.reRender(`${html}`,document.getElementById("semifooter"));
                     this.showFooter();   

                 }


                 modalDisplay(){

                  let html = `
                         <!-- Modal Trigger -->
                      <a class="waves-effect waves-light btn" href="#modal1">Modal</a>

                      <!-- Modal Structure -->
                      <div id="modal1" class="modal bottom-sheet">
                        <div class="modal-content">
                          <h4>Modal Header</h4>
                          <p>A bunch of text</p>
                        </div>
                        <div class="modal-footer">
                          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                        </div>
                      </div>
  
                  `;
                      this.reRender(`${html}`,document.getElementById("minified"));
                     this.showMinified();  
                }

                 typography(){

                  let html = `


                  `;
                      this.reRender(`${html}`,document.getElementById("typography"));
                     this.showVideo();  
                }

                 typography(){

                  let html = `


                  `;
                      this.reRender(`${html}`,document.getElementById("typography"));
                     this.showVideo();  
                }

                 typography(){

                  let html = `


                  `;
                      this.reRender(`${html}`,document.getElementById("typography"));
                     this.showVideo();  
                }

                 typography(){

                  let html = `


                  `;
                      this.reRender(`${html}`,document.getElementById("typography"));
                     this.showVideo();  
                }

                 typography(){

                  let html = `


                  `;
                      this.reRender(`${html}`,document.getElementById("typography"));
                     this.showVideo();  
                }

                 typography(){

                  let html = `


                  `;
                      this.reRender(`${html}`,document.getElementById("typography"));
                     this.showVideo();  
                }
         

                  showIframe(){
                   $b('#iframe_layout').show();
                   $b('#minified').hide();

                 }

                 showFooter(){
                  $b('#semifooter').show();
                  $b('#about').hide();
                  $b('#minified').hide();
                }
                 showHOme(){
                  $b('#HOme').show();
                  $b('#minified').hide();
                  $b('#about').hide();
                  $b('#registration1').hide(); 
                  $b('.carousel.carousel-slider').carousel({full_width: true});
                  $b(document).ready(function(){
                  $b('.slider').slider({full_width: true});
            });
                }

                 showRegistration(){
                  $b('#registration1').show(); 
                  $b('#minified').hide();
                  $b('#HOme').hide();
                  $b('#about').hide();
                  $b('#semifooter').hide();      
               }
         
              showAbout(){
                  $b('#about').show();
                    $b('#minified').hide();
                  $b('#HOme').hide();
                   $b('#semifooter').hide();
                    $b('#registration1').hide(); 
                  $b(document).ready(function(){
                  $b('.parallax').parallax();      
              });     
          }

           showMinified(){
                   $b('#minified').show();
                   $b('#about').hide();
                   $b('#HOme').hide();
                   $b('#semifooter').hide();
                   $b('#registration1').hide(); 
                
          }
  }

            let component = new Component();
            component.container(); 

   
