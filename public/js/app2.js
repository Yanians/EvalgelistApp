/* global $b */

"use strict"   

class App {

	constructor() {
		this.displays = [
   
			];  



			this.airplain = [
	
    ];

       this.state = [
			{
				"bind": {
					"content_plain":[],
					"plain_type":[],
					"plain_desc":[]
					
				}
			}
		];

    }
  
	render(html, component){
		component.innerHTML += html;
	}

	reRender(html, component){
		component.innerHTML = html;
	}

  
} //end of app

							class Component extends App {

								constructor(){
									super();
								}

    layOut(){

    	let html = `     
                   
<header>
                 
                      <nav>
        					       <div class="nav-wrapper blue-grey darken-2" class="button-collapse top-nav full hide-on-large-only">
                                <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons shadow-blue">menu</i></a>
                                     <ul class="right hide-on-med-and-down">
                                         &nbsp;<li><a href="Home.html"><i class="material-icons shadow-blue md-36">home</i></a></li>
                                         &nbsp;<li><a href="#"><i class="material-icons shadow-blue md-36">recent_actors</i></a></li>
                                         &nbsp;<li><a href="#"><i class="material-icons shadow-blue md-36">class</i></a></li>
                                         &nbsp;<li><a href="#"><i class="material-icons  md-36 shadow-red">help</i></a></li>
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
                                         <li><a href="Home.html">Home</a></li>
                                         <li><a href="#">Work</a></li>
                                         <li><a href="#">Settings</a></li>
                                         <li><a href="#">FAQ</a></li>
                                         <li>
                                          <a href="#helpers" onclick="component.helpers()">Helpers</a>
                                          <a href="#typography" onclick="component.typography()">typography</a>
                                          <a href="#Collapsible" onclick="component.Content()">Collapsible</a>
                                          <a href="#color"  onclick="component.color()">color</a>
                                          <a href="#Grid" onclick="component.grid()">Grid</a>
                                          <a href="#Media" onclick="component.media()">Media</a>
                                          <a href="#pulse" onclick="component.pulse()">Pulse</a>
                                          <a href="#sass" onclick="component.sass()">Sass</a>
                                          <a href="#Table" onclick="component.table()">Table</a>
                                          <a href="#Transition" onclick="component.transition()">Transition</a>
                                          <a href="#Badges" onclick="component.badges()">Badges</a>
                                          <a href="#Buttons" onclick="component.buttons()">Buttons</a>
                                          <a href="#breadCrumbse" onclick="component.breadCrumbs()">Breadcrumbs</a>
                                          <a href="#Cards"  onclick="component.cards()">Cards</a>
                                          <a href="#Chips" onclick="component.chips()">Chips</a>
                                          <a href="#Collections" onclick="component.collections()">Collection</a>
                                          <a href="#footer" onclick="component.footer()">Footer</a>
                                          <a href="#form" onclick="component.forms()">Forms</a>
                                          <a href="#Icons" onclick="component.icons()">Icons</a>
                                          <a href="#Navbar" onclick="component.navBar()">Navbar</a>
                                          <a href="#Pagination" onclick="component.pagination()">Pagination</a>
                                          <a href="#Preloader" onclick="component.preloader()">Preloader</a>
                                          <a href="#Carousel" onclick="component.()">Carousel</a>
                                          <a href="#Collapsible" onclick="component.Content()">Collapsible</a>
                                          <a href="#Dialogs" onclick="component.dialog()">Dialogs</a>
                                          <a href="#Dropdown"  onclick="component.dropdown()">Dropdown</a>
                                          <a href="#FeatureDiscovery" onclick="component.()">FeatureDiscovery</a>
                                          <a href="#Media" onclick="component.media2()">Media</a>
                                          <a href="#Modals" onclick="component.modals()">Modals</a>
                                          <a href="#Parallax" onclick="component.parallax()">Parallax</a>
                                          <a href="#Pushpin" onclick="component.pushpin()">Pushpin</a>
                                          <a href="Scrollfire" onclick="component.scrollfire()">Scrollfire</a>
                                          <a href="#Scrollspy" onclick="component.()">Scrollspy</a>
                                          <a href="#sideNav" onclick="component.sideNav()">sideNav</a>
                                          <a href="#Tabs" onclick="component.tabs()">Tabs</a>                       
                                          <a href="#Transition" onclick="component.transition()">Transition</a>                       
                                          <a href="#Waves" onclick="component.waves()">Waves</a>
                                         </li>
                                   </ul>                    
                            </div>
                      </nav>  
                  
 <div class="container">  
    <div class="row">
            <ul class="side-nav fixed sideNav-parent">

		        <li class="logo"><a href="#" class="brand-logo blue-grey darken-2">
		           <object class="flow-text"><h5 class="thin-text">Search your Choice</h5></object></a>
		       </li>

    		       <li class="search navSearch">
                    <nav>
                      <div class="nav-wrapper light-green">
                        <form>
                          <div class="input-field">
                            <input id="search" type="search" required>
                            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                            <i class="material-icons">close</i>
                          </div>
                        </form>
                      </div>
                    </nav>
		           </li>
            &nbsp;
		       <ul class="collapsible popout" data-collapsible="accordion">
              <li class="sideNav-bg">
                <div class="collapsible-header"><i class="material-icons shadow-green">label</i>CSS</div>
                  <div class="collapsible-body">
                     <span>
                        <a href="#helpers" onclick="component.helpers()">Helpers</a>
                        <a href="#typography" onclick="component.typography()">typography</a>
                        <a href="#Collapsible" onclick="component.Content()">Collapsible</a>
                        <a href="#color"  onclick="component.color()">color</a>
                        <a href="#Grid" onclick="component.grid()">Grid</a>
                        <a href="#Media" onclick="component.media()">Media</a>
                        <a href="#pulse" onclick="component.pulse()">Pulse</a>
                        <a href="#sass" onclick="component.sass()">Sass</a>
                        <a href="#Table" onclick="component.table()">Table</a>
                        <a href="#Transition" onclick="component.transition()">Transition</a>
                     </span>
                  </div>
              </li>


              <li class="sideNav-bg">
                <div class="collapsible-header"><i class="material-icons shadow-green">subject</i>Types of Camera</div>
                  <div class="collapsible-body">
                    <span>
                        <a href="#Badges" onclick="component.badges()">Badges</a>
                        <a href="#Buttons" onclick="component.buttons()">Buttons</a>
                        <a href="#breadCrumbse" onclick="component.breadCrumbs()">Breadcrumbs</a>
                        <a href="#Cards"  onclick="component.cards()">Cards</a>
                        <a href="#Grid"  onclick="component.grid()">Grid</a>
                        <a href="#Chips" onclick="component.chips()">Chips</a>
                        <a href="#Collections" onclick="component.collections()">Collections</a>
                        <a href="#footer" onclick="component.footer()">Footer</a>
                        <a href="#form" onclick="component.forms()">Form</a>
                        <a href="#Icons" onclick="component.icons()">Icons</a>
                        <a href="#Navbar" onclick="component.navBar()">Navbar</a>
                        <a href="#Pagination" onclick="component.pagination()">Pagination</a>
                        <a href="#Preloader" onclick="component.preloader()">Preloader</a>
                     </span>
                  </div>
              </li>


              <li class="sideNav-bg">
                <div class="collapsible-header"><i class="material-icons shadow-green">whatshot</i>Types of Router</div>
                <div class="collapsible-body">
                   <span>
                        <a href="#Carousel" onclick="component.carousel()">Carousel</a>
                        <a href="#Collapsible" onclick="component.Content()">Collapsible</a>
                        <a href="#Dialogs" onclick="component.dialog()">Dialogs</a>
                        <a href="#Dropdown"  onclick="component.dropdown()">Dropdown</a>
                        <a href="#FeatureDiscovery" onclick="component.discovery()">FeatureDiscovery</a>
                        <a href="#Media" onclick="component.media2()">Media</a>
                        <a href="#Modals" onclick="component.modals()">Modals</a>
                        <a href="#Parallax" onclick="component.parallax()">Parallax</a>
                        <a href="#Pushpin" onclick="component.pushpin()">Pushpin</a>
                        <a href="#Scrollfire" onclick="component.scrollfire()">Scrollfire</a>
                        <a href="#Scrollspy" onclick="component.()">Scrollspy</a>
                        <a href="#sideNav" onclick="component.sidenav()">sideNav</a>
                        <a href="#Tabs" onclick="component.tabs()">Tabs</a>                       
                        <a href="#Transition" onclick="component()">Transition</a>                       
                        <a href="#Waves" onclick="component.waves()">Waves</a>                                              
                   </span>
                </div>
              </li>
            </ul>

            </ul>
        </div>     
   </div>   
</header>

               
                        <div class="inner-container">
                           <div class="row">
                                <div class="col s2 m2 l2"></div>
                                    <div class="col s10 m10 l10">
		                                  <div id="content"></div>
                                      <div id="typography"></div>
                                      <div id="color"></div>
                                      <div id="grid"></div>
                                      <div id="helpers"></div>
                                      <div id="media"></div>
                                      <div id="pulse"></div>
                                      <div id="sass"></div>
                                      <div id="table"></div>
                                      <div id="transition"></div>

                                      <div id="badges"></div>
                                      <div id="buttons"></div>
                                      <div id="breadCrumbs"></div>
                                      <div id="cards"></div>
                                      <div id="chips"></div>
                                      <div id="collections"></div>
                                      <div id="footer"></div>
                                      <div id="forms"></div>
                                      <div id="icons"></div>
                                      <div id="navBar"></div>
                                      <div id="pagination"></div>
                                      <div id="preloader"></div>

                                      <div id="modals"></div>
                                      <div id="parallax"></div>
                                      <div id="dropdown"></div>
                                      <div id="dialog"></div>
                                      <div id="pushpin"></div>
                                      <div id="media2"></div>
                                      <div id="sidenav"></div>
                                      <div id="scrollfire"></div>
                                      <div id="tabs"></div>
                                      <div id="waves"></div>
                                      <div id="carousel"></div>
                                      <div id="discovery"></div>
                                  </div>
                              
                          </div>
                        </div>
                
<section>
   <footer class="page-footer blue-grey darken-2">
	      <div class="container">
	         <div class="row footer-adjust">  
              <div class="col l3"></div>
                  <div class="col s12 m4 l3">
                    <h5 class="white-text">Help Materialize Grow</h5>
                       <p class="grey-text text-lighten-4">We hope you have enjoyed using Materialize! If you feel Materialize has helped you out and want to support the team, send us over a donation! Any amount would help support and continue development on this project and is greatly appreciated.</p>
                       <form id="paypal-donate" action="" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_s-xclick">
                            <input type="hidden" name="encrypted" value="">
                            <button class="btn waves-effect waves-light red lighten-3" type="submit" name="action" alt="PayPal - The safer, easier way to pay online!">Donate Now
                            </button>
                        </form>
                  </div>

                    <div class="col s12 m4 l3">
                      <h5 class="white-text">Join the Discussion</h5>
                        <p class="grey-text text-lighten-4">We have a Gitter chat room set up where you can talk directly with us. Come in and discuss new features, future goals, general problems or questions, or anything else you can think of.</p>
                          <a class="btn waves-effect waves-light red lighten-3" target="_blank" href="">Chat</a>
                    </div>

                     <div class="col s12 m4 l3" style="overflow: hidden;">
                        <h5 class="white-text">Connect</h5>
                       <!-- <iframe src="" allowtransparency="true" frameborder="0" scrolling="0" width="170" height="30"></iframe> -->
                       
                        <a href="https://twitter.com/MaterializeCSS" class="twitter-follow-button" data-show-count="true" data-size="large" data-dnt="true">Follow @MaterializeCSS</a>
                        
                        <div class="g-follow" data-annotation="bubble" data-height="24" data-href="" data-rel="publisher"></div>
                    </div>
                </div>
             </div>

                   <div class="footer-copyright">
                      <div class="container">
                          © 2014-2017 Materialize, All rights reserved.
                      <a class="grey-text text-lighten-4 right" href="">MIT License</a>
                      </div>
                   </footer>
       </section>
    		`;
    	this.reRender(`
    	${html}`	  
    		,document.getElementById("app1"));
    	this.Content();
      // $b(".button-collapse").sideNAv();
    }

   
	Content(){ // use for Search
		let html = ``;
			html+= `
        <main>
          <div class="container">
            <div clas"="row">             
    <div class="col s12 m9 l10">

      <div id="introduction" class="section scrollspy">
        <h4>Introduction</h4>
        <p class="caption">
          Collapsibles are accordion elements that expand when clicked on. They allow you to hide content that is not immediately relevant to the user.
        </span>
        <ul class="collapsible collapsible-accordion" data-collapsible="accordion">
          <li>
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
          </li>
        </ul>
      </div>

      <div id="popout" class="section scrollspy">
        <h4>Popout</h4>
         <p class="caption">
          To create a popout collapsible, just add the class <code class="language-markup">popout</code>.
        </span>
        <ul class="collapsible popout collapsible-accordion" data-collapsible="accordion">
          <li>
            <div class="collapsible-header"><i class="material-icons">subtitles</i>First</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
          </li>
          <li>
            <div class="collapsible-header active"><i class="material-icons">games</i>Second</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">library_books</i>Third</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
          </li>
        </ul>
        <pre><code class="language-markup">
  &lt;ul class="collapsible popout" data-collapsible="accordion">
        </code></pre>
      </div>



      <div id="structure" class="section scrollspy">
        <h4>Collapsible HTML Structure</h4>
        <pre><code class="language-markup">
  &lt;ul class="collapsible" data-collapsible="accordion">
    &lt;li>
      &lt;div class="collapsible-header">&lt;i class="material-icons">filter_drama&lt;/i>First&lt;/div>
      &lt;div class="collapsible-body">&lt;span>Lorem ipsum dolor sit amet.&lt;/span>&lt;/div>
    &lt;/li>
    &lt;li>
      &lt;div class="collapsible-header">&lt;i class="material-icons">place&lt;/i>Second&lt;/div>
      &lt;div class="collapsible-body">&lt;span>Lorem ipsum dolor sit amet.&lt;/span>&lt;/div>
    &lt;/li>
    &lt;li>
      &lt;div class="collapsible-header">&lt;i class="material-icons">whatshot&lt;/i>Third&lt;/div>
      &lt;div class="collapsible-body">&lt;span>Lorem ipsum dolor sit amet.&lt;/span>&lt;/div>
    &lt;/li>
  &lt;/ul>
        </code></pre>
      </div>

      <div id="intialization" class="section scrollspy">
        <h4>Initialization</h4>
        <span>Collapsible elements only need initialization if they are added dynamically. You can also pass in options inside the initialization, however this can be done in the HTML markup as well.</span>
        <pre><code class="language-javascript">
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
        </code></pre>

        <br><br>
        <h5>Preselected Section</h5>
        <span>If you want a collapsible with a preopened section just add the <code class="language-markup">active</code> class to the collapsible-header. </span>
        <ul class="collapsible collapsible-accordion" data-collapsible="accordion">
          <li>
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
          </li>
          <li>
            <div class="collapsible-header active"><i class="material-icons">place</i>Second</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
          </li>
        </ul>
        <pre><code class="language-markup">
  &lt;div class="collapsible-header active">&lt;i class="mdi-maps-place">&lt;/i>Second&lt;/div>
        </code></pre>
      </div>

      <div id="options" class="scrollspy section">
        <h4>Options</h4>
        <span>You can customize the behavior of each collapsible using these options. For example, you can call a custom function to run when a collapsbile is opened or closed. The function passes the <span class="language-markup">li</span> element that was opened or closed as an argument.</span>
        <pre><code class="language-javascript">
  $('.collapsible').collapsible({
    accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    onOpen: function(el) { alert('Open'); }, // Callback for Collapsible open
    onClose: function(el) { alert('Closed'); } // Callback for Collapsible close
  });
        </code></pre>
      </div>

      <div id="methods" class="scrollspy section">
        <h4>Methods</h4>
        <span>You can programmatically open and close collapsibles through these methods. The second parameter is the 0-based index of the collapsible you want to open.</span>
        <pre><code class="language-javascript">
  // Open
  $('.collapsible').collapsible('open', 0);

  // Close
  $('.collapsible').collapsible('close', 0);

  // Destroy
  $('.collapsible').collapsible('destroy');
        </code></pre>
        <br><br>

        <h4>Collapsible Types</h4>
        <span>There are two ways a collapsible can behave. It can either allow multiple sections to stay open, or it can only allow one section to stay open at a time, which is called an accordion. See below for a demo of each type</span>
      </div>

      <div id="accordion" class="section scrollspy">
        <div class="row">
          <div class="col s12 m3"><h5 class="light">Accordion</h5></div>
          <div class="col s12 m9">
            <ul class="collapsible" data-collapsible="accordion">
              <li>
                <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span></div>
              </li>
              <li>
                <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
              </li>
              <li>
                <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
              </li>
            </ul>
          </div>
          <div class="col s12 m9 offset-m3">
            <span>This is default behavior, but you can explicitly set it by setting the <code class="language-markup">data-collapsible</code> attribute in HTML.</span>
            <pre><code class="language-markup">
    &lt;ul class="collapsible" data-collapsible="accordion">
            </code></pre>
          </div>
        </div>
      </div>
      <div id="expandable" class="section scrollspy">
        <div class="row">
          <div class="col s12 m3"><h5 class="light">Expandable</h5></div>
          <div class="col s12 m9">
            <ul class="collapsible" data-collapsible="expandable">
              <li>
                <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
              </li>
              <li>
                <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
              </li>
              <li>
                <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
              </li>
            </ul>
          </div>
          <div class="col s12 m9 offset-m3">
            <pre><code class="language-markup">
  &lt;ul class="collapsible" data-collapsible="expandable">
            </code></pre>
          </div>
        </div>
      </div>

    </div>


    <!-- Table of Contents -->

    <div class="col hide-on-small-only m3 l2 fixed">
      <div class="toc-wrapper fixed">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="./js/carbon.js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#popout">Popout</a></li>
            <li><a href="#structure">Structure</a></li>
            <li><a href="#intialization">Initialization</a></li>
            <li><a href="#options">Options</a></li>
            <li><a href="#methods">Methods</a></li>
            <li><a href="#accordion">Accordion</a></li>
            <li><a href="#expandable">Expandable</a></li>
          </ul>
        </div>
      </div>
    </div>
     `;		
		this.reRender(`
			${html}
			`,document.getElementById("content"));	
		   this.showContent();
	}

    
                typography(){

                  let html = `
<main><div class="container">
  <div class="row">
    <div class="col s12 m9 l10">
      <div class="section">
        <div id="roboto" class="scrollspy">
          <h2 class="header">Roboto 2.0</h2>
          <p class="caption">
            The standard font Material Design uses is Roboto. We have included the font files with our framework.
          </p>
          <div class="row">
            <p class="col s12 m4">We bundle our framework with the latest iteration of Roboto Google has released. It comes with 5 different font weights you can use: 100, 300, 400, 500, 600.<br> <br> Here is an image from Google's Roboto Specimen document displaying the different font weights.</p>
            <img class="col s12 m8" src="http://material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7SW9CUzR4MnRpOTg/style_typography_roboto1.png">
          </div>

          <h4>Removing Roboto</h4>
          <p>In case you don't want to use Roboto on your webpage, fear not. Simply change the font stack by modifying the code below to your liking and add it to your custom css.</p>
        <pre><code class="language-css">
  html {
    font-family: GillSans, Calibri, Trebuchet, sans-serif;
  }
        </code></pre>
      </div>


        <div id="headers" class="section scrollspy">
          <h2 class="header">Headers</h2>
          <p>We provide some basic styling on header tags. In the example, you can see the the 6 header tags' different sizes.</p>
          <div class="card-panel">
            <h1>Heading h1</h1>
            <h2>Heading h2</h2>
            <h3>Heading h3</h3>
            <h4>Heading h4</h4>
            <h5>Heading h5</h5>
            <h6>Heading h6</h6>
          </div>
        </div>

        <div id="blockquote" class="section scrollspy">
          <h2 class="header">Blockquotes</h2>
          <p>
            Blockquotes are mainly used to give emphasis to a quote or citation. You can also use these for some extra text hierarchy and emphasis.
            </p>
          <blockquote>
            This is an example quotation that uses the blockquote tag.
            <br>Here is another line to make it look bigger.
          </blockquote>
          <pre><code class="language-markup">
    &lt;blockquote>
      This is an example quotation that uses the blockquote tag.
    &lt;/blockquote>
          </code></pre>
        </div>

        <div id="flow" class="section scrollspy">
          <h2 class="header">Flow Text</h2>
          <a id="flow-toggle" class="btn waves-effect waves-light">Toggle flow-text</a>
          <div id="flow-text-demo" class="card-panel">
          <p class="flow-text">
          One common flaw we've seen in many frameworks is a lack of support for truly responsive text. While elements on the page resize fluidly, text still resizes on a fixed basis. To ameliorate this problem, for text heavy pages, we've created a class that fluidly scales text size and line-height to optimize readability for the user. Line length stays between 45-80 characters and line height scales to be larger on smaller screens.</p>
          <p class="flow-text">To see Flow Text in action, slowly resize your browser and watch the size of this text body change! Use the button above to toggle off/on flow-text to see the difference!</p>
          </div>

          <br>

          <p>To use flow-text on a body of text, simply just add the class <code class="language-markup">flow-text</code> to a tag, see the code below.</p>
          <div class="row">
          <pre><code class="language-markup col s12">
    &lt;p class="flow-text">I am Flow Text&lt;/p>
          </code></pre>
          </div>
        </div>

      </div>

    </div>
    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#roboto">Roboto</a></li>
            <li><a href="#headers">Headers</a></li>
            <li><a href="#blockquote">Blockquotes</a></li>
            <li><a href="#flow">Flow Text</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div> <!-- End Container -->


                  `;
                      this.reRender(`${html}`,document.getElementById("typography"));
                     this.showTypography();  
                }

         color(){
         
             let html = `
<main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

      <div id="color-usage" class="section scrollspy">
        <h2 class="header">Usage</h2>
        <p class="caption">
        Here is a color palette based on the material design base colors. Each of these colors is defined with a base color class and an optional lighten or darken class.
        </p>
        <div class="row section">
          <h5 class="col s12 m3">Background Color</h5>
          <div class="col s12 m9">
            <p>To apply a background color, just add the color name and light/darkness as a class to the element.</p>
            <div class="card-panel teal lighten-2">This is a card panel with a teal lighten-2 class</div>
            <pre><code class="language-markup">
    &lt;div class="card-panel teal lighten-2">This is a card panel with a teal lighten-2 class&lt;/div>
            </code></pre>
          </div>

          <br>

          <h5 class="col s12 m3">Text Color</h5>
          <div class="col s12 m9">
            <p>To apply a text color, just append <code class="languague-markup">-text</code> to the color class like this:</p>
            <div class="card-panel"><span class="blue-text text-darken-2">This is a card panel with dark blue text</span></div>
            <pre><code class="language-markup">
    &lt;div class="card-panel">
      &lt;span class="blue-text text-darken-2">This is a card panel with dark blue text&lt;/span>
    &lt;/div>
            </code></pre>
          </div>
        </div>
      </div>

      <div id="sass" class="section scrollspy">
        <h2 class="header">Sass</h2>
        <p>
        For background colors, you can apply the color simply by extending the classes like the example below.
        </p>
        <pre><code class="language-scss col s12">
  .ilike-blue-container {
    @extend .blue, .lighten-4;
  }
        </code></pre>

        <p>
        For changing text color, you can apply the color simply by extending the classes like the example below.
        </p>
        <pre><code class="language-scss col s12">
  .ilike-blue-container {
    @extend .blue-text, .text-lighten-4;
  }
        </code></pre>
      </div>
      <div id="palette" class="section scrollspy">

        <h2 class="header">Color Palette</h2>
        <div class="row dynamic-color">
          <div class="col s2">
            <div class="red lighten-5"></div>
            <div class="red lighten-4"></div>
            <div class="red lighten-3"></div>
            <div class="red lighten-2"></div>
            <div class="red lighten-1"></div>
            <div class="red"></div>
            <div class="red darken-1"></div>
            <div class="red darken-2"></div>
            <div class="red darken-3"></div>
            <div class="red darken-4"></div>
            <div class="red accent-1"></div>
            <div class="red accent-2"></div>
            <div class="red accent-3"></div>
            <div class="red accent-4"></div>
          </div>

          <div class="col s2">
            <div class="pink lighten-5"></div>
            <div class="pink lighten-4"></div>
            <div class="pink lighten-3"></div>
            <div class="pink lighten-2"></div>
            <div class="pink lighten-1"></div>
            <div class="pink"></div>
            <div class="pink darken-1"></div>
            <div class="pink darken-2"></div>
            <div class="pink darken-3"></div>
            <div class="pink darken-4"></div>
            <div class="pink accent-1"></div>
            <div class="pink accent-2"></div>
            <div class="pink accent-3"></div>
            <div class="pink accent-4"></div>
          </div>
          <div class="col s2">
            <div class="purple lighten-5"></div>
            <div class="purple lighten-4"></div>
            <div class="purple lighten-3"></div>
            <div class="purple lighten-2"></div>
            <div class="purple lighten-1"></div>
            <div class="purple"></div>
            <div class="purple darken-1"></div>
            <div class="purple darken-2"></div>
            <div class="purple darken-3"></div>
            <div class="purple darken-4"></div>
            <div class="purple accent-1"></div>
            <div class="purple accent-2"></div>
            <div class="purple accent-3"></div>
            <div class="purple accent-4"></div>
          </div>
          <div class="col s2 m6 l4">
            <div class="deep-purple lighten-5"></div>
            <div class="deep-purple lighten-4"></div>
            <div class="deep-purple lighten-3"></div>
            <div class="deep-purple lighten-2"></div>
            <div class="deep-purple lighten-1"></div>
            <div class="deep-purple"></div>
            <div class="deep-purple darken-1"></div>
            <div class="deep-purple darken-2"></div>
            <div class="deep-purple darken-3"></div>
            <div class="deep-purple darken-4"></div>
            <div class="deep-purple accent-1"></div>
            <div class="deep-purple accent-2"></div>
            <div class="deep-purple accent-3"></div>
            <div class="deep-purple accent-4"></div>
          </div>
          <div class="col s2 m6 l4">
            <div class="indigo lighten-5"></div>
            <div class="indigo lighten-4"></div>
            <div class="indigo lighten-3"></div>
            <div class="indigo lighten-2"></div>
            <div class="indigo lighten-1"></div>
            <div class="indigo"></div>
            <div class="indigo darken-1"></div>
            <div class="indigo darken-2"></div>
            <div class="indigo darken-3"></div>
            <div class="indigo darken-4"></div>
            <div class="indigo accent-1"></div>
            <div class="indigo accent-2"></div>
            <div class="indigo accent-3"></div>
            <div class="indigo accent-4"></div>
          </div>
          <div class="col s2 m6 l4">
            <div class="blue lighten-5"></div>
            <div class="blue lighten-4"></div>
            <div class="blue lighten-3"></div>
            <div class="blue lighten-2"></div>
            <div class="blue lighten-1"></div>
            <div class="blue"></div>
            <div class="blue darken-1"></div>
            <div class="blue darken-2"></div>
            <div class="blue darken-3"></div>
            <div class="blue darken-4"></div>
            <div class="blue accent-1"></div>
            <div class="blue accent-2"></div>
            <div class="blue accent-3"></div>
            <div class="blue accent-4"></div>
          </div>
          <div class="col s2 m6 l4">
            <div class="light-blue lighten-5"></div>
            <div class="light-blue lighten-4"></div>
            <div class="light-blue lighten-3"></div>
            <div class="light-blue lighten-2"></div>
            <div class="light-blue lighten-1"></div>
            <div class="light-blue"></div>
            <div class="light-blue darken-1"></div>
            <div class="light-blue darken-2"></div>
            <div class="light-blue darken-3"></div>
            <div class="light-blue darken-4"></div>
            <div class="light-blue accent-1"></div>
            <div class="light-blue accent-2"></div>
            <div class="light-blue accent-3"></div>
            <div class="light-blue accent-4"></div>
          </div>
          <div class="col s2 m6 l4">
            <div class="cyan lighten-5"></div>
            <div class="cyan lighten-4"></div>
            <div class="cyan lighten-3"></div>
            <div class="cyan lighten-2"></div>
            <div class="cyan lighten-1"></div>
            <div class="cyan"></div>
            <div class="cyan darken-1"></div>
            <div class="cyan darken-2"></div>
            <div class="cyan darken-3"></div>
            <div class="cyan darken-4"></div>
            <div class="cyan accent-1"></div>
            <div class="cyan accent-2"></div>
            <div class="cyan accent-3"></div>
            <div class="cyan accent-4"></div>
          </div>
          <div class="col s2 m6 l4">
            <div class="teal lighten-5"></div>
            <div class="teal lighten-4"></div>
            <div class="teal lighten-3"></div>
            <div class="teal lighten-2"></div>
            <div class="teal lighten-1"></div>
            <div class="teal"></div>
            <div class="teal darken-1"></div>
            <div class="teal darken-2"></div>
            <div class="teal darken-3"></div>
            <div class="teal darken-4"></div>
            <div class="teal accent-1"></div>
            <div class="teal accent-2"></div>
            <div class="teal accent-3"></div>
            <div class="teal accent-4"></div>
          </div>
          <div class="col s2 m6 l4">
            <div class="green lighten-5"></div>
            <div class="green lighten-4"></div>
            <div class="green lighten-3"></div>
            <div class="green lighten-2"></div>
            <div class="green lighten-1"></div>
            <div class="green"></div>
            <div class="green darken-1"></div>
            <div class="green darken-2"></div>
            <div class="green darken-3"></div>
            <div class="green darken-4"></div>
            <div class="green accent-1"></div>
            <div class="green accent-2"></div>
            <div class="green accent-3"></div>
            <div class="green accent-4"></div>
          </div>
          <div class="col s2 m6 l4">
            <div class="light-green lighten-5"></div>
            <div class="light-green lighten-4"></div>
            <div class="light-green lighten-3"></div>
            <div class="light-green lighten-2"></div>
            <div class="light-green lighten-1"></div>
            <div class="light-green"></div>
            <div class="light-green darken-1"></div>
            <div class="light-green darken-2"></div>
            <div class="light-green darken-3"></div>
            <div class="light-green darken-4"></div>
            <div class="light-green accent-1"></div>
            <div class="light-green accent-2"></div>
            <div class="light-green accent-3"></div>
            <div class="light-green accent-4"></div>
          </div>
          <div class="col s2 m6 l4">
            <div class="lime lighten-5"></div>
            <div class="lime lighten-4"></div>
            <div class="lime lighten-3"></div>
            <div class="lime lighten-2"></div>
            <div class="lime lighten-1"></div>
            <div class="lime"></div>
            <div class="lime darken-1"></div>
            <div class="lime darken-2"></div>
            <div class="lime darken-3"></div>
            <div class="lime darken-4"></div>
            <div class="lime accent-1"></div>
            <div class="lime accent-2"></div>
            <div class="lime accent-3"></div>
            <div class="lime accent-4"></div>
          </div>
          <div class="col s2 m6 l4">
            <div class="yellow lighten-5"></div>
            <div class="yellow lighten-4"></div>
            <div class="yellow lighten-3"></div>
            <div class="yellow lighten-2"></div>
            <div class="yellow lighten-1"></div>
            <div class="yellow"></div>
            <div class="yellow darken-1"></div>
            <div class="yellow darken-2"></div>
            <div class="yellow darken-3"></div>
            <div class="yellow darken-4"></div>
            <div class="yellow accent-1"></div>
            <div class="yellow accent-2"></div>
            <div class="yellow accent-3"></div>
            <div class="yellow accent-4"></div>
          </div>
          <div class="col s2 m6 l4">
            <div class="amber lighten-5"></div>
            <div class="amber lighten-4"></div>
            <div class="amber lighten-3"></div>
            <div class="amber lighten-2"></div>
            <div class="amber lighten-1"></div>
            <div class="amber"></div>
            <div class="amber darken-1"></div>
            <div class="amber darken-2"></div>
            <div class="amber darken-3"></div>
            <div class="amber darken-4"></div>
            <div class="amber accent-1"></div>
            <div class="amber accent-2"></div>
            <div class="amber accent-3"></div>
            <div class="amber accent-4"></div>
          </div>
          <div class="col s2 m6 l4">
            <div class="orange lighten-5"></div>
            <div class="orange lighten-4"></div>
            <div class="orange lighten-3"></div>
            <div class="orange lighten-2"></div>
            <div class="orange lighten-1"></div>
            <div class="orange"></div>
            <div class="orange darken-1"></div>
            <div class="orange darken-2"></div>
            <div class="orange darken-3"></div>
            <div class="orange darken-4"></div>
            <div class="orange accent-1"></div>
            <div class="orange accent-2"></div>
            <div class="orange accent-3"></div>
            <div class="orange accent-4"></div>
          </div>
          <div class="col s2 m6 l4">
            <div class="deep-orange lighten-5"></div>
            <div class="deep-orange lighten-4"></div>
            <div class="deep-orange lighten-3"></div>
            <div class="deep-orange lighten-2"></div>
            <div class="deep-orange lighten-1"></div>
            <div class="deep-orange"></div>
            <div class="deep-orange darken-1"></div>
            <div class="deep-orange darken-2"></div>
            <div class="deep-orange darken-3"></div>
            <div class="deep-orange darken-4"></div>
            <div class="deep-orange accent-1"></div>
            <div class="deep-orange accent-2"></div>
            <div class="deep-orange accent-3"></div>
            <div class="deep-orange accent-4"></div>
          </div>
          <div class="col s2 m6 l4">
            <div class="brown lighten-5"></div>
            <div class="brown lighten-4"></div>
            <div class="brown lighten-3"></div>
            <div class="brown lighten-2"></div>
            <div class="brown lighten-1"></div>
            <div class="brown"></div>
            <div class="brown darken-1"></div>
            <div class="brown darken-2"></div>
            <div class="brown darken-3"></div>
            <div class="brown darken-4"></div>
          </div>
          <div class="col s2 m6 l4">
            <div class="grey lighten-5"></div>
            <div class="grey lighten-4"></div>
            <div class="grey lighten-3"></div>
            <div class="grey lighten-2"></div>
            <div class="grey lighten-1"></div>
            <div class="grey"></div>
            <div class="grey darken-1"></div>
            <div class="grey darken-2"></div>
            <div class="grey darken-3"></div>
            <div class="grey darken-4"></div>
          </div>
        </div>
        <div class="row dynamic-color">
          <div class="col s2 m6 l4">
            <div class="blue-grey lighten-5"></div>
            <div class="blue-grey lighten-4"></div>
            <div class="blue-grey lighten-3"></div>
            <div class="blue-grey lighten-2"></div>
            <div class="blue-grey lighten-1"></div>
            <div class="blue-grey"></div>
            <div class="blue-grey darken-1"></div>
            <div class="blue-grey darken-2"></div>
            <div class="blue-grey darken-3"></div>
            <div class="blue-grey darken-4"></div>
          </div>
          <div class="col s2 m6 l4">
            <div class="black"></div>
            <div class="white"></div>
            <div class="transparent"></div>
          </div>          
        </div>
      </div>
    </div>
           
                            <div class="col hide-on-small-only s2 absolute">
                              <div class="toc-wrapper">
                                    <div class="buysellads hide-on-small-only">
                                      <!-- CarbonAds Zone Code -->
                                          <script async type="text/javascript" src="./js/carbon.js"></script>
                                    </div>

                                    <div style="height: 1px;">
                                        <ul class="section table-of-contents">
                                          <li><a href="#color-usage">Usage</a></li>
                                          <li><a href="#sass">Sass</a></li>
                                          <li><a href="#palette">Color Palette</a></li>
                                        </ul>
                                    </div>
                              </div>
                            </div>

             `;
                this.reRender(`${html}`,document.getElementById("color"));
                  this.showColor();
         }




         grid() {

         	  let html = `	
                      <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">


      <div>
        <div id="grid-container" class="section scrollspy">
          <p class="caption">We are using a standard 12 column fluid responsive grid system. The grid helps you layout your page in an ordered, easy fashion.</p>
          <h3 class="header">Container</h3>
          <p>The container class is not strictly part of the grid but is important in laying out content. It allows you to center your page content. The <code class="language-markup">container</code> class is set to ~70% of the window width. It helps you center and contain your page content. We use the container to contain our body content.

          <h4>Demo</h4>
          <p>Try the button below to see what the page looks like without containers</p>
          <a id="container-toggle-button" class="btn waves-effect waves-light">Turn off Containers</a>

  <!-- Container Visual Demo -->
          <div class="row">
            <div class="col s12">
              <div class='browser-window'>
                <div class='top-bar'>
                  <div class='circles'>
                     <div id="close-circle" class="circle"></div>
                     <div id="minimize-circle" class="circle"></div>
                     <div id="maximize-circle" class="circle"></div>
                  </div>
                </div>
                <div class='content'>
                  <div class="row">

                    <div id="site-layout-example-top" class="col s12">
                      <!-- <p class="flat-text-logo"></p> -->
                    </div>
                    <div id="site-layout-example-right" class="col s12">
                      <div class="container">

                        <p class="flat-text small"></p>
                        <p class="flat-text full-width"></p>
                        <p class="flat-text full-width"></p>
                        <p class="flat-text full-width"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <p>To add a container just put your content inside a <code class="language-markup">&lt;div></code> tag with a <code class="language-markup">container</code> class. Here's an example of how your page might be set up.</p>

          <pre><code class="language-markup">
    &lt;body>
      &lt;div class="container">
        &lt;!-- Page Content goes here -->
      &lt;/div>
    &lt;/body>
          </code></pre>

        </div>


        <!-- Grid visual demo -->
        <div id="grid-intro" class="scrollspy">
          <h3 class="header">Introduction</h3>
          <p>Take a look at this section to quickly understand how the grid works!</p>
          <h4>12 Columns</h4>
          <p>Our standard grid has 12 columns. No matter the size of the browser, each of these columns will always have an equal width.</p>
          <div class="row">
            <div class="col s1 grid-example"><span class="flow-text">1</span></div>
            <div class="col s1 grid-example"><span class="flow-text">2</span></div>
            <div class="col s1 grid-example"><span class="flow-text">3</span></div>
            <div class="col s1 grid-example"><span class="flow-text">4</span></div>
            <div class="col s1 grid-example"><span class="flow-text">5</span></div>
            <div class="col s1 grid-example"><span class="flow-text">6</span></div>
            <div class="col s1 grid-example"><span class="flow-text">7</span></div>
            <div class="col s1 grid-example"><span class="flow-text">8</span></div>
            <div class="col s1 grid-example"><span class="flow-text">9</span></div>
            <div class="col s1 grid-example"><span class="flow-text">10</span></div>
            <div class="col s1 grid-example"><span class="flow-text">11</span></div>
            <div class="col s1 grid-example"><span class="flow-text">12</span></div>
          </div>
          <p>To get a feel of how the grid is used in HTML, take a look at the code below which will produce a similar result to the one above.</p>
          <pre><code class="language-markup">
    &lt;div class="row">
      &lt;div class="col s1">1&lt;/div>
      &lt;div class="col s1">2&lt;/div>
      &lt;div class="col s1">3&lt;/div>
      &lt;div class="col s1">4&lt;/div>
      &lt;div class="col s1">5&lt;/div>
      &lt;div class="col s1">6&lt;/div>
      &lt;div class="col s1">7&lt;/div>
      &lt;div class="col s1">8&lt;/div>
      &lt;div class="col s1">9&lt;/div>
      &lt;div class="col s1">10&lt;/div>
      &lt;div class="col s1">11&lt;/div>
      &lt;div class="col s1">12&lt;/div>
    &lt;/div>
          </code></pre>
          <p>Note: For now, just know that the <code class="language-markup">s1</code> stands for small-1 which in plain English means "1 column on small screens".</p>

          <br>

          <h4>Columns live inside Rows</h4>
          <p>Remember when you are creating your layout that all columns must be contained inside a row and that you must add the <code class="language-markup">col</code> class to your inner divs to make them into columns</p>
          <div class="row">
            <div class="col s12 grid-example"><span class="flow-text">This div is 12-columns wide on all screen sizes</span></div>
            <div class="col s6 grid-example"><span class="flow-text">6-columns (one-half)</span></div>
            <div class="col s6 grid-example"><span class="flow-text">6-columns (one-half)</span></div>
          </div>
          <pre><code class="language-markup">
    &lt;div class="row">
      &lt;div class="col s12">This div is 12-columns wide&lt;/div>
      &lt;div class="col s6">This div is 6-columns wide&lt;/div>
      &lt;div class="col s6">This div is 6-columns wide&lt;/div>
    &lt;/div>
          </code></pre>

          <br>
        </div>

        <!-- Grid Offsets -->
        <div id="grid-offsets" class="section scrollspy">
          <h2 class="header">Offsets</h2>
          <p>To offset, simply add <code class="language-markup">offset-s2</code> to the class where <code class="language-markup">s</code> signifies the screen class-prefix (s = small, m = medium, l = large) and the number after is the number of columns you want to offset by.</p>
          <div class="row">
            <div class="col s12 grid-example"><span class="flow-text">This div is 12-columns wide on all screen sizes</span></div>
            <div class="col s6 offset-s6 grid-example"><span class="flow-text">6-columns (offset-by-6)</span></div>
          </div>
          <pre><code class="language-markup">
    &lt;div class="row">
      &lt;div class="col s12">&lt;span class="flow-text">This div is 12-columns wide on all screen sizes&lt;/span>&lt;/div>
      &lt;div class="col s6 offset-s6">&lt;span class="flow-text">6-columns (offset-by-6)&lt;/span>&lt;/div>
    &lt;/div>
          </code></pre>
        </div>

        <br>

        <!-- Grid push and pull -->
        <div id="grid-push" class="section scrollspy">
          <h2 class="header">Push and Pull</h2>
          <p>You can easily change the order of your columns with push and pull. Simply add <code class="language-markup">push-s2</code> or <code class="language-markup">pull-s2</code> to the class where <code class="language-markup">s</code> signifies the screen class-prefix (s = small, m = medium, l = large) and the number after is the number of columns you want to push or pull by.</p>
          <div class="row">
            <div class="col s7 push-s5 grid-example"><span style="font-size: 14px;">This div is 7-columns wide on pushed to the right by 5-columns.</span></div>
            <div class="col s5 pull-s7 grid-example"><span style="font-size: 14px;">5-columns wide pulled to the left by 7-columns.</span></div>
          </div>
          <pre><code class="language-markup">
    &lt;div class="row">
      &lt;div class="col s7 push-s5">&lt;span class="flow-text">This div is 7-columns wide on pushed to the right by 5-columns.&lt;/span>&lt;/div>
      &lt;div class="col s5 pull-s7">&lt;span class="flow-text">5-columns wide pulled to the left by 7-columns.&lt;/span>&lt;/div>
    &lt;/div>
          </code></pre>
        </div>

        <br>

        <!-- Creating Layouts -->
        <div id="grid-layouts" class="scrollspy">
          <h3 class="header">Creating Layouts</h3>
          <p>Here we will show you how to create some commonly used layouts with our grid system. Hopefully these will get you more comfortable with laying out elements. To keep these demos simple, the ones here will not be responsive.</p>
          <div class="row">
            <div class="col s12 m6">
              <h4>Section</h4>
              <p>The section class is used for simple top and bottom padding. Just add the <code class="language-markup">section</code> class to your div's containing large blocks of content.</p>
            </div>
            <div class="col s12 m6">
              <h4>Divider</h4>
              <p>Dividers are 1 pixel lines that help break up your content. Just add the <code class="language-markup">divider</code> to a div in between your content.</p>
            </div>
          </div>

          <h4>Example Sections and Dividers</h4>
          <div class="divider"></div>
          <div class="section">
            <h5>Section 1</h5>
            <p>Stuff</p>
          </div>
          <div class="divider"></div>
          <div class="section">
            <h5>Section 2</h5>
            <p>Stuff</p>
          </div>
          <div class="divider"></div>
          <div class="section">
            <h5>Section 3</h5>
            <p>Stuff</p>
          </div>
          <div class="divider"></div>
          <pre><code class="language-markup">
  &lt;div class="divider">&lt;/div>
  &lt;div class="section">
    &lt;h5>Section 1&lt;/h5>
    &lt;p>Stuff&lt;/p>
  &lt;/div>
  &lt;div class="divider">&lt;/div>
  &lt;div class="section">
    &lt;h5>Section 2&lt;/h5>
    &lt;p>Stuff&lt;/p>
  &lt;/div>
  &lt;div class="divider">&lt;/div>
  &lt;div class="section">
    &lt;h5>Section 3&lt;/h5>
    &lt;p>Stuff&lt;/p>
  &lt;/div>
          </code></pre><br>

          <h4>Example Promotion Table</h4>
          <p>If we want 3 divs that are equal size, we define the divs with a width of 4-columns, as 4+4+4 nicely adds up to 12. Inside those divs, we can put our content. Take our front page content for example. We've modified it slightly for the sake of this example.</p>
          <div class="row">
            <div class="col s4">
              <div class="center promo promo-example">
                <i class="material-icons">flash_on</i>
                <p class="promo-caption">Speeds up development</p>
                <p class="light center">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components.</p>
              </div>
            </div>
            <div class="col s4">
              <div class="center promo promo-example">
                <i class="material-icons">group</i>
                <p class="promo-caption">User Experience Focused</p>
                <p class="light center">By utilizing elements and principles of Material Design, we were able to create a framework that focuses on User Experience.</p>
              </div>
            </div>
            <div class="col s4">
              <div class="center promo promo-example">
                <i class="material-icons">settings</i>
                <p class="promo-caption">Easy to work with</p>
                <p class="light center">We have provided detailed documentation as well as specific code examples to help new users get started.</p>
              </div>
            </div>
          </div>

          <pre><code class="language-markup">
    &lt;div class="row">

      &lt;div class="col s4">
        &lt;!-- Promo Content 1 goes here -->
      &lt;/div>
      &lt;div class="col s4">
        &lt;!-- Promo Content 2 goes here -->
      &lt;/div>
      &lt;div class="col s4">
        &lt;!-- Promo Content 3 goes here -->
      &lt;/div>

    &lt;/div>
          </code></pre>

          <br>

          <h4>Example Side Navigation Layout</h4>
          <p>You can see how easy it is to create layouts using the grid system. Just remember to make sure your column numbers add up to 12 for an even layout.</p>

          <div class="row">
            <div class="col s12">
              <div class='browser-window'>
                <div class='top-bar'>
                  <div class='circles'>
                     <div id="close-circle" class="circle"></div>
                     <div id="minimize-circle" class="circle"></div>
                     <div id="maximize-circle" class="circle"></div>
                  </div>
                </div>
                <div class='content'>
                  <div class="row">

                    <div id="site-layout-example-top" class="col s12">
                      <!-- <p class="flat-text-logo"></p> -->
                    </div>
                    <div id="site-layout-example-left" class="col s3">
                      <p class="flat-text-header"></p>
                      <p class="flat-text"></p>
                      <p class="flat-text"></p>
                    </div>
                    <div id="site-layout-example-right" class="col s9">
                      <p class="flat-text"></p>
                      <p class="flat-text"></p>
                      <p class="flat-text"></p>
                      <p class="flat-text"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <pre><code class="language-markup">
    &lt;!-- Navbar goes here -->

    &lt;!-- Page Layout here -->
    &lt;div class="row">

      &lt;div class="col s3">
        &lt;!-- Grey navigation panel -->
      &lt;/div>

      &lt;div class="col s9">
        &lt;!-- Teal page content  -->
      &lt;/div>

    &lt;/div>
          </code></pre>
        </div>


        <!-- Creating Responsive Layouts -->
        <div id="grid-responsive" class="scrollspy">
          <h3 class="header">Creating Responsive Layouts</h3>
          <p>Above we showed you how to layout elements using our grid system. Now we'll show you how to design your layouts so that they look great on all screen sizes.</p>
          <h4>Screen Sizes</h4>
          <table class="highlight">
            <thead>
              <tr>
                  <th></th>
                  <th data-field="id">Mobile Devices <br>&lt;= 600px</th>
                  <th data-field="name">Tablet Devices <br>&gt; 600px</th>
                  <th data-field="price">Desktop Devices <br>&gt; 992px</th>
                  <th data-field="price">Large Desktop Devices <br>&gt; 1200px</th>
              </tr>
            </thead>
              <tbody>
              <tr>
                <td><strong>Class Prefix</strong></td>
                <td><code class="language-markup">.s</code></td>
                <td><code class="language-markup">.m</code></td>
                <td><code class="language-markup">.l</code></td>
                <td><code class="language-markup">.xl</code></td>
              </tr>
              <tr>
                <td><strong>Container Width</strong></td>
                <td>90%</td>
                <td>85%</td>
                <td>70%</td>
                <td>70%</td>
              </tr>
              <tr>
                <td><strong>Number of Columns</strong></td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
              </tr>
            </tbody>
          </table>

          <br>

          <h4>Adding Responsiveness</h4>
          <p>In the previous examples, we only defined the size for small screens using <code class="language-markup">"col s12"</code>. This is fine if we want a fixed layout since the rules propagate upwards. By just saying s12, we are essentially saying <code class="language-markup">"col s12 m12 l12"</code>. But by explicitly defining the size we can make our website more responsive.</p>

          <div class="row">
            <div class="grid-example col s12 teal lighten-2"><span class="flow-text">I am always full-width (col s12)</span></div>
            <div class="grid-example col s12 m6 teal lighten-2"><span class="flow-text">I am full-width on mobile (col s12 m6)</span></div>
          </div>
          <pre><code class="language-markup">
    &lt;div class="row">
      &lt;div class="grid-example col s12">&lt;span class="flow-text">I am always full-width (col s12)&lt;/span>&lt;/div>
      &lt;div class="grid-example col s12 m6">&lt;span class="flow-text">I am full-width on mobile (col s12 m6)&lt;/span>&lt;/div>
    &lt;/div>
          </code></pre>

          <br>

          <h4>Responsive Side Navigation Layout</h4>
          <p>In this example below, we take the same layout from above, but we make it responsive by defining how many columns the div should take up on each screen size. Try resizing your browser and watch the layout change below.</p>

          <div class="row">
            <div class="col s12">
              <div class='browser-window'>
                <div class='top-bar'>
                  <div class='circles'>
                     <div id="close-circle" class="circle"></div>
                     <div id="minimize-circle" class="circle"></div>
                     <div id="maximize-circle" class="circle"></div>
                  </div>
                </div>
                <div class='content'>
                  <div class="row">

                    <div id="site-layout-example-top" class="col s12">
                      <!-- <p class="flat-text-logo"></p> -->
                    </div>
                    <div id="site-layout-example-left" class="col s12 m4 l3">
                      <p class="flat-text-header"></p>
                      <p class="flat-text"></p>
                      <p class="flat-text"></p>
                    </div>
                    <div id="site-layout-example-right" class="col s12 m8 l9">
                      <p class="flat-text"></p>
                      <p class="flat-text"></p>
                      <p class="flat-text"></p>
                      <p class="flat-text"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <pre><code class="language-markup">
    &lt;!-- Navbar goes here -->

    &lt;!-- Page Layout here -->
    &lt;div class="row">

      &lt;div class="col s12 m4 l3"> &lt;!-- Note that "m4 l3" was added -->
        &lt;!-- Grey navigation panel

              This content will be:
          3-columns-wide on large screens,
          4-columns-wide on medium screens,
          12-columns-wide on small screens  -->

      &lt;/div>

      &lt;div class="col s12 m8 l9"> &lt;!-- Note that "m8 l9" was added -->
        &lt;!-- Teal page content

              This content will be:
          9-columns-wide on large screens,
          8-columns-wide on medium screens,
          12-columns-wide on small screens  -->

      &lt;/div>

    &lt;/div>
          </code></pre>

          <h4>More Responsive Grid Examples</h4>
          <div class="row">
            <div class="col grid-example s12 blue lighten-1"><span class="flow-text">s12</span></div>
            <div class="col grid-example s12 m4 l2 teal lighten-1"><span class="flow-text">s12 m4 l2</span></div>
            <div class="col grid-example s12 m4 l8 teal lighten-1"><span class="flow-text">s12 m4 l8</span></div>
            <div class="col grid-example s12 m4 l2 teal lighten-1"><span class="flow-text">s12 m4 l2</span></div>
            <div class="col grid-example s12 m6 l3 purple lighten-3"><span class="flow-text">s12 m6 l3</span></div>
            <div class="col grid-example s12 m6 l3 purple lighten-3"><span class="flow-text">s12 m6 l3</span></div>
            <div class="col grid-example s12 m6 l3 purple lighten-3"><span class="flow-text">s12 m6 l3</span></div>
            <div class="col grid-example s12 m6 l3 purple lighten-3"><span class="flow-text">s12 m6 l3</span></div>
          </div>
          <div class="row">
            <pre><code class="language-markup col s12">
  &lt;div class="row">
    &lt;div class="col s12">&lt;p>s12&lt;/p>&lt;/div>
    &lt;div class="col s12 m4 l2">&lt;p>s12 m4&lt;/p>&lt;/div>
    &lt;div class="col s12 m4 l8">&lt;p>s12 m4&lt;/p>&lt;/div>
    &lt;div class="col s12 m4 l2">&lt;p>s12 m4&lt;/p>&lt;/div>
  &lt;/div>
  &lt;div class="row">
    &lt;div class="col s12 m6 l3">&lt;p>s12 m6 l3&lt;/p>&lt;/div>
    &lt;div class="col s12 m6 l3">&lt;p>s12 m6 l3&lt;/p>&lt;/div>
    &lt;div class="col s12 m6 l3">&lt;p>s12 m6 l3&lt;/p>&lt;/div>
    &lt;div class="col s12 m6 l3">&lt;p>s12 m6 l3&lt;/p>&lt;/div>
  &lt;/div>
            </code></pre>
          </div>
        </div>
      </div>


    </div>

    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#grid-container">Container</a></li>
            <li><a href="#grid-intro">Introduction</a></li>
            <li><a href="#grid-offsets">Offsets</a></li>
            <li><a href="#grid-push">Push and Pull</a></li>
            <li><a href="#grid-layouts">Creating Layouts</a></li>
            <li><a href="#grid-responsive">Responsive Layouts</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

    </main> 
	  
                    	      
			       `;  
                  this.reRender(`${html}`,document.getElementById("grid"));
                  this.showGrid();
         }

	helpers() {

		let html = `
		          <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

      <!--  Valign Section-->
      <div id="valign" class="section scrollspy">
        <h2 class="header">Alignment</h2>
        <p class="caption">We have easy to use classes to help you align your content.</p>

        <h5 class="light">Vertical Align</h5>
        <p>You can easily vertically center things by adding the class <code class="language-markup">valign-wrapper</code> to the container holding the items you want to vertically align.</p>
        <div class="valign-demo valign-wrapper">
          <h5>This should be vertically aligned</h5>
        </div>
        <pre><code class="language-markup">
&lt;div class="valign-wrapper">
  &lt;h5>This should be vertically aligned&lt;/h5>
&lt;/div>
        </code></pre><br>

        <h5 class="light">Text Align</h5>
        <p>These classes are for horizontally aligning content. We have <code class="language-markup">.left-align</code>, <code class="language-markup">.right-align</code> and <code class="language-markup">.center-align</code></p>
        <div class="talign-demo">
          <br>
          <h5 class="left-align">This should be left aligned</h5>
        </div>
        <br>
        <div class="talign-demo">
          <br>
          <h5 class="right-align">This should be right aligned</h5>
        </div>
        <br>
        <div class="talign-demo">
          <br>
          <h5 class="center-align">This should be center aligned</h5>
        </div>
        <pre><code class="language-markup">
  &lt;div>
    &lt;h5 class="left-align">This should be left aligned&lt;/h5>
  &lt;/div>
  &lt;div>
    &lt;h5 class="right-align">This should be right aligned&lt;/h5>
  &lt;/div>
  &lt;div>
    &lt;h5 class="center-align">This should be center aligned&lt;/h5>
  &lt;/div>
        </code></pre><br>

        <h5 class="light">Quick Floats</h5>
        <p>Quickly float things by adding the class <code class="language-markup">left</code> or <code class="language-markup">right</code> to the element. <code class="language-markup">!important</code> is used to avoid specificity issues.</p>
        <pre><code class="language-markup">
&lt;div class="left">...&lt;/div>
&lt;div class="right">...&lt;/div>
        </code></pre><br>

      </div><!--  End Valign Section  -->

      <!--  Hiding Section-->
      <div id="hiding" class="section scrollspy">
        <h2 class="header">Hiding Content</h2>
        <p>We provide easy to use classes to hide content on specific screen sizes. </p>
        <table class="striped">
          <thead>
            <tr>
              <th></th>
              <th>Screen Range</th>
            </tr>
          </thead>
            <tbody>
            <tr>
              <td><code class="language-markup"><strong>.hide</strong></code></td>
              <td>Hidden for all Devices</td>
            </tr>
            <tr>
              <td><code class="language-markup"><strong>.hide-on-small-only</strong></code></td>
              <td>Hidden for Mobile Only</td>
            </tr>
            <tr>
              <td><code class="language-markup"><strong>.hide-on-med-only</strong></code></td>
              <td>Hidden for Tablet Only</td>
            </tr>
            <tr>
              <td><code class="language-markup"><strong>.hide-on-med-and-down</strong></code></td>
              <td>Hidden for Tablet and Below</td>
            </tr>
            <tr>
              <td><code class="language-markup"><strong>.hide-on-med-and-up</strong></code></td>
              <td>Hidden for Tablet and Above</td>
            </tr>
            <tr>
              <td><code class="language-markup"><strong>.hide-on-large-only</strong></code></td>
              <td>Hidden for Desktop Only</td>
            </tr>
          </tbody>
        </table>
        <br>
        <h5 class="light">Usage</h5>
        <pre><code class="language-markup">
  &lt;div class="hide-on-small-only">&lt;/div>
        </code></pre><br>

      </div><!--  End Hiding Section  -->



      <!--  Formatting Section-->
      <div id="formatting" class="section scrollspy">
        <h2 class="header">Formatting</h2>
        <p>These classes help format various content on your site.</p>

        <h5 class="light">Truncation</h5>
        <p>To truncate long lines of text in an ellipsis, add the class <code class="language-markup">truncate</code> to the tag which contains the text. See an example below of a header being truncated inside a card.</p>

        <div class="row">
          <div class="col s6 offset-s3 m6 offset-m3">
            <div class="card-panel">
              <h4 class="truncate">This is an extremely long title that will be truncated</h4>
            </div>
          </div>
        </div>

        <pre><code class="language-markup">
  &lt;h4 class="truncate">This is an extremely long title that will be truncated&lt;/h4>
        </code></pre><br>

        <h5 class="light">Hover</h5>
        <p>The <code class="language-markup">hoverable</code> is a hover class that adds an animation for box shadow as seen below. It can be used on most elements, but meant for use on cards.</p>
        <div class="card hoverable small">
          <div class="card-image">
            <img src="./images/b1.jpg">
            <span class="card-title">Card Title</span>
          </div>
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>

        <pre><code class="language-markup">
  &lt;div class="card-panel hoverable"> Hoverable Card Panel&lt;/div>
        </code></pre>

      </div><!--  End Formatting Section  -->

      <!--  Browser Default Section-->
      <div id="browser-default" class="section scrollspy">
        <h2 class="header">Browser Defaults</h2>
        <p>Because we override many of the default browser styles and elements, we provide the <code class="language-markup">.browser-default</code> class to revert these elements to their original state.</p>

        <table class="striped">
          <thead>
            <tr>
              <th>Name of Element</th>
              <th>Reverted Style</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UL</td>
              <td>Bullet points</td>
            </tr>
            <tr>
              <td>SELECT</td>
              <td>Browser default select element</td>
            </tr>
          </tbody>
        </table>
      </div><!--  End Browser Default Section  -->


    </div>

    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#valign">Alignment</a></li>
            <li><a href="#hiding">Hiding Content</a></li>
            <li><a href="#formatting">Formatting</a></li>
            <li><a href="#browser-default">Browser Defaults</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

    </main>
     
		`;
          this.reRender(`
			${html}
			`,document.getElementById("helpers")); 
      this.showHelpers(); 
       }

         media(){

           let html = `  
                      <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

      <!-- Images -->
      <div id="images" class="section scrollspy">
        <h2 class="header">Images</h2>
        <p class="caption">Images can be styled in different ways using Materialize</p>

        <h4>Responsive Images</h4>
        <p>To make images resize responsively to page width, you can add the class <code class="language-markup">responsive-img</code> to your image tag. It will now have a <code class="language-markup">max-width: 100%</code> and <code class="language-markup">height:auto</code>.</p>
        <pre><code class="language-markup">
    &lt;img class="responsive-img" src="cool_pic.jpg">
        </code></pre>
        <h4>Circular images</h4>
        <div class="col s12 m8 offset-m2 l6 offset-l3">
          <div class="card-panel grey lighten-5 z-depth-1">
            <div class="row valign-wrapper">
              <div class="col s4 m2">
                <img src="images/yuna.jpg" alt="" class="circle responsive-img valign">
              </div>
              <div class="col s8 m10">
                <span class="black-text">
                  This is a square image. Add the "circle" class to it to make it appear circular.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s12">
            <p>To make images appear circular, simply add <code class="language-markup">class="circle"</code> to them</p>
            <pre><code class="language-markup">
      &lt;div class="col s12 m8 offset-m2 l6 offset-l3">
        &lt;div class="card-panel grey lighten-5 z-depth-1">
          &lt;div class="row valign-wrapper">
            &lt;div class="col s2">
              &lt;img src="images/yuna.jpg" alt="" class="circle responsive-img"> &lt;!-- notice the "circle" class -->
            &lt;/div>
            &lt;div class="col s10">
              &lt;span class="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              &lt;/span>
            &lt;/div>
          &lt;/div>
        &lt;/div>
      &lt;/div>
            </code></pre>
          </div>
        </div>
      </div>

      <!-- Videos Section -->
      <div id="videos" class="section scrollspy">
        <h2 class="header">Videos</h2>
        <p class="caption">We provide a container for Embedded Videos that resizes them responsively.</p>
        <h4>Responsive Embeds</h4>
        <p>To make your embeds responsive, merely wrap them with a containing div which has the class <code class="language-markup">video-container</code></p>
        <div class="video-container">
          <iframe width="853" height="480" src="https://www.youtube.com/results?search_query=bro+eli+bible+exposition+2017" frameborder="0" allowfullscreen></iframe>
        </div>
        <pre><code class="language-markup">
      &lt;div class="video-container">
        &lt;iframe width="853" height="480" src="www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen>&lt;/iframe>
      &lt;/div>
        </code></pre>
        <h4>Responsive Videos</h4>
        <p>To make your HTML5 Videos responsive just add the class <code class="language-markup">responsive-video</code> to the video tag.</p>

        <video width="100%" controls>
          <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4">
        </video>
        <pre><code class="language-markup">
  &lt;video class="responsive-video" controls>
    &lt;source src="movie.mp4" type="video/mp4">
  &lt;/video>
        </code></pre>

      </div>


    </div>

    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#images">Images</a></li>
            <li><a href="#videos">Videos</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>


    </main>
  `;              
       this.reRender(`
			${html}
			`,document.getElementById("media")); 
			this.showMedia(); 
}

	  pulse(){
			        
		let html = `
			       <main><div class="container bsa">
  <div class="row">
    <div class="col s12 m9 l10">

      <div id="pulse" class="section scrollspy">
        <p class="caption">Draw attention to your buttons with this subtle but captivating effect. Just add the class <code class="language-markup">pulse</code> to your button. Note: This is meant for floating buttons, so it may not work perfectly with every component.</p>

        <div style="display: flex; justify-content: space-around;">
          <a class="btn btn-floating pulse"><i class="material-icons">menu</i></a>
          <a class="btn btn-floating btn-large pulse"><i class="material-icons">cloud</i></a>
          <a class="btn btn-floating btn-large cyan pulse"><i class="material-icons">edit</i></a>
        </div>

        <h4>Pulse HTML Structure</h4>
        <pre><code class="language-markup">
&lt;a class="btn btn-floating pulse">&lt;i class="material-icons">menu&lt;/i>&lt;/a>
&lt;a class="btn btn-floating btn-large pulse">&lt;i class="material-icons">cloud&lt;/i>&lt;/a>
&lt;a class="btn btn-floating btn-large cyan pulse">&lt;i class="material-icons">edit&lt;/i>&lt;/a>
</code></pre>
      </div>
    </div>

    <!-- Table of Contents -->
    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#pulse">Pulse</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

    </main>


		`;     
		    this.reRender(`
				${html}
			`,document.getElementById("pulse")); 
        this.showPulse();
  } 



     sass(){

           let  html = `
                
     <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

      <!--  Variables Section  -->
      <div id="variables" class="section scrollspy">
        <h2 class="header">Variables</h2>
        <p class="caption">
        When using Sass, you can change the color scheme of your site extremely quickly. Below is a very small sample of what you can change through sass in <a href="https://github.com/Dogfalo/materialize/blob/master/sass/components/_variables.scss">_variables.scss</a>.
        </p>
        <pre><code class="language-scss">
  $primary-color: color("materialize-red", "lighten-2") !default;
  $primary-color-light: false !default;
  $primary-color-dark: false !default;
  @if not $primary-color-light {
    $primary-color-light: lighten($primary-color, 15%);
  }
  @if not $primary-color-dark {
    $primary-color-dark: darken($primary-color, 15%);
  }
  $secondary-color: color("teal", "lighten-1") !default;
  $success-color: color("green", "base") !default;
  $error-color: color("red", "base") !default;

  $link-color: color("light-blue", "darken-1") !default;

  /*** More variables not shown here.. ***/
        </code></pre>
      </div>

      <!--  Media Queries Section  -->
      <div id="media" class="section scrollspy">
        <h2 class="header">Media Queries</h2>
        <p class="caption">
        We have 3 media queries for the 3 standard screen sizes you can use in your custom Sass files. This also includes media query variables that will define the range.
        </p>
        <p>
          Small screens are defined as having a max-width of 600px
          <br>
          Medium screens are defined as having a max-width of 992px
          <br>
          Large screen are defined as having a min-width of 993px
          <br>
          Extra Large screen are defined as having a min-width of 1200px
        </p>

          <h4>CSS</h4>
          <pre><code class="language-css col s12">
  /* These classes can be added to HTML Elements
   * to affect visibility on certain displays.
   */
  .hide-on-small-only
  .hide-on-small-and-down
  .hide-on-med-and-down
  .hide-on-med-and-up
  .hide-on-med-only
  .hide-on-large-only
  .show-on-large
  .show-on-medium
  .show-on-small
  .show-on-medium-and-up
  .show-on-medium-and-down
            </code></pre>

          <h4>Sass</h4>
          <pre><code class="language-scss col s12">
  @media #{$small-and-down} {
    // styles for small screens and down
  }
  @media #{$medium-and-up} {
    // styles for medium screens and larger
  }
  @media #{$medium-and-down} {
    // styles for medium screens and down
  }
  @media #{$large-and-up} {
    // styles for large screens and up
  }
  @media #{$extra-large-and-up} {
    // styles for extra large screens and up
  }
            </code></pre>
      </div>

      <!--    Prefixer Section-->
      <div id="mixins" class="section scrollspy">
        <h2 class="header">Prefixer</h2>
        <p class="caption">
        One major goal of this framework is to be as adaptable as possible which includes cross browser compatibility. We have adapted a prefixer script to Sass which will automatically add all browser prefixes for certain CSS properties.
        </p>


        For Example: Using this Sass mixin
        <pre><code class="language-scss">
  @include transition(.3s);
        </code></pre>
        Will Output This
        <pre><code class="language-css">
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  transition: 0.3s;
        </code></pre>
        Here is the full list of mixins
        <pre><code class="language-css">
  animation($args)
  animation-delay($delay)
  animation-direction($direction)
  animation-duration($duration)
  animation-fill-mode($mode)
  animation-iteration-count($count)
  animation-name($name)
  animation-play-state($state)
  animation-timing-function($function)
  background-size($args)
  box-sizing($args)
      border-box()
      content-box()
  columns($args)
      column-count($count)
      column-gap($gap)
      column-rule($args)
      column-width($width)
  gradient($default,$start,$stop)
      linear-gradient-top($default,$color1,$stop1,$color2,$stop2,[$color3,$stop3,$color4,$stop4])
      linear-gradient-left($default,$color1,$stop1,$color2,$stop2,[$color3,$stop3,$color4,$stop4])
  transform($args)
      transform-origin($args)
      transform-style($style)
      rotate($deg)
      scale($factor)
      translate($x,$y)
      translate3d($x,$y,$z)
      translateHardware($x,$y)
  text-shadow($args)
  transition($args)
      transition-delay($delay)
      transition-duration($duration)
      transition-property($property)
      transition-timing-function($function)
        </code></pre>
      </div>
    </div>
    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#variables">Variables</a></li>
            <li><a href="#media">Media Queries</a></li>
            <li><a href="#mixins">Mixins</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>  

          `; 
            this.reRender(`${html}`,document.getElementById("sass"));
            this.showSass();

}
          
     table(){

           let  html = `
                    <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

      <!--  Tables Section-->
      <div id="tables" class="section scrollspy">
        <p class="caption">Tables are a nice way to organize a lot of data. We provide a few utility classes to help you style your table as easily as possible. In addition, to improve mobile experience, all tables on mobile-screen widths are centered automatically.</p>
        <h2 class="header">Borderless Table</h2>
        <div class="row">
          <div class="col s12">
            <p>Tables are borderless by default.</p>
            <table>
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
                <tr>
                  <td>Shannon</td>
                  <td>KitKat</td>
                  <td>$9.99</td>
                </tr>
              </tbody>

            </table>
          </div>
          <div class="col s12">
            <pre><code class="language-markup">
      &lt;table>
        &lt;thead>
          &lt;tr>
              &lt;th>Name&lt;/th>
              &lt;th>Item Name&lt;/th>
              &lt;th>Item Price&lt;/th>
          &lt;/tr>
        &lt;/thead>

        &lt;tbody>
          &lt;tr>
            &lt;td>Alvin&lt;/td>
            &lt;td>Eclair&lt;/td>
            &lt;td>$0.87&lt;/td>
          &lt;/tr>
          &lt;tr>
            &lt;td>Alan&lt;/td>
            &lt;td>Jellybean&lt;/td>
            &lt;td>$3.76&lt;/td>
          &lt;/tr>
          &lt;tr>
            &lt;td>Jonathan&lt;/td>
            &lt;td>Lollipop&lt;/td>
            &lt;td>$7.00&lt;/td>
          &lt;/tr>
        &lt;/tbody>
      &lt;/table>
            </code></pre>
          </div>
        </div>
      </div>

      <div id="bordered" class="section scrollspy">
        <h2 class="header">Bordered Table</h2>
        <div class="row">
          <div class="col s12">
            <p>Add <code class="language-markup">class="bordered"</code> to the table tag for a bordered table</p>
            <table class="bordered">
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
                <tr>
                  <td>Shannon</td>
                  <td>KitKat</td>
                  <td>$9.99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div id="striped" class="section scrollspy">
        <h2 class="header">Striped Table</h2>
        <div class="row">
          <div class="col s12">
            <p>Add <code class="language-markup">class="striped"</code> to the table tag for a striped table</p>
            <table class="striped">
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
                <tr>
                  <td>Shannon</td>
                  <td>KitKat</td>
                  <td>$9.99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div id="highlight" class="section scrollspy">
        <h2 class="header">Highlight Table</h2>
        <div class="row">
          <div class="col s12">
            <p>Add <code class="language-markup">class="highlight"</code> to the table tag for a highlight table</p>
            <table class="highlight">
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
                <tr>
                  <td>Shannon</td>
                  <td>KitKat</td>
                  <td>$9.99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div id="centered" class="section scrollspy">
        <h2 class="header">Centered Table</h2>
        <div class="row">
          <div class="col s12">
            <p>Add <code class="language-markup">class="centered"</code> to the table tag to center align all the text in the table</p>
            <table class="centered">
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
                <tr>
                  <td>Shannon</td>
                  <td>KitKat</td>
                  <td>$9.99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <div id="responsive" class="section scrollspy">
        <h2 class="header">Responsive Table</h2>
        <div class="row">
          <div class="col s12">
            <p>Add <code class="language-markup">class="responsive-table"</code> to the table tag to make the table horizontally scrollable on smaller screen widths.</p>
            <table class="responsive-table">
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
                <tr>
                  <td>Shannon</td>
                  <td>KitKat</td>
                  <td>$9.99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>


    </div><!--  End Tables Section  -->

    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#tables">Borderless</a></li>
            <li><a href="#bordered">Bordered</a></li>
            <li><a href="#striped">Striped</a></li>
            <li><a href="#highlight">Highlight</a></li>
            <li><a href="#centered">Centered</a></li>
            <li><a href="#responsive">Responsive</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

    </main>
          `; 
            this.reRender(`${html}`,document.getElementById("table"));
            this.showTable();

}
       
     transition(){

           let  html = `
                  <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

      <div id="scale" class="section scrollspy">
        <p class="caption">We've made some custom animation classes that will transition your content with only CSS. Each CSS transition consists of a base class that applies the necessary styles and additional classes that control the state of the transition.</p>

        <h4>Scale</h4>
        <p>Use this scale in and out elements. Make sure to add the base transition class <code class="language-markup">scale-transition</code>. Then add the class <code class="language-markup">scale-out</code> to scale the element down until it is hidden. To start something as hidden, add the class <code class="language-markup">scale-out</code> first, and then add the class <code class="language-markup">scale-in</code> to scale the element up until it is shown.</p>

        <a id="scale-demo" href="#!" class="btn-floating btn-large scale-transition"><i class="material-icons">add</i></a>

        <a id="scale-demo-trigger" href="#!" class="btn right">Toggle Scale</a>

        <pre><code class="language-markup">
  &lt;!-- Scaled in -->
  &lt;a id="scale-demo" href="#!" class="btn-floating btn-large scale-transition">
    &lt;i class="material-icons">add&lt;/i>
  &lt;/a>

  &lt;!-- Scaled out -->
  &lt;a id="scale-demo" href="#!" class="btn-floating btn-large scale-transition scale-out">
    &lt;i class="material-icons">add&lt;/i>
  &lt;/a>
  </code></pre>
      </div>

    </div>

    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#scale">Scale</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>


    </main> 
          `; 
            this.reRender(`${html}`,document.getElementById("transition"));
            this.showTransition();
}
         
     badges(){

           let  html = `
                    <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

      <!--  Badges Section  -->
      <div id="collection" class="section scrollspy">

        <div class="row">
          <div class="col s12">
            <p class="caption">Badges can notify you that there are new or unread messages or notifications. Add the <code class="language-markup">new</code> class to the badge to give it the background.</p>

            <h2 class="header">Collections</h2>

            <div class="collection">
              <a href="#!" class="collection-item"><span class="badge">1</span>Alan</a>
              <a href="#!" class="collection-item"><span class="new badge">4</span>Alan</a>
              <a href="#!" class="collection-item">Alan</a>
              <a href="#!" class="collection-item"><span class="badge">14</span>Alan</a>
            </div>
            <pre><code class="language-markup">
  &lt;div class="collection">
    &lt;a href="#!" class="collection-item">&lt;span class="badge">1&lt;/span>Alan&lt;/a>
    &lt;a href="#!" class="collection-item">&lt;span class="new badge">4&lt;/span>Alan&lt;/a>
    &lt;a href="#!" class="collection-item">Alan&lt;/a>
    &lt;a href="#!" class="collection-item">&lt;span class="badge">14&lt;/span>Alan&lt;/a>
  &lt;/div>
            </code></pre>
          </div>
        </div>
      </div>

      <div id="dropdown" class="section scrollspy">
        <div class="row">
          <div class="col s12">

            <h2 class="header">Badges in Dropdown</h2>

            <ul id="dropdown2" class="dropdown-content">
              <li><a href="#!">one<span class="badge">1</span></a></li>
              <li><a href="#!">two<span class="new badge">1</span></a></li>
              <li><a href="#!">three</a></li>
            </ul>
            <a class="btn dropdown-button" href="#!" data-activates="dropdown2">Dropdown<i class="mdi-navigation-arrow-drop-down right"></i></a>

            <pre><code class="language-markup">
  &lt;ul id="dropdown2" class="dropdown-content">
    &lt;li>&lt;a href="#!">one&lt;span class="badge">1&lt;/span>&lt;/a>&lt;/li>
    &lt;li>&lt;a href="#!">two&lt;span class="new badge">1&lt;/span>&lt;/a>&lt;/li>
    &lt;li>&lt;a href="#!">three&lt;/a>&lt;/li>
  &lt;/ul>
  &lt;a class="btn dropdown-button" href="#!" data-activates="dropdown2">Dropdown&lt;i class="mdi-navigation-arrow-drop-down right">&lt;/i>&lt;/a>
            </code></pre>

          </div>
        </div>
      </div>

      <div id="navbar" class="section scrollspy">
        <div class="row">
          <div class="col s12">

            <h2 class="header">Badges in Navbar</h2>

           <nav>
             <div class="nav-wrapper">
               <a href="" class="brand-logo">Logo</a>
               <ul id="nav-mobile" class="right hide-on-med-and-down">
                 <li><a href="">sass</a></li>
                 <li><a href="">sass <span class="new badge">4</span></a></li>
                 <li><a href="">sass</a></li>
               </ul>
             </div>
           </nav>
           <br>

            <pre><code class="language-markup">
&lt;nav>
  &lt;div class="nav-wrapper">
    &lt;a href="" class="brand-logo">Logo&lt;/a>
    &lt;ul id="nav-mobile" class="right hide-on-med-and-down">
      &lt;li>&lt;a href="">sass&lt;/a>&lt;/li>
      &lt;li>&lt;a href="">sass &lt;span class="new badge">4&lt;/span>&lt;/a>&lt;/li>
      &lt;li>&lt;a href="">sass&lt;/a>&lt;/li>
    &lt;/ul>
  &lt;/div>
&lt;/nav></code></pre>

          </div>
        </div>
      </div>

      <div id="collapsible" class="section scrollspy">
        <div class="row">
          <div class="col s12">

            <h2 class="header">Badges in Collapsibles</h2>

            <ul class="collapsible" data-collapsible="accordion">
              <li>
                <div class="collapsible-header"><span class="new badge">4</span><i class="material-icons">filter_drama</i>First</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
              </li>
              <li>
                <div class="collapsible-header"><span class="badge">1</span><i class="material-icons">place</i>Second</div>
                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
              </li>
            </ul>
            <br>

            <pre><code class="language-markup">
&lt;ul class="collapsible" data-collapsible="accordion">
  &lt;li>
    &lt;div class="collapsible-header">&lt;span class="new badge">4&lt;/span>&lt;i class="material-icons">filter_drama&lt;/i>First&lt;/div>
    &lt;div class="collapsible-body">&lt;p>Lorem ipsum dolor sit amet.&lt;/p>&lt;/div>
  &lt;/li>
  &lt;li>
    &lt;div class="collapsible-header">&lt;span class="badge">1&lt;/span>&lt;i class="material-icons">place&lt;/i>Second&lt;/div>
    &lt;div class="collapsible-body">&lt;p>Lorem ipsum dolor sit amet.&lt;/p>&lt;/div>
  &lt;/li>
&lt;/ul></code></pre>

          </div>
        </div>
      </div>

      <div id="options" class="section scrollspy">

        <div class="row">
          <div class="col s12">
            <h2 class="header">Options</h2>
            <p class="caption">You can customize captions in many ways.</p>
          </div>
        </div>

        <div class="row">
          <div class="col s12 m3"><h5 class="light">Custom Caption</h5></div>
          <div class="col s12 m9">
            <div class="collection">
              <a href="#!" class="collection-item">Custom Badge Captions<span class="new badge" data-badge-caption="custom caption">4</span></a>
              <a href="#!" class="collection-item">Custom Badge Captions<span class="badge" data-badge-caption="custom caption">4</span></a>
            </div>
          </div>
          <div class="col s12 m9 offset-m3">
            <p>You can explicitly set the caption in a badge using the <code class="language-markup">data-badge-caption</code> attribute.</p>
            <pre><code class="language-markup">
  &lt;span class="new badge" data-badge-caption="custom caption">4&lt;/span>
  &lt;span class="badge" data-badge-caption="custom caption">4&lt;/span>
            </code></pre>
          </div>
        </div>

        <div class="row">
          <div class="col s12 m3"><h5 class="light">Colors</h5></div>
          <div class="col s12 m9">
            <div class="collection">
              <a href="#!" class="collection-item">Red<span class="new badge red" data-badge-caption="red">4</span></a>
              <a href="#!" class="collection-item">Blue<span class="new badge blue" data-badge-caption="blue">4</span></a>
            </div>
          </div>
          <div class="col s12 m9 offset-m3">
            <p>You can use our color classes to set the background-color of the badge.</p>
            <pre><code class="language-markup">
  &lt;span class="new badge red">4&lt;/span>
  &lt;span class="new badge blue">4&lt;/span>
            </code></pre>
          </div>
        </div>

      </div>
      <!-- End badges -->


    </div>

    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#collections">Collections</a></li>
            <li><a href="#dropdown">Dropdown</a></li>
            <li><a href="#navbar">Navbar</a></li>
            <li><a href="#collapsible">Collapsible</a></li>
            <li><a href="#options">Options</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>


    </main>
          `; 
            this.reRender(`${html}`,document.getElementById("badges"));
            this.showBadges();

}
          
    buttons(){

           let  html = `
                    <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">
      <div id="raised" class="section scrollspy">
        <p class="caption">
        There are 3 main button types described in material design. The raised button is a standard button that signify actions and seek to give depth to a mostly flat page. The floating circular action button is meant for very important functions. Flat buttons are usually used within elements that already have depth like cards or modals.
        </p>
        <h2 class="header">Raised</h2>
        <a class="waves-effect waves-light btn">button</a>
        <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>
        <a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>button</a>
        <pre><code class="language-markup col s12">
&lt;a class="waves-effect waves-light btn">button&lt;/a>
&lt;a class="waves-effect waves-light btn">&lt;i class="material-icons left">cloud&lt;/i>button&lt;/a>
&lt;a class="waves-effect waves-light btn">&lt;i class="material-icons right">cloud&lt;/i>button&lt;/a>
        </code></pre>
      </div>
      <div id="floating" class="section scrollspy">
        <h2 class="header">Floating</h2>
        <a class="btn-floating waves-effect waves-light btn-large red"><i class="material-icons">add</i></a><br><br>
        <pre><code class="language-markup col s12">
  &lt;a class="btn-floating btn-large waves-effect waves-light red">&lt;i class="material-icons">add</i>&lt;/i>&lt;/a>
        </code></pre>
        <br>

        <h4 class="light">Fixed Action Button</h4>
        <p>If you want a fixed floating action button, you can add multiple actions that will appear on hover. Our demo is in the bottom righthand corner of the page.</p>
        <pre><code class="language-markup col s12">
  &lt;div class="fixed-action-btn">
    &lt;a class="btn-floating btn-large red">
      &lt;i class="large material-icons">mode_edit&lt;/i>
    &lt;/a>
    &lt;ul>
      &lt;li>&lt;a class="btn-floating red">&lt;i class="material-icons">insert_chart&lt;/i>&lt;/a>&lt;/li>
      &lt;li>&lt;a class="btn-floating yellow darken-1">&lt;i class="material-icons">format_quote&lt;/i>&lt;/a>&lt;/li>
      &lt;li>&lt;a class="btn-floating green">&lt;i class="material-icons">publish&lt;/i>&lt;/a>&lt;/li>
      &lt;li>&lt;a class="btn-floating blue">&lt;i class="material-icons">attach_file&lt;/i>&lt;/a>&lt;/li>
    &lt;/ul>
  &lt;/div>
        </code></pre>

        <p>You can also open and close the Fixed Action Button Menu programatically.</p>
          <pre><code class="language-javascript">
  $('.fixed-action-btn').openFAB();
  $('.fixed-action-btn').closeFAB();
  $('.fixed-action-btn.toolbar').openToolbar();
  $('.fixed-action-btn.toolbar').closeToolbar();
        </code></pre>
        <br>
        <h4 class="light">Horizontal FAB</h4>
        <p>Creating a horizontal FAB is easy! Just add the class <code class="language-markup">horizontal</code> to the FAB.</p>
        <div style="position: relative; height: 70px;">
          <div class="fixed-action-btn horizontal" style="position: absolute; display: inline-block; right: 24px;">
            <a class="btn-floating btn-large red">
              <i class="large material-icons">mode_edit</i>
            </a>
            <ul>
              <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
              <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
              <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
              <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
            </ul>
          </div>
        </div>
        <pre><code class="language-markup col s12">
  &lt;div class="fixed-action-btn horizontal">
    &lt;a class="btn-floating btn-large red">
      &lt;i class="large material-icons">mode_edit&lt;/i>
    &lt;/a>
    &lt;ul>
      &lt;li>&lt;a class="btn-floating red">&lt;i class="material-icons">insert_chart&lt;/i>&lt;/a>&lt;/li>
      &lt;li>&lt;a class="btn-floating yellow darken-1">&lt;i class="material-icons">format_quote&lt;/i>&lt;/a>&lt;/li>
      &lt;li>&lt;a class="btn-floating green">&lt;i class="material-icons">publish&lt;/i>&lt;/a>&lt;/li>
      &lt;li>&lt;a class="btn-floating blue">&lt;i class="material-icons">attach_file&lt;/i>&lt;/a>&lt;/li>
    &lt;/ul>
  &lt;/div>
        </code></pre>

        <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
          <a class="btn-floating btn-large red">
            <i class="material-icons">mode_edit</i>
          </a>
          <ul>
            <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
            <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
            <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
            <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
          </ul>
        </div>
        <br>

        <h4 class="light">Click-only FAB</h4>
        <p>If you want to disable the hover behaviour, and instead toggle the FAB menu when the user clicks on the large button (works great on mobile!), just add the <code class="language-markup">click-to-toggle</code> class to the FAB.</p>
        <div style="position: relative; height: 70px;">
          <div class="fixed-action-btn horizontal click-to-toggle" style="position: absolute; right: 24px;">
            <a class="btn-floating btn-large red">
              <i class="material-icons">menu</i>
            </a>
            <ul>
              <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
              <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
              <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
              <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
            </ul>
          </div>
        </div>
        <pre><code class="language-markup col s12">
  &lt;div class="fixed-action-btn horizontal click-to-toggle">
    &lt;a class="btn-floating btn-large red">
      &lt;i class="material-icons">menu&lt;/i>
    &lt;/a>
    &lt;ul>
      &lt;li>&lt;a class="btn-floating red">&lt;i class="material-icons">insert_chart&lt;/i>&lt;/a>&lt;/li>
      &lt;li>&lt;a class="btn-floating yellow darken-1">&lt;i class="material-icons">format_quote&lt;/i>&lt;/a>&lt;/li>
      &lt;li>&lt;a class="btn-floating green">&lt;i class="material-icons">publish&lt;/i>&lt;/a>&lt;/li>
      &lt;li>&lt;a class="btn-floating blue">&lt;i class="material-icons">attach_file&lt;/i>&lt;/a>&lt;/li>
    &lt;/ul>
  &lt;/div>
        </code></pre>

        <h4 class="light">FAB to Toolbar</h4>
        <p>Instead of displaying individual button options, you can transition your FAB into a toolbar on click. Just add the <code class="language-markup">toolbar</code> class to the FAB.</p>
        <iframe src="fab-toolbar-demo.html" frameborder="0" width="100%" height="100px"></iframe>
        <pre><code class="language-markup col s12">
  &lt;div class="fixed-action-btn toolbar">
    &lt;a class="btn-floating btn-large red">
      &lt;i class="large material-icons">mode_edit&lt;/i>
    &lt;/a>
    &lt;ul>
      &lt;li class="waves-effect waves-light">&lt;a href="#!">&lt;i class="material-icons">insert_chart&lt;/i>&lt;/a>&lt;/li>
      &lt;li class="waves-effect waves-light">&lt;a href="#!">&lt;i class="material-icons">format_quote&lt;/i>&lt;/a>&lt;/li>
      &lt;li class="waves-effect waves-light">&lt;a href="#!">&lt;i class="material-icons">publish&lt;/i>&lt;/a>&lt;/li>
      &lt;li class="waves-effect waves-light">&lt;a href="#!">&lt;i class="material-icons">attach_file&lt;/i>&lt;/a>&lt;/li>
    &lt;/ul>
  &lt;/div>
        </code></pre>

      </div>
      <div id="flat" class="section scrollspy">
        <h2 class="header">Flat</h2>
        <p>Flat buttons are used to reduce excessive layering. For example, flat buttons are usually used for actions within a card or modal so there aren't too many overlapping shadows.</p>
        <a class="waves-effect waves-teal btn-flat">Button</a>
        <pre><code class="language-markup col s12">
  &lt;a class="waves-effect waves-teal btn-flat">Button&lt;/a>
        </code></pre>
      </div>
      <div id="submit" class="section scrollspy">
        <h2 class="header">Submit Button</h2>
        <p>When you use a button to submit a form, instead of using a input tag, use a button tag with a type submit</p>
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit<i class="material-icons right">send</i></button>
        <pre><code class="language-markup">
  &lt;button class="btn waves-effect waves-light" type="submit" name="action">Submit
    &lt;i class="material-icons right">send</i>&lt;/i>
  &lt;/button>
        </code></pre>
      </div>
      <div id="large" class="section scrollspy">
        <h2 class="header">Large</h2>
        <p>This button has a larger height for buttons that need more attention.</p>
        <a class="waves-effect waves-light btn-large">Button</a>
        <a class="waves-effect waves-light btn-large"><i class="material-icons left">cloud</i>button</a>
        <a class="waves-effect waves-light btn-large"><i class="material-icons right">cloud</i>button</a>
        <pre><code class="language-markup col s12">
&lt;a class="waves-effect waves-light btn-large">Button&lt;/a>
&lt;a class="waves-effect waves-light btn-large">&lt;i class="material-icons left">cloud&lt;/i>button&lt;/a>
&lt;a class="waves-effect waves-light btn-large">&lt;i class="material-icons right">cloud&lt;/i>button&lt;/a>
        </code></pre>
      </div>
      <div id="disabled" class="section scrollspy">
        <h2 class="header">Disabled</h2>
        <p>This style can be applied to all button types</p>
        <a class="btn-large disabled">Button</a>
        <a class="btn disabled">Button</a>
        <a class="btn-flat disabled">Button</a>
        <a class="btn-floating disabled"><i class="material-icons">add</i></a>
        <pre><code class="language-markup col s12">
&lt;a class="btn-large disabled">Button&lt;/a>
&lt;a class="btn disabled">Button&lt;/a>
&lt;a class="btn-flat disabled">Button&lt;/a>
&lt;a class="btn-floating disabled">&lt;i class="material-icons">add&lt;/i>&lt;/a>
        </code></pre>
      </div>

    </div>

    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#raised">Raised</a></li>
            <li><a href="#floating">Floating</a></li>
            <li><a href="#flat">Flat</a></li>
            <li><a href="#submit">Submit</a></li>
            <li><a href="#large">Large</a></li>
            <li><a href="#disabled">Disabled</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

    </main>
          `; 
            this.reRender(`${html}`,document.getElementById("buttons"));
            this.showButtons();

}
          
     breadCrumbs(){

           let  html = `
                   <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

      <!--  Collections Section  -->
      <div id="basic" class="section scrollspy">

        <div class="row">
          <div class="col s12">
            <p class="caption">Breadcrumbs are a good way to display your current location. This is usually used when you have multiple layers of content. </p>
            <h2 class="header">Basic</h2>

            <nav>
              <div class="nav-wrapper">
                <div class="col s12">
                  <a href="#!" class="breadcrumb">First</a>
                  <a href="#!" class="breadcrumb">Second</a>
                  <a href="#!" class="breadcrumb">Third</a>
                </div>
              </div>
            </nav>

            <br><br>
            <pre><code class="language-markup">
  &lt;nav>
    &lt;div class="nav-wrapper">
      &lt;div class="col s12">
        &lt;a href="#!" class="breadcrumb">First&lt;/a>
        &lt;a href="#!" class="breadcrumb">Second&lt;/a>
        &lt;a href="#!" class="breadcrumb">Third&lt;/a>
      &lt;/div>
    &lt;/div>
  &lt;/nav>
            </code></pre>
            <br>
          </div>
        </div>
      </div>
      <!-- End collections -->


    </div>

    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#basic">Basic</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>


    </main>
          `; 
            this.reRender(`${html}`,document.getElementById("breadCrumbs"));
            this.showBreadCrumbs();

}
        
     cards(){

           let  html = `
                     <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

  <!-- Cards Section-->
      <div id="basic" class="section scrollspy">
        <p class="caption">Cards are a convenient means of displaying content composed of different types of objects. They’re also well-suited for presenting similar objects whose size or supported actions can vary considerably, like photos with captions of variable length.</p>
        <h2 class="header">Basic Card</h2>
        <div class="row">
          <div class="col s12 m6">
            <!-- Basic Card -->
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>

            <div class="col s12">
              <br>
              <pre><code class="language-markup">
      &lt;div class="row">
        &lt;div class="col s12 m6">
          &lt;div class="card blue-grey darken-1">
            &lt;div class="card-content white-text">
              &lt;span class="card-title">Card Title&lt;/span>
              &lt;p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.&lt;/p>
            &lt;/div>
            &lt;div class="card-action">
              &lt;a href="#">This is a link&lt;/a>
              &lt;a href="#">This is a link&lt;/a>
            &lt;/div>
          &lt;/div>
        &lt;/div>
      &lt;/div>
            </code></pre>
            <br>
          </div>
        </div>
      </div>

      <div id="image" class="section scrollspy">
        <div class="row">
          <!-- Image Card -->
          <div class="col s12 m7">
           <h2 class="header">Image Card</h2>
            <div class="card">
              <div class="card-image">
                <img src="images/b4.jpg">
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          <div class="col s12 m5">
            <br><br><br><br>
            <p class="caption">
             Here is the standard card with an image thumbnail.
            </p>
          </div>
          <div class="col s12">
            <br>
            <pre><code class="language-markup">
      &lt;div class="row">
        &lt;div class="col s12 m7">
          &lt;div class="card">
            &lt;div class="card-image">
              &lt;img src="images/b4.jpg">
              &lt;span class="card-title">Card Title&lt;/span>
            &lt;/div>
            &lt;div class="card-content">
              &lt;p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.&lt;/p>
            &lt;/div>
            &lt;div class="card-action">
              &lt;a href="#">This is a link&lt;/a>
            &lt;/div>
          &lt;/div>
        &lt;/div>
      &lt;/div>
            </code></pre>
            <br>
          </div>
        </div>
      </div>

      <div id="fab" class="section scrollspy">
        <div class="row">
          <!-- Image Card -->
          <div class="col s12 m7">
            <h2 class="header">FABs in Cards</h2>
            <div class="card">
              <div class="card-image">
                <img src="images/b5.jpg">
                <span class="card-title">Card Title</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
              </div>
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
          </div>
          <div class="col s12 m5">
            <br><br><br><br>
            <p class="caption">
             Here is an image card with a Floating Action Button.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m7">
            <div class="card">
              <div class="card-image">
                <img src="images/b6.jpg">
                <a class="btn-floating btn-large halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
              </div>
              <div class="card-content">
                <span class="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
          </div>
          <div class="col s12 m5">
            <p class="caption">
             Here is an image card with a large Floating Action Button.
            </p>
          </div>
          <div class="col s12">
            <br>
            <pre><code class="language-markup">
  &lt;div class="row">
    &lt;div class="col s12 m6">
      &lt;div class="card">
        &lt;div class="card-image">
          &lt;img src="images/b3.jpg">
          &lt;span class="card-title">Card Title&lt;/span>
          &lt;a class="btn-floating halfway-fab waves-effect waves-light red">&lt;i class="material-icons">add&lt;/i>&lt;/a>
        &lt;/div>
        &lt;div class="card-content">
          &lt;p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.&lt;/p>
        &lt;/div>
      &lt;/div>
    &lt;/div>
  &lt;/div>
            </code></pre>
            <br>
          </div>
        </div>
      </div>

      <div id="horizontal" class="section scrollspy">
        <div class="row">
          <!-- Horizontal Card -->
          <div class="col s12 m7">
            <h2 class="header">Horizontal Card</h2>
            <div class="card horizontal">
              <div class="card-image">
                <img src="images/b5.jpg">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information.</p>
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col s12 m5">
            <br><br><br><br>
            <p class="caption">
             Here is the standard card with a horizontal image.
            </p>
          </div>
          <div class="col s12">
            <br>
            <pre><code class="language-markup">
  &lt;div class="col s12 m7">
    &lt;h2 class="header">Horizontal Card&lt;/h2>
    &lt;div class="card horizontal">
      &lt;div class="card-image">
        &lt;img src="http://lorempixel.com/100/190/nature/6">
      &lt;/div>
      &lt;div class="card-stacked">
        &lt;div class="card-content">
          &lt;p>I am a very simple card. I am good at containing small bits of information.&lt;/p>
        &lt;/div>
        &lt;div class="card-action">
          &lt;a href="#">This is a link&lt;/a>
        &lt;/div>
      &lt;/div>
    &lt;/div>
  &lt;/div>
            </code></pre>
            <br>
          </div>
        </div>
      </div>

      <div id="reveal" class="section scrollspy">
        <div class="row">
          <!-- Pullup Card -->
          <div class="col s12 m7">
            <h2 class="header">Card Reveal</h2>
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="images/registerphoto.jpg">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>

                <p><a href="#!">This is a link</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>
          <div class="col s12 m5">
            <br><br><br><br>
            <p class="caption">
             Here you can add a card that reveals more information once clicked. Just add the <code class="language-markup">card-reveal</code> div with a <code class="language-markup">span.card-title</code> inside to make this work. Add the class <code class="language-markup">activator</code> to an element inside the card to allow it to open the card reveal.
            </p>
          </div>
          <div class="col s12">
            <br>
            <pre><code class="language-markup">
  &lt;div class="card">
    &lt;div class="card-image waves-effect waves-block waves-light">
      &lt;img class="activator" src="images/parallax1.jpg">
    &lt;/div>
    &lt;div class="card-content">
      &lt;span class="card-title activator grey-text text-darken-4">Card Title&lt;i class="material-icons right">more_vert</i>&lt;/i>&lt;/span>
      &lt;p>&lt;a href="#">This is a link&lt;/a>&lt;/p>
    &lt;/div>
    &lt;div class="card-reveal">
      &lt;span class="card-title grey-text text-darken-4">Card Title&lt;i class="material-icons right">close</i>&lt;/i>&lt;/span>
      &lt;p>Here is some more information about this product that is only revealed once clicked on.&lt;/p>
    &lt;/div>
  &lt;/div>
            </code></pre>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m6">
            <h4 class="light">Card Action Options</h4>
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="images/parallax2.jpg">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>

                <p><a href="#!">This is a link</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>

              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          <div class="col s12 m6">
            <br><br>
            <p class="caption">
             The default state is having the card-reveal go over the card-action.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m6">
            <div class="card sticky-action">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="images/office.jpg">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>

                <p><a href="#!">This is a link</a></p>
              </div>

              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>

              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>
          <div class="col s12 m6">
            <p class="caption">
             You can make your card-action always visible by adding the class <code class="language-markup">sticky-action</code> to the overall card.
            </p>
          </div>
          <div class="col s12">
            <br>
            <pre><code class="language-markup">
  &lt;div class="card sticky-action">
    ...

    &lt;div class="card-action">...&lt;/div>

    &lt;div class="card-reveal">...&lt;/div>
  &lt;/div>
            </code></pre>
          </div>
        </div>
      </div>


      <div id="tabs" class="section scrollspy">
        <div class="row">
          <!-- Small Card -->
          <div class="col s12">
            <h2 class="header">Tabs in Cards</h2>
            <p class="caption">
             You can add tabs to your cards by adding a dividing <code class="language-markup">cards-tabs</code> div inbetween your header content and your tab content.
            </p>
            <pre><code class="language-markup">
  &lt;div class="card">
    &lt;div class="card-content">
      &lt;p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.&lt;/p>
    &lt;/div>
    &lt;div class="card-tabs">
      &lt;ul class="tabs tabs-fixed-width">
        &lt;li class="tab">&lt;a href="#test4">Test 1&lt;/a>&lt;/li>
        &lt;li class="tab">&lt;a class="active" href="#test5">Test 2&lt;/a>&lt;/li>
        &lt;li class="tab">&lt;a href="#test6">Test 3&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
    &lt;div class="card-content grey lighten-4">
      &lt;div id="test4">Test 1&lt;/div>
      &lt;div id="test5">Test 2&lt;/div>
      &lt;div id="test6">Test 3&lt;/div>
    &lt;/div>
  &lt;/div></code></pre>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m6">
            <h4 class="light">White</h4>
            <div class="card">
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-tabs">
                <ul class="tabs tabs-fixed-width">
                  <li class="tab"><a href="#test4">Test 1</a></li>
                  <li class="tab"><a class="active" href="#test5">Test 2</a></li>
                  <li class="tab"><a href="#test6">Test 3</a></li>
                </ul>
              </div>
              <div class="card-content grey lighten-4">
                <div id="test4">Test 1</div>
                <div id="test5">Test 2</div>
                <div id="test6">Test 3</div>
              </div>
            </div>
          </div>
          <div class="col s12 m6">
            <br><br>
            <p class="caption">
              Basic white background card with tabs.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m6">
            <h4 class="light">Colored</h4>
            <div class="card blue">
              <div class="card-content white-text">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-tabs">
                <ul class="tabs tabs-fixed-width tabs-transparent">
                  <li class="tab"><a href="#test1">Test 1</a></li>
                  <li class="tab"><a class="active" href="#test2">Test 2</a></li>
                  <li class="tab"><a href="#test3">Test 3</a></li>
                </ul>
              </div>
              <div class="card-content blue lighten-5">
                <div id="test1">Test 1</div>
                <div id="test2">Test 2</div>
                <div id="test3">Test 3</div>
              </div>
            </div>
          </div>
          <div class="col s12 m6">
            <br><br>
            <p class="caption">
             Colored or dark background card with tabs.
            </p>
          </div>
        </div>
      </div>


      <div id="sizes" class="section scrollspy">
        <div class="row">
          <!-- Small Card -->
          <div class="col s12">
            <h2 class="header">Card Sizes</h2>
            <p class="caption">If you want to have uniformly sized cards, you can use our premade size classes. Just add the size class in addition to the card class. </p>
            <pre><code class="language-markup">
  &lt;div class="card small">
    &lt;!-- Card Content -->
  &lt;/div>
            </code></pre>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m6">
            <h4 class="light">Small</h4>
            <div class="card small">
              <div class="card-image">
                <img src="images/b3.jpg">
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          <div class="col s12 m6">
            <br><br>
            <p class="caption">
             The Small Card limits the height of the card to 300px.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col s12 m7">
            <h4 class="light">Medium</h4>
            <div class="card medium">
              <div class="card-image">
                <img src="images/parallax2.jpg">
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          <div class="col s12 m5">
            <br><br>
            <p class="caption">
             The Medium Card limits the height of the card to 400px.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col s12 m8">
            <h4 class="light">Large</h4>
            <div class="card large">
              <div class="card-image">
                <img src="images/parallax1.jpg">
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <br><br>
            <p class="caption">
             The Large Card limits the height of the card to 500px.
            </p>
          </div>
        </div>
      </div>


      <div id="panel" class="section scrollspy">
        <div class="row">
          <!-- Card Panel -->
          <div class="col s12 m5">
            <h2 class="header">Card Panel</h2>
            <div class="card-panel teal"> <span class="white-text">I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
            </div>
          </div>
          <div class="col s12 m7">
            <br><br><br><br>
            <p class="caption">
             For a simpler card with less markup, try using a card panel which just has padding and a shadow effect
            </p>
          </div>
          <div class="col s12">
            <br>
            <pre><code class="language-markup">
    &lt;div class="row">
      &lt;div class="col s12 m5">
        &lt;div class="card-panel teal">
          &lt;span class="white-text">I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
          &lt;/span>
        &lt;/div>
      &lt;/div>
    &lt;/div>
            </code></pre>
          </div>
        </div>
      </div>


    </div>

    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#basic">Basic Card</a></li>
            <li><a href="#image">Image Card</a></li>
            <li><a href="#fab">FABs in Cards</a></li>
            <li><a href="#horizontal">Horizontal Card</a></li>
            <li><a href="#reveal">Card Reveal</a></li>
            <li><a href="#tabs">Tabs in Cards</a></li>
            <li><a href="#sizes">Card Sizes</a></li>
            <li><a href="#panel">Card Panel</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>


    </main>
          `; 
            this.reRender(`${html}`,document.getElementById("cards"));
            this.showCards();

}
       
     chips(){

           let  html = `
                  <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

      <div id="introduction" class="section scrollspy">
        <h4>Introduction</h4>
        <p class="caption">
          Chips can be used to represent small blocks of information. They are most commonly used either for contacts or for tags.
        </p>
        <div class="chip">
          <img src="images/yuna.jpg" alt="Contact Person">
          Jane Doe
        </div>
        <div class="chip">
          Tag
          <i class="close material-icons">close</i>
        </div>
      </div>

      <div id="contact" class="section scrollspy">
        <h4>Contacts</h4>
         <p class="caption">
          To create a contact chip just add an img inside.
        </p>
        <pre><code class="language-markup">
  &lt;div class="chip">
    &lt;img src="images/yuna.jpg" alt="Contact Person">
    Jane Doe
  &lt;/div>
        </code></pre>
      </div>

      <div id="tag" class="section scrollspy">
        <h4>Tags</h4>
         <p class="caption">
          To create a tag chip just add a close icon inside with the class <code class="language-markup">close</code>.
        </p>
        <pre><code class="language-markup">
  &lt;div class="chip">
    Tag
    &lt;i class="close material-icons">close&lt;/i>
  &lt;/div>
        </code></pre>
      </div>

      <div id="basic" class="section scrollspy">
        <h4>Javascript Plugin Usage</h4>
        <p class="caption">To add tags, just enter your tag text and press enter. You can delete them by clicking on the close icon or by using your delete button.</p>
        <div class="chips"></div>
        <br>
        <p class="caption">Set initial tags.</p>
        <div class="chips chips-initial"></div>
        <br>
        <p class="caption">Use placeholders and override hint texts.</p>
        <div class="chips chips-placeholder"></div>
        <br>
        <p class="caption">Use autocomplete with chips.</p>
        <div class="chips chips-autocomplete"></div>
      </div>

      <div id="properties" class="section scrollspy">
        <h4>Markup</h4>
        <pre><code class="language-markup">
  &lt;div class="chips">&lt;/div>
  &lt;div class="chips chips-initial">&lt;/div>
  &lt;div class="chips chips-placeholder">&lt;/div>
  &lt;div class="chips chips-autocomplete">&lt;/div>
        </code></pre>
        <h4>jQuery Initialization</h4>
        <pre><code class="language-javascript">
  $('.chips').material_chip();
  $('.chips-initial').material_chip({
    data: [{
      tag: 'Apple',
    }, {
      tag: 'Microsoft',
    }, {
      tag: 'Google',
    }],
  });
  $('.chips-placeholder').material_chip({
    placeholder: 'Enter a tag',
    secondaryPlaceholder: '+Tag',
  });
  $('.chips-autocomplete').material_chip({
    autocompleteOptions: {
      data: {
        'Apple': null,
        'Microsoft': null,
        'Google': null
      },
      limit: Infinity,
      minLength: 1
    }
  });
        </code></pre>
        <p class="caption">Chip data object</p>
        <pre><code class="language-javascript">
  var chip = {
    tag: 'chip content',
    image: '', //optional
    id: 1, //optional
  };
        </code></pre>

        <br>
        <h4>jQuery Plugin Options</h4>
        <table class="table highlight">
          <thead>
            <tr>
              <th>Option Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>data</td>
              <td>array</td>
              <td>Set the chip data (look at the Chip data object)</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>string</td>
              <td>Set first placeholder when there are no tags.</td>
            </tr>
            <tr>
              <td>secondaryPlaceholder</td>
              <td>string</td>
              <td>Set second placeholder when adding additional tags.</td>
            </tr>
            <tr>
              <td>autocompleteData</td>
              <td>Object</td>
              <td>Set autocomplete data.</td>
            </tr>
            <tr>
              <td>autocompleteLimit</td>
              <td>Integer</td>
              <td>Set autocomplete limit.</td>
            </tr>
            <tr>
          </tbody>
        </table>
      </div>

      <div id="events" class="section scrollspy">
        <h4>Events</h4>
        <p class="caption">Material chips exposes a few events for hooking
          into chips functionality.
        </p>
        <table class="table highlight">
          <thead>
            <tr>
              <th>Event</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>chips.add</td>
              <td>this method is triggered when a chip is <strong>added</strong>.</td>
            </tr>
            <tr>
              <td>chips.delete</td>
              <td>this method is triggered when a chip is <strong>deleted</strong>.</td>
            </tr>
            <tr>
              <td>chips.select</td>
              <td>this method is triggered when a chip is <strong>selected</strong>.</td>
            </tr>
          </tbody>
        </table>

        <br><br>

        <pre><code class="language-javascript">
  $('.chips').on('chip.add', function(e, chip){
    // you have the added chip here
  });

  $('.chips').on('chip.delete', function(e, chip){
    // you have the deleted chip here
  });

  $('.chips').on('chip.select', function(e, chip){
    // you have the selected chip here
  });
        </code></pre>

      </div>
      <div id="methods" class="section scrollspy">
        <h4>Methods</h4>
        <p class="caption">
          Use these methods to access the chip data.
        </p>
        <table class="table highlight">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>data</td>
              <td>It returns the stored data.</td>
            </tr>
          </tbody>
        </table>

        <br><br>

        <pre><code class="language-javascript">
  $('.chips-initial').material_chip('data');
        </code></pre>

      </div>
    </div>

    <!-- Table of Contents -->
    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#contact">Contacts</a></li>
            <li><a href="#tag">Tags</a></li>
            <li><a href="#basic">Plugin</a></li>
            <li><a href="#properties">Options</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#methods">Methods</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

    </main> 
          `; 
            this.reRender(`${html}`,document.getElementById("chips"));
            this.showChips();

}
        
     collections(){

           let  html = `
               <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

      <!--  Collections Section  -->
      <div id="basic" class="section scrollspy">

        <div class="row">
          <div class="col s12">
            <p class="caption">Collections allow you to group list objects together.</p>
            <h2 class="header">Basic</h2>
            <ul class="collection">
              <li class="collection-item">Alvin</li>
              <li class="collection-item">Alvin</li>
              <li class="collection-item">Alvin</li>
              <li class="collection-item">Alvin</li>
            </ul>
            <pre><code class="language-markup">
    &lt;ul class="collection">
      &lt;li class="collection-item">Alvin&lt;/li>
      &lt;li class="collection-item">Alvin&lt;/li>
      &lt;li class="collection-item">Alvin&lt;/li>
      &lt;li class="collection-item">Alvin&lt;/li>
    &lt;/ul>
            </code></pre>
            <br>
          </div>
        </div>
      </div>

      <div id="links" class="section scrollspy">
        <div class="row">
          <div class="col s12">
            <h2 class="header">Links</h2>
            <div class="collection">
              <a href="#!" class="collection-item">Alvin</a>
              <a href="#!" class="collection-item active">Alvin</a>
              <a href="#!" class="collection-item">Alvin</a>
              <a href="#!" class="collection-item">Alvin</a>
            </div>
            <pre><code class="language-markup">
      &lt;div class="collection">
        &lt;a href="#!" class="collection-item">Alvin&lt;/a>
        &lt;a href="#!" class="collection-item active">Alvin&lt;/a>
        &lt;a href="#!" class="collection-item">Alvin&lt;/a>
        &lt;a href="#!" class="collection-item">Alvin&lt;/a>
      &lt;/div>
            </code></pre>
          </div>
        </div>
      </div>

      <div id="headers" class="section scrollspy">
        <div class="row">
          <div class="col s12">
            <h2 class="header">Headers</h2>
            <ul class="collection with-header">
              <li class="collection-header"><h4>First Names</h4></li>
              <li class="collection-item">Alvin</li>
              <li class="collection-item">Alvin</li>
              <li class="collection-item">Alvin</li>
              <li class="collection-item">Alvin</li>
            </ul>
            <pre><code class="language-markup">
      &lt;ul class="collection with-header">
        &lt;li class="collection-header">&lt;h4>First Names&lt;/h4>&lt;/li>
        &lt;li class="collection-item">Alvin&lt;/li>
        &lt;li class="collection-item">Alvin&lt;/li>
        &lt;li class="collection-item">Alvin&lt;/li>
        &lt;li class="collection-item">Alvin&lt;/li>
      &lt;/ul>
            </code></pre>
          </div>
        </div>
      </div>


      <div id="secondary" class="section scrollspy">
        <div class="row">
          <div class="col s12">
            <h2 class="header">Secondary content</h2>
            <ul class="collection with-header">
              <li class="collection-header"><h4>First Names</h4></li>
              <li class="collection-item">Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>
              <li class="collection-item">Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>
              <li class="collection-item">Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>
              <li class="collection-item">Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>
            </ul>
            <pre><code class="language-markup">
      &lt;ul class="collection with-header">
        &lt;li class="collection-header">&lt;h4>First Names&lt;/h4>&lt;/li>
        &lt;li class="collection-item">&lt;div>Alvin&lt;a href="#!" class="secondary-content">&lt;i class="material-icons">send&lt;/i>&lt;/a>&lt;/div>&lt;/li>
        &lt;li class="collection-item">&lt;div>Alvin&lt;a href="#!" class="secondary-content">&lt;i class="material-icons">send&lt;/i>&lt;/a>&lt;/div>&lt;/li>
        &lt;li class="collection-item">&lt;div>Alvin&lt;a href="#!" class="secondary-content">&lt;i class="material-icons">send&lt;/i>&lt;/a>&lt;/div>&lt;/li>
        &lt;li class="collection-item">&lt;div>Alvin&lt;a href="#!" class="secondary-content">&lt;i class="material-icons">send&lt;/i>&lt;/a>&lt;/div>&lt;/li>
      &lt;/ul>
            </code></pre>
          </div>

        </div>
      </div>

      <div id="circle" class="section scrollspy">
        <div class="row">
          <div class="col s12">
            <h2 class="header">Avatar Content</h2>
            <ul class="collection">
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
                <i class="material-icons circle green">insert_chart</i>
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
            <pre><code class="language-markup">
  &lt;ul class="collection">
    &lt;li class="collection-item avatar">
      &lt;img src="images/yuna.jpg" alt="" class="circle">
      &lt;span class="title">Title&lt;/span>
      &lt;p>First Line &lt;br>
         Second Line
      &lt;/p>
      &lt;a href="#!" class="secondary-content">&lt;i class="material-icons">grade&lt;/i>&lt;/a>
    &lt;/li>
    &lt;li class="collection-item avatar">
      &lt;i class="material-icons circle">folder&lt;/i>
      &lt;span class="title">Title&lt;/span>
      &lt;p>First Line &lt;br>
         Second Line
      &lt;/p>
      &lt;a href="#!" class="secondary-content">&lt;i class="material-icons">grade&lt;/i>&lt;/a>
    &lt;/li>
    &lt;li class="collection-item avatar">
      &lt;i class="material-icons circle green">insert_chart&lt;/i>
      &lt;span class="title">Title&lt;/span>
      &lt;p>First Line &lt;br>
         Second Line
      &lt;/p>
      &lt;a href="#!" class="secondary-content">&lt;i class="material-icons">grade&lt;/i>&lt;/a>
    &lt;/li>
    &lt;li class="collection-item avatar">
      &lt;i class="material-icons circle red">play_arrow&lt;/i>
      &lt;span class="title">Title&lt;/span>
      &lt;p>First Line &lt;br>
         Second Line
      &lt;/p>
      &lt;a href="#!" class="secondary-content">&lt;i class="material-icons">grade&lt;/i>&lt;/a>
    &lt;/li>
  &lt;/ul>
            </code></pre>
          </div>

        </div>
      </div>

      <div id="dismiss" class="section scrollspy">
        <div class="row">
          <div class="col s12">
            <h2 class="header">Dismissable Content</h2>
            <p>You can just add the class <code class="language-markup">dismissable</code> to enable each collection item to be swiped away. This is only for touch enabled devices.</p>
            <ul class="collection">
              <li class="collection-item dismissable">Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>
              <li class="collection-item dismissable">Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>
              <li class="collection-item dismissable">Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>
              <li class="collection-item dismissable">Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></li>
            </ul>
            <pre><code class="language-markup">
      &lt;ul class="collection">
        &lt;li class="collection-item dismissable">&lt;div>Alvin&lt;a href="#!" class="secondary-content">&lt;i class="material-icons">send&lt;/i>&lt;/a>&lt;/div>&lt;/li>
        &lt;li class="collection-item dismissable">&lt;div>Alvin&lt;a href="#!" class="secondary-content">&lt;i class="material-icons">send&lt;/i>&lt;/a>&lt;/div>&lt;/li>
        &lt;li class="collection-item dismissable">&lt;div>Alvin&lt;a href="#!" class="secondary-content">&lt;i class="material-icons">send&lt;/i>&lt;/a>&lt;/div>&lt;/li>
        &lt;li class="collection-item dismissable">&lt;div>Alvin&lt;a href="#!" class="secondary-content">&lt;i class="material-icons">send&lt;/i>&lt;/a>&lt;/div>&lt;/li>
      &lt;/ul>
            </code></pre>
          </div>

        </div>
      </div>
      <!-- End collections -->


    </div>

    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#basic">Basic</a></li>
            <li><a href="#links">Links</a></li>
            <li><a href="#headers">Headers</a></li>
            <li><a href="#secondary">Secondary Content</a></li>
            <li><a href="#circle">Avatar Content</a></li>
            <li><a href="#dismiss">Dismissable Content</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>


    </main>
          `; 
            this.reRender(`${html}`,document.getElementById("collections"));
            this.showCollections();

}
        
     footer(){

           let  html = `
                     <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

    <!--  Footer Section-->
      <div id="footer" class="section scrollspy">
        <p class="caption">Footers are a great way to organize a lot of site navigation and information at the end of a page. This is where the user will look once they have finished scrolling through the current page or are looking for additional information about your website. </p>
        <h2 class="header">Introduction</h2>
        <p>Note: We use flexbox to structure our html so that the footer is always on the bottom of the page. It is important to keep the structure of your page within the 3 HTML5 tags: <code class="language-markup">&lt;header></code>, <code class="language-markup">&lt;main></code>, <code class="language-markup">&lt;footer></code></p>
        <footer class="page-footer example">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
        <div class="row">
          <div class="col s12">
            <br>
            <pre><code class="language-markup">
        &lt;footer class="page-footer">
          &lt;div class="container">
            &lt;div class="row">
              &lt;div class="col l6 s12">
                &lt;h5 class="white-text">Footer Content&lt;/h5>
                &lt;p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.&lt;/p>
              &lt;/div>
              &lt;div class="col l4 offset-l2 s12">
                &lt;h5 class="white-text">Links&lt;/h5>
                &lt;ul>
                  &lt;li>&lt;a class="grey-text text-lighten-3" href="#!">Link 1&lt;/a>&lt;/li>
                  &lt;li>&lt;a class="grey-text text-lighten-3" href="#!">Link 2&lt;/a>&lt;/li>
                  &lt;li>&lt;a class="grey-text text-lighten-3" href="#!">Link 3&lt;/a>&lt;/li>
                  &lt;li>&lt;a class="grey-text text-lighten-3" href="#!">Link 4&lt;/a>&lt;/li>
                &lt;/ul>
              &lt;/div>
            &lt;/div>
          &lt;/div>
          &lt;div class="footer-copyright">
            &lt;div class="container">
            © 2014 Copyright Text
            &lt;a class="grey-text text-lighten-4 right" href="#!">More Links&lt;/a>
            &lt;/div>
          &lt;/div>
        &lt;/footer>
            </code></pre>
          </div>
        </div>

      </div> <!-- End of footer section -->

      <div id="sticky-footer" class="section scrollspy">
        <h2 class="header">Sticky Footer</h2>
        <p>A sticky footer always stays on the bottom of the page regardless of how little content is on the page. However, this footer will be pushed down if there is a lot of content, so it is different from a fixed footer. Add the following code to your CSS file.</p>
        <p>Note: This may cause issues in Internet Explorer which has weak support for flexbox.</p>
      </div>

      <pre><code class="language-css">
  body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
  }
      </code></pre>

    </div>

    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#footer">Footer</a></li>
            <li><a href="#sticky-footer">Sticky Footer</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>


    </main>
          `; 
            this.reRender(`${html}`,document.getElementById("footer"));
            this.showFooter();

}
       
    forms(){

           let  html = `
                   <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

      <div id="input" class="section scrollspy">
        <p class="caption">
          Forms are the standard way to receive user inputted data. The transitions and smoothness of these elements are very important because of the inherent user interaction associated with forms.
        </p>

        <h2 class="header">Input fields</h2>
        <p>Text fields allow user input. The border should light up simply and clearly indicating which field the user is currently editing. You must have a <code class="language-markup">.input-field</code> div wrapping your input and label. This helps our jQuery animate the label. This is only used in our Input and Textarea form elements.</p>
        <p>The validate class leverages HTML5 validation and will add a <code class="language-markup">valid</code> and <code class="language-markup">invalid</code> class accordingly. If you don't want the Green and Red validation states, just remove the <code class="language-markup">validate</code> class from your inputs.</p>
        <br>
        <div class="row">
          <form class="col s12 white">
            <div class="row">
              <div class="input-field col s6">
                <input id="first_name" type="text" class="validate">
                <label for="first_name">First Name</label>
              </div>
              <div class="input-field col s6">
                <input id="last_name" type="text">
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input disabled value="I am not editable" id="disabled" type="text" class="validate">
                <label for="disabled">Disabled</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="password" type="password" class="validate">
                <label for="password">Password</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="email" type="email" class="validate">
                <label for="email" data-error="wrong" data-success="right">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="col s12">
                This is an inline input field:
                <div class="input-field inline">
                  <input id="email" type="email" class="validate">
                  <label for="email" data-error="wrong" data-success="right">Email</label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <pre><code class="language-markup">
  &lt;div class="row">
    &lt;form class="col s12">
      &lt;div class="row">
        &lt;div class="input-field col s6">
          &lt;input placeholder="Placeholder" id="first_name" type="text" class="validate">
          &lt;label for="first_name">First Name&lt;/label>
        &lt;/div>
        &lt;div class="input-field col s6">
          &lt;input id="last_name" type="text" class="validate">
          &lt;label for="last_name">Last Name&lt;/label>
        &lt;/div>
      &lt;/div>
      &lt;div class="row">
        &lt;div class="input-field col s12">
          &lt;input disabled value="I am not editable" id="disabled" type="text" class="validate">
          &lt;label for="disabled">Disabled&lt;/label>
        &lt;/div>
      &lt;/div>
      &lt;div class="row">
        &lt;div class="input-field col s12">
          &lt;input id="password" type="password" class="validate">
          &lt;label for="password">Password&lt;/label>
        &lt;/div>
      &lt;/div>
      &lt;div class="row">
        &lt;div class="input-field col s12">
          &lt;input id="email" type="email" class="validate">
          &lt;label for="email">Email&lt;/label>
        &lt;/div>
      &lt;/div>
      &lt;div class="row">
        &lt;div class="col s12">
          This is an inline input field:
          &lt;div class="input-field inline">
            &lt;input id="email" type="email" class="validate">
            &lt;label for="email" data-error="wrong" data-success="right">Email&lt;/label>
          &lt;/div>
        &lt;/div>
      &lt;/div>
    &lt;/form>
  &lt;/div>
        </code></pre><br>
        <h4>Prefilling Text Inputs</h4>
        <p>If you are having trouble with the labels overlapping prefilled content, Try adding <code class="language-markup">class="active"</code> to the label. <br />You can also call the function <code class="language-javascript">Materialize.updateTextFields();</code> to reinitialize all the Materialize labels on the page if you are dynamically adding inputs.</p>
        <div class="row">
          <div class="input-field col s6">
            <input value="Alvin" id="first_name2" type="text" class="validate">
            <label class="active" for="first_name2">First Name</label>
          </div>
        </div>

        <pre><code class="language-markup">
  &lt;div class="row">
    &lt;div class="input-field col s6">
      &lt;input value="Alvin" id="first_name2" type="text" class="validate">
      &lt;label class="active" for="first_name2">First Name&lt;/label>
    &lt;/div>
  &lt;/div>
        </code></pre>

        <pre><code class="language-javascript">
  $(document).ready(function() {
    Materialize.updateTextFields();
  });
        </code></pre>

        <h4>Icon Prefixes</h4>
        <p>You can add an icon prefix to make the form input label even more clear. Just add an icon with the class <code class="language-markup">prefix</code> before the input and label.</p><br>
        <div class="row">
          <form class="col s12 white">
            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">account_circle</i>
                <input id="icon_prefix" type="text" class="validate">
                <label for="icon_prefix">First Name</label>
              </div>
              <div class="input-field col s6">
                <i class="material-icons prefix">phone</i>
                <input id="icon_telephone" type="tel" class="validate">
                <label for="icon_telephone">Telephone</label>
              </div>
            </div>
          </form>
        </div>

        <pre><code class="language-markup">
  &lt;div class="row">
    &lt;form class="col s12">
      &lt;div class="row">
        &lt;div class="input-field col s6">
          &lt;i class="material-icons prefix">account_circle</i>&lt;/i>
          &lt;input id="icon_prefix" type="text" class="validate">
          &lt;label for="icon_prefix">First Name&lt;/label>
        &lt;/div>
        &lt;div class="input-field col s6">
          &lt;i class="material-icons prefix">phone</i>&lt;/i>
          &lt;input id="icon_telephone" type="tel" class="validate">
          &lt;label for="icon_telephone">Telephone&lt;/label>
        &lt;/div>
      &lt;/div>
    &lt;/form>
  &lt;/div>
        </code></pre>

        <h4>Custom Error or Success Messages</h4>
        <p>You can add custom validation messages by adding either <code class="language-markup">data-error</code> or <code class="language-markup">data-success</code> attributes to your input field labels.</p><br>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <input id="email2" type="email" class="validate">
                <label for="email2" data-error="wrong" data-success="right">Email</label>
              </div>
            </div>
          </form>
        </div>

        <pre><code class="language-markup">
  &lt;div class="row">
    &lt;form class="col s12">
      &lt;div class="row">
        &lt;div class="input-field col s12">
          &lt;input id="email" type="email" class="validate">
          &lt;label for="email" data-error="wrong" data-success="right">Email&lt;/label>
        &lt;/div>
      &lt;/div>
    &lt;/form>
  &lt;/div>
        </code></pre>


        <h4>Changing colors</h4>
        <p>Here is a CSS template for modifying input fields in CSS. With Sass, you can achieve this by just changing a variable. The CSS shown below is unprefixed. Depending on what you use, you may have to change the type attribute selector.</p>
        <pre><code class="language-css">
  /* label color */
   .input-field label {
     color: #000;
   }
   /* label focus color */
   .input-field input[type=text]:focus + label {
     color: #000;
   }
   /* label underline focus color */
   .input-field input[type=text]:focus {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
   /* valid color */
   .input-field input[type=text].valid {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
   /* invalid color */
   .input-field input[type=text].invalid {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
   /* icon prefix focus color */
   .input-field .prefix.active {
     color: #000;
   }
        </code></pre>
      </div>


      <!-- Textarea Section -->
      <div id="textarea" class="section scrollspy">
        <h2 class="header">Textarea</h2>
        <p>Textareas allow larger expandable user input. The border should light up simply and clearly indicating which field the user is currently editing. You must have a <code class="language-markup">.input-field</code> div wrapping your input and label. This helps our jQuery animate the label. This is only used in our Input and Textarea form elements.</p>
        <p><strong>Textareas will auto resize to the text inside.</strong></p>


        <div class="row">
          <form class="col s12 white">
            <div class="row">
              <div class="input-field col s12">
                <textarea id="textarea1" class="materialize-textarea"></textarea>
                <label for="textarea1">Textarea</label>
              </div>
            </div>
          </form>
        </div>
        <pre><code class="language-markup">
  &lt;div class="row">
    &lt;form class="col s12">
      &lt;div class="row">
        &lt;div class="input-field col s12">
          &lt;textarea id="textarea1" class="materialize-textarea">&lt;/textarea>
          &lt;label for="textarea1">Textarea&lt;/label>
        &lt;/div>
      &lt;/div>
    &lt;/form>
  &lt;/div>
        </code></pre>
        <p>advanced note: When dynamically changing the value of a textarea with methods like jQuery's <code class="language-markup">.val()</code>, you must trigger an autoresize on it afterwords because .val() does not automatically trigger the events we've binded to the textarea. </p>
        <pre><code class="language-javascript">
  $('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');
        </code></pre>
        <br>

        <h4>Icon Prefixes</h4>
        <p>You can add an icon prefix to make the form input label even more clear. Just add an icon with the class <code class="language-markup">prefix</code> before the input and label.</p><br>
        <div class="row">
          <form class="col s12 white">
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">mode_edit</i>
                <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                <label for="icon_prefix2">Message</label>
              </div>
            </div>
          </form>
        </div>

        <pre><code class="language-markup">
  &lt;div class="row">
    &lt;form class="col s12">
      &lt;div class="row">
        &lt;div class="input-field col s6">
          &lt;i class="material-icons prefix">mode_edit&lt;/i>
          &lt;textarea id="icon_prefix2" class="materialize-textarea">&lt;/textarea>
          &lt;label for="icon_prefix2">First Name&lt;/label>
        &lt;/div>
      &lt;/div>
    &lt;/form>
  &lt;/div>
        </code></pre>
      </div>
      <div id="select" class="section scrollspy">
        <h2 class="header">Select</h2>
        <p> Select allows user input through specified options. Make sure you wrap it in a <code class="language-markup">.input-field</code> for proper alignment with other text fields. Remember that this is a jQuery plugin so make sure you <a href="#select-initialization">initialize</a> this in your document ready. </p>
        <div class="row">
          <form class="col s12 white">
            <div class="row">
              <div class="input-field col s12 m6">
                <select>
                  <option value="" disabled selected>Choose your option</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
                <label>Materialize Select</label>
              </div>
              <div class="col s12">
                <br>
                <p>You can add the property <code class="language-markup">multiple</code> to get the multiple select and select several options.</p>
              </div>
              <div class="input-field col s12 m6">
                <select multiple>
                  <option value="" disabled selected>Choose your option</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
                <label>Materialize Multiple Select</label>
              </div>
              <div class="col s12">
                <br>
                <p>We also support optgroups in our selects.</p>
              </div>
              <div class="input-field col s12 m6">
                <select>
                  <optgroup label="team 1">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                  </optgroup>
                  <optgroup label="team 2">
                    <option value="3">Option 3</option>
                    <option value="4">Option 4</option>
                  </optgroup>
                </select>
                <label>Optgroups</label>
              </div>
              <div class="col s12">
                <br>
                <p>You can add icons to your options in any type of select. In the option you add the image source with the <code class="language-markup">data-icon</code> attribute. You can add the <code class="language-markup">left</code> or <code class="language-markup">right</code> class to align your icon. You can also add the <code class="language-markup">circle</code> class to your icon.</p>
              </div>
              <div class="input-field col s12 m6">
                <select class="icons">
                  <option value="" disabled selected>Choose your option</option>
                  <option value="" data-icon="images/sample-1.jpg" class="circle">example 1</option>
                  <option value="" data-icon="images/office.jpg" class="circle">example 2</option>
                  <option value="" data-icon="images/yuna.jpg" class="circle">example 3</option>
                </select>
                <label>Images in select</label>
              </div>
              <div class="input-field col s12 m6">
                <select class="icons">
                  <option value="" disabled selected>Choose your option</option>
                  <option value="" data-icon="images/sample-1.jpg" class="left circle">example 1</option>
                  <option value="" data-icon="images/office.jpg" class="left circle">example 2</option>
                  <option value="" data-icon="images/yuna.jpg" class="left circle">example 3</option>
                </select>
                <label>Images in select</label>
              </div>
              <div class="col s12">
                <br>
                <p>You can add the class <code class="language-markup">browser-default</code> to get the browser default.</p>
              </div>
              <div class="col s12 m6">
                <label>Browser Select</label>
                <select class="browser-default">
                  <option value="" disabled selected>Choose your option</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
            </div>
          </form>
          <div class="col s12">
            <pre><code class="language-markup">
  &lt;div class="input-field col s12">
    &lt;select>
      &lt;option value="" disabled selected>Choose your option&lt;/option>
      &lt;option value="1">Option 1&lt;/option>
      &lt;option value="2">Option 2&lt;/option>
      &lt;option value="3">Option 3&lt;/option>
    &lt;/select>
    &lt;label>Materialize Select&lt;/label>
  &lt;/div>

  &lt;div class="input-field col s12">
    &lt;select multiple>
      &lt;option value="" disabled selected>Choose your option&lt;/option>
      &lt;option value="1">Option 1&lt;/option>
      &lt;option value="2">Option 2&lt;/option>
      &lt;option value="3">Option 3&lt;/option>
    &lt;/select>
    &lt;label>Materialize Multiple Select&lt;/label>
  &lt;/div>

  &lt;div class="input-field col s12">
    &lt;select multiple>
      &lt;optgroup label="team 1">
        &lt;option value="1">Option 1&lt;/option>
        &lt;option value="2">Option 2&lt;/option>
      &lt;/optgroup>
      &lt;optgroup label="team 2">
        &lt;option value="3">Option 3&lt;/option>
        &lt;option value="4">Option 4&lt;/option>
      &lt;/optgroup>
    &lt;/select>
    &lt;label>Optgroups&lt;/label>
  &lt;/div>

  &lt;div class="input-field col s12 m6">
    &lt;select class="icons">
      &lt;option value="" disabled selected>Choose your option&lt;/option>
      &lt;option value="" data-icon="images/sample-1.jpg" class="circle">example 1&lt;/option>
      &lt;option value="" data-icon="images/office.jpg" class="circle">example 2&lt;/option>
      &lt;option value="" data-icon="images/yuna.jpg" class="circle">example 3&lt;/option>
    &lt;/select>
    &lt;label>Images in select&lt;/label>
  &lt;/div>
  &lt;div class="input-field col s12 m6">
    &lt;select class="icons">
      &lt;option value="" disabled selected>Choose your option&lt;/option>
      &lt;option value="" data-icon="images/sample-1.jpg" class="left circle">example 1&lt;/option>
      &lt;option value="" data-icon="images/office.jpg" class="left circle">example 2&lt;/option>
      &lt;option value="" data-icon="images/yuna.jpg" class="left circle">example 3&lt;/option>
    &lt;/select>
    &lt;label>Images in select&lt;/label>
  &lt;/div>

  &lt;label>Browser Select&lt;/label>
  &lt;select class="browser-default">
    &lt;option value="" disabled selected>Choose your option&lt;/option>
    &lt;option value="1">Option 1&lt;/option>
    &lt;option value="2">Option 2&lt;/option>
    &lt;option value="3">Option 3&lt;/option>
  &lt;/select>
            </code></pre>
          </div>
          <div class="col s12">
            <br><br>
            <h4>Disabled Styles</h4>
            <p>You can also add <code class="language-markup">disabled</code> to the select element to make the whole thing disabled. Or if you add <code class="language-markup">disabled</code> to the options, the individual options will be unselectable. </p>
          </div>
          <form class="col s12 m6">
            <div class="row">
              <div class="col s12">
                <label>Materialize Disabled</label>
                <select disabled>
                  <option value="" disabled selected>Choose your option</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
                <label>Browser Disabled</label>
                <select class="browser-default" disabled>
                  <option value="" disabled selected>Choose your option</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
            </div>
          </form>
          <div class="col s12">
            <pre><code class="language-markup">
  &lt;label>Materialize Disabled&lt;/label>
  &lt;select disabled>
    &lt;option value="" disabled selected>Choose your option&lt;/option>
    &lt;option value="1">Option 1&lt;/option>
    &lt;option value="2">Option 2&lt;/option>
    &lt;option value="3">Option 3&lt;/option>
  &lt;/select>

  &lt;label>Browser Disabled&lt;/label>
  &lt;select class="browser-default" disabled>
    &lt;option value="" disabled selected>Choose your option&lt;/option>
    &lt;option value="1">Option 1&lt;/option>
    &lt;option value="2">Option 2&lt;/option>
    &lt;option value="3">Option 3&lt;/option>
  &lt;/select>
            </code></pre>
          </div>
          <div class="col s12">
            <a name="select-initialization"></a>
            <h4>Initialization</h4>
            <p>You must initialize the select element as shown below. In addition, you will need a separate call for any dynamically generated select elements your page generates.</p>
            <pre><code class="language-javascript col s12">
  $(document).ready(function() {
    $('select').material_select();
  });
            </code></pre>
          </div>
          <div class="col s12">
            <h4>Updating/Destroying Select</h4>
            <p>If you want to update the items inside the select, just rerun the initialization code from above after editing the original select. Or you can destroy the material select with this function below, and create a new select altogether</p>
            <pre><code class="language-javascript">
  $('select').material_select('destroy');
            </code></pre>
          </div>
        </div>
      </div>


      <div id="radio" class="section scrollspy white">
        <h2 class="header">Radio Buttons</h2>
        <p>Radio Buttons are used when the user must make only one selection out of a group of items. The <code class="language-markup">for</code> attribute is necessary to bind our custom radio button with the input. Add the input's <code class="language-markup">id</code> as the value of the <code class="language-markup">for</code> attribute of the label.</p>
        <p>Add radio buttons to a group by adding the name attribute along with the same corresponding value for each of the radio  buttons in the group. Create disabled radio buttons by adding the disabled attribute as shown below.</p>
        <form action="#">
          <p>
            <input name="group1" type="radio" id="test1" checked />
            <label for="test1">Red</label>
          </p>
          <p>
            <input name="group1" type="radio" id="test2" />
            <label for="test2">Yellow</label>
          </p>
          <p>
            <input class="with-gap" name="group1" type="radio" id="test3"  />
            <label for="test3">Green</label>
          </p>
            <p>
              <input name="group1" type="radio" id="test4" disabled="disabled" />
              <label for="test4">Brown</label>
          </p>
        </form>
        <br>
        <pre><code class="language-markup">
  &lt;form action="#">
    &lt;p>
      &lt;input name="group1" type="radio" id="test1" />
      &lt;label for="test1">Red&lt;/label>
    &lt;/p>
    &lt;p>
      &lt;input name="group1" type="radio" id="test2" />
      &lt;label for="test2">Yellow&lt;/label>
    &lt;/p>
    &lt;p>
      &lt;input class="with-gap" name="group1" type="radio" id="test3"  />
      &lt;label for="test3">Green&lt;/label>
    &lt;/p>
    &lt;p>
      &lt;input name="group1" type="radio" id="test4" disabled="disabled" />
      &lt;label for="test4">Brown&lt;/label>
    &lt;/p>
  &lt;/form>
        </code></pre>
        <h4>Options</h4>
        <p>To create a radio button with a gap, add <code class="language-markup">class="with-gap"</code> to your input. See the example below.</p>

        <p>
          <input class="with-gap" name="group3" type="radio" id="test5" checked />
          <label for="test5">Red</label>
        </p>
        <pre><code class="language-markup">
  &lt;p>
    &lt;input class="with-gap" name="group3" type="radio" id="test5" checked />
    &lt;label for="test5">Red&lt;/label>
  &lt;/p>
        </code></pre>

      </div>
     </br>

      <!-- Checkboxes -->
      <div id="checkbox" class="section scrollspy white">
        <h2 class="header">Checkboxes</h2>
        <p>Use checkboxes when looking for yes or no answers. The <code class="language-markup">for</code> attribute is necessary to bind our custom checkbox with the input. Add the input's <code class="language-markup">id</code> as the value of the <code class="language-markup">for</code> attribute of the label. </p>
        <form action="#">
          <p>
            <input type="checkbox" id="test9" />
            <label for="test9">Red</label>
          </p>
          <p>
            <input type="checkbox" id="test6" checked="checked" />
            <label for="test6">Yellow</label>
          </p>
          <p>
            <input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />
            <label for="filled-in-box">Filled in</label>
          </p>
          <p>
            <input type="checkbox" id="indeterminate-checkbox" />
            <label for="indeterminate-checkbox">Indeterminate Style</label>
          </p>
          <p>
            <input type="checkbox" id="test7" checked="checked" disabled="disabled" />
            <label for="test7">Green</label>
          </p>
          <p>
            <input type="checkbox" id="test8" disabled="disabled" />
            <label for="test8">Brown</label>
          </p>
        </form>
        <pre><code class="language-markup">
  &lt;form action="#">
    &lt;p>
      &lt;input type="checkbox" id="test5" />
      &lt;label for="test5">Red&lt;/label>
    &lt;/p>
    &lt;p>
      &lt;input type="checkbox" id="test6" checked="checked" />
      &lt;label for="test6">Yellow&lt;/label>
    &lt;/p>
    &lt;p>
      &lt;input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />
      &lt;label for="filled-in-box">Filled in&lt;/label>
    &lt;/p>
    &lt;p>
      &lt;input type="checkbox" id="indeterminate-checkbox" />
      &lt;label for="indeterminate-checkbox">Indeterminate Style&lt;/label>
    &lt;/p>
    &lt;p>
      &lt;input type="checkbox" id="test7" checked="checked" disabled="disabled" />
      &lt;label for="test7">Green&lt;/label>
    &lt;/p>
    &lt;p>
      &lt;input type="checkbox" id="test8" disabled="disabled" />
      &lt;label for="test8">Brown&lt;/label>
    &lt;/p>
  &lt;/form>
        </code></pre>
      </div>

      <!-- Switches -->
      <div id="switches" class="section scrollspy">
        <h2 class="header">Switches</h2>
        <form action="#">
        <p>
            <div class="switch white">
            <label>
              Off
              <input checked type="checkbox">
              <span class="lever"></span>
              On
            </label>
          </div>
        </p>

          <p>
            <div class="switch">
              <label>
                Off
                <input disabled type="checkbox">
                <span class="lever"></span>
                On
              </label>
            </div>
          </p>
        </form>
        <pre><code class="language-markup">
  &lt;!-- Switch -->
  &lt;div class="switch">
    &lt;label>
      Off
      &lt;input type="checkbox">
      &lt;span class="lever">&lt;/span>
      On
    &lt;/label>
  &lt;/div>

  &lt;!-- Disabled Switch -->
  &lt;div class="switch">
    &lt;label>
      Off
      &lt;input disabled type="checkbox">
      &lt;span class="lever">&lt;/span>
      On
    &lt;/label>
  &lt;/div>
        </code></pre>
      </div>

      <div id="file" class="section scrollspy">
        <h2 class="header">File Input</h2>
        <p>If you want to style an input button with a path input we provide this structure.</p>
        <form action="#">
          <div class="file-field input-field">
            <div class="btn">
              <span>File</span>
              <input type="file">
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text">
            </div>
          </div>
        </form>
        <pre><code class="language-markup">
  &lt;form action="#">
    &lt;div class="file-field input-field">
      &lt;div class="btn">
        &lt;span>File&lt;/span>
        &lt;input type="file">
      &lt;/div>
      &lt;div class="file-path-wrapper">
        &lt;input class="file-path validate" type="text">
      &lt;/div>
    &lt;/div>
  &lt;/form>
        </code></pre>

        <p>You can also use the <code class="language-markup">multiple</code> attribute to allow multiple file uploads. </p>
        <form action="#">
          <div class="file-field input-field">
            <div class="btn">
              <span>File</span>
              <input type="file" multiple>
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" placeholder="Upload one or more files">
            </div>
          </div>
        </form>
        <pre><code class="language-markup">
  &lt;form action="#">
    &lt;div class="file-field input-field">
      &lt;div class="btn">
        &lt;span>File&lt;/span>
        &lt;input type="file" multiple>
      &lt;/div>
      &lt;div class="file-path-wrapper">
        &lt;input class="file-path validate" type="text" placeholder="Upload one or more files">
      &lt;/div>
    &lt;/div>
  &lt;/form>
        </code></pre>
      </div>


      <div id="range" class="section scrollspy white">
        <h2 class="header">Range</h2>
        <p>Add a range slider for values with a wide range. This one is set to be a number between 0 and 100. We have two different types of sliders. nouiSlider is a 3rd party plugin which we've modified. To use the noUiSlider, you will have to manually link the <code class="language-markup">nouislider.css</code> and <code class="language-markup">nouislider.js</code> files located in the extras folder.</p>
        <h4>noUiSlider</h4>
        <p>See noUiSlider's official documentation <a href="http://refreshless.com/nouislider/">here</a> to see a variety of slider options</p>
        <div id="range-input"></div>
        <p>&nbsp;</p>
        <pre><code class="language-javascript">
  var slider = document.getElementById('test5');
  noUiSlider.create(slider, {
   start: [20, 80],
   connect: true,
   step: 1,
   range: {
     'min': 0,
     'max': 100
   },
   format: wNumb({
     decimals: 0
   })
  });
        </code></pre>
        <h4>HTML5 Range</h4>
        <form action="#">
          <p class="range-field">
            <input type="range" name="points" min="0" max="100">
          </p>
        </form>
        <pre><code class="language-markup">
  &lt;form action="#">
    &lt;p class="range-field">
      &lt;input type="range" id="test5" min="0" max="100" />
    &lt;/p>
  &lt;/form>
        </code></pre>
      </div>

      <div id="date-picker" class="section scrollspy white">
        <h2 class="header">Date Picker</h2>
        <p>We use a modified version of pickadate.js to create a materialized date picker. Test it out below! </p>
        <label for="birthdate">Birthdate</label>
        <input id="birthdate" type="text" class="datepicker">
        <pre><code class="language-markup">
  &lt;input type="date" class="datepicker">
        </code></pre>

        <h4>Initialization</h4>
        <p>At this time, not all pickadate.js options are working with our implementation</p>
        <pre><code class="language-javascript">
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
        </code></pre>
      </div>


      <div id="character-counter" class="section scrollspy">
        <h2 class="header">Character Counter</h2>
        <p class="caption">Use a character counter in fields where a character restriction is in place.</p>
        <div class="row">
          <form class="col s12 white">
            <div class="row">
              <div class="input-field col s6">
                <input id="input_text" type="text" data-length="10">
                <label for="input_text">Input text</label>
              </div>
            </div>
            <br/>
            <div class="row">
              <div class="input-field col s12">
                <textarea id="textarea1" class="materialize-textarea" data-length="120"></textarea>
                <label for="textarea1">Textarea</label>
              </div>
            </div>
          </form>
        </div>
        <pre><code class="language-markup">
    &lt;div class="row">
      &lt;form class="col s12">
        &lt;div class="row">
          &lt;div class="input-field col s6">
            &lt;input id="input_text" type="text" data-length="10">
            &lt;label for="input_text">Input text&lt;/label>
          &lt;/div>
        &lt;/div>
        &lt;div class="row">
          &lt;div class="input-field col s12">
            &lt;textarea id="textarea1" class="materialize-textarea" data-length="120">&lt;/textarea>
            &lt;label for="textarea1">Textarea&lt;/label>
          &lt;/div>
        &lt;/div>
      &lt;/form>
    &lt;/div>
          </code></pre>
        <br>
        <h4>Initialization</h4>
        <p>There are no options for this plugin, but if you are adding these dynamically, you can use this to initialize them.</p>
        <pre><code class="language-javascript">
  $(document).ready(function() {
    $('input#input_text, textarea#textarea1').characterCounter();
  });
        </code></pre>
      </div>

      <div id="autocomplete" class="section scrollspy white">
        <h2 class="header">Autocomplete</h2>
        <p class="caption">
          Add an autocomplete dropdown below your input to suggest possible values.
        </p>

        <div class="row">
          <div class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">textsms</i>
                <input type="text" id="autocomplete-input" class="autocomplete">
                <label for="autocomplete-input">Autocomplete</label>
              </div>
            </div>
          </div>
        </div>

        <pre><code class="language-markup">
  &lt;div class="row">
    &lt;div class="col s12">
      &lt;div class="row">
        &lt;div class="input-field col s12">
          &lt;i class="material-icons prefix">textsms&lt;/i>
          &lt;input type="text" id="autocomplete-input" class="autocomplete">
          &lt;label for="autocomplete-input">Autocomplete&lt;/label>
        &lt;/div>
      &lt;/div>
    &lt;/div>
  &lt;/div>
        </code></pre>

        <h4>Initialization</h4>
        <p>The data is a json object where the key is the matching string and the value is an optional image url.</p>
        <pre><code class="language-javascript">
  $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'http://placehold.it/250x250'
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });
        </code></pre>
      </div>



    </div>
    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#input">Input Fields</a></li>
            <li><a href="#textarea">Textareas</a></li>
            <li><a href="#select">Select</a></li>
            <li><a href="#radio">Radio Buttons</a></li>
            <li><a href="#checkbox">Checkboxes</a></li>
            <li><a href="#switches">Switches</a></li>
            <li><a href="#file">File Input Button</a></li>
            <li><a href="#range">Range</a></li>
            <li><a href="#date-picker">Date Picker</a></li>
            <li><a href="#character-counter">Character Counter</a></li>
            <li><a href="#autocomplete">Autocomplete</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

    </main> 
          `; 
            this.reRender(`${html}`,document.getElementById("forms"));
            this.showForms();

}
       
     icons(){

           let  html = `
                   <main><div class="container">
  <div class="row">
    <div class="col s12 m9 l10">

    <div id="usage" class="row scrollspy">
            <p class="caption">We have included 740 Material Design Icons courtesy of Google. You can download them directly from the <a href="http://google.github.io/material-design-icons/#icon-font-for-the-web">Material Design specs</a>.</p>
            <h4>Usage</h4>
            <p>To be able to use these icons, you must include this line in the <code class="language-markup">&lt;head></code>portion of your HTML code</p>
            <pre><code class="language-markup">
  &lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></code></pre>
            <p>To use these icons, use the material-icons class on an element and provide the ligature as the text content.</p>
            <pre><code class="language-markup">
      &lt;i class="material-icons">add&lt;/i>
            </code></pre>

            <h4>Sizes</h4>
            <p>To control the size of the icon, change the <code class="language-css">font-size: 30px</code> property of your icon. Optionally you can use preset classes as shown below.</p>
            <div class="row">
              <div class="center-align">
                <div class="col s3"><i class="material-icons tiny icon-demo">insert_chart</i><br><p>Tiny</p></div>
                <div class="col s3"><i class="material-icons small icon-demo">insert_chart</i><br><p>Small</p></div>
                <div class="col s3"><i class="material-icons medium icon-demo">insert_chart</i><br><p>Medium</p></div>
                <div class="col s3"><i class="material-icons large icon-demo">insert_chart</i><br><p>Large</p></div>
              </div>
            </div>
            <pre><code class="language-markup">
      &lt;!--
      Sizes:
      tiny: 1rem
      small: 2rem
      medium: 4rem
      large: 6rem
      -->
      &lt;i class="large material-icons">insert_chart&lt;/i>
            </code></pre>

            <!-- Icon Listing -->
            <div class="row icon-container">
            <br><br>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">info_outline</i><span>info_outline</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">input</i><span>input</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">invert_colors</i><span>invert_colors</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">label</i><span>label</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">label_outline</i><span>label_outline</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">language</i><span>language</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">query_builder</i><span>query_builder</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">perm_identity</i><span>perm_identity</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">perm_media</i><span>perm_media</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">perm_phone_msg</i><span>perm_phone_msg</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">perm_scan_wifi</i><span>perm_scan_wifi</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">picture_in_picture</i><span>picture_in_picture</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">play_for_work</i><span>play_for_work</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">polymer</i><span>polymer</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">power_settings_new</i><span>power_settings_new</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">print</i><span>print</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">thumb_down</i><span>thumb_down</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">thumb_up</i><span>thumb_up</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">thumbs_up_down</i><span>thumbs_up_down</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">email</i><span>email</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">dialpad</i><span>dialpad</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">dialer_sip</i><span>dialer_sip</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">contacts</i><span>contacts</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">forward_5</i><span>forward_5</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">stay_current_portrait</i><span>stay_current_portrait</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">stay_primary_landscape</i><span>stay_primary_landscape</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">stay_primary_portrait</i><span>stay_primary_portrait</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">swap_calls</i><span>swap_calls</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">textsms</i><span>textsms</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">voicemail</i><span>voicemail</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">vpn_key</i><span>vpn_key</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">group_work</i><span>group_work</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">grade</i><span>grade</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">clear_all</i><span>clear_all</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">chat_bubble_outline</i><span>chat_bubble_outline</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">chat_bubble</i><span>chat_bubble</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">repeat</i><span>repeat</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">repeat_one</i><span>repeat_one</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">replay</i><span>replay</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">replay_10</i><span>replay_10</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">replay_30</i><span>replay_30</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">replay_5</i><span>replay_5</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">shuffle</i><span>shuffle</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">skip_next</i><span>skip_next</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">skip_previous</i><span>skip_previous</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">contact_phone</i><span>contact_phone</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">comment</i><span>comment</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">recent_actors</i><span>recent_actors</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">snooze</i><span>snooze</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">sort_by_alpha</i><span>sort_by_alpha</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">stop</i><span>stop</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">subtitles</i><span>subtitles</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">surround_sound</i><span>surround_sound</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">web</i><span>web</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">volume_up</i><span>volume_up</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">volume_off</i><span>volume_off</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">volume_mute</i><span>volume_mute</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">toc</i><span>toc</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">today</i><span>today</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">toll</i><span>toll</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">track_changes</i><span>track_changes</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">translate</i><span>translate</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">trending_down</i><span>trending_down</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">question_answer</i><span>question_answer</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">receipt</i><span>receipt</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">done</i><span>done</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">tab</i><span>tab</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">tab_unselected</i><span>tab_unselected</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">theaters</i><span>theaters</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">hd</i><span>hd</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">games</i><span>games</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">hearing</i><span>hearing</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">view_module</i><span>view_module</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">view_list</i><span>view_list</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">settings_remote</i><span>settings_remote</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">settings_voice</i><span>settings_voice</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">search</i><span>search</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">settings</i><span>settings</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">settings_applications</i><span>settings_applications</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">settings_backup_restore</i><span>settings_backup_restore</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">settings_bluetooth</i><span>settings_bluetooth</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">settings_brightness</i><span>settings_brightness</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">settings_cell</i><span>settings_cell</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">settings_ethernet</i><span>settings_ethernet</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">settings_input_antenna</i><span>settings_input_antenna</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">trending_flat</i><span>trending_flat</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">trending_up</i><span>trending_up</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">work</i><span>work</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">youtube_searched_for</i><span>youtube_searched_for</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">zoom_in</i><span>zoom_in</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">my_location</i><span>my_location</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">visibility_off</i><span>visibility_off</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">visibility</i><span>visibility</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">view_week</i><span>view_week</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">view_stream</i><span>view_stream</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">view_quilt</i><span>view_quilt</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">video_library</i><span>video_library</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">videocam</i><span>videocam</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">videocam_off</i><span>videocam_off</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">volume_down</i><span>volume_down</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">settings_overscan</i><span>settings_overscan</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">settings_input_svideo</i><span>settings_input_svideo</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">settings_input_hdmi</i><span>settings_input_hdmi</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">settings_input_composite</i><span>settings_input_composite</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">settings_input_component</i><span>settings_input_component</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">launch</i><span>launch</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">perm_device_information</i><span>perm_device_information</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">perm_data_setting</i><span>perm_data_setting</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">zoom_out</i><span>zoom_out</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">alarm_on</i><span>alarm_on</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">dns</i><span>dns</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">redeem</i><span>redeem</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">reorder</i><span>reorder</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">report_problem</i><span>report_problem</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">restore</i><span>restore</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">room</i><span>room</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">schedule</i><span>schedule</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">movie</i><span>movie</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">android</i><span>android</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">announcement</i><span>announcement</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">mic_off</i><span>mic_off</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">mic_none</i><span>mic_none</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">swap_horiz</i><span>swap_horiz</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">swap_vert</i><span>swap_vert</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">swap_vertical_circle</i><span>swap_vertical_circle</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">system_update_alt</i><span>system_update_alt</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">present_to_all</i><span>present_to_all</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">portable_wifi_off</i><span>portable_wifi_off</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">phonelink_setup</i><span>phonelink_setup</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">phonelink_ring</i><span>phonelink_ring</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">phonelink_lock</i><span>phonelink_lock</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">phonelink_erase</i><span>phonelink_erase</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">person_pin</i><span>person_pin</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">navigation</i><span>navigation</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">new_releases</i><span>new_releases</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">not_interested</i><span>not_interested</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">pause</i><span>pause</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">pause_circle_filled</i><span>pause_circle_filled</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">pause_circle_outline</i><span>pause_circle_outline</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">play_arrow</i><span>play_arrow</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">play_circle_filled</i><span>play_circle_filled</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">play_circle_outline</i><span>play_circle_outline</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">playlist_add</i><span>playlist_add</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">queue</i><span>queue</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">queue_music</i><span>queue_music</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">radio</i><span>radio</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">class</i><span>class</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">code</i><span>code</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">credit_card</i><span>credit_card</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">dashboard</i><span>dashboard</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">delete</i><span>delete</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">description</i><span>description</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">open_with</i><span>open_with</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">pageview</i><span>pageview</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">payment</i><span>payment</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">perm_camera_mic</i><span>perm_camera_mic</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">perm_contact_calendar</i><span>perm_contact_calendar</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">airplay</i><span>airplay</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">done_all</i><span>done_all</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">phone</i><span>phone</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">no_sim</i><span>no_sim</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">invert_colors_off</i><span>invert_colors_off</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">chat</i><span>chat</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">call_split</i><span>call_split</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">call_received</i><span>call_received</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">call_missed</i><span>call_missed</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">call_merge</i><span>call_merge</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">call_made</i><span>call_made</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">call_end</i><span>call_end</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">call</i><span>call</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">business</i><span>business</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">alarm_off</i><span>alarm_off</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">message</i><span>message</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">location_on</i><span>location_on</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">location_off</i><span>location_off</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">live_help</i><span>live_help</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">album</i><span>album</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">av_timer</i><span>av_timer</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">closed_caption</i><span>closed_caption</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">equalizer</i><span>equalizer</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">turned_in_not</i><span>turned_in_not</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">verified_user</i><span>verified_user</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">view_agenda</i><span>view_agenda</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">view_array</i><span>view_array</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">view_carousel</i><span>view_carousel</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">view_column</i><span>view_column</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">subject</i><span>subject</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">supervisor_account</i><span>supervisor_account</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">settings_power</i><span>settings_power</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">shop</i><span>shop</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">shop_two</i><span>shop_two</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">shopping_basket</i><span>shopping_basket</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">shopping_cart</i><span>shopping_cart</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">speaker_notes</i><span>speaker_notes</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">spellcheck</i><span>spellcheck</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">star</i><span>star</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">stars</i><span>stars</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">store</i><span>store</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">ring_volume</i><span>ring_volume</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">speaker_phone</i><span>speaker_phone</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">stay_current_landscape</i><span>stay_current_landscape</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">forum</i><span>forum</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">import_export</i><span>import_export</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">open_in_browser</i><span>open_in_browser</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">open_in_new</i><span>open_in_new</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">forward_30</i><span>forward_30</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">turned_in</i><span>turned_in</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">view_headline</i><span>view_headline</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">view_day</i><span>view_day</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">warning</i><span>warning</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">error_outline</i><span>error_outline</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">error</i><span>error</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">add_alert</i><span>add_alert</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">settings_phone</i><span>settings_phone</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">forward_10</i><span>forward_10</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">fast_rewind</i><span>fast_rewind</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">fast_forward</i><span>fast_forward</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">explicit</i><span>explicit</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">list</i><span>list</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">lock</i><span>lock</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">lock_open</i><span>lock_open</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">lock_outline</i><span>lock_outline</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">loyalty</i><span>loyalty</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">markunread_mailbox</i><span>markunread_mailbox</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">note_add</i><span>note_add</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">offline_pin</i><span>offline_pin</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">http</i><span>http</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">mic</i><span>mic</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">loop</i><span>loop</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">library_music</i><span>library_music</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">library_books</i><span>library_books</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">library_add</i><span>library_add</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">high_quality</i><span>high_quality</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">info</i><span>info</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">https</i><span>https</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">aspect_ratio</i><span>aspect_ratio</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">assessment</i><span>assessment</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">assignment</i><span>assignment</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">assignment_ind</i><span>assignment_ind</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">assignment_late</i><span>assignment_late</span></div>
          <div class="icon-preview col s6 m3"><i class="material-icons dp48">mode_edit</i><span>mode_edit</span></div>


          </div>
        </div>

    </div>


    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#usage">Usage</a></li>
            <li><a href="http://www.google.com/design/icons/">Search Google's Icons</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

    </main>
          `; 
            this.reRender(`${html}`,document.getElementById("icons"));
            this.showIcons();

}
       
     navBar(){

           let  html = `
                  <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

      <div id="right" class="section scrollspy">

        <p class="caption">The navbar is fully contained by an HTML5 Nav tag. Inside a recommended container div, there are 2 main parts of the navbar. A logo or brand link, and the navigations links. You can align these links to the left or right.
        </p>
        <h2 class="header">Right Aligned Links</h2>
        <p>To right align your navbar links, just add a <code class="language-markup">right</code> class to your <code class="language-markup">&lt;ul></code> that contains them.</p>
        <nav>
          <div class="nav-wrapper">
            <div class="col s12">
              <a href="#!" class="brand-logo">Logo</a>
              <ul class="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
              </ul>
            </div>
          </div>
        </nav><br>
        <pre><code class="language-markup">
  &lt;nav>
    &lt;div class="nav-wrapper">
      &lt;a href="#" class="brand-logo">Logo&lt;/a>
      &lt;ul id="nav-mobile" class="right hide-on-med-and-down">
        &lt;li>&lt;a href="sass.html">Sass&lt;/a>&lt;/li>
        &lt;li>&lt;a href="badges.html">Components&lt;/a>&lt;/li>
        &lt;li>&lt;a href="collapsible.html">JavaScript&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
  &lt;/nav>
        </code></pre>
      </div>

      <div id="left" class="section scrollspy">
        <h2 class="header">Left Aligned Links</h2>
        <p>To left align your navbar links, just add a <code class="language-markup">left</code> class to your <code class="language-markup">&lt;ul></code> that contains them.</p>
        <nav>
          <div class="nav-wrapper">
            <div class="col s12">
              <a href="#!" class="brand-logo right">Logo</a>
              <ul class="left hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
              </ul>
            </div>
          </div>
        </nav><br>
        <pre><code class="language-markup">
  &lt;nav>
    &lt;div class="nav-wrapper">
      &lt;a href="#" class="brand-logo right">Logo&lt;/a>
      &lt;ul id="nav-mobile" class="left hide-on-med-and-down">
        &lt;li>&lt;a href="sass.html">Sass&lt;/a>&lt;/li>
        &lt;li>&lt;a href="badges.html">Components&lt;/a>&lt;/li>
        &lt;li>&lt;a href="collapsible.html">JavaScript&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
  &lt;/nav>
        </code></pre>
      </div>

      <div id="center" class="section scrollspy">
        <h2 class="header">Centering the logo</h2>
        <p>The logo will center itself on medium and down screens, but if you want the logo to always be centered, add the <code class="language-markup">center</code> class to your <code class="language-markup">&lt;a class="brand-logo"></code>. You will have to make sure yourself that links do not overlap if you use this.</p>
        <nav>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo center">Logo</a>
            <ul class="left hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
            </ul>
          </div>
        </nav><br>
        <pre><code class="language-markup">
  &lt;nav>
    &lt;div class="nav-wrapper">
      &lt;a href="#" class="brand-logo center">Logo&lt;/a>
      &lt;ul id="nav-mobile" class="left hide-on-med-and-down">
        &lt;li>&lt;a href="sass.html">Sass&lt;/a>&lt;/li>
        &lt;li>&lt;a href="badges.html">Components&lt;/a>&lt;/li>
        &lt;li>&lt;a href="collapsible.html">JavaScript&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
  &lt;/nav>
        </code></pre>
      </div>

      <div id="active-label" class="section scrollspy">

        <h2 class="header">Active Items</h2>
        <p>
          Add active class to your li tags to denote the current page.
        </p>

        <nav>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo center">Logo</a>
            <ul class="left hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li class="active"><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav><br>

        <pre><code class="language-markup">
  &lt;nav>
    &lt;div class="nav-wrapper">
      &lt;a href="#!" class="brand-logo center">Logo&lt;/a>
      &lt;ul class="left hide-on-med-and-down">
        &lt;li>&lt;a href="sass.html">Sass&lt;/a>&lt;/li>
        &lt;li>&lt;a href="badges.html">Components&lt;/a>&lt;/li>
        &lt;li class="active">&lt;a href="collapsible.html">JavaScript&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
  &lt;/nav>
        </code></pre>
      </div>

      <div id="navbar-tabs" class="section scrollspy">

        <h2 class="header">Extended Navbar with Tabs</h2>
        <p>
          To add extended components to the navbar, add the class <code class="language-markup">extended-nav</code> to the outer <span class="language-markup">nav</span> tag. This will allow your navbar height to be variable. Then you can just include a tabs component inside the <span class="language-markup">nav-wrapper</span>.
        </p>

        <nav class="nav-extended">
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
            <ul class="side-nav" id="mobile-demo">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
          <div class="nav-content">
            <ul class="tabs tabs-transparent">
              <li class="tab"><a href="#test1">Test 1</a></li>
              <li class="tab"><a class="active" href="#test2">Test 2</a></li>
              <li class="tab disabled"><a href="#test3">Disabled Tab</a></li>
              <li class="tab"><a href="#test4">Test 4</a></li>
            </ul>
          </div>
        </nav>
        <br>
        <div id="test1" class="col s12">Test 1</div>
        <div id="test2" class="col s12">Test 2</div>
        <div id="test3" class="col s12">Test 3</div>
        <div id="test4" class="col s12">Test 4</div>
        <br>
        <pre><code class="language-markup">
  &lt;nav class="nav-extended">
    &lt;div class="nav-wrapper">
      &lt;a href="#" class="brand-logo">Logo&lt;/a>
      &lt;a href="#" data-activates="mobile-demo" class="button-collapse">&lt;i class="material-icons">menu&lt;/i>&lt;/a>
      &lt;ul id="nav-mobile" class="right hide-on-med-and-down">
        &lt;li>&lt;a href="sass.html">Sass&lt;/a>&lt;/li>
        &lt;li>&lt;a href="badges.html">Components&lt;/a>&lt;/li>
        &lt;li>&lt;a href="collapsible.html">JavaScript&lt;/a>&lt;/li>
      &lt;/ul>
      &lt;ul class="side-nav" id="mobile-demo">
        &lt;li>&lt;a href="sass.html">Sass&lt;/a>&lt;/li>
        &lt;li>&lt;a href="badges.html">Components&lt;/a>&lt;/li>
        &lt;li>&lt;a href="collapsible.html">JavaScript&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
    &lt;div class="nav-content">
      &lt;ul class="tabs tabs-transparent">
        &lt;li class="tab">&lt;a href="#test1">Test 1&lt;/a>&lt;/li>
        &lt;li class="tab">&lt;a class="active" href="#test2">Test 2&lt;/a>&lt;/li>
        &lt;li class="tab disabled">&lt;a href="#test3">Disabled Tab&lt;/a>&lt;/li>
        &lt;li class="tab">&lt;a href="#test4">Test 4&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
  &lt;/nav>
  &lt;div id="test1" class="col s12">Test 1&lt;/div>
  &lt;div id="test2" class="col s12">Test 2&lt;/div>
  &lt;div id="test3" class="col s12">Test 3&lt;/div>
  &lt;div id="test4" class="col s12">Test 4&lt;/div>
        </code></pre>
      </div>

      <div id="navbar-fixed" class="section scrollspy">

        <h2 class="header">Fixed Navbar</h2>
        <p>
          To make the navbar fixed, you have to add an outer wrapping div with the class <code class="language-markup">navbar-fixed</code>. This will offset your other content while making your nav fixed. You can adjust the height of this outer div to change how much offset is on your content.
        </p>

        <pre><code class="language-markup">
  &lt;div class="navbar-fixed">
    &lt;nav>
      &lt;div class="nav-wrapper">
        &lt;a href="#!" class="brand-logo">Logo&lt;/a>
        &lt;ul class="right hide-on-med-and-down">
          &lt;li>&lt;a href="sass.html">Sass&lt;/a>&lt;/li>
          &lt;li>&lt;a href="badges.html">Components&lt;/a>&lt;/li>
        &lt;/ul>
      &lt;/div>
    &lt;/nav>
  &lt;/div>
        </code></pre>
      </div>

      <div id="navbar-dropdown" class="section scrollspy">

        <h2 class="header">Navbar Dropdown Menu</h2>
        <p>
          To add a navbar dropdown menu, add the <code class="language-markup">ul</code> dropdown structure into the page.
          Then, add an element to trigger the dropdown menu. Make sure to supply the id of the dropdown structure to the
          <code class="language-markup">data-activates</code> attribute of the dropdown trigger.
        </p>

        <!-- Dropdown Structure -->
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li class="divider"></li>
          <li><a href="#!">three</a></li>
        </ul>
        <nav>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo">Logo</a>
            <ul class="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <!-- Dropdown Trigger -->
              <li><a class="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
            </ul>
          </div>
        </nav><br>
        <pre><code class="language-markup">
&lt;!-- Dropdown Structure -->
&lt;ul id="dropdown1" class="dropdown-content">
  &lt;li>&lt;a href="#!">one&lt;/a>&lt;/li>
  &lt;li>&lt;a href="#!">two&lt;/a>&lt;/li>
  &lt;li class="divider">&lt;/li>
  &lt;li>&lt;a href="#!">three&lt;/a>&lt;/li>
&lt;/ul>
&lt;nav>
  &lt;div class="nav-wrapper">
    &lt;a href="#!" class="brand-logo">Logo&lt;/a>
    &lt;ul class="right hide-on-med-and-down">
      &lt;li>&lt;a href="sass.html">Sass&lt;/a>&lt;/li>
      &lt;li>&lt;a href="badges.html">Components&lt;/a>&lt;/li>
      &lt;!-- Dropdown Trigger -->
      &lt;li>&lt;a class="dropdown-button" href="#!" data-activates="dropdown1">Dropdown&lt;i class="material-icons right">arrow_drop_down</i>&lt;/i>&lt;/a>&lt;/li>
    &lt;/ul>
  &lt;/div>
&lt;/nav>
        </code></pre>
        <p>To activate the dropdown menu, insert this line of code into your JavaScript file, within the <code class="language-javascript">$( document ).ready(function)</code> block</p>
        <pre><code class="language-javascript">
$(".dropdown-button").dropdown();
        </code></pre>
        <h5>Trigger dropdown menu on click</h5>
        <p>
          By default, the dropdown menu is activated by hovering over the dropdown trigger.
          To activate the dropdown menu on click, pass <code class="language-javascript">{ hover: false }</code>
          into the above <code class="language-javascript">dropdown()</code> function
        </p>
      </div>

      <div id="icons" class="section scrollspy">
        <h2 class="header">Icon Links</h2>

        <nav>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo"><i class="material-icons">cloud</i>Logo</a>
            <ul class="right hide-on-med-and-down">
              <li><a href="sass.html"><i class="material-icons">search</i></a></li>
              <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
              <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
              <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
            </ul>
          </div>
        </nav>

        <br>

        <p>You can add icons into links. For icon only links you don't need any additional class. Just pop the <code class="language-markup">i</code> tag in and it will work.</p>
<pre><code class="language-markup">
  &lt;nav>
    &lt;div class="nav-wrapper">
      &lt;a href="#!" class="brand-logo">&lt;i class="material-icons">cloud&lt;/i>Logo&lt;/a>
      &lt;ul class="right hide-on-med-and-down">
        &lt;li>&lt;a href="sass.html">&lt;i class="material-icons">search&lt;/i>&lt;/a>&lt;/li>
        &lt;li>&lt;a href="badges.html">&lt;i class="material-icons">view_module&lt;/i>&lt;/a>&lt;/li>
        &lt;li>&lt;a href="collapsible.html">&lt;i class="material-icons">refresh&lt;/i>&lt;/a>&lt;/li>
        &lt;li>&lt;a href="mobile.html">&lt;i class="material-icons">more_vert&lt;/i>&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
  &lt;/nav></code></pre>
        <br>

        <nav>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo">Logo</a>
            <ul class="right hide-on-med-and-down">
              <li><a href="sass.html"><i class="material-icons left">search</i>Link with Left Icon</a></li>
              <li><a href="badges.html"><i class="material-icons right">view_module</i></i>Link with Right Icon</a></li>
            </ul>
          </div>
        </nav>

        <br>

        <p>For adding an icon to a text link you need to add either a <code class="language-markup">left</code> or <code class="language-markup">right</code> class to the icon depending on where you want the icon to be.</p>
        <pre><code class="language-markup">
  &lt;nav>
    &lt;div class="nav-wrapper">
      &lt;a href="#!" class="brand-logo">Logo&lt;/a>
      &lt;ul class="right hide-on-med-and-down">
        &lt;li>&lt;a href="sass.html">&lt;i class="material-icons left">search&lt;/i>Link with Left Icon&lt;/a>&lt;/li>
        &lt;li>&lt;a href="badges.html">&lt;i class="material-icons right">view_module</i>&lt;/i>Link with Right Icon&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
  &lt;/nav></code></pre>
        <br>
      </div>

      <div id="buttons" class="section scrollspy">
        <h2 class="header">Buttons</h2>

        <nav>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo">Logo</a>
            <ul class="right hide-on-med-and-down">
              <li><a class="waves-effect waves-light btn">Button</a></li>
              <li><a class="waves-effect waves-light btn">Button <i class="material-icons right">cloud</i></a></li>
              <li><a class="waves-effect waves-light btn-large">Large Button</a></li>
            </ul>
          </div>
        </nav>

        <br>

        <p>You can add buttons into links. For buttons you don't need any additional class. Just pop the <code class="language-markup">.btn</code> class on the <code class="language-markup">a</code> tag.</p>
<pre><code class="language-markup">
  &lt;nav>
    &lt;div class="nav-wrapper">
      &lt;a href="#!" class="brand-logo">Logo&lt;/a>
      &lt;ul class="right hide-on-med-and-down">
        &lt;li>&lt;a class="waves-effect waves-light btn">Button&lt;/a>&lt;/li>
        &lt;li>&lt;a class="waves-effect waves-light btn">Button &lt;i class="material-icons right">cloud&lt;/i>&lt;/a>&lt;/li>
        &lt;li>&lt;a class="waves-effect waves-light btn-large">Large Button&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
  &lt;/nav></code></pre>
        <br>

        <h5>Halfway FAB in Extended Navbar</h5>
        <p>Add a halfway FAB to your extended navbar.</p>

        <nav class="nav-extended">
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo">Logo</a>
            <ul class="right hide-on-med-and-down">
              <li><a>A link</a></li>
              <li><a>A second link</a></li>
              <li><a>A third link</a></li>
            </ul>
          </div>
          <div class="nav-content">
            <span class="nav-title">Title</span>
            <a class="btn-floating btn-large halfway-fab waves-effect waves-light teal">
              <i class="material-icons">add</i>
            </a>
          </div>
        </nav>
<br><br>
<pre><code class="language-markup">
  &lt;nav class="nav-extended">
    &lt;div class="nav-wrapper">
      &lt;a href="#!" class="brand-logo">Logo&lt;/a>
      &lt;ul class="right hide-on-med-and-down">
        &lt;li>&lt;a>A link&lt;/a>&lt;/li>
        &lt;li>&lt;a>A second link&lt;/a>&lt;/li>
        &lt;li>&lt;a>A third link&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
    &lt;div class="nav-content">
      &lt;span class="nav-title">Title&lt;/span>
      &lt;a class="btn-floating btn-large halfway-fab waves-effect waves-light teal">
        &lt;i class="material-icons">add&lt;/i>
      &lt;/a>
    &lt;/div>
  &lt;/nav></code></pre>
        <br>
      </div>

      <div id="search-docs" class="section scrollspy">
        <h2 class="header">Search Bar</h2>

        <nav>
          <div class="nav-wrapper">
            <form>
              <div class="input-field">
                <input id="search-example" type="search" required>
                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                <i class="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>

        <br>

        <p>You can add a search form in the navbar.</p>
<pre><code class="language-markup">
  &lt;nav>
    &lt;div class="nav-wrapper">
      &lt;form>
        &lt;div class="input-field">
          &lt;input id="search" type="search" required>
          &lt;label class="label-icon" for="search">&lt;i class="material-icons">search&lt;/i>&lt;/label>
          &lt;i class="material-icons">close&lt;/i>
        &lt;/div>
      &lt;/form>
    &lt;/div>
  &lt;/nav></code></pre>
        <br>

      </div>

      <div id="mobile-collapse" class="section scrollspy">
        <h2 class="header">Mobile Collapse Button</h2>

        <nav>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo">Logo</a>
            <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">Javascript</a></li>
              <li><a href="mobile.html">Mobile</a></li>
              <li><a class="btn waves-effect waves-light" href="buttons.html">Buttons</a></li>
            </ul>
            <ul class="side-nav" id="mobile-demo">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">Javascript</a></li>
              <li><a href="mobile.html">Mobile</a></li>
              <li><a class="btn waves-effect waves-light" href="buttons.html">Buttons</a></li>
            </ul>
          </div>
        </nav>

        <br>

        <p>When your nav bar is resized, you will see that the links on the right turn into a hamburger icon <i class="material-icons">menu</i>. Take a look at the example below to get this functionality. Add the entire <code class="language-markup">button-collapse</code> line to your <code class="language-markup">nav</code>.</p>
        <pre><code class="language-markup">
  &lt;nav>
    &lt;div class="nav-wrapper">
      &lt;a href="#!" class="brand-logo">Logo&lt;/a>
      &lt;a href="#" data-activates="mobile-demo" class="button-collapse">&lt;i class="material-icons">menu</i>&lt;/i>&lt;/a>
      &lt;ul class="right hide-on-med-and-down">
        &lt;li>&lt;a href="sass.html">Sass&lt;/a>&lt;/li>
        &lt;li>&lt;a href="badges.html">Components&lt;/a>&lt;/li>
        &lt;li>&lt;a href="collapsible.html">Javascript&lt;/a>&lt;/li>
        &lt;li>&lt;a href="mobile.html">Mobile&lt;/a>&lt;/li>
      &lt;/ul>
      &lt;ul class="side-nav" id="mobile-demo">
        &lt;li>&lt;a href="sass.html">Sass&lt;/a>&lt;/li>
        &lt;li>&lt;a href="badges.html">Components&lt;/a>&lt;/li>
        &lt;li>&lt;a href="collapsible.html">Javascript&lt;/a>&lt;/li>
        &lt;li>&lt;a href="mobile.html">Mobile&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
  &lt;/nav>
          </code></pre>

          <br>
        <h4>Initialization</h4>
        <p>After including the button-collapse line into your navbar, all you have to do now is place this code in your page's <code class="language-javascript">$( document ).ready(function(){})</code> code. This example below assumes you have not modified the classes in the above example. In the case that you have, just change the jQuery selector in the line below to match it.</p>
        <pre><code class="language-javascript">
    $(".button-collapse").sideNav();
        </code></pre>
      </div>

    </div>

    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#right">Right Aligned</a></li>
            <li><a href="#left">Left Aligned</a></li>
            <li><a href="#center">Center Logo</a></li>
            <li><a href="#active-label">Active Items</a></li>
            <li><a href="#navbar-tabs">Navbar with Tabs</a></li>
            <li><a href="#navbar-fixed">Fixed Navbar</a></li>
            <li><a href="#navbar-dropdown">Dropdown Menu</a></li>
            <li><a href="#icons">Icon Links</a></li>
            <li><a href="#buttons">Buttons</a></li>
            <li><a href="#search-docs">Search Bar</a></li>
            <li><a href="#mobile-collapse">Mobile Collapse</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

    </main>   
          `; 
            this.reRender(`${html}`,document.getElementById("navBar"));
            this.showNavBar();

}
       
     pagination(){

           let  html = `
                <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

      <!--  Collections Section  -->
      <div id="basic" class="section scrollspy">

        <div class="row">
          <div class="col s12">
            <p class="caption">Add pagination links to help split up your long content into shorter, easier to understand blocks.</p>
            <h2 class="header">Basic</h2>
              <ul class="pagination">
                <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                <li class="active"><a href="#!">1</a></li>
                <li class="waves-effect"><a href="#!">2</a></li>
                <li class="waves-effect"><a href="#!">3</a></li>
                <li class="waves-effect"><a href="#!">4</a></li>
                <li class="waves-effect"><a href="#!">5</a></li>
                <li class="waves-effect"><a href="#!">6</a></li>
                <li class="waves-effect"><a href="#!">7</a></li>
                <li class="waves-effect"><a href="#!">8</a></li>
                <li class="waves-effect"><a href="#!">9</a></li>
                <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
              </ul>
            <br><br>
            <pre><code class="language-markup">
  &lt;ul class="pagination">
    &lt;li class="disabled">&lt;a href="#!">&lt;i class="material-icons">chevron_left</i>&lt;/i>&lt;/a>&lt;/li>
    &lt;li class="active">&lt;a href="#!">1&lt;/a>&lt;/li>
    &lt;li class="waves-effect">&lt;a href="#!">2&lt;/a>&lt;/li>
    &lt;li class="waves-effect">&lt;a href="#!">3&lt;/a>&lt;/li>
    &lt;li class="waves-effect">&lt;a href="#!">4&lt;/a>&lt;/li>
    &lt;li class="waves-effect">&lt;a href="#!">5&lt;/a>&lt;/li>
    &lt;li class="waves-effect">&lt;a href="#!">&lt;i class="material-icons">chevron_right</i>&lt;/i>&lt;/a>&lt;/li>
  &lt;/ul>
            </code></pre>
            <br>
          </div>
        </div>
      </div>
      <!-- End collections -->


    </div>

    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#basic">Basic</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>


    </main>
          `; 
            this.reRender(`${html}`,document.getElementById("pagination"));
            this.showPagination();

}
      
     preloader(){

           let  html = `
                       <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">
      <p class="caption">If you have content that will take a long time to load, you should give the user feedback. For this reason we provide a number activity + progress indicators.</p>
      <div id="linear" class="section scrollspy">
        <h2 class="header">Linear</h2>
        <p>There are a couple different types of linear progress bars.</p>
        <h4>Determinate</h4>
        <div class="row">
          <div class="div col s8 offset-s2">
            <div class="progress">
                <div class="determinate" style="width: 70%"></div>
            </div>
          </div>
        </div>
        <pre><code class="language-markup">
  &lt;div class="progress">
      &lt;div class="determinate" style="width: 70%">&lt;/div>
  &lt;/div>
        </code></pre>

        <h4>Indeterminate</h4>
        <div class="row">
          <div class="div col s8 offset-s2">
            <div class="progress">
                <div class="indeterminate"></div>
            </div>
          </div>
        </div>
        <pre><code class="language-markup">
  &lt;div class="progress">
      &lt;div class="indeterminate">&lt;/div>
  &lt;/div>
        </code></pre>

      </div>

      <!-- Preloader Section-->
      <div id="circular" class="section scrollspy">
        <h2 class="header">Circular</h2>
        <p>There are 4 colors and 3 sizes of circular spinners. The spinner should be nested in a <code class="language-markup">preloader-wrapper</code> div. The default size is medium, but you can add the classes <code class="language-markup">big</code> or <code class="language-markup">small</code> to adjust the size accordingly. You can add the classes <code class="language-markup">spinner-red-only</code>, <code class="language-markup">spinner-blue-only</code>, <code class="language-markup">spinner-yellow-only</code> and <code class="language-markup">spinner-green-only</code>. You can also leave this class as just <code class="language-markup">spinner-layer</code> and it will be set to the <code class="language-css">$spinner-default-color</code> variable in our variables.scss file.</p>
        <h4>Colors</h4>
        <div class="row">
          <div class="col s12 m4 center">
            <div class="preloader-wrapper big active">
              <div class="spinner-layer spinner-blue-only">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="col s12 m4 center">

            <div class="preloader-wrapper active">
              <div class="spinner-layer spinner-red-only">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>

          </div>
          <div class="col s12 m4 center">

            <div class="preloader-wrapper small active">
              <div class="spinner-layer spinner-green-only">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <pre><code class="language-markup">
  &lt;div class="preloader-wrapper big active">
    &lt;div class="spinner-layer spinner-blue-only">
      &lt;div class="circle-clipper left">
        &lt;div class="circle">&lt;/div>
      &lt;/div>&lt;div class="gap-patch">
        &lt;div class="circle">&lt;/div>
      &lt;/div>&lt;div class="circle-clipper right">
        &lt;div class="circle">&lt;/div>
      &lt;/div>
    &lt;/div>
  &lt;/div>

  &lt;div class=&quot;preloader-wrapper active&quot;&gt;
    &lt;div class=&quot;spinner-layer spinner-red-only&quot;&gt;
      &lt;div class=&quot;circle-clipper left&quot;&gt;
        &lt;div class=&quot;circle&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;&lt;div class=&quot;gap-patch&quot;&gt;
        &lt;div class=&quot;circle&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;&lt;div class=&quot;circle-clipper right&quot;&gt;
        &lt;div class=&quot;circle&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div class=&quot;preloader-wrapper small active&quot;&gt;
    &lt;div class=&quot;spinner-layer spinner-green-only&quot;&gt;
      &lt;div class=&quot;circle-clipper left&quot;&gt;
        &lt;div class=&quot;circle&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;&lt;div class=&quot;gap-patch&quot;&gt;
        &lt;div class=&quot;circle&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;&lt;div class=&quot;circle-clipper right&quot;&gt;
        &lt;div class=&quot;circle&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
        </code></pre>
      </div>

      <div id="circular-color" class="section scrollspy">
        <h2 class="header">Circular Flashing Colors</h2>
        <div class="row">
          <div class="col s12 m4 center">
            <div class="preloader-wrapper big active">
              <div class="spinner-layer spinner-blue">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>

              <div class="spinner-layer spinner-red">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>

              <div class="spinner-layer spinner-yellow">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>

              <div class="spinner-layer spinner-green">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col s12 m4 center">

            <div class="preloader-wrapper active">
              <div class="spinner-layer spinner-blue">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>

              <div class="spinner-layer spinner-red">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>

              <div class="spinner-layer spinner-yellow">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>

              <div class="spinner-layer spinner-green">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>

          </div>
          <div class="col s12 m4 center">

            <div class="preloader-wrapper small active">
              <div class="spinner-layer spinner-blue">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>

              <div class="spinner-layer spinner-red">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>

              <div class="spinner-layer spinner-yellow">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>

              <div class="spinner-layer spinner-green">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <pre><code class="language-markup">
    &lt;div class="preloader-wrapper big active">
      &lt;div class="spinner-layer spinner-blue">
        &lt;div class="circle-clipper left">
          &lt;div class="circle">&lt;/div>
        &lt;/div>&lt;div class="gap-patch">
          &lt;div class="circle">&lt;/div>
        &lt;/div>&lt;div class="circle-clipper right">
          &lt;div class="circle">&lt;/div>
        &lt;/div>
      &lt;/div>

      &lt;div class="spinner-layer spinner-red">
        &lt;div class="circle-clipper left">
          &lt;div class="circle">&lt;/div>
        &lt;/div>&lt;div class="gap-patch">
          &lt;div class="circle">&lt;/div>
        &lt;/div>&lt;div class="circle-clipper right">
          &lt;div class="circle">&lt;/div>
        &lt;/div>
      &lt;/div>

      &lt;div class="spinner-layer spinner-yellow">
        &lt;div class="circle-clipper left">
          &lt;div class="circle">&lt;/div>
        &lt;/div>&lt;div class="gap-patch">
          &lt;div class="circle">&lt;/div>
        &lt;/div>&lt;div class="circle-clipper right">
          &lt;div class="circle">&lt;/div>
        &lt;/div>
      &lt;/div>

      &lt;div class="spinner-layer spinner-green">
        &lt;div class="circle-clipper left">
          &lt;div class="circle">&lt;/div>
        &lt;/div>&lt;div class="gap-patch">
          &lt;div class="circle">&lt;/div>
        &lt;/div>&lt;div class="circle-clipper right">
          &lt;div class="circle">&lt;/div>
        &lt;/div>
      &lt;/div>
    &lt;/div>
        </code></pre>
      </div>


    </div>


    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#linear">Linear</a></li>
            <li><a href="#circular">Circular</a></li>
            <li><a href="#circular-color">Circular Flashing Colors</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>


    </main> 
          `; 
            this.reRender(`${html}`,document.getElementById("preloader"));
            this.showPreloader();

}
      
     modals(id){

           let  html = `
                      <main><div class="container bsa">
  <div class="row">
    <div class="col s12 m9 l10">

      <div id="introduction" class="section scrollspy">
        <h4>Introduction</h4>
        <p>Use a modal for dialog boxes, confirmation messages, or other content that can be called up. In order for the modal to work you have to add the Modal ID to the link of the trigger. To add a close button, just add the class <code class="language-css">.modal-close</code> to your button.</p>
        <a class="waves-effect waves-light btn" href="#modal1">Modal</a>&nbsp;&nbsp;&nbsp;&nbsp;<a class="waves-effect waves-light btn" href="#modal2">Modal With Fixed Footer</a>&nbsp;&nbsp;&nbsp;&nbsp;<a class="waves-effect waves-light btn" href="#modal3">Modal Bottom Sheet Style</a>
        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Modal Header</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-action modal-close waves-effect waves-red btn-flat ">Disagree</a>
            <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
          </div>
        </div>
        
        <div id="modal2" class="modal modal-fixed-footer">
          <div class="modal-content">
            <h4>Modal Header</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-action modal-close waves-effect waves-red btn-flat ">Disagree</a>
            <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
          </div>
        </div>
        <div id="modal3" class="modal bottom-sheet">
          <div class="modal-content">
            <h4>Modal Header</h4>
            <ul class="collection">
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



        <div id="structure" class="scrollspy section">
          <h4>Modals HTML Structure</h4>
          <pre><code class="language-markup">
  &lt;!-- Modal Trigger -->
  &lt;a class="waves-effect waves-light btn" href="#modal1">Modal&lt;/a>

  &lt;!-- Modal Structure -->
  &lt;div id="modal1" class="modal">
    &lt;div class="modal-content">
      &lt;h4>Modal Header&lt;/h4>
      &lt;p>A bunch of text&lt;/p>
    &lt;/div>
    &lt;div class="modal-footer">
      &lt;a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree&lt;/a>
    &lt;/div>
  &lt;/div>
          </code></pre>
        </div>


        <div id="fixed-footer" class="scrollspy section">
          <h4>Modals with Fixed Footer</h4>
          <p>If you have content that is very long and you want the action buttons to be visible all the time, you can add the <code class="language-markup">modal-fixed-footer</code> class to the modal. </p>
          <pre><code class="language-markup">
  &lt;!-- Modal Trigger -->
  &lt;a class="modal-trigger waves-effect waves-light btn" href="#modal1">Modal&lt;/a>

  &lt;!-- Modal Structure -->
  &lt;div id="modal1" class="modal modal-fixed-footer">
    &lt;div class="modal-content">
      &lt;h4>Modal Header&lt;/h4>
      &lt;p>A bunch of text&lt;/p>
    &lt;/div>
    &lt;div class="modal-footer">
      &lt;a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Agree&lt;/a>
    &lt;/div>
  &lt;/div>
          </code></pre>
        </div>

        <div id="bottom-sheet" class="scrollspy section">
          <h4>Bottom Sheet Modals</h4>
          <p>Bottom Sheet Modals are good for displaying actions to the user on the bottom of a screen. They still act the same as regular modals.</p>
          <pre><code class="language-markup">
  &lt;!-- Modal Trigger -->
  &lt;a class="waves-effect waves-light btn" href="#modal1">Modal&lt;/a>

  &lt;!-- Modal Structure -->
  &lt;div id="modal1" class="modal bottom-sheet">
    &lt;div class="modal-content">
      &lt;h4>Modal Header&lt;/h4>
      &lt;p>A bunch of text&lt;/p>
    &lt;/div>
    &lt;div class="modal-footer">
      &lt;a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree&lt;/a>
    &lt;/div>
  &lt;/div>
          </code></pre>
        </div>

        <div id="button-trigger" class="scrollspy section">
          <h4>Modals with Button trigger</h4>
          <p>If you prefer to use a button to open a modal specify the Modal ID in <code class="language-markup">data-target</code> rather than the href attribute. </p>

          <pre><code class="language-markup">
  &lt;!-- Modal Trigger -->
  &lt;button data-target="modal1" class="btn">Modal&lt;/button>
          </code></pre>
        </div>



        <div id="initialization" class="scrollspy section">
          <h4>jQuery Plugin Initialization</h4>
          <p>To open a modal using a trigger:</p>
          <pre><code class="language-javascript">
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
          </code></pre>
          <p>You can also open modals programatically, the below code will make your modal open on document ready:</p>
          <pre><code class="language-javascript">
  $('#modal1').modal('open');
          </code></pre>
          <p>You can also close them programatically:</p>
          <pre><code class="language-javascript">
  $('#modal1').modal('close');
        </code></pre>
      </div>



      <div id="options" class="scrollspy section">
        <h4>Options</h4>
        <p>You can customize the behavior of each modal using these options. For example, you can call a custom function to run when a modal is dismissed. To do this, just place your function in the intialization code as shown below.</p>
        <pre><code class="language-javascript">
  $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        alert("Ready");
        console.log(modal, trigger);
      },
      complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );
      </code></pre>
    </div>

</div>

<!-- Table of Contents -->
  <div class="col hide-on-small-only m3 l2">
    <div class="toc-wrapper">
      <div class="buysellads hide-on-small-only">
        <!-- CarbonAds Zone Code -->
        <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
      </div>
      <div style="height: 1px;">
        <ul class="section table-of-contents">
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#structure">Structure</a></li>
          <li><a href="#fixed-footer">Fixed Footer</a></li>
          <li><a href="#bottom-sheet">Bottom Sheet</a></li>
          <li><a href="#button-trigger">Button Trigger</a></li>
          <li><a href="#initialization">Intialization</a></li>
          <li><a href="#options">Options</a></li>
        </ul>
      </div>
    </div>
  </div>

</div>
</div>

    </main> 
          `; 
            this.reRender(`${html}`,document.getElementById("modals"));
            this.showModals();

}

     parallax(){

           let  html = `
                      <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

      <!--  Parallax Section  -->
      <div id="introduction" class="scrollspy section">
        <h4>Introduction</h4>
        <p class="caption">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling. Check out the demo to get a better idea of it.</p>
        <a href="parallax-demo.html" target="_blank" class="btn-large waves-effect waves-light">Open Demo</a>
      </div>



      <div id="structure" class="scrollspy section">
        <h4>Parallax HTML Structure</h4>
        <pre><code class="language-markup">
    &lt;div class="parallax-container">
      &lt;div class="parallax">&lt;img src="images/parallax1.jpg">&lt;/div>
    &lt;/div>
        </code></pre>
      </div>



      <div id="initialization" class="scrollspy section">
        <h4>Initialization</h4>
        <pre><code class="language-javascript">
    $(document).ready(function(){
      $('.parallax').parallax();
    });
        </code></pre>
      </div>



      <div id="customization" class="scrollspy section">
        <h4>Parallax Customization</h4>
        <p>The parallax container height is what defines how much of the image can be seen. This is set to a default of 500px. You can add your own style to override this.</p>
        <pre><code class="language-css">
    .parallax-container {
      height: "your height here";
    }
        </code></pre>
      </div>

    </div>


    <!-- Table of Contents -->
    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#structure">Structure</a></li>
            <li><a href="#initialization">Intialization</a></li>
            <li><a href="#customization">Customization</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>


    </main> 
          `; 
            this.reRender(`${html}`,document.getElementById("parallax"));
            this.showParallax();

}

     dialog(){

           let  html = `
                      <main><div class="container">
  <div class="row">
    <div class="col s12 m9 l10">

      <div id="toast" class="section scrollspy">
        <p class="caption">Dialogs are content that are not originally visible on a page but show up with extra information if needed. The transitions should make the appearance of the dialog make sense and not jarring to the user.</p>
        <h2 class="header">Toasts</h2>
        <p>Materialize provides an easy way for you to send unobtrusive alerts to your users through toasts. These toasts are also placed and sized responsively, try it out by clicking the button below on different device sizes.</p>
        <a class="waves-effect waves-light btn" onclick="Materialize.toast('I am a toast', 4000)">Toast!</a>
        <p>To do this, call the Materialize.toast() function programatically in JavaScript.</p>
        <pre><code class="language-javascript">
  // Materialize.toast(message, displayLength, className, completeCallback);
  Materialize.toast('I am a toast!', 4000) // 4000 is the duration of the toast
        </code></pre>
        <p>One way to add this into your application is to add this as an onclick event to a button</p>
        <pre><code class="language-markup">
  &lt;a class="btn" onclick="Materialize.toast('I am a toast', 4000)">Toast!&lt;/a>
        </code></pre>

        <h4>Custom HTML</h4>
        <p>You can pass in an HTML String as the first argument as well. Take a look at the example below, where we pass in text as well as a flat button. If you call an external function instead of in-line JavaScript, you will not need to escape quotation marks. </p>
        <a class="waves-effect waves-light btn" onclick="displayCustomHTMLToast()">Toast with Action</a>
        <pre><code class="language-javascript">
  var $toastContent = $('&lt;span>I am toast content&lt;/span>');
  Materialize.toast($toastContent, 5000);
        </code></pre>

        <h4>Callback</h4>
        <p>You can have the toast callback a function when it has been dismissed</p>
        <a class="btn" onclick="Materialize.toast('I am a toast', 4000,'',function(){alert('Your toast was dismissed')})">Toast!</a>
        <pre><code class="language-markup">
  &lt;a class="btn" onclick="Materialize.toast('I am a toast', 4000,'',function(){alert('Your toast was dismissed')})">Toast!&lt;/a>
        </code></pre>

        <h4>Styling Toasts</h4>
        <p>We've added the ability to customize your toasts easily. You can pass in classes as an optional parameter into the toast function. We've added a rounded class for you, but you can create your own CSS classes and apply them to toasts. Checkout out our full example below.</p>

        <a class="waves-effect waves-light btn" onclick="Materialize.toast('I am a toast!', 3000, 'rounded')">Round Toast!</a>

        <pre><code class="language-javascript">
  Materialize.toast('I am a toast!', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast
        </code></pre>
      </div>



      <!-- Tooltip Section -->
      <div id="tooltip" class="scrollspy section">
        <h2 class="header">Tooltips</h2>

        <p>Tooltips are small, interactive, textual hints for mainly graphical elements. When using icons for actions you can use a tooltip to give people clarification on its function.</p>
        <div class="row">
          <a class="btn tooltipped col s4 offset-s4 l2 offset-l1" data-html="true" data-position="bottom" data-delay="50" data-tooltip="I am tooltip"> Bottom</a>
          <a class="btn tooltipped col s4 offset-s4 l2 offset-l1" data-position="top" data-delay="50" data-tooltip="I am tooltip"> Top</a>
          <a class="btn tooltipped col s4 offset-s4 l2 offset-l1" data-position="left" data-delay="50" data-tooltip="I am tooltip"> Left</a>
          <a class="btn tooltipped col s4 offset-s4 l2 offset-l1" data-position="right" data-delay="50" data-tooltip="I am tooltip"> Right</a>
        </div>


        <p>Add the Tooltipped class to your element and add either top, bottom, left, right on data-tooltip to control the position.</p>
        <pre><code class="language-markup">
  &lt;!-- data-position can be : bottom, top, left, or right -->
  &lt;!-- data-delay controls delay before tooltip shows (in milliseconds)-->
  &lt;a class="btn tooltipped" data-position="bottom" data-delay="50" data-tooltip="I am tooltip">Hover me!&lt;/a>
        </code></pre>
        <br>
        <h4>Initialization</h4>
        <p>Tooltips are initialized automatically, but if you have dynamically added tooltips, you will need to initialize them.</p>
        <pre><code class="language-javascript">
  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
  });
        </code></pre><br>

        <h4>jQuery Plugin Options</h4>
        <table class="highlight">
          <thead>
            <tr>
                <th>Option Name</th>
                <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>delay</td>
              <td>Delay time before tooltip appears. (Default: 350)</td>
            </tr>
            <tr>
              <td>tooltip</td>
              <td>Tooltip text. Can use custom HTML if you set the html option.</td>
            </tr>
            <tr>
              <td>position</td>
              <td>Set the direction of the tooltip. 'top', 'right', 'bottom', 'left'. (Default: 'bottom')</td>
            </tr>
            <tr>
              <td>html</td>
              <td>Allow custom html inside the tooltip. (Default: false)</td>
            </tr>
          </tbody>
        </table>

        <br />
        <h4>Removal</h4>
        <p>To remove the tooltip from the button, pass in <code class="language-javascript">'remove'</code> as the option to the tooltip function</p>
        <pre><code class="language-javascript">
  // This will remove the tooltip functionality for the buttons on this page
  $('.tooltipped').tooltip('remove');
        </code></pre>
    </div>

  </div>


  <!-- Table of Contents -->
  <div class="col hide-on-small-only m3 l2">
    <div class="toc-wrapper">
      <div class="buysellads hide-on-small-only">
        <!-- CarbonAds Zone Code -->
        <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
      </div>
      <div style="height: 1px;">
        <ul class="section table-of-contents">
          <li><a href="#toast">Toasts</a></li>
          <li><a href="#tooltip">Tooltips</a></li>
        </ul>
      </div>
    </div>
  </div>

</div>
</div>

    </main> 
          `; 
            this.reRender(`${html}`,document.getElementById("dialog"));
            this.showDialog();

}

     dropdown(){

           let  html = `
                     <main><div class="container">
  <div class="row">
    <div class="col s12 m9 l10">

      <div id="introduction" class="scrollspy section">
        <h4>Introduction</h4>
        <p class="caption">Add a dropdown list to any button. Make sure that the <code class="language-markup">data-activates</code> attribute matches the id in the <code class="language-markup">&lt;ul></code> tag. You can add a divider with the <code class="language-markup">&lt;li class="divider">&lt;/li></code> tag. You can also add icons. Just add the icon inside the <code class="language-markup">anchor</code> tag.</p>
        <a class="dropdown-button btn" href="#!" data-activates="dropdown1">Drop Me!</a>
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li class="divider"></li>
          <li><a href="#!">three</a></li>
          <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
          <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
        </ul>
        <br><br>
        <pre><code class="language-markup">
  &lt;!-- Dropdown Trigger -->
  &lt;a class='dropdown-button btn' href='#' data-activates='dropdown1'>Drop Me!&lt;/a>

  &lt;!-- Dropdown Structure -->
  &lt;ul id='dropdown1' class='dropdown-content'>
    &lt;li>&lt;a href="#!">one&lt;/a>&lt;/li>
    &lt;li>&lt;a href="#!">two&lt;/a>&lt;/li>
    &lt;li class="divider">&lt;/li>
    &lt;li>&lt;a href="#!">three&lt;/a>&lt;/li>
    &lt;li>&lt;a href="#!">&lt;i class="material-icons">view_module&lt;/i>four&lt;/a>&lt;/li>
    &lt;li>&lt;a href="#!">&lt;i class="material-icons">cloud&lt;/i>five&lt;/a>&lt;/li>
  &lt;/ul>
        </code></pre>
      </div>


      <div id="options" class="section scrollspy">
        <h4>Options</h4>
        <table class="striped">
          <thead>
            <tr>
                <th>Option Name</th>
                <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>inDuration</td>
              <td>The duration of the transition enter in milliseconds. Default: 300</td>
            </tr>
            <tr>
              <td>outDuration</td>
              <td>The duration of the transition out in milliseconds. Default: 225</td>
            </tr>
            <tr>
              <td>constrainWidth</td>
              <td>If true, constrainWidth to the size of the dropdown activator. Default: true</td>
            </tr>
            <tr>
              <td>hover</td>
              <td>If true, the dropdown will open on hover. Default: false</td>
            </tr>
            <tr>
              <td>gutter</td>
              <td>This defines the spacing from the aligned edge. Default: 0</td>
            </tr>
            <tr>
              <td>belowOrigin</td>
              <td>If true, the dropdown will show below the activator. Default: false</td>
            </tr>
            <tr>
              <td>alignment</td>
              <td>Defines the edge the menu is aligned to. Default: 'left'</td>
            </tr>
            <tr>
              <td>stopPropagation</td>
              <td>If true, stops the event propagating from the dropdown origin click handler. Default: false</td>
            </tr>
          </tbody>
        </table>
        <p>To use these inline you have to add them as data attributes. If you want more dynamic control, you can define them using the jQuery plugin below. </p>
        <pre><code class="language-markup">
  &lt;a class='dropdown-button btn' data-beloworigin="true" href='#' data-activates='dropdown1'>Drop Me!&lt;/a>
        </code></pre>
      </div>



      <div id="initialization" class="section scrollspy">
        <h4>jQuery Plugin Initialization</h4>
        <p>Initialization for dropdowns is only necessary if you create them dynamically.</p>
        <pre><code class="language-javascript">
  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
        </code></pre>

        <p>
        You can also open dropdowns programatically, the below code will make your modal open on document ready:
        </p>

        <pre><code class="language-javascript">
  $('.dropdown-button').dropdown('open');
        </code></pre>

        <p>
        You can also close dropdowns programatically:
        </p>

        <pre><code class="language-javascript">
  $('.dropdown-button').dropdown('close');
        </code></pre>
      </div>


</div>

    <!-- Table of Contents -->
    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#options">Options</a></li>
            <li><a href="#initialization">Initialization</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

    </main> 
          `; 
            this.reRender(`${html}`,document.getElementById("dropdown"));
            this.showDropdown();

}

     media2(){
           let  html =`
                       <main><div class="container">
  <div class="row">
    <div class="col s12 m9 l10">
      <p class="caption">Media components include things that have to do with large media objects like Images, Video, Audio, etc.</p>

      <div id="materialbox" class="scrollspy section">
        <h2 class="header">Material Box</h2>
         <p class="caption">Material box is a material design implementation of the Lightbox plugin. When a user clicks on an image that can be enlarged. Material box centers the image and enlarges it in a smooth, non-jarring manner. To dismiss the image, the user can either click on the image again, scroll away, or press the ESC key.</p>
        <img class="materialboxed responsive-img" width="650" src="images/b2.jpg">

       <p>Creating the above image with the effect is as simple as adding a <code class="language-markup">materialboxed</code> class to the image tag.</p>
      <pre><code class="language-markup">
    &lt;img class="materialboxed" width="650" src="./images/registerphoto.jpg">
      </code></pre>


      <h4>Initialization</h4>
       <p>Materialbox is intialized automatically. However, if you add images dynamically, you will have to add this initialization code.</p>
       <pre><code class="language-javascript">
  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
        </code></pre>

        <h4>Captions</h4>
        <p>It is very easy to add a short caption to your photo. Just add the caption as a <code class="language-markup">data-caption</code> attribute.</p>
        <img class="materialboxed" data-caption="A picture of a way with a group of trees in a park" width="250" src="https://lorempixel.com/800/400/nature/4">
          <pre><code class="language-markup">
  &lt;img class="materialboxed" data-caption="A picture of a way with a group of trees in a park" width="250" src="https://lorempixel.com/800/400/nature/4">
          </code></pre>
      </div>

      <br>


      <!--  Slider Section  -->
      <div id="slider" class="scrollspy section">
        <h3 class="header">Slider</h3>
         <p class="caption">Our slider is a simple and elegant image carousel. You can also have captions that will be transitioned on their own depending on their alignment. You can also have indicators that show up on the bottom of the slider. </p>
         <p>Note: This is also Hammer.js compatible! Try swiping with your finger to scroll through the slider.</p><br>

        <div class="slider">
          <ul class="slides">
            <li>
              <img src="images/b1.JPG"> <!-- random image -->
              <div class="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="images/b2.jpg"> <!-- random image -->
              <div class="caption left-align">
                <h3>Left Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="images/b3.jpg"> <!-- random image -->
              <div class="caption right-align">
                <h3>Right Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="images/b4.jpg"> <!-- random image -->
              <div class="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
          </ul>
        </div><br>

      <pre><code class="language-markup">
  &lt;div class="slider">
    &lt;ul class="slides">
      &lt;li>
        &lt;img src="images/b5.jpg"> &lt;!-- random image -->
        &lt;div class="caption center-align">
          &lt;h3>This is our big Tagline!&lt;/h3>
          &lt;h5 class="light grey-text text-lighten-3">Here's our small slogan.&lt;/h5>
        &lt;/div>
      &lt;/li>
      &lt;li>
        &lt;img src="images/b6.jpg"> &lt;!-- random image -->
        &lt;div class="caption left-align">
          &lt;h3>Left Aligned Caption&lt;/h3>
          &lt;h5 class="light grey-text text-lighten-3">Here's our small slogan.&lt;/h5>
        &lt;/div>
      &lt;/li>
      &lt;li>
        &lt;img src="https://lorempixel.com/580/250/nature/3"> &lt;!-- random image -->
        &lt;div class="caption right-align">
          &lt;h3>Right Aligned Caption&lt;/h3>
          &lt;h5 class="light grey-text text-lighten-3">Here's our small slogan.&lt;/h5>
        &lt;/div>
      &lt;/li>
      &lt;li>
        &lt;img src="https://lorempixel.com/580/250/nature/4"> &lt;!-- random image -->
        &lt;div class="caption center-align">
          &lt;h3>This is our big Tagline!&lt;/h3>
          &lt;h5 class="light grey-text text-lighten-3">Here's our small slogan.&lt;/h5>
        &lt;/div>
      &lt;/li>
    &lt;/ul>
  &lt;/div>
      </code></pre>

      <br>
      <h4>Fullscreen Slider</h4>
      <p>You can easliy make this slider a fullscreen slider by adding the class <code class="language-markup">fullscreen</code> to the slider div. Here's a quick demo.</p>
      <a href="fullscreen-slider-demo.html" target="_blank" class="btn-large waves-effect waves-light">Open Demo</a>

      <br>
      <h4>jQuery Initialization</h4>
       <pre><code class="language-javascript">
    $(document).ready(function(){
      $('.slider').slider();
    });
        </code></pre>
        <br>

        <h4>jQuery Plugin Options</h4>
        <table class="highlight">
          <thead>
            <tr>
                <th>Option Name</th>
                <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>indicators</td>
              <td>Set to false to hide slide indicators. (Default: True)</td>
            </tr>
            <tr>
              <td>height</td>
              <td>Set height of slider. (Default: 400)</td>
            </tr>
            <tr>
              <td>transition</td>
              <td>Set the duration of the transition animation in ms. (Default: 500)</td>
            </tr>
            <tr>
              <td>interval</td>
              <td>Set the duration between transitions in ms. (Default: 6000)</td>
            </tr>
          </tbody>
        </table>
        <br>

      <h4>jQuery Plugin Methods</h4>
      <p>We have methods to pause, start, move to next and move to previous slide.</p>
      <pre><code class="language-javascript col s12">
// Pause slider
$('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');
      </code></pre>
      </div>

    </div>


    <!-- Table of Contents -->
    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#materialbox">Material Box</a></li>
            <li><a href="#slider">Slider</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

    </main>
                       `; 
                         this.reRender(`${html}`,document.getElementById("media2"));
                         this.showMedia2();

}

    pushpin(){

           let  html = `
                   <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

      <div id="introduction" class="section scrollspy">
        <h4>Introduction</h4>
        <p class="caption">Pushpin is our fixed positioning plugin. Use this to pin elements to your page during specific scroll ranges. You can check out our live example: the fixed table of contents on the right. </p>

        <a href="pushpin.html" target="_blank" class="btn-large waves-effect waves-light">Open Demo</a>
999999
        <br><br>
        <h5>Demo Code</h5>
        <pre><code class="language-javascript">
  $('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });
        </code></pre>
        <pre><code class="language-css">
  // Only necessary for window height sized blocks.
  html, body, .block {
    height: 100%;
  }
        </code></pre>

      </div>

      <div id="initialization" class="section scrollspy">
        <h4>jQuery Plugin Initialization</h4>
        <p>Here is a sample initialization of pushpin. Take a look at what the options are and customize them to your needs.</p>
        <pre><code class="language-javascript col s12">
  $(document).ready(function(){
    $('.target').pushpin({
      top: 0,
      bottom: 1000,
      offset: 0
    });
  });
        </code></pre>
      </div>

      <div id="classes" class="section scrollspy">
        <h4>CSS Classes</h4>
        <p class="caption">A pushpinned element has 3 states. One above and below the scrolling threshold, and the pinned state where the element becomes fixed. Because pushpin changes positioning, chances are your element will look different when the states change. Use these css classes to correctly style your 3 states.</p>
        <pre><code class="language-css col s12">
  // Class for when element is above threshold
  .pin-top {
    position: relative;
  }

  // Class for when element is below threshold
  .pin-bottom {
    position: relative;
  }

  // Class for when element is pinned
  .pinned {
    position: fixed !important;
  }
        </code></pre>
      </div>


      <div id="options" class="section scrollspy">
        <h4>jQuery Plugin Options</h4>
        <table class="highlight">
          <thead>
            <tr>
                <th>Option Name</th>
                <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>top</td>
              <td>The distance in pixels from the top of the page where the element becomes fixed. (Default: 0)</td>
            </tr>
            <tr>
              <td>bottom</td>
              <td>The distance in pixels from the top of the page where the elements stops being fixed. (Default: Infinity)</td>
            </tr>
            <tr>
              <td>offset</td>
              <td>The offset from the top the element will be fixed at. (Default: 0)</td>
            </tr>
          </tbody>
        </table>

        <br />
        <h4>Removal</h4>
        <p>To remove the pushpin from an element, pass in <code class="language-javascript">'remove'</code> as the option to the pushpin function</p>
        <pre><code class="language-javascript">
  //Removes pushpin and pushpin classes
  $('.tabs-wrapper .row').pushpin('remove');
        </code></pre>

      </div>
    </div>


    <!-- Table of Contents -->
    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#initialization">Initialization</a></li>
            <li><a href="#classes">CSS classes</a></li>
            <li><a href="#options">Options</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</div>

    </main>
          `; 
            this.reRender(`${html}`,document.getElementById("pushpin"));
            this.showPushpin();

}

     sidenav(){

           let  html = `
                   <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

      <div id="structure" class="section scrollspy">
        <h4>Introduction</h4>
        <p class="caption">This is a slide out menu. You can add a dropdown to your sidebar by using our collapsible component. If you want to see a demo, our sidebar will use this on smaller screens. To use this in conjunction with a fullscreen navigation, you have to use two copies of the same UL.</p>

        <a href="#" data-activates="slide-out" class="btn button-collapse">Side nav demo</a>

        <ul id="slide-out" class="side-nav">
          <li><div class="user-view">
            <div class="background">
              <img src="images/office.jpg">
            </div>
            <a href="#!user"><img class="circle" src="images/yuna.jpg"></a>
            <a href="#!name"><span class="white-text name">John Doe</span></a>
            <a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
          </div></li>
          <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
          <li><a href="#!">Second Link</a></li>
          <li><div class="divider"></div></li>
          <li><a class="subheader">Subheader</a></li>
          <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>

        <h4>HTML Structure</h4>
        <pre><code class="language-markup col s12">
  &lt;ul id="slide-out" class="side-nav">
    &lt;li>&lt;div class="user-view">
      &lt;div class="background">
        &lt;img src="images/office.jpg">
      &lt;/div>
      &lt;a href="#!user">&lt;img class="circle" src="images/yuna.jpg">&lt;/a>
      &lt;a href="#!name">&lt;span class="white-text name">John Doe&lt;/span>&lt;/a>
      &lt;a href="#!email">&lt;span class="white-text email">jdandturk@gmail.com&lt;/span>&lt;/a>
    &lt;/div>&lt;/li>
    &lt;li>&lt;a href="#!">&lt;i class="material-icons">cloud&lt;/i>First Link With Icon&lt;/a>&lt;/li>
    &lt;li>&lt;a href="#!">Second Link&lt;/a>&lt;/li>
    &lt;li>&lt;div class="divider">&lt;/div>&lt;/li>
    &lt;li>&lt;a class="subheader">Subheader&lt;/a>&lt;/li>
    &lt;li>&lt;a class="waves-effect" href="#!">Third Link With Waves&lt;/a>&lt;/li>
  &lt;/ul>
  &lt;a href="#" data-activates="slide-out" class="button-collapse">&lt;i class="material-icons">menu&lt;/i>&lt;/a>
        </code></pre>
      </div>

      <div id="initialization" class="section scrollspy">
        <h4>jQuery Plugin Initialization</h4>
        <pre><code class="language-javascript col s12">
  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
        </code></pre>
      </div>


      <div id="options" class="scrollspy section">
        <h4>Options</h4>
        <p>You can customize the sideNav by setting your own width and the alignment of the menu. </p>
        <pre><code class="language-javascript">
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on &lt;a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is closed
    }
  );
        </code></pre>
      </div>

      <div id="method" class="section scrollspy">
        <h4>jQuery Plugin Methods</h4>
        <p>We have methods to show and hide your sidebar you can use to programmatically control your sidebar.</p>
        <pre><code class="language-javascript col s12">
  // Show sideNav
  $('.button-collapse').sideNav('show');
  // Hide sideNav
  $('.button-collapse').sideNav('hide');
  // Destroy sideNav
  $('.button-collapse').sideNav('destroy');
        </code></pre>
      </div>

      <div id="variations" class="scrollspy section">
        <h2 class="header">Variations</h2>
        <p class="caption">
          Here are some useful variations and additional elements you can add to your sidebar.
        </p>

        <h4>Dropdown HTML Structure</h4>
          <p>Add collapsible menus to your sidebar.</p>
          <pre><code class="language-markup col s12">
    &lt;ul id="slide-out" class="side-nav">
      &lt;li>&lt;a href="#!">First Sidebar Link&lt;/a>&lt;/li>
      &lt;li>&lt;a href="#!">Second Sidebar Link&lt;/a>&lt;/li>
      &lt;li class="no-padding">
        &lt;ul class="collapsible collapsible-accordion">
          &lt;li>
            &lt;a class="collapsible-header">Dropdown&lt;i class="material-icons">arrow_drop_down&lt;/i>&lt;/a>
            &lt;div class="collapsible-body">
              &lt;ul>
                &lt;li>&lt;a href="#!">First&lt;/a>&lt;/li>
                &lt;li>&lt;a href="#!">Second&lt;/a>&lt;/li>
                &lt;li>&lt;a href="#!">Third&lt;/a>&lt;/li>
                &lt;li>&lt;a href="#!">Fourth&lt;/a>&lt;/li>
              &lt;/ul>
            &lt;/div>
          &lt;/li>
        &lt;/ul>
      &lt;/li>
    &lt;/ul>
    &lt;ul class="right hide-on-med-and-down">
      &lt;li>&lt;a href="#!">First Sidebar Link&lt;/a>&lt;/li>
      &lt;li>&lt;a href="#!">Second Sidebar Link&lt;/a>&lt;/li>
      &lt;li>&lt;a class="dropdown-button" href="#!" data-activates="dropdown1">Dropdown&lt;i class="material-icons right">arrow_drop_down&lt;/i>&lt;/a>&lt;/li>
      &lt;ul id='dropdown1' class='dropdown-content'>
        &lt;li>&lt;a href="#!">First&lt;/a>&lt;/li>
        &lt;li>&lt;a href="#!">Second&lt;/a>&lt;/li>
        &lt;li>&lt;a href="#!">Third&lt;/a>&lt;/li>
        &lt;li>&lt;a href="#!">Fourth&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/ul>
    &lt;a href="#" data-activates="slide-out" class="button-collapse">&lt;i class="material-icons">menu&lt;/i>&lt;/a>
          </code></pre><br>

          <h4>Fullscreen HTML Structure</h4>
          <p>If you want the menu to be accessible on all screensizes you just have to add a simple helper class <code class="language-markup">show-on-large</code> to the <code class="language-markup">.button-collapse</code>. </p>

          <pre><code class="language-markup col s12">
    &lt;ul id="slide-out" class="side-nav">
      &lt;li>&lt;a href="#!">First Sidebar Link&lt;/a>&lt;/li>
      &lt;li>&lt;a href="#!">Second Sidebar Link&lt;/a>&lt;/li>
    &lt;/ul>
    &lt;a href="#" data-activates="slide-out" class="button-collapse show-on-large">&lt;i class="material-icons">menu&lt;/i>&lt;/a>
          </code></pre><br>

          <h4>Fixed HTML Structure</h4>
          <p>Add the class <code class="language-markup">fixed</code> to have the sideNav be fixed and open on large screens and hides to the regular functionality on smaller screens. Our sideNav on the left is an example of this.</p>
          <pre><code class="language-markup col s12">
    &lt;ul id="slide-out" class="side-nav fixed">
      &lt;li>&lt;a href="#!">First Sidebar Link&lt;/a>&lt;/li>
      &lt;li>&lt;a href="#!">Second Sidebar Link&lt;/a>&lt;/li>
    &lt;/ul>
    &lt;a href="#" data-activates="slide-out" class="button-collapse">&lt;i class="material-icons">menu&lt;/i>&lt;/a>
          </code></pre>
          <p>If you are planning on using this you will have to offset your content by the width of the side menu. Place the padding on where the offset content will be, which in our case is in header, main and footer.</p>
          <pre><code class="language-css col s12">
    header, main, footer {
      padding-left: 300px;
    }

    @media only screen and (max-width : 992px) {
      header, main, footer {
        padding-left: 0;
      }
    }
          </code></pre>
        </div>
      </div>

    <!-- Table of Contents -->
    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#structure">Structure</a></li>
            <li><a href="#initialization">Intialization</a></li>
            <li><a href="#options">Plugin Options</a></li>
            <li><a href="#method">Methods</a></li>
            <li><a href="#variations">Variations</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

    </main> 
          `; 
            this.reRender(`${html}`,document.getElementById("sidenav"));
            this.showSideNav();

}

     scrollfire(){

           let  html = `
                     <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

      <div id="introduction" class="section scrollspy">
        <h4>Introduction</h4>
        <p class="caption">ScrollFire is a jQuery Plugin that executes callback functions depending on how far into the page you've scrolled. We'll show you how you can use this plugin with many demos and examples.</p>
      </div>


      <div id="initialization" class="section scrollspy">
        <h4>jQuery Plugin Initialization</h4>
        <pre><code class="language-javascript col s12">
  var options = [
    {selector: '.class', offset: 200, callback: customCallbackFunc } },
    {selector: '.other-class', offset: 200, callback: function() {
      customCallbackFunc();
    } },
  ];
  Materialize.scrollFire(options);
        </code></pre>
      </div>

      <div id="options" class="section scrollspy">
        <h4>jQuery Plugin Options</h4>
        <table class="highlight">
          <thead>
            <tr>
                <th>Option Name</th>
                <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>selector</td>
              <td>The selector for the element that is being tracked.</td>
            </tr>
            <tr>
              <td>offset</td>
              <td>If this is 0, the callback will be fired when the selector element is at the very bottom of the user's window.</td>
            </tr>
            <tr>
              <td>callback</td>
              <td>Execute a callback function when the user scrolls to the threshold. It will only be called once. <br /> The callback provides a parameter which refers to the current element selected.</td>
            </tr>
          </tbody>
        </table>

        <!-- Demo -->
        <h2 class="header">ScrollFire Demo</h2>
        <p>Scroll through slowly to get sense of what ScrollFire can do for you. This is the ScrollFire code that we have used on this page.</p>
        <pre>
    <code class="language-javascript">
    var options = [</code>
      <code id="call-1" class="language-javascript">{selector: '#staggered-test', offset: 50, callback: function(el) {
        Materialize.toast("This is our ScrollFire Demo!", 1500 );
      } },</code>
      <code id="call-2" class="language-javascript">{selector: '#staggered-test', offset: 205, callback: function(el) {
        Materialize.toast("Please continue scrolling!", 1500 );
      } },</code>
      <code id="call-3" class="language-javascript">{selector: '#staggered-test', offset: 400, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },</code>
      <code id="call-4" class="language-javascript">{selector: '#image-test', offset: 500, callback: function(el) {
        Materialize.fadeInImage($(el));
      } }</code>
    ];
    Materialize.scrollFire(options);
        </code></pre>
        <ul id="staggered-test">
          <li>
            <h4><a href="#">List Item</a></h4>
            <p>This is a description</p>
          </li>
          <li>
            <h4><a href="#">List Item</a></h4>
            <p>This is a description</p>
          </li>
          <li>
            <h4><a href="#">List Item</a></h4>
            <p>This is a description</p>
          </li>
          <li>
            <h4><a href="#">List Item</a></h4>
            <p>This is a description</p>
          </li>
          <li>
            <h4><a href="#">List Item</a></h4>
            <p>This is a description</p>
          </li>
        </ul>

        <img id="image-test" class="responsive-img" src="images/parallax2.jpg">
      </div>



    </div>

    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#initialization">Initialization</a></li>
            <li><a href="#options">Options</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

<script>

</script>


    </main>
          `; 
            this.reRender(`${html}`,document.getElementById("scrollfire"));
            this.showScrollfire();

}

     tabs(){

           let  html = `
                  <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

      <div id="introduction" class="section scrollspy">
        <h4>Introduction</h4>
        <p class="caption">The tabs structure consists of an unordered list of tabs that have hashes corresponding to tab ids. Then when you click on each tab, only the container with the corresponding tab id will become visible. You can add the class <code class="language-markup">.disabled</code> to make a tab inaccessible. </p>

        <br>
        <h5>Variable Width Tabs<span>Default</span></h5>
        <ul class="tabs tab-demo z-depth-1">
          <li class="tab"><a href="#test16">Test 1</a></li>
          <li class="tab"><a class="active" href="#test17">Test 2</a></li>
          <li class="tab"><a href="#test18">Test 3</a></li>
          <li class="tab"><a href="#test19">Test 4</a></li>
        </ul>
        <div id="test16" class="col s12"><p>Test 1</p></div>
        <div id="test17" class="col s12"><p>Test 2</p></div>
        <div id="test18" class="col s12"><p>Test 3</p></div>
        <div id="test19" class="col s12"><p>Test 4</p></div>

        <br>
        <h5>Fixed Width Tabs<span>Add the <code class="language-markup">.tabs-fixed-width</code> class</span></h5>
        <ul class="tabs tabs-fixed-width tab-demo z-depth-1">
          <li class="tab"><a href="#test1">Test 1</a></li>
          <li class="tab"><a class="active" href="#test2">Test 2</a></li>
          <li class="tab disabled"><a href="#test3">Disabled Tab</a></li>
          <li class="tab"><a href="#test4">Test 4</a></li>
          <li class="tab"><a href="#test0">Test 5</a></li>
        </ul>
        <div id="test1" class="col s12"><p>Test 1</p></div>
        <div id="test2" class="col s12"><p>Test 2</p></div>
        <div id="test3" class="col s12"><p>Test 3</p></div>
        <div id="test4" class="col s12"><p>Test 4</p></div>
        <div id="test0" class="col s12"><p>Test 5</p></div>

        <br>
        <h5>Scrollable Tabs <span>Tabs automatically become scrollable</span></h5>
        <ul class="tabs tab-demo z-depth-1">
          <li class="tab"><a href="#test5">Test 1</a></li>
          <li class="tab"><a class="active" href="#test6">Test 2</a></li>
          <li class="tab"><a href="#test7">Test 4</a></li>
          <li class="tab"><a href="#test8">Test 1</a></li>
          <li class="tab"><a class="active" href="#test9">Test 2</a></li>
          <li class="tab disabled"><a href="#test10">Disabled Tab</a></li>
          <li class="tab"><a href="#test11">Test 4</a></li>
          <li class="tab"><a href="#test12">Test 1</a></li>
          <li class="tab"><a class="active" href="#test13">Test 2</a></li>
          <li class="tab col s3 disabled"><a href="#test14">Disabled Tab</a></li>
          <li class="tab col s3"><a href="#test15">Test 4</a></li>
        </ul>
        <div id="test5" class="col s12"><p>Test 5</p></div>
        <div id="test6" class="col s12"><p>Test 6</p></div>
        <div id="test7" class="col s12"><p>Test 7</p></div>
        <div id="test8" class="col s12"><p>Test 8</p></div>
        <div id="test9" class="col s12"><p>Test 9</p></div>
        <div id="test10" class="col s12"><p>Test 10</p></div>
        <div id="test11" class="col s12"><p>Test 11</p></div>
        <div id="test12" class="col s12"><p>Test 12</p></div>
        <div id="test13" class="col s12"><p>Test 13</p></div>
        <div id="test14" class="col s12"><p>Test 14</p></div>
        <div id="test15" class="col s12"><p>Test 15</p></div>
      </div>


      <div id="structure" class="section scrollspy">
        <h4>Tabs HTML Structure</h4>
        <pre><code class="language-markup">
  &lt;div class="row">
    &lt;div class="col s12">
      &lt;ul class="tabs">
        &lt;li class="tab col s3">&lt;a href="#test1">Test 1&lt;/a>&lt;/li>
        &lt;li class="tab col s3">&lt;a class="active" href="#test2">Test 2&lt;/a>&lt;/li>
        &lt;li class="tab col s3 disabled">&lt;a href="#test3">Disabled Tab&lt;/a>&lt;/li>
        &lt;li class="tab col s3">&lt;a href="#test4">Test 4&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
    &lt;div id="test1" class="col s12">Test 1&lt;/div>
    &lt;div id="test2" class="col s12">Test 2&lt;/div>
    &lt;div id="test3" class="col s12">Test 3&lt;/div>
    &lt;div id="test4" class="col s12">Test 4&lt;/div>
  &lt;/div>
        </code></pre>
      </div>

      <div id="initialization" class="section scrollspy">
        <h4>jQuery Plugin Initialization</h4>
        <p>Tabs are initialized automatically, but if you add tabs dynamically you will have to initialize them like this.</p>
        <pre><code class="language-javascript">
  $(document).ready(function(){
    $('ul.tabs').tabs();
  });
        </code></pre>
      </div>

      <div id="method" class="section scrollspy">
        <h4>jQuery Plugin Methods</h4>
        <p>You can programmatically trigger a tab change with our <code class="language-javascript">select_tab</code> method. You have to input the id of the tab you want to switch to. In the case of our demo it would be either test1, test2, test3, or test4.</p>
        <pre><code class="language-javascript">
  $(document).ready(function(){
    $('ul.tabs').tabs('select_tab', 'tab_id');
  });
        </code></pre>
      </div>


      <div id="options" class="section scrollspy">
        <h4>jQuery Plugin Options</h4>
        <table class="highlight">
          <thead>
            <tr>
                <th>Option Name</th>
                <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>onShow</td>
              <td>Execute a callback function when the tab is changed. <br /> The callback provides a parameter which refers to the current tab being shown.</td>
            </tr>
            <tr>
              <td>swipeable</td>
              <td>Set to true to enable swipeable tabs. This also uses the responsiveThreshold option. Default: false</td>
            </tr>
            <tr>
              <td>responsiveThreshold</td>
              <td>The maximum width of the screen, in pixels, where the swipeable functionality initializes. Default: Infinity</td>
            </tr>
          </tbody>
        </table>
      </div>


      <div id="preselecting" class="section scrollspy">
        <h4>Preselecting a tab</h4>
          <p>By default, the first tab is selected. But if this is not what you want, you can preselect a tab by either passing in the hash in the url ex:<code class="language-markup">#test2</code>. Or you can add the class <code class="language-markup">active</code> to the <code class="language-markup">a</code> tag.</p>
        <pre><code class="language-markup col s12">
  &lt;li class="tab col s2">&lt;a class="active" href="#test3">Test 3&lt;/a>&lt;/li>
        </code></pre>
      </div>


      <div id="external" class="section scrollspy">
        <h4>Linking to an External Page</h4>
          <p>By default, Materialize tabs will ignore their default anchor behaviour.  To force a tab to behave as a regular hyperlink, just specify the <code class="language-markup">target</code> property of that link!  A list of <code class="language-markup">target</code> values may be <a href="https://www.w3schools.com/tags/att_a_target.asp">found here</a>.</p>
        <pre><code class="language-markup col s12">
  &lt;li class="tab col s2">
    &lt;a target="_blank" href="https://github.com/Dogfalo/materialize">External link in new window&lt;/a>
  &lt;/li>
  &lt;li class="tab col s2">
    &lt;a target="_self" href="https://github.com/Dogfalo/materialize">External link in same window&lt;/a>
  &lt;/li>
        </code></pre>
      </div>


      <div id="swipeable" class="section scrollspy">
        <h4>Swipeable Tabs</h4>
        <p>By setting the <code class="language-javascript">swipeable</code> option to <code class="language-markup">true</code>, you can enable tabs where you can swipe on touch enabled devices to switch tabs. Make sure you keep the tab content divs in the same wrapping container. You can also set the <code class="language-javascript">responsiveThreshold</code> option to a screen width in pixels where the swipeable functionality will activate.</p>
        <p>Note: This is also touch compatible! Try swiping with your finger to scroll through the carousel.</p>
        <ul id="tabs-swipe-demo" class="tabs">
          <li class="tab col s3"><a href="#test-swipe-1">Test 1</a></li>
          <li class="tab col s3"><a class="active" href="#test-swipe-2">Test 2</a></li>
          <li class="tab col s3"><a href="#test-swipe-3">Test 3</a></li>
        </ul>
        <div id="test-swipe-1" class="col s12 blue">Test 1</div>
        <div id="test-swipe-2" class="col s12 red">Test 2</div>
        <div id="test-swipe-3" class="col s12 green">Test 3</div>

        <pre><code class="language-markup col s12">
  &lt;ul id="tabs-swipe-demo" class="tabs">
    &lt;li class="tab col s3">&lt;a href="#test-swipe-1">Test 1&lt;/a>&lt;/li>
    &lt;li class="tab col s3">&lt;a class="active" href="#test-swipe-2">Test 2&lt;/a>&lt;/li>
    &lt;li class="tab col s3">&lt;a href="#test-swipe-3">Test 3&lt;/a>&lt;/li>
  &lt;/ul>
  &lt;div id="test-swipe-1" class="col s12 blue">Test 1&lt;/div>
  &lt;div id="test-swipe-2" class="col s12 red">Test 2&lt;/div>
  &lt;div id="test-swipe-3" class="col s12 green">Test 3&lt;/div>
        </code></pre>
      </div>

    </div>

    <!-- Table of Contents -->
    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#structure">Structure</a></li>
            <li><a href="#initialization">Intialization</a></li>
            <li><a href="#method">Methods</a></li>
            <li><a href="#options">Options</a></li>
            <li><a href="#preselecting">Preselecting</a></li>
            <li><a href="#external">External Links</a></li>
            <li><a href="#swipeable">Swipeable Tabs</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>


    </main>
          `; 
            this.reRender(`${html}`,document.getElementById("tabs"));
            this.showTabs();

}
         waves(){
          let html = `

                <main><div class="container">
  <div class="row">

    <div class="col s12 m9 l10">

    <div id="introduction" class="section scrollspy">

      <h4>Introduction</h4>
        <p class="caption">Waves is an external library that we've included in Materialize to allow us to create the ink effect outlined in Material Design</p>
      <a class="waves-effect waves-light btn" href="#!">Wave</a>
    </div>



    <div id="applying-waves" class="section scrollspy">
      <h4>Applying Waves</h4>
      <p>To put the waves effect on buttons, you just have to put the class <code class="language-markup">waves-effect</code> on to the buttons. If you want the waves effect to be white instead, add both <code class="language-markup">waves-effect waves-light</code> as classes.</p>
      <pre><code class="language-markup">
  &lt;a class="waves-effect waves-light btn-large" href="#">Wave&lt;/a>
      </code></pre>
    </div>



    <div id="customization" class="section scrollspy">
      <!--  Customization  -->
      <h4>Customization</h4>
      <p>There are several ways to customize waves, you can either use pre-created classes, or you can define your own color by creating a new class</p>
      <div class="row">
         <div class="col s12 l6">
          <h5 class="light">Available Colors</h5>
          <p>To use these, just add the corresponding class to your button. Play around with changing the background color of butons and the waves effect to create something cool!</p>
          <pre><code class="language-markup">
    &lt;a href="#!" class="btn waves-effect waves-teal">Send&lt;/a>
          </code></pre>
          <div class="collection waves-color-demo">
            <div class="collection-item">Default<a href="#!" class="waves-effect btn secondary-content">Send</a></div>
            <div class="collection-item"><code class="language-markup">waves-light</code><a href="#!" class="waves-effect waves-light btn secondary-content">Send</a></div>
            <div class="collection-item"><code class="language-markup">waves-red</code><a href="#!" class="waves-effect waves-red btn secondary-content">Send</a></div>
            <div class="collection-item"><code class="language-markup">waves-yellow</code><a href="#!" class="waves-effect waves-yellow btn secondary-content">Send</a></div>
            <div class="collection-item"><code class="language-markup">waves-orange</code><a href="#!" class="waves-effect waves-orange btn secondary-content">Send</a></div>
            <div class="collection-item"><code class="language-markup">waves-purple</code><a href="#!" class="waves-effect waves-purple btn secondary-content">Send</a></div>
            <div class="collection-item"><code class="language-markup">waves-green</code><a href="#!" class="waves-effect waves-green btn secondary-content">Send</a></div>
            <div class="collection-item"><code class="language-markup">waves-teal</code><a href="#!" class="waves-effect waves-teal btn secondary-content">Send</a></div>
          </div>
        </div>

        <div class="col s12 l6">
          <h5 class="light">Custom Colors</h5>
          <p>If the color you want is not already available, you can easily make your own waves color by creating a custom CSS class. Take a look at the example below where we add a waves-brown effect</p>

          <pre><code class="language-css">
    /*
    When creating your CSS selector,
    change "brown" to something of your choosing
    */
    .waves-effect.waves-brown .waves-ripple {
     /* The alpha value allows the text and background color
     of the button to still show through. */
      background-color: rgba(121, 85, 72, 0.65);
    }
          </code></pre>
        </div>
      </div>
    </div>

    <div id="circle" class="section scrollspy">
      <!--  Circle  -->
      <h4>Circle</h4>
      <p>If you want waves to form to a non rectangular shape, there is an option for circular waves. Just add the <code class="language-markup">waves-circle</code> in addition to <code class="language-markup">waves-effect</code></p>
      <div class="row">
         <div class="col s12">
          <h5 class="light">HTML Markup</h5>
          <pre><code class="language-markup">
  &lt;a href="#!" class="waves-effect waves-circle waves-light btn-floating secondary-content">
    &lt;i class="material-icons">add&lt;/i>
  &lt;/a>
          </code></pre>
          <div class="collection waves-color-demo">
            <div class="collection-item">Default<a href="#!" class="waves-effect waves-circle btn-floating secondary-content"><i class="material-icons">add</i></a></div>
            <div class="collection-item"><code class="language-markup">waves-light</code><a href="#!" class="waves-effect waves-circle waves-light btn-floating secondary-content"><i class="material-icons">add</i></a></div>
          </div>
        </div>
      </div>
    </div>

    </div>


    <!-- Table of Contents -->
    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#applying-waves">Applying Waves</a></li>
            <li><a href="#customization">Customization</a></li>
            <li><a href="#circle">Circle Waves</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>


    </main> 
          `;
          this.reRender(`${html}`,document.getElementById("waves"));
          this.showWaves();
         }

          carousel(){
            let html =  `
                 <main><div class="container">
  <div class="row">
    <div class="col s12 m9 l10">

      <!--  Introduction Section  -->
      <div id="introduction" class="scrollspy section">
        <h4>Introduction</h4>
        <p class="caption">Our Carousel is a robust and versatile component that can be an image slider, to an item carousel, to an onboarding experience. It is touch enabled making it especially smooth to use on mobile.</p>
         <p>Note: This is also touch compatible! Try swiping with your finger to scroll through the carousel.</p><br>

        <div class="carousel">
          <a class="carousel-item" href="#one!"><img src="images/b1.JPG"></a>
          <a class="carousel-item" href="#two!"><img src="images/b2.jpg"></a>
          <a class="carousel-item" href="#three!"><img src="images/b3.jpgG"></a>
          <a class="carousel-item" href="#four!"><img src="images/b4.jpg"></a>
          <a class="carousel-item" href="#five!"><img src="images/b5.jpg"></a>
        </div><br>

      <pre><code class="language-markup">
  &lt;div class="carousel">
    &lt;a class="carousel-item" href="#one!">&lt;img src="images/parallax1.jpg ">&lt;/a>
    &lt;a class="carousel-item" href="#two!">&lt;img src="images/parallax2.jpg">&lt;/a>
    &lt;a class="carousel-item" href="#three!">&lt;img src="images/b7.JPG">&lt;/a>
    &lt;a class="carousel-item" href="#four!">&lt;img src="images/b8.JPG">&lt;/a>
    &lt;a class="carousel-item" href="#five!">&lt;img src="images/b9.JPG">&lt;/a>
  &lt;/div>
      </code></pre>
    </div>

    <!--  Options Section  -->
    <div id="options" class="scrollspy section">
      <h4>jQuery Initialization</h4>
       <pre><code class="language-javascript">
    $(document).ready(function(){
      $('.carousel').carousel();
    });
        </code></pre>
        <br>

        <h4>jQuery Plugin Options</h4>
        <table class="highlight">
          <thead>
            <tr>
                <th>Option Name</th>
                <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>duration</td>
              <td>Transition duration in milliseconds. (Default: 200)</td>
            </tr>
            <tr>
              <td>dist</td>
              <td>Perspective zoom. If 0, all items are the same size. (Default: -100)</td>
            </tr>
            <tr>
              <td>shift</td>
              <td>Set the spacing of the center item. (Default: 0)</td>
            </tr>
            <tr>
              <td>padding</td>
              <td>Set the padding between non center items. (Default: 0)</td>
            </tr>
            <tr>
              <td>fullWidth</td>
              <td>Make the carousel a full width slider like the second example. (Default: false)</td>
            </tr>
            <tr>
              <td>indicators</td>
              <td>Set to true to show indicators. (Default: false)</td>
            </tr>
            <tr>
              <td>noWrap</td>
              <td>Don't wrap around and cycle through items. (Default: false)</td>
            </tr>
          </tbody>
        </table>
        <br>

      <h4>jQuery Plugin Methods</h4>
      <p>We have methods to pause, start, move to next and move to previous slide.</p>
      <pre><code class="language-javascript col s12">
// Next slide
$('.carousel').carousel('next');
$('.carousel').carousel('next', 3); // Move next n times.
// Previous slide
$('.carousel').carousel('prev');
$('.carousel').carousel('prev', 4); // Move prev n times.
// Set to nth slide
$('.carousel').carousel('set', 4);
      </code></pre>
      </div>

      <!--  Slider Section  -->
      <div id="slider" class="scrollspy section">
        <h4>Full Width Slider</h4>
        <p class="caption">Our carousel has a full width option that makes it into a simple and elegant image carousel. You can also have indicators that show up on the bottom of the slider. </p>
        <p>Note: This is also touch compatible! Try swiping with your finger to scroll through the carousel.</p><br>

        <div class="carousel carousel-slider">
          <a class="carousel-item" href="#one!"><img src="images/b7.jpg"></a>
          <a class="carousel-item" href="#two!"><img src="images/b8.jpg"></a>
          <a class="carousel-item" href="#three!"><img src="images/b9.jpg"></a>
          <a class="carousel-item" href="#four!"><img src="images/registerphoto.jpg"></a>
        </div><br>

        <pre><code class="language-markup">
  &lt;div class="carousel carousel-slider">
    &lt;a class="carousel-item" href="#one!">&lt;img src="https://lorempixel.com/800/400/food/1">&lt;/a>
    &lt;a class="carousel-item" href="#two!">&lt;img src="https://lorempixel.com/800/400/food/2">&lt;/a>
    &lt;a class="carousel-item" href="#three!">&lt;img src="https://lorempixel.com/800/400/food/3">&lt;/a>
    &lt;a class="carousel-item" href="#four!">&lt;img src="https://lorempixel.com/800/400/food/4">&lt;/a>
  &lt;/div>
        </code></pre>

        <pre><code class="language-javascript">
  $('.carousel.carousel-slider').carousel({fullWidth: true});
        </code></pre>
      </div>

      <!-- Special Options Section  -->
      <div id="special" class="scrollspy section">
        <h4>Special Options</h4>
        <p class="caption">The carousel doesn't only support images but also allows you to make content carousels. You can add fixed items to your carousel by adding a div with the class <code class="language-markup">carousel-fixed-item</code> and adding your fixed content in there.</p>
        <p>Note: This is also touch compatible! Try swiping with your finger to scroll through the carousel.</p>
        <br>

        <div class="carousel carousel-slider center" data-indicators="true">
          <div class="carousel-fixed-item center">
            <a class="btn waves-effect white grey-text darken-text-2">button</a>
          </div>
          <div class="carousel-item red white-text" href="#one!">
            <h2>First Panel</h2>
            <p class="white-text">This is your first panel</p>
          </div>
          <div class="carousel-item amber white-text" href="#two!">
            <h2>Second Panel</h2>
            <p class="white-text">This is your second panel</p>
          </div>
          <div class="carousel-item green white-text" href="#three!">
            <h2>Third Panel</h2>
            <p class="white-text">This is your third panel</p>
          </div>
          <div class="carousel-item blue white-text" href="#four!">
            <h2>Fourth Panel</h2>
            <p class="white-text">This is your fourth panel</p>
          </div>
        </div><br>
        <pre><code class="language-markup">
  &lt;div class="carousel carousel-slider center" data-indicators="true">
    &lt;div class="carousel-fixed-item center">
      &lt;a class="btn waves-effect white grey-text darken-text-2">button&lt;/a>
    &lt;/div>
    &lt;div class="carousel-item red white-text" href="#one!">
      &lt;h2>First Panel&lt;/h2>
      &lt;p class="white-text">This is your first panel&lt;/p>
    &lt;/div>
    &lt;div class="carousel-item amber white-text" href="#two!">
      &lt;h2>Second Panel&lt;/h2>
      &lt;p class="white-text">This is your second panel&lt;/p>
    &lt;/div>
    &lt;div class="carousel-item green white-text" href="#three!">
      &lt;h2>Third Panel&lt;/h2>
      &lt;p class="white-text">This is your third panel&lt;/p>
    &lt;/div>
    &lt;div class="carousel-item blue white-text" href="#four!">
      &lt;h2>Fourth Panel&lt;/h2>
      &lt;p class="white-text">This is your fourth panel&lt;/p>
    &lt;/div>
  &lt;/div>
        </code></pre>
        <pre><code class="language-javascript">
  $('.carousel.carousel-slider').carousel({fullWidth: true});
        </code></pre>
      </div>

    </div>

    <!-- Table of Contents -->
    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#options">Options</a></li>
            <li><a href="#slider">Full Width Slider</a></li>
            <li><a href="#special">Special Options</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

    </main>  
            `;this.reRender(`${html}`,document.getElementById("carousel"));
            this.showCarousel();
          }

          discovery(){
            let html = `
                      <main><div class="container bsa">
  <div class="row">
    <div class="col s12 m9 l10">

      <div id="introduction" class="section scrollspy">
        <p class="caption">Provide value and encourage return visits by introducing users to new features and functionality at contextually relevant moments.</p>

        <h2 class="header">Tap Target</h2>
        <p class="caption">Feature discovery prompts have more impact when they are presented to the right users at contextually relevant moments. When presented to the wrong user at the wrong time, they can be intrusive and annoying.</p>

        <a id="feature" class="waves-effect waves-light btn" onclick="$b('.tap-target').tapTarget('open')">Open tap target</a>&nbsp;&nbsp;&nbsp;&nbsp;<a class="waves-effect waves-light btn" onclick="$b('.tap-target').tapTarget('close')">Close tap target</a>

        <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
          <a id="menu" class="btn btn-floating btn-large cyan" onclick="$b('.tap-target').tapTarget('open')"><i class="material-icons">menu</i></a>
        </div>

        <div class="tap-target cyan" data-activates="menu">
          <div class="tap-target-content white-text">
            <h5>I am here</h5>
            <p class="white-text">Provide value and encourage return visits by introducing users to new features and functionality at contextually relevant moments.</p>
          </div>
        </div>
      </div>



        <div id="structure" class="scrollspy section">
          <h4>Tap Target HTML Structure</h4>
          <pre><code class="language-markup">
  &lt;!-- Element Showed -->
  &lt;a id="menu" class="waves-effect waves-light btn btn-floating" >&lt;i class="material-icons">menu&lt;/i>&lt;/a>

  &lt;!-- Tap Target Structure -->
  &lt;div class="tap-target" data-activates="menu">
    &lt;div class="tap-target-content">
      &lt;h5>Title&lt;/h5>
      &lt;p>A bunch of text&lt;/p>
    &lt;/div>
  &lt;/div>
          </code></pre>
        </div>



        <div id="methods" class="scrollspy section">
          <h4>jQuery Plugin Methods</h4>
          <p class="caption">To open/close a tap target:</p>
          <pre><code class="language-javascript">
  $('.tap-target').tapTarget('open');
  $('.tap-target').tapTarget('close');
        </code></pre>
      </div>

</div>

<!-- Table of Contents -->
  <div class="col hide-on-small-only m3 l2">
    <div class="toc-wrapper">
      <div class="buysellads hide-on-small-only">
        <!-- CarbonAds Zone Code -->
        <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
      </div>
      <div style="height: 1px;">
        <ul class="section table-of-contents">
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#structure">Structure</a></li>
          <li><a href="#methods">Methods</a></li>
        </ul>
      </div>
    </div>
  </div>

</div>
</div>
    </main>
            `;this.reRender(`${html}`,document.getElementById("discovery"));
             this.showDiscovery();
      }
  
    profile(){
            let html =`
                
            `;
           this.reRender(`${html}`,document.getElementById("profile"));
           this.showProfile();   
    }

		    showContent(){
      		$b('#content').show();
          $b('#typography').hide();
          $b('#color').hide(); 
          $b('#grid').hide();
          $b('#helpers').hide();
          $b('#media').hide();
          $b('#pulse').hide();
          $b('#sass').hide();
          $b('#table').hide();
          $b('#transition').hide();
          $b('#badges').hide();
          $b('#buttons').hide();
          $b('#breadCrumbs').hide();
          $b('#cards').hide();
          $b('#chips').hide();
          $b('#collections').hide();
          $b('#footer').hide();
          $b('#forms').hide();
          $b('#navBar').hide();
           $b('#dialog').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
          $b('#sidenav').hide();
          $b('#scrollfire').hide();
          $b('#discovery').hide(); 
          $b(document).ready(function(){
          $b('.collapsible').collapsible();
          $b('#tabs').hide();
          $b('#waves').hide();
          $b('#carousel').hide(); 
      });    
            
	}

        showColor() {
          $b('#color').show();  
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#grid').hide();
          $b('#helpers').hide();     
          $b('#media').hide();
          $b('#pulse').hide();
          $b('#sass').hide();
          $b('#table').hide();
          $b('#transition').hide();
          $b('#badges').hide();
          $b('#buttons').hide();
          $b('#breadCrumbs').hide();
          $b('#cards').hide();
          $b('#chips').hide();
          $b('#collections').hide();
          $b('#footer').hide();
          $b('#forms').hide();
          $b('#navBar').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#media2').hide();
          $b('#pushpin').hide(); 
           $b('#sidenav').hide(); 
           $b('#scrollfire').hide();
           $b('#tabs').hide(); 
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide(); 
		}

        showTypography(){
          $b('#typography').show();  
          $b('#content').hide();
          $b('#color').hide();  
          $b('#grid').hide();
          $b('#helpers').hide();     
          $b('#media').hide();
          $b('#pulse').hide();
          $b('#sass').hide();
          $b('#table').hide();
          $b('#transition').hide();
          $b('#badges').hide();
          $b('#buttons').hide();
          $b('#breadCrumbs').hide();
          $b('#cards').hide();
          $b('#chips').hide();
          $b('#collections').hide();
          $b('#footer').hide();
          $b('#forms').hide();
          $b('#navBar').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#dropdown').hide();
          $b('#dialog').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide();
           $b('#tabs').hide(); 
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide();   
    }

    showGrid(){
          $b('#grid').show(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#helpers').hide();       
          $b('#media').hide();
          $b('#pulse').hide();
          $b('#sass').hide();
          $b('#table').hide();
          $b('#transition').hide();
          $b('#badges').hide();
          $b('#buttons').hide();
          $b('#breadCrumbs').hide();
          $b('#cards').hide();
          $b('#chips').hide();
          $b('#collections').hide();
          $b('#footer').hide();
          $b('#forms').hide();
          $b('#navBar').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#dropdown').hide();
          $b('#dialog').hide();
          $b('#media2').hide();
          $b('#pushpin').hide(); 
           $b('#sidenav').hide();
           $b('#scrollfire').hide();
           $b('#tabs').hide();
           $b('#waves').hide(); 
           $b('#carousel').hide();
           $b('#discovery').hide();  
    }

    showHelpers(){
          $b('#helpers').show(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#media').hide(); 
          $b('#pulse').hide();
          $b('#sass').hide();
          $b('#table').hide();
          $b('#transition').hide();
          $b('#badges').hide();
          $b('#buttons').hide();
          $b('#breadCrumbs').hide()
          $b('#cards').hide();
          $b('#chips').hide();
          $b('#collections').hide();
          $b('#footer').hide();
          $b('#forms').hide();
          $b('#icons').hide();
          $b('#navBar').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide(); 
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide();
           $b('#tabs').hide();
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide();   
    }

    showMedia(){
          $b('#media').show(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#pulse').hide();
          $b('#sass').hide();
          $b('#table').hide();
          $b('#transition').hide();
          $b('#badges').hide();
          $b('#buttons').hide();
          $b('#breadCrumbs').hide();
          $b('#cards').hide();
          $b('#chips').hide();
          $b('#collections').hide();
          $b('#footer').hide();
          $b('#forms').hide();
          $b('#icons').hide();
          $b('#navBar').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#dropdown').hide();
          $b('#dialog').hide(); 
          $b('#media2').hide();
          $b('#pushpin').hide(); 
           $b('#sidenav').hide();
           $b('#scrollfire').hide();
           $b('#tabs').hide();
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide();  
    }

     showPulse(){
          $b('#pulse').show(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#sass').hide();
          $b('#table').hide();
          $b('#transition').hide();
          $b('#badges').hide();
          $b('#buttons').hide();
          $b('#breadCrumbs').hide();
          $b('#cards').hide();
          $b('#chips').hide();
          $b('#collections').hide();
          $b('#footer').hide();
          $b('#forms').hide();
          $b('#icons').hide();
          $b('#navBar').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#dropdown').hide();
          $b('#dialog').hide();
          $b('#media2').hide();
          $b('#pushpin').hide(); 
           $b('#sidenav').hide();
           $b('#scrollfire').hide(); 
           $b('#tabs').hide(); 
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide(); 
    }
      showSass(){
          $b('#sass').show(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#table').hide();
          $b('#table').hide();
          $b('#transition').hide(); 
          $b('#badges').hide();
          $b('#buttons').hide();
          $b('#breadCrumbs').hide();
          $b('#cards').hide();
          $b('#chips').hide();
          $b('#collections').hide();
          $b('#footer').hide();
          $b('#forms').hide();
          $b('#icons').hide();
          $b('#navBar').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#dropdown').hide();
          $b('#dialog').hide(); 
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide();
           $b('#tabs').hide(); 
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide(); 
    }
      showTable(){
         $b('#table').show(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#transition').hide();
          $b('#badges').hide(); 
          $b('#buttons').hide();
          $b('#breadCrumbs').hide();
          $b('#cards').hide();
          $b('#chips').hide();
          $b('#collections').hide();
          $b('#footer').hide();
          $b('#forms').hide();
          $b('#icons').hide();
          $b('#navBar').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#dropdown').hide();
          $b('#dialog').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide();
           $b('#tabs').hide();
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide();  
    }
    showTransition(){
          $b('#transition').show(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#badges').hide();
          $b('#buttons').hide();
          $b('#breadCrumbs').hide();
          $b('#cards').hide();
          $b('#chips').hide();
          $b('#collections').hide();
          $b('#footer').hide();
          $b('#forms').hide();
          $b('#icons').hide();
          $b('#navBar').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#dropdown').hide();
          $b('#dialog').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide();
           $b('#tabs').hide();
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide();  
    }



       showBadges(){
          $b('#badges').show();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#buttons').hide();
          $b('#breadCrumbs').hide();
          $b('#cards').hide();
          $b('#chips').hide();
          $b('#collections').hide();
          $b('#footer').hide();
          $b('#forms').hide();
          $b('#icons').hide();
          $b('#navBar').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide();
           $b('#tabs').hide();
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide();  
    }
     showButtons(){
          $b('#buttons').show();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#breadCrumbs').hide();
          $b('#cards').hide();
          $b('#chips').hide();
          $b('#collections').hide();
          $b('#footer').hide();
          $b('#forms').hide();
          $b('#icons').hide();
          $b('#navBar').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#dropdown').hide();
          $b('#dialog').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide();
           $b('#tabs').hide();
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide();  
    }
     showBreadCrumbs(){
          $b('#breadCrumbs').show();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#cards').hide();
          $b('#chips').hide();
          $b('#collections').hide();
          $b('#footer').hide();
          $b('#forms').hide();
          $b('#icons').hide();
          $b('#navBar').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#dropdown').hide();
          $b('#dialog').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide();
           $b('#tabs').hide(); 
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide(); 
    }
     showCards(){
          $b('#cards').show();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#chips').hide();
          $b('#collections').hide();
          $b('#footer').hide();
          $b('#forms').hide();
          $b('#icons').hide();
          $b('#navBar').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#dropdown').hide();
          $b('#dialog').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide(); 
           $b('#tabs').hide();
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide(); 
    }
    showChips(){
          $b('#chips').show();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#collections').hide();
          $b('#footer').hide();
          $b('#forms').hide();
          $b('#icons').hide();
          $b('#navBar').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#dropdown').hide();
          $b('#dialog').hide();
           $b('#sidenav').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide();
           $b('#tabs').hide();
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide();  
    }
     showCollections(){
          $b('#collections').show();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#footer').hide();
          $b('#forms').hide();
          $b('#icons').hide();
          $b('#navBar').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#dropdown').hide();
          $b('#dialog').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide();
           $b('#tabs').hide(); 
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide(); 
    }
     showFooter(){
          $b('#footer').show();
          $b('#collections').hide();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#forms').hide();
          $b('#icons').hide();
          $b('#navBar').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#dropdown').hide();
          $b('#dialog').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide(); 
           $b('#tabs').hide();
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide(); 
    }
    showForms(){
          $b('#forms').show();
          $b('#footer').hide();
           $b('#collapsible').hide();
          $b('#collections').hide();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#icons').hide();
          $b('#navBar').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#dropdown').hide();
          $b('#dialog').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide();
           $b('#tabs').hide();
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide();  
          $b(document).ready(function() {
          $b('select').material_select();
          $b('.datepicker').pickadate({
          selectMonths: true, // Creates a dropdown to control month
          selectYears: 15 // Creates a dropdown of 15 years to control year
        });
          $b('input.autocomplete').autocomplete({
            data: {
              "Apple": null,
              "Microsoft": null,
              "Google": 'images/parallax1.jpg'
            },
            limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
            onAutocomplete: function(val) {
              // Callback function when value is autcompleted.
            },
            minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
          });
        });
    }
    showIcons(){
          $b('#icons').show();
          $b('#forms').hide();
          $b('#footer').hide();
          $b('#collections').hide();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#navBar').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#dropdown').hide();
          $b('#dialog').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide();
           $b('#tabs').hide(); 
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide(); 
    }
    showNavBar(){
          $b('#navBar').show();
          $b('#icons').hide();
          $b('#forms').hide();
          $b('#footer').hide();
          $b('#collections').hide();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#pagination').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b(".dropdown-button").dropdown();
          $b('#dropdown').hide();
          $b('#dialog').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide(); 
           $b('#tabs').hide();
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide(); 
    }
    showPagination(){
          $b('#pagination').show();
          $b('#navBar').hide();
          $b('#icons').hide();
          $b('#forms').hide();
          $b('#footer').hide();
          $b('#collections').hide();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#preloader').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#dropdown').hide();
          $b('#dialog').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide();
           $b('#tabs').hide();
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide();  
    }
    showPreloader(){
          $b('#preloader').show();
          $b('#pagination').hide();
          $b('#navBar').hide();
          $b('#icons').hide();
          $b('#forms').hide();
          $b('#footer').hide();
          $b('#collections').hide();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#modals').hide();
          $b('#parallax').hide();
          $b('#dropdown').hide();
          $b('#dialog').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide();
           $b('#tabs').hide(); 
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide(); 
    }
     showModals(){
          $b('#modals').show();
          $b('#preloader').hide();
          $b('#pagination').hide();
          $b('#navBar').hide();
          $b('#icons').hide();
          $b('#forms').hide();
          $b('#footer').hide();
          $b('#collections').hide();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#parallax').hide();
          $b('#dropdown').hide();
          $b('#dialog').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide();
           $b('#tabs').hide();
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide();  
          $b(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
          $b('.modal').modal();
          
      });
    }
     showParallax(){
          $b('#parallax').show();
          $b('#preloader').hide();
          $b('#pagination').hide();
          $b('#navBar').hide();
          $b('#icons').hide();
          $b('#forms').hide();
          $b('#footer').hide();
          $b('#collections').hide();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#modals').hide();
          $b('#dropdown').hide();
          $b('#dialog').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide(); 
           $b('#tabs').hide();
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide(); 
    }
    showDialog(){
          $b('#dialog').show();
          $b('#parallax').hide();
          $b('#preloader').hide();
          $b('#pagination').hide();
          $b('#navBar').hide();
          $b('#icons').hide();
          $b('#forms').hide();
          $b('#footer').hide();
          $b('#collections').hide();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#modals').hide();
          $b('#dropdown').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide(); 
           $b('#tabs').hide();
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide(); 
    }
    showDropdown(){
          $b('#dropdown').show();
          $b('#dialog').hide();
          $b('#parallax').hide();
          $b('#preloader').hide();
          $b('#pagination').hide();
          $b('#navBar').hide();
          $b('#icons').hide();
          $b('#forms').hide();
          $b('#footer').hide();
          $b('#collections').hide();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#modals').hide();
          $b('#media2').hide();
          $b('#pushpin').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide();
           $b('#tabs').hide();
           $b('#waves').hide();
           $b('#discovery').hide();
           $b('#carousel').hide();  
          $b(document).ready(function(){
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
          // $b('.dropdown-button').dropdown('open');
          // $b('.dropdown-button').dropdown('close');
          });
    }

     showMedia2(){
          $b('#media2').show();
          $b('#dialog').hide();
          $b('#parallax').hide();
          $b('#preloader').hide();
          $b('#pagination').hide();
          $b('#navBar').hide();
          $b('#icons').hide();
          $b('#forms').hide();
          $b('#footer').hide();
          $b('#collections').hide();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#modals').hide();
          $b('#dropdown').hide();
          $b('#pushpin').hide();
          $b('#sidenav').hide();
          $b('#scrollfire').hide(); 
          $b('#tabs').hide();
          $b('#waves').hide();
          $b('#carousel').hide();
          $b('#discovery').hide(); 
          $b(document).ready(function(){
          $b('.materialboxed').materialbox();
          $b('.slider').slider();
          $b('.slider').slider('pause');
             // Start slider
          $b('.slider').slider('start');
          // Next slide
          $b('.slider').slider('next');
          // Previous slide
          $b('.slider').slider('prev');
      });
    }
     showPushpin(){
          $b('#pushpin').show();
          $b('#media2').hide();
          $b('#dialog').hide();
          $b('#parallax').hide();
          $b('#preloader').hide();
          $b('#pagination').hide();
          $b('#navBar').hide();
          $b('#icons').hide();
          $b('#forms').hide();
          $b('#footer').hide();
          $b('#collections').hide();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#modals').hide();
          $b('#dropdown').hide();
           $b('#sidenav').hide();
           $b('#scrollfire').hide(); 
           $b('#tabs').hide();
           $b('#waves').hide();
           $b('#carousel').hide();
           $b('#discovery').hide();
    }
     showSideNav(){
          $b('#sidenav').show();
          $b('#pushpin').hide();
          $b('#media2').hide();
          $b('#dialog').hide();
          $b('#parallax').hide();
          $b('#preloader').hide();
          $b('#pagination').hide();
          $b('#navBar').hide();
          $b('#icons').hide();
          $b('#forms').hide();
          $b('#footer').hide();
          $b('#collections').hide();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#modals').hide();
          $b('#dropdown').hide();
          $b('#scrollfire').hide();
          $b('#tabs').hide(); 
          $b('#waves').hide(); 
          $b('#carousel').hide();
          $b('#discovery').hide();
          $b(document).ready(function(){
                    // Initialize collapse button
          $b(".button-collapse").sideNav();
          // Initialize collapsible (uncomment the line below if you use the dropdown variation)
          $b('.collapsible').collapsible();
          $b('.button-collapse').sideNav({
              menuWidth: 300, // Default is 300
              edge: 'right', // Choose the horizontal origin
              closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
              draggable: true, // Choose whether you can drag to open on touch screens,
              onOpen: function(el) { }, // A function to be called when sideNav is opened
              onClose: function(el) { } // A function to be called when sideNav is closed
            }
          );
      });
    }
     showScrollfire(){
          $b('#scrollfire').show(); 
          $b('#pushpin').hide();
          $b('#media2').hide();
          $b('#dialog').hide();
          $b('#parallax').hide();
          $b('#preloader').hide();
          $b('#pagination').hide();
          $b('#navBar').hide();
          $b('#icons').hide();
          $b('#forms').hide();
          $b('#footer').hide();
          $b('#collections').hide();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#modals').hide();
          $b('#dropdown').hide();
          $b('#sidenav').hide();
          $b('#tabs').hide();
          $b('#waves').hide(); 
          $b('#carousel').hide();
          $b('#discovery').hide();
          $b(document).ready(function(){
                    var options = [
              {selector: '#staggered-test', offset: 50, callback: function(el) {
                Materialize.toast("This is our ScrollFire Demo!", 1500 );
              } },
              {selector: '#staggered-test', offset: 205, callback: function(el) {
                Materialize.toast("Please continue scrolling!", 1500 );
              } },
              {selector: '#staggered-test', offset: 400, callback: function(el) {
                Materialize.showStaggeredList($b(el));
              } },
              {selector: '#image-test', offset: 500, callback: function(el) {
                Materialize.fadeInImage($b(el));
              } }
            ];
            Materialize.scrollFire(options);

             var options = [
              {selector: '.class', offset: 200, callback: customCallbackFunc},
              {selector: '.other-class', offset: 200, callback: function() {
                customCallbackFunc();
              } }
            ];
            Materialize.scrollFire(options);

          });
    }
     showTabs(){
          $b('#tabs').show();
          $b('#media2').hide();
          $b('#dialog').hide();
          $b('#parallax').hide();
          $b('#preloader').hide();
          $b('#pagination').hide();
          $b('#navBar').hide();
          $b('#icons').hide();
          $b('#forms').hide();
          $b('#footer').hide();
          $b('#collections').hide();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#modals').hide();
          $b('#dropdown').hide();
          $b('#pushpin').hide();
          $b('#sidenav').hide();
          $b('#scrollfire').hide();
          $b('#waves').hide(); 
          $b('#carousel').hide();
          $b('#discovery').hide();
          $b(document).ready(function(){
          $b('ul.tabs').tabs();
          $b('ul.tabs').tabs('select_tab', 'tab_id');
         });
    }
     showWaves(){
          $b('#waves').show();
          $b('#tabs').hide();
          $b('#media2').hide();
          $b('#dialog').hide();
          $b('#parallax').hide();
          $b('#preloader').hide();
          $b('#pagination').hide();
          $b('#navBar').hide();
          $b('#icons').hide();
          $b('#forms').hide();
          $b('#footer').hide();
          $b('#collections').hide();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#modals').hide();
          $b('#dropdown').hide();
          $b('#pushpin').hide();
          $b('#sidenav').hide();
          $b('#scrollfire').hide(); 
          $b('#carousel').hide();
          $b('#discovery').hide();
          
    }
       showCarousel(){
          $b('#carousel').show();
          $b('#waves').hide();
          $b('#tabs').hide();
          $b('#media2').hide();
          $b('#dialog').hide();
          $b('#parallax').hide();
          $b('#preloader').hide();
          $b('#pagination').hide();
          $b('#navBar').hide();
          $b('#icons').hide();
          $b('#forms').hide();
          $b('#footer').hide();
          $b('#collections').hide();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#modals').hide();
          $b('#dropdown').hide();
          $b('#pushpin').hide();
          $b('#sidenav').hide();
          $b('#discovery').hide();
          $b('#scrollfire').hide(); 
          $b(document).ready(function(){
          $b('.carousel').carousel();
          $b('.carousel.carousel-slider').carousel({fullWidth: true});
           // Next slide
          // $b('.carousel').carousel('next');
          // $b('.carousel').carousel('next', 3); // Move next n times.
          // // Previous slide
          // $b('.carousel').carousel('prev');
          // $b('.carousel').carousel('prev', 4); // Move prev n times.
          // // Set to nth slide
          // $b('.carousel').carousel('set', 4);
        });
          
    }
showDiscovery(){
          $b('#discovery').show();
          $b('#waves').hide();
          $b('#tabs').hide();
          $b('#media2').hide();
          $b('#dialog').hide();
          $b('#parallax').hide();
          $b('#preloader').hide();
          $b('#pagination').hide();
          $b('#navBar').hide();
          $b('#icons').hide();
          $b('#forms').hide();
          $b('#footer').hide();
          $b('#collections').hide();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#modals').hide();
          $b('#dropdown').hide();
          $b('#pushpin').hide();
          $b('#sidenav').hide();
          $b('#scrollfire').hide(); 
          $b('#carousel').hide();
           $b(document).ready(function(){
            $b('.menu').click(function(){
               $b('.tap-target').tapTarget('open');
               $b('.tap-target').tapTarget('close');
            });
         });
        }
      showProfile(){
        $b('#profile').show();
        $b('#waves').hide();
          $b('#tabs').hide();
          $b('#media2').hide();
          $b('#dialog').hide();
          $b('#parallax').hide();
          $b('#preloader').hide();
          $b('#pagination').hide();
          $b('#navBar').hide();
          $b('#icons').hide();
          $b('#forms').hide();
          $b('#footer').hide();
          $b('#collections').hide();
          $b('#chips').hide();
          $b('#cards').hide();
          $b('#breadCrumbs').hide();
          $b('#buttons').hide();
          $b('#badges').hide();
          $b('#transition').hide(); 
          $b('#table').hide(); 
          $b('#sass').hide(); 
          $b('#pulse').hide(); 
          $b('#media').hide(); 
          $b('#helpers').hide(); 
          $b('#grid').hide(); 
          $b('#typography').hide();  
          $b('#content').hide();
          $b('#color').hide();
          $b('#modals').hide();
          $b('#dropdown').hide();
          $b('#pushpin').hide();
          $b('#sidenav').hide();
          $b('#scrollfire').hide(); 
          $b('#carousel').hide();
          $b('#discovery').hide();
      }
}

let component = new Component();
    component.layOut();
    
           
/*
     sideNav(){

           let  html = `
<main><div class="container">
  <div class="row">
    <div class="col s12 m9 l10">

      <div id="structure" class="section scrollspy">
        <h4>Introduction</h4>
        <p class="caption">This is a slide out menu. You can add a dropdown to your sidebar by using our collapsible component. If you want to see a demo, our sidebar will use this on smaller screens. To use this in conjunction with a fullscreen navigation, you have to use two copies of the same UL.</p>

        <a href="#" data-activates="slide-out" class="btn button-collapse">Side nav demo</a>

        <ul id="slide-out" class="side-nav">
          <li><div class="userView">
            <div class="background">
              <img src="images/office.jpg">
            </div>
            <a href="#!user"><img class="circle" src="images/yuna.jpg"></a>
            <a href="#!name"><span class="white-text name">John Doe</span></a>
            <a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
          </div></li>
          <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
          <li><a href="#!">Second Link</a></li>
          <li><div class="divider"></div></li>
          <li><a class="subheader">Subheader</a></li>
          <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>

        <h4>HTML Structure</h4>
        <pre><code class="language-markup col s12">
  &lt;ul id="slide-out" class="side-nav">
    &lt;li>&lt;div class="userView">
      &lt;div class="background">
        &lt;img src="images/office.jpg">
      &lt;/div>
      &lt;a href="#!user">&lt;img class="circle" src="images/yuna.jpg">&lt;/a>
      &lt;a href="#!name">&lt;span class="white-text name">John Doe&lt;/span>&lt;/a>
      &lt;a href="#!email">&lt;span class="white-text email">jdandturk@gmail.com&lt;/span>&lt;/a>
    &lt;/div>&lt;/li>
    &lt;li>&lt;a href="#!">&lt;i class="material-icons">cloud&lt;/i>First Link With Icon&lt;/a>&lt;/li>
    &lt;li>&lt;a href="#!">Second Link&lt;/a>&lt;/li>
    &lt;li>&lt;div class="divider">&lt;/div>&lt;/li>
    &lt;li>&lt;a class="subheader">Subheader&lt;/a>&lt;/li>
    &lt;li>&lt;a class="waves-effect" href="#!">Third Link With Waves&lt;/a>&lt;/li>
  &lt;/ul>
  &lt;a href="#" data-activates="slide-out" class="button-collapse">&lt;i class="material-icons">menu&lt;/i>&lt;/a>
        </code></pre>
      </div>

      <div id="initialization" class="section scrollspy">
        <h4>jQuery Plugin Initialization</h4>
        <pre><code class="language-javascript col s12">
  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
        </code></pre>
      </div>


      <div id="options" class="scrollspy section">
        <h4>Options</h4>
        <p>You can customize the sideNav by setting your own width and the alignment of the menu. </p>
        <pre><code class="language-javascript">
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on &lt;a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
        </code></pre>
      </div>

      <div id="method" class="section scrollspy">
        <h4>jQuery Plugin Methods</h4>
        <p>We have methods to show and hide your sidebar you can use to programmatically control your sidebar.</p>
        <pre><code class="language-javascript col s12">
  // Show sideNav
  $('.button-collapse').sideNav('show');
  // Hide sideNav
  $('.button-collapse').sideNav('hide');
  // Destroy sideNav
  $('.button-collapse').sideNav('destroy');
        </code></pre>
      </div>

      <div id="variations" class="scrollspy section">
        <h2 class="header">Variations</h2>
        <p class="caption">
          Here are some useful variations and additional elements you can add to your sidebar.
        </p>

        <h4>Dropdown HTML Structure</h4>
          <p>Add collapsible menus to your sidebar.</p>
          <pre><code class="language-markup col s12">
    &lt;ul id="slide-out" class="side-nav">
      &lt;li>&lt;a href="#!">First Sidebar Link&lt;/a>&lt;/li>
      &lt;li>&lt;a href="#!">Second Sidebar Link&lt;/a>&lt;/li>
      &lt;li class="no-padding">
        &lt;ul class="collapsible collapsible-accordion">
          &lt;li>
            &lt;a class="collapsible-header">Dropdown&lt;i class="material-icons">arrow_drop_down&lt;/i>&lt;/a>
            &lt;div class="collapsible-body">
              &lt;ul>
                &lt;li>&lt;a href="#!">First&lt;/a>&lt;/li>
                &lt;li>&lt;a href="#!">Second&lt;/a>&lt;/li>
                &lt;li>&lt;a href="#!">Third&lt;/a>&lt;/li>
                &lt;li>&lt;a href="#!">Fourth&lt;/a>&lt;/li>
              &lt;/ul>
            &lt;/div>
          &lt;/li>
        &lt;/ul>
      &lt;/li>
    &lt;/ul>
    &lt;ul class="right hide-on-med-and-down">
      &lt;li>&lt;a href="#!">First Sidebar Link&lt;/a>&lt;/li>
      &lt;li>&lt;a href="#!">Second Sidebar Link&lt;/a>&lt;/li>
      &lt;li>&lt;a class="dropdown-button" href="#!" data-activates="dropdown1">Dropdown&lt;i class="material-icons right">arrow_drop_down&lt;/i>&lt;/a>&lt;/li>
      &lt;ul id='dropdown1' class='dropdown-content'>
        &lt;li>&lt;a href="#!">First&lt;/a>&lt;/li>
        &lt;li>&lt;a href="#!">Second&lt;/a>&lt;/li>
        &lt;li>&lt;a href="#!">Third&lt;/a>&lt;/li>
        &lt;li>&lt;a href="#!">Fourth&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/ul>
    &lt;a href="#" data-activates="slide-out" class="button-collapse">&lt;i class="material-icons">menu&lt;/i>&lt;/a>
          </code></pre><br>

          <h4>Fullscreen HTML Structure</h4>
          <p>If you want the menu to be accessible on all screensizes you just have to add a simple helper class <code class="language-markup">show-on-large</code> to the <code class="language-markup">.button-collapse</code>. </p>

          <pre><code class="language-markup col s12">
    &lt;ul id="slide-out" class="side-nav">
      &lt;li>&lt;a href="#!">First Sidebar Link&lt;/a>&lt;/li>
      &lt;li>&lt;a href="#!">Second Sidebar Link&lt;/a>&lt;/li>
    &lt;/ul>
    &lt;a href="#" data-activates="slide-out" class="button-collapse show-on-large">&lt;i class="material-icons">menu&lt;/i>&lt;/a>
          </code></pre><br>

          <h4>Fixed HTML Structure</h4>
          <p>Add the class <code class="language-markup">fixed</code> to have the sideNav be fixed and open on large screens and hides to the regular functionality on smaller screens. Our sideNav on the left is an example of this.</p>
          <pre><code class="language-markup col s12">
    &lt;ul id="slide-out" class="side-nav fixed">
      &lt;li>&lt;a href="#!">First Sidebar Link&lt;/a>&lt;/li>
      &lt;li>&lt;a href="#!">Second Sidebar Link&lt;/a>&lt;/li>
    &lt;/ul>
    &lt;a href="#" data-activates="slide-out" class="button-collapse">&lt;i class="material-icons">menu&lt;/i>&lt;/a>
          </code></pre>
          <p>If you are planning on using this you will have to offset your content by the width of the side menu. Place the padding on where the offset content will be, which in our case is in header, main and footer.</p>
          <pre><code class="language-css col s12">
    header, main, footer {
      padding-left: 300px;
    }

    @media only screen and (max-width : 992px) {
      header, main, footer {
        padding-left: 0;
      }
    }
          </code></pre>
        </div>
      </div>

    <!-- Table of Contents -->
    <div class="col hide-on-small-only m3 l2">
      <div class="toc-wrapper">
        <div class="buysellads hide-on-small-only">
          <!-- CarbonAds Zone Code -->
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
        </div>
        <div style="height: 1px;">
          <ul class="section table-of-contents">
            <li><a href="#structure">Structure</a></li>
            <li><a href="#initialization">Intialization</a></li>
            <li><a href="#options">Plugin Options</a></li>
            <li><a href="#method">Methods</a></li>
            <li><a href="#variations">Variations</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

    </main> 
          `; 
            this.reRender(`${html}`,document.getElementById("sideNav"));
            this.showSideNav();

}    

        */
