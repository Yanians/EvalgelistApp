var $b = jQuery.noConflict();
(function($b){ 'use strict';
$b(document.body).append("<main>","<div style='margin-top:3px;' class='container  border-effectDivMain' id='main'></div>","</main>");
$b(document.body).append("<footer>","<div class='container-footer' id='footer'></div>","</footer>");

        $b(document).ready(function(){
        $b('.fixed-action-left-btn').closeFAB();
        $b('.fixed-action-left-btn.toolbar').closeToolbar();
        $b('.fixed-action-left-btn.toolbar').openToolbar();

        /* Initialize collapse button*/
	  $b(".button-collapse").sideNav();      
	  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
	  $b('.collapsible').collapsible();

       });

        // $b('#showProf').click( function(){                        
        //     $b('#profile').show();
        //     $b('#education').hide();
        //     $b('#company').hide();  
        // });

        //  $b('#showEd').click( function(){                        
        //     $b('#profile').hide();
        //     $b('#education').show();
        //     $b('#company').hide();  
        // });

        //  $b('#showComp').click( function(){                        
        //     $b('#profile').hide();
        //     $b('#education').hide();
        //     $b('#company').show();  
        // });

})($b)