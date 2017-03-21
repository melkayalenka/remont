

$(document).ready(function() {

	//E-mail Ajax Send
	$("form.bottom").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "send.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

    document.body.addEventListener('click', function(e) {
  var modal = document.querySelector('.modal');
  
  if( e.target.classList.contains('modal-img') ) {
    imgSrc = e.target.dataset.src,
    modalImg = modal.querySelector('.modal-content');
    
    modal.style.display = "block";
    modalImg.setAttribute('src', imgSrc);
  } else if( e.target.classList.contains('close') ) {
    modal.style.display = "none";
  }
  
  
  if (event.target.closest('.modal')) {
    modal.style.display = "none";
  }
});
    


   
  

    
jQuery(function(f){
    var element = f('.blfix');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 300 ? 'In': 'Out')](500);           
    });
}); 


  