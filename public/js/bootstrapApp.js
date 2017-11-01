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
                      <nav class="absolute">
        					       <div class="nav-wrapper blue-grey darken-2" class="button-collapse top-nav full hide-on-large-only">
                                <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons shadow-blue">menu</i></a>
                                     <ul class="right hide-on-med-and-down">
                                         &nbsp;<li><a href="Home.html"><i class="material-icons shadow-blue md-36">home</i></a></li>
                                         &nbsp;<li><a href="#"><i class="material-icons shadow-blue md-36">recent_actors</i></a></li>
                                         &nbsp;<li><a href="#"><i class="material-icons shadow-blue md-36">class</i></a></li>
                                         &nbsp;<li><a href="#"><i class="material-icons  md-36 shadow-red">help</i></a></li>
                                     </ul>
                                  </div>
                                   <ul class="side-nav fixed sideNav-parent">  
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
                        </ul>
                                </nav>
                            </header>
              
<div class="container">
    <div class="row">
            <ul class="side-nav fixed sideNav-parent sideNavBootstrap">

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
                <div class="collapsible-header"><i class="material-icons shadow-green">whatshot</i>Bootstrap</div>
                <div class="collapsible-body">
                   <span>
                        <a href="#Carousel" onclick="component.carousel()">Blog</a>
                        <a href="#Collapsible" onclick="component.Content()">Carousel</a>
                        <a href="#Dialogs" onclick="component.dialog()">Cover</a>
                        <a href="#Dropdown"  onclick="component.dropdown()">Dashboard</a>
                        <a href="#FeatureDiscovery" onclick="component.discovery()">Grid</a>
                        <a href="#Media" onclick="component.media2()">Jumbotron</a>
                        <a href="#Modals" onclick="component.modals()">Jumbotron-Narrow</a>
                        <a href="#Parallax" onclick="component.parallax()">justified-nav</a>
                        <a href="#Pushpin" onclick="component.pushpin()">navbar</a>
                        <a href="#Scrollfire" onclick="component.scrollfire()">Navbar-fixed-top</a>
                        <a href="#Scrollspy" onclick="component.()">navbar-static-top</a>
                        <a href="#sideNav" onclick="component.sidenav()">non-responsive</a>
                        <a href="#Tabs" onclick="component.tabs()">offcanvas</a>                       
                        <a href="#Transition" onclick="component()">Screenshot</a>                       
                        <a href="#Waves" onclick="component.waves()">Signin</a>                                              
                        <a href="#Waves" onclick="component.waves()">starter-tempalte</a>                                              
                        <a href="#Waves" onclick="component.waves()">sticky-footer</a>                                              
                        <a href="#Waves" onclick="component.waves()">Sticky-footer-navbar</a>                                              
                        <a href="#Waves" onclick="component.waves()">theme</a>
                         <a href="#Waves" onclick="component.waves()">Tooltip-viewport</a>                                                                                            
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
                            <main>
                                <div class="col s2 m2 l2"></div>
                                    <div class="col s10 m10 l10">
		                                <div id="blog"></div>
                                </div>
                            </main>    
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
    		,document.getElementById("app3"));
    	this.blog();
      // $b(".button-collapse").sideNAv();
    }

    blog(){
            let html =`
            <div class="row">
                <div class="col-md-12">

                <div class="blog-masthead">
                  <div class="container">
                    <nav class="blog-nav">
                      <a class="blog-nav-item active" href="#">Home</a>
                      <a class="blog-nav-item" href="#">&nbsp;&nbsp;&nbsp;New features</a>
                      <a class="blog-nav-item" href="#">Press</a>
                      <a class="blog-nav-item" href="#">New hires</a>
                      <a class="blog-nav-item" href="#">About</a>
                    </nav>
                  </div>
                </div>

                </div>
            </div>

    <div class="container">

    <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
      <div class="blog-header">
        <h1 class="blog-title">The Bootstrap Blog</h1>
        <p class="lead blog-description">The official example template of creating a blog with Bootstrap.</p>
        </div>
      </div>
       <div class="col-md-2"></div>
    </div>  

      <div class="col-md-2"></div>
        <div class="col-md-8 blog-main">

          <div class="blog-post">
            <h2 class="blog-post-title">Sample blog post</h2>
            <p class="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>

            <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
            <hr>
            <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
            <blockquote>
              <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </blockquote>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            <h2>Heading</h2>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <h3>Sub-heading</h3>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <pre><code>Example code block</code></pre>
            <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
            <h3>Sub-heading</h3>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <ul>
              <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
              <li>Donec id elit non mi porta gravida at eget metus.</li>
              <li>Nulla vitae elit libero, a pharetra augue.</li>
            </ul>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
            <ol>
              <li>Vestibulum id ligula porta felis euismod semper.</li>
              <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
              <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
            </ol>
            <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
          </div><!-- /.blog-post -->

          <div class="blog-post">
            <h2 class="blog-post-title">Another blog post</h2>
            <p class="blog-post-meta">December 23, 2013 by <a href="#">Jacob</a></p>

            <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
            <blockquote>
              <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </blockquote>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          </div><!-- /.blog-post -->

          <div class="blog-post">
            <h2 class="blog-post-title">New feature</h2>
            <p class="blog-post-meta">December 14, 2013 by <a href="#">Chris</a></p>

            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <ul>
              <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
              <li>Donec id elit non mi porta gravida at eget metus.</li>
              <li>Nulla vitae elit libero, a pharetra augue.</li>
            </ul>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
          </div><!-- /.blog-post -->

          <nav>
            <ul class="pager">
              <li><a href="#">Previous</a></li>
              <li><a href="#">Next</a></li>
            </ul>
          </nav>

        </div><!-- /.blog-main -->

        <div class="col-md-2 blog-sidebar">
          <div class="sidebar-module sidebar-module-inset">
            <h4>About</h4>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          </div>
          <div class="sidebar-module">
            <h4>Archives</h4>
            <ol class="list-unstyled">
              <li><a href="#">March 2014</a></li>
              <li><a href="#">February 2014</a></li>
              <li><a href="#">January 2014</a></li>
              <li><a href="#">December 2013</a></li>
              <li><a href="#">November 2013</a></li>
              <li><a href="#">October 2013</a></li>
              <li><a href="#">September 2013</a></li>
              <li><a href="#">August 2013</a></li>
              <li><a href="#">July 2013</a></li>
              <li><a href="#">June 2013</a></li>
              <li><a href="#">May 2013</a></li>
              <li><a href="#">April 2013</a></li>
            </ol>
          </div>
          <div class="sidebar-module">
            <h4>Elsewhere</h4>
            <ol class="list-unstyled">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ol>
          </div>
        </div><!-- /.blog-sidebar -->
    <div class"col-md-1"></div>
            `;
           this.reRender(`${html}`,document.getElementById("blog"));
           this.showBlog();   
    }

    showBlog(){
      $b('blog').show();
    }

}

let component = new Component();
    component.layOut();
    
