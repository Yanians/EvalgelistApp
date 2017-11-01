$b(document).ready(function(){

           $b('.collapsible').collapsible('open', 0);
           $b('.collapsible').collapsible('open', 0);
		   $b('.collapsible').collapsible('close', 0);
		   
		   $b('.collapsible').collapsible('destroy');

		   $b('.chips').material_chip();
		  $b('.chips-initial').material_chip({
		    data: [{
		      tag: 'Apple',
		    }, {
		      tag: 'Microsoft',
		    }, {
		      tag: 'Google',
		    }],
		  });
		  $b('.chips-placeholder').material_chip({
		    placeholder: 'Enter a tag',
		    secondaryPlaceholder: '+Tag',
		  });
		  $b('.chips-autocomplete').material_chip({
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

				     $b('.chips').on('chip.add', function(e, chip){
		    // you have the added chip here
		  });

		  $b('.chips').on('chip.delete', function(e, chip){
		    // you have the deleted chip here
		  });

		  $b('.chips').on('chip.select', function(e, chip){
		    // you have the selected chip here
		  });
		   // $b('.carousel.carousel-slider').carousel({full_width: true});
     //       $b('.slider').slider({
     //       	full_width: true});
	       // $b('.tap-target').tapTarget('open');
        //    $b('.tap-target').tapTarget('close');   

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

       
     
    });
