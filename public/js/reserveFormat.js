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

    		`;
    	this.reRender(`
    	${html}`	  
    		,document.getElementById("app"));

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
    
           

        