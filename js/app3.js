"use strict"


class App {

	constructor() {
		this.displays = [
        {
		 
      },

         {

		  },	

		 {
		 
		}, 		

		 {
		 
		 },	

		{
		
		   
		 }	
   
			];  



			this.airplain = [
		{
		 
       },
       {
       },
       {
		 
       },
       {
		 
       },
       {
       },
       {
		  
       },
       {
		  
       },
       {
		 
       }
   
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
                  <div id="blue" class="block blue pin-top">
  <nav class="pushpin-demo-nav" data-target="blue">
    <div class="nav-wrapper light-blue">
      <div class="container">
        <a href="#" class="brand-logo">Blue</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#!">Blue Link 1</a></li>
          <li><a href="#!">Blue Link 2</a></li>
          <li><a href="#!">Blue Link 3</a></li>
        </ul>
      </div>
    </div>
  </nav>
</div>

<div id="red" class="block red lighten-1">
  <nav class="pushpin-demo-nav" data-target="red">
    <div class="nav-wrapper red">
      <div class="container">
        <a href="#" class="brand-logo">Red</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#!">Red Link 1</a></li>
          <li><a href="#!">Red Link 2</a></li>
          <li><a href="#!">Red Link 3</a></li>
        </ul>
      </div>
    </div>
  </nav>
</div>

<div id="green" class="block green lighten-1">
  <nav class="pushpin-demo-nav" data-target="green">
    <div class="nav-wrapper green">
      <div class="container">
        <a href="#" class="brand-logo">Green</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#!">Green Link 1</a></li>
          <li><a href="#!">Green Link 2</a></li>
          <li><a href="#!">Green Link 3</a></li>
        </ul>
      </div>
    </div>
  </nav>
</div>

<div class="buysellads buysellads-demo hide-on-small-only">
  <a href="#!" class="close"><i class="material-icons">close</i></a>
  <!-- CarbonAds Zone Code -->
  <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materializecss" id="_carbonads_js"></script>
</div>
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l4 s12">
            <h5 class="white-text">Help Materialize Grow</h5>
            <p class="grey-text text-lighten-4">We hope you have enjoyed using Materialize! If you feel Materialize has helped you out and want to support the team, send us over a donation! Any amount would help support and continue development on this project and is greatly appreciated.</p>
            <form id="paypal-donate" action="" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="">
<button class="btn waves-effect waves-light red lighten-3" type="submit" name="action" alt="PayPal - The safer, easier way to pay online!">Donate Now
</button>
</form>

          </div>
          <div class="col l4 s12">
            <h5 class="white-text">Join the Discussion</h5>
            <p class="grey-text text-lighten-4">We have a Gitter chat room set up where you can talk directly with us. Come in and discuss new features, future goals, general problems or questions, or anything else you can think of.</p>
            <a class="btn waves-effect waves-light red lighten-3" target="_blank" href="https://gitter.im/Dogfalo/materialize">Chat</a>
          </div>
          <div class="col l4 s12" style="overflow: hidden;">
            <h5 class="white-text">Connect</h5>
            <iframe src="" allowtransparency="true" frameborder="0" scrolling="0" width="170" height="30"></iframe>
            <br>
            <a href="" class="twitter-follow-button" data-show-count="true" data-size="large" data-dnt="true">Follow @MaterializeCSS</a>
            <br>
            <div class="g-follow" data-annotation="bubble" data-height="24" data-href="" data-rel="publisher"></div>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        © 2014-2017 Materialize, All rights reserved.
        <a class="grey-text text-lighten-4 right" href="">MIT License</a>
        </div>
      </div>
    </footer>

    		`;
    	this.reRender(`
    	${html}`	  
    		,document.getElementById("app2"));

    }

   
	nameSearch(destination){ // use for Search
		let html = ``;
		
			html+= `
				 			`;		
		this.reRender(`
			${html}
			`,document.getElementById("nameSearch"));	

		$('#passView').show();	
	}

       passView(){

      let  html = `
          
			 `;

			html += ``;
            html += `
			        
            `;
        
		      let r = this.displays;
		      for(let i = 0;i<r.length;i++){

		      	 html += `
		      	 
          `;
      }   

        html += ``;
 
            this.reRender(`
		         ${html}
		                `,document.getElementById("passView"));
	                   this.showPassView();
	                 
      }

         Edit(id){
         
             let html = `

             `;
                this.reRender(`${html}`,document.getElementById("Edit"));
                  this.showEdit();


         }



         plainView(id) {

         	  let html = `		  
                    	      
			       `;  
         
			    html += `

               `;   
                  this.reRender(`${html}`,document.getElementById("plainView"));
                  this.showPlainView();
         }

	formCreate() {

		let html = `
		
    <  
		`;
          this.reRender(`
			${html}
			`,document.getElementById("formCreate"));  
       }

         displayStarter(){

           let html = `  
       
  `;              
       this.reRender(`
			${html}
			`,document.getElementById("displayStarter")); 
			this.showStarter(); 
}

	  displayParalax(){
			        
		let html = `
			
		`;

        let r = this.airplain;
        let count = 0;
        for(let i=(r.length-1);i>=0;i--){

        	if(count++ === 8)
        		break;
			 html += `
			         `;     

		    this.reRender(`
				${html}
			`,document.getElementById("displayParalax")); 
        }
    }  



     updatePlane(id){

     let  html = `
    `
   ; 
          
  
this.reRender(`

  ${html}

  `,document.getElementById("updatePlane"));   
this.showUpdatePlane();
}

		showStarter() {

		}

        showForm() {
		
		}

		showParalax(){
		
	}

		showPassView(){
	    
    }       
      
}

let component = new Component();
    component.layOut();
    
           

        
