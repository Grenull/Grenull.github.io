// Navigation Detection
$(document).ready(function () {
    $(window).scroll(function (e) {
	// Detect how far we are from the top of the page
	let windowTop = $(this).scrollTop();
	// Loop through every navigation menu item
	$('.nav a:visible').each(function (event) {
	    // Check for the current navigation item associated section
	    // Check how far the associated section is from the top
	    // If the associated section is as far as the user have scrolled, add 'active' class to the item.
	    if (windowTop >= $($(this).attr('href')).offset().top - 350) {
		// Remove 'active' from previously highlighted menu items
		$('.nav .active').removeClass('active');
		// Highlight the current menu item by adding 'active' class
		$(this).addClass('active');
	    }
	});
    });
});

// Smooth Scroll screen
$(document).ready(function() {
    $(".screen-nav-btn").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top-62
      }, 500);
    } // End if
  });
});

// Smooth Scroll related dropdown links
$(document).ready(function() {
    $(".rel-btn").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top-90
      }, 500);
    } // End if
  });
});



// Smooth Scroll phone
$(document).ready(function() {
    $(".nav-btn, .phon-nav-btn").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top-32
      }, 500);
    } // End if
  });
});


// Open Cite Dialog
$(document).ready(function() {
    $('.citation').click(function(){
	$('.dropdown-bg').show();
	$(this).siblings('.dropdown-content').show();
	// $('.dropdown-content').show();
    });
    
    $('.close, .dropdown-bg').click(function(){
	$('.dropdown-bg').hide();
	$('.dropdown-content').hide();
    });
});

// Open Phone Navigation Dropdown menu
$(document).ready(function() {
    $('#droplist-toggle-on').click(function(){
	$('#droplist-container').show();
	$('#droplist-toggle-on').hide();
	$('#droplist-toggle-off').show();
	$('.nav-bg').show();
	// $(this).siblings('.dropdown-content').show();
	// $('.dropdown-content').show();
    });
    $('.nav-btn, .phon-nav-btn, #droplist-toggle-off, .nav-bg').click(function(){
	$('#droplist-container').hide();
	$('#droplist-toggle-on').show();
	$('#droplist-toggle-off').hide();
	$('.nav-bg').hide();
	// $('.dropdown-content').hide();
    });
});


// Insert links to co-authors' websites dynamically
$(document).ready(function() {
    var Imke = "http://imke.driemel.net/doku.php/start";
    var Andy = "http://www.andrewmurphy.de/";
    var Aurore = "https://auroregonzalez.github.io/";
    var Artemis = "https://www.leibniz-zas.de/de/personen/details/alexiadou-artemis/artemis-alexiadou";
    var Cory = "https://www.corybill.com/";
    var Asia = "https://www.slawistik.hu-berlin.de/de/member/zaleskaj";
    var Ludger = "https://www.ludgerpaschen.de/";
    var Anke = "http://www.ankehimmelreich.de/de/";
    var Fabian = "https://home.uni-leipzig.de/heck/";
    var Stefan = "https://stefankeine.com/";
    var Gereon = "https://home.uni-leipzig.de/muellerg/";
    var Doreen = "http://www.doreengeorgi.com/";
    var Silvia = "http://www.bilgroup.it/en/silvia-silleresi-2/";
    var Chiara = "http://www.bilgroup.it/en/chiara-dal-farra-2/";
    var Kazuko = "https://www.leibniz-zas.de/en/people/details/yatsushiro-kazuko/kazuko-yatsushiro";
    var Uli = "https://www.leibniz-zas.de/en/people/details/sauerland-uli/uli-sauerland";
    var Teresa = "https://en.unimib.it/maria-teresa-guasti";
    var Vina = "https://www.philology.uoc.gr/en/staff/vina-tsakali";
    var Jakob = "https://www.leibniz-zas.de/en/personen/details/wuensch-jakob/jakob-wuensch";
    var Desire = "https://en.unimib.it/desire-carioti";
    var Philipp = "https://philippweisser.de/";
    var Yining = "https://yiningnie.github.io/";
    var Paloma = "https://www.leibniz-zas.de/en/personen/details/jeretic-paloma/paloma-jeretic";
    var Fabienne = "https://sites.google.com/view/fabienne-martin/home";
    var Ivona = "https://www.linguistik.hu-berlin.de/de/institut/mitarbeiter/akademische-mitarbeiter/1694095";
    var Johnson = "https://scholar.google.com/citations?user=jKivSU0AAAAJ&hl=en";
    var Alicia = "http://il.institutos.filo.uba.ar/integrante/avellana-alicia";
    var Aijun = "https://sfl.sjtu.edu.cn/En/Data/View/4662";
    var Gayathri = "https://gayathri.codeberg.page/";
    var Lilla = "https://nytud.academia.edu/LillaPint%C3%A9r";
    var Varsha = "https://www.researchgate.net/profile/Varsha-Eturi";
    var Astrid = "https://sites.google.com/view/astridvanalem/homepage";
    var Vaijayanthi = "https://www.hss.iitb.ac.in/en/faculty-profile/vaijayanthi-sarma";
    $(".Imke").attr("href", Imke).attr("target", "_blank");
    $(".Andy").attr("href", Andy).attr("target", "_blank");
    $(".Aurore").attr("href", Aurore).attr("target", "_blank");
    $(".Artemis").attr("href", Artemis).attr("target", "_blank");
    $(".Cory").attr("href", Cory).attr("target", "_blank");
    $(".Fabienne").attr("href", Fabienne).attr("target", "_blank");
    $(".Ivona").attr("href", Ivona).attr("target", "_blank");
    $(".Paloma").attr("href", Paloma).attr("target", "_blank");
    $(".Yining").attr("href", Yining).attr("target", "_blank");
    $(".Philipp").attr("href", Philipp).attr("target", "_blank");
    $(".Desire").attr("href", Desire).attr("target", "_blank");
    $(".Jakob").attr("href", Jakob).attr("target", "_blank");
    $(".Vina").attr("href", Vina).attr("target", "_blank");
    $(".Uli").attr("href", Uli).attr("target", "_blank");
    $(".Teresa").attr("href", Teresa).attr("target", "_blank");
    $(".Kazuko").attr("href", Kazuko).attr("target", "_blank");
    $(".Chiara").attr("href", Chiara).attr("target", "_blank");
    $(".Silvia").attr("href", Silvia).attr("target", "_blank");
    $(".Doreen").attr("href", Doreen).attr("target", "_blank");
    $(".Anke").attr("href", Anke).attr("target", "_blank");
    $(".Stefan").attr("href", Stefan).attr("target", "_blank");
    $(".Fabian").attr("href", Fabian).attr("target", "_blank");
    $(".Gereon").attr("href", Gereon).attr("target", "_blank");
    $(".Ludger").attr("href", Ludger).attr("target", "_blank");
    $(".Asia").attr("href", Asia).attr("target", "_blank");
    $(".Johnson").attr("href", Johnson).attr("target", "_blank");
    $(".Alicia").attr("href", Alicia).attr("target", "_blank");
    $(".Aijun").attr("href", Aijun).attr("target", "_blank");
    $(".Gayathri").attr("href", Gayathri).attr("target", "_blank");
    $(".Lilla").attr("href", Lilla).attr("target", "_blank");
    $(".Vaijayanthi").attr("href", Vaijayanthi).attr("target", "_blank");
    $(".Varsha").attr("href", Varsha).attr("target", "_blank");
    $(".Astrid").attr("href", Astrid).attr("target", "_blank");
});
