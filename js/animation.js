/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//$(window).load(function(){

//});
//function showME(){
        //priljepljeni GIF na html 
        // body je skriveni
        //postavljamo funkciju koliko zadržavamo/sakrivamo funkciju 
        // $('html').show().append('<img id="preload" src="img/anim-logo.gif" alt="BOONER" />');  
//};
//setTimeout(showME, 500);

//function takeME (){
        // sakrivamo GIF sa smooth animacijom pomoću delay() funkcije
        // i video u kombinaciji timera
        // $('#preload').delay(3500).hide(500);
        // $('video').hide();
//};
//setTimeout(takeME, 3600);

//function blowME (){
        // fadeIn funkciojm  polagano prikazivamo <body></body>
        // sa delay funkcijom odgađamo vreme da dobimo smooth efekt
        // isto vrijedi i za video class="intro"
        // $('body').fadeIn(2000);
        //  $('.intro').delay(2500).fadeIn(2800);       
//};
//setTimeout(blowME, 8500);

//verzija 2
        $(function (e) {
            $('<img id="preload" src="img/anim-logo.gif" alt="BOONER" />').insertBefore('body').animate({
                'display': 'block'
            }, {
                duration: 'slow',
                queue: false,
                step: function () {
                    $('#preload').delay(8000).hide(500);
                    $('video').hide();
                    queue: false;
                }
            });
            $('body').delay(10000).show(400);
            $('.intro').delay(10500).fadeIn(2800);
			//$('html').before('body').unbind('<img id="preload" src="img/anim-logo.gif" alt="BOONER" />');
        });//html destroy after load images
$(function () {
    $('h1').addClass('animated fadeInDownBig');
    $('h4').addClass('animated flipInY');
});
//$(function(){
		//$('html').remove('<img id="preload" src="img/anim-logo.gif" alt="BOONER" />');
//});

/*$(function () {
    $('.push').click(function () {
        $('#form').addClass('animated rollIn').css({
            'display': 'block'
        });
    });*/
  /*  $(function () {
        $('#close').click(function () {
            //close.preventDefault();
            //$('#form').addClass('animated zoomOut');
                   // $(this).css({'display': 'none'});
            $('#form').slideUp(2000);
            close.preventDefault();

        });*/
    });*/
});*/

        

       
   


