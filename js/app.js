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


      $b(document).on('click','#registration',function(e){
                  e.preventDefault();
                        show_lightbox();
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
})(jQuery);

    "use stric";
class app {

  constructor(){

this.about_paralax_detail = [{
    "id":0,
    "info_text1":"ECCLESIASTES 12:13 Let us hear the conclusion of the whole matter: Fear God, and keep his commandments: for this is the whole duty of man.",
    "info_text2":"ECCLESIASTES 12:14  For God shall bring every work into judgment,  with every secret thing,  whether it be good,   or whether it be evil.",
    "photo1":"images/homitory.jpg",
    "photo2":"images/parallax2.jpg",
    "photo3":"images/parallax1.jpg"}];

        this.Home_images = [{
          "photo1":"images/b6.jpg",
          "photo2":"images/b2.jpg",
          "photo3":"images/b3.jpg",
          "photo4":"images/b4.jpg",
          "photo5":"images/b5.jpg",
          "desc1":"Know Your Destiny",
          "desc2":"ACCESS to the Wilderness",
          "desc3":"Ask and You will be free",
          "desc4":"If you know God You know eternity",
          "desc5":"Open minded leads to knowledge",
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
          "desc2":"ACCESS to the Wilderness",
          "desc3":"Ask and You will be free",
          "desc4":"If you know God You know eternity",
          "desc5":"Open minded leads to knowledge",
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
    <div class="nav-wrapper blue-grey darken-2">
     &nbsp;<a  href="#registration" onclick="component.registration()" id="registration" class="waves-effect waves-light btn green">Register</a>
          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons md-18">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#Homen" onclick="component.HOme()"><i class="small material-icons right">home</i>HOME</a>
        </li>
        <li><a href="#About" onclick="component.about()"><i class="small material-icons right orange600 md-18">persons_pin</i>About</a></li>
        <li><a href="#"><i class="small material-icons right  md-18">business</i>Work</a></li>
        <li><a href="#" id="location"><i class="small material-icons right shadow-red md-24">my_locations</i>Location</a></li>
        <li><a href="#" id="showNav"><i class="fa fa-github"></i></a>
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
        <li><a href="#" onclick="component.about()">About</a></li>
        <li><a href="">Work</a></li>
        <li><a href="Navigate.html">Contact Us</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Help</a></li>
      </ul>
    </div>
  </nav>
             <div class="container">
                 <div class="row">
                   
                      <div id="iframe_layout"></div>
                      <div id="HOme"></div>
                      <div id="video"></div>
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
    this.video();
  }

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
            for(let i = 0; i < r.length; i++){
                 html += `
                   <div class="videobox_close">
                        <div class="videobox_bg"></div>
                           <div class="videobox_container">
                                  <div class="videobox_content">

                               <div class="card horizontal">

                                   <div class="card-image">
                                       <video class="responsive-video" autoplay>
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
                }
                </div>   
          </div>       
                         
                  `;
      }             
                       this.reRender(`${html}`,document.getElementById("iframe_layout"));
                       this.showIframe();   

                 }

        about(){
    let html = ``;      
    let r = this.about_paralax_detail;
    for(let i=0;i<r.length;i++){
         html += `
                
  <div class="parallax-container valign-wrapper">
    <div class="container-fixed">  
            <div class="row center">

                <div class="col 16 s12 m12 l6">
                  <h5 class="thin-text left-align white-text valign">${r[i].info_text1}</h5>
                  <a href="#" id="download-button" class="waves-effect btn-large hoverable purple accent-8">Beware</a>
                    </div> 

                   <div class="col 16 s12 m12 l6">
                  <h5 class="thin-text left-align white-text valign">${r[i].info_text2}</h5>
                   <a href="#" id="download-button" class="waves-effect btn-large hoverable purple accent-8">Stay tune</a>
                   </div>
            </div> 
    </div>
       <div class="parallax"><img src="${r[i].photo2}"></div> 
  </div>   


   <div class="container-fixed" id="services">
           <div class="row">
             <h2 class="purple-text center section-header ctad">Services</h2>
               </div>

                 <div class="row">

                 <div class="col 12 s12 m6 l4">
                    <div class="card purple accent-4 z-deep-2">
                           <span class="card-title white-text">Custom Web Design</span>
                           <div class="divider"></div>
                              <div class="card-content white-text">
                           <p>I design a simple layout so that we will know what's going on from the inside code which give specification on layouting capabilities in order to work more precisely</p>
                              </div>
                            <div class="card-action">
                               <a href="#">Find out more</a>
                            </div>  
                      </div>
                      <div class="parallax"><img src="${r[i].photo2}"></div> 
                  </div>

                
                 <div class="col 12 s12 m6 l4">
                    <div class="card black accent-4 z-deep-2">
                           <span class="card-title white-text">Customise Yourself</span>
                           <div class="divider"></div>
                              <div class="card-content white-text">
                           <p>frontpage of yoursel will take loner in design more reliable in terms of webpage customization, the best way of doing that is to advertise your face around the world.</p>
                         </div>
                            <div class="card-action">
                               <a href="#">Find out more</a>
                            </div>  
                       </div>
                     </div>

                      <div class="col 12 s12 m6 l4">
                    <div class="card pink accent-2 accent-4 z-deep-2">
                           <span class="card-title white-text">Home Box Office</span>
                           <div class="divider"></div>
                              <div class="card-content white-text">
                           <p>frontpage of yoursel will take loner in design more reliable in terms of webpage customization, the best way of doing that is to advertise your face around the world.</p>
                         </div>
                            <div class="card-action">
                               <a href="#">Find out more</a>
                            </div>  
                       </div>
                     </div>
           </div>
           
    </div>  <!-- End of container -->
                 <div class="parallax-container valign-wrapper">
                    <div class="container">
                      <div class="row center">
                         <div class="col l10 offset-11 valign">
                             <h2 class="center-align white-text cta">interested in Working Together</h2>
                              <a href="#" class="center waves-effect btn-large hoverable purple accent-8">Get in touch</a>
                         </div>        
                      </div>
                    </div>
                       <div class="parallax"><img src="${r[i].photo1}"></div> 
                 </div> 


                <div class="container-fixed">
                        <div class="row">
                        
                      <div class="col 12 offset-4 s12 m6 l4">
                         <h3 class="center section-header">Selected Work</h3> 
                            <div class="card">
                              <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" src="images/ama.jpg">
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
                                <img class="activator" src="images/parallax-template.jpg">
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
                               <img class="activator" src="images/ama.jpg">
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
                                <form class="col s12">
                                    <div class="row">
                                      <div class="input-field col s6">
                                            <input id="full_name" type="text" class="validate">
                                            <label for="first_name">Full Name</label>
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
                                            <input id="c contact" type="text" class="validate">
                                            <label for="password">Contact</label>
                                          </div>
                                    </div>

                                    <div class="row">
                                          <div class="input-field col s6">
                                            <input id="cnfrmpswd" type="password" class="validate">
                                            <label for="password">Confirm Password</label>
                                          </div>
                                          <div class="input-field col s6">
                                               <a href="#" id="download-button" class="waves-effect btn-large hoverable green accent-8">Submit</a>
                                          </div>
                                    </div>
                                </form>
                              </div>
                          </div>
                      </div>
                  </div>   
                     `; this.reRender(`${html}`,document.getElementById("registration1"));
                      this.showRegistration();   
                  }

           video(){
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
                      this.reRender(`${html}`,document.getElementById("video"));
                     this.showVideo();   

                 }


                 minifiedDesign(){

                  let html = `
  
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

                 showVideo(){
                  $b('#video').show();
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
                  $b('#video').hide();      
               }
         
              showAbout(){
                  $b('#about').show();
                    $b('#minified').hide();
                  $b('#HOme').hide();
                   $b('#video').hide();
                    $b('#registration1').hide(); 
                  $b(document).ready(function(){
                  $b('.parallax').parallax();      
              });     
          }

           showMinified(){
                   $b('#minified').show();
                   $b('#about').hide();
                   $b('#HOme').hide();
                   $b('#video').hide();
                   $b('#registration1').hide(); 
                
          }
  }

            let component = new Component();
            component.container(); 

   
