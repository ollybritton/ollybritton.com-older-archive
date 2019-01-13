$(document).ready(function(){
  $('.vineName').html(' <span class="rip-vine">RIP Vine.</span><span class="missed"> It will be missed.</span> ');
});

$('.vine').click(function(){
  $('.vineName').animate({
    opacity: '0'
  }, 100, function(){
    $('.vineName').html( `"${randomVine()} ${randomEmoji()} ${randomHashtag()}"` );
    $('.vineName').animate({
      opacity: '1'
    }, 100)
  });
});

$('.song').click(function(){
  $('.vineName').animate({
    opacity: '0'
  }, 100, function(){
    $('.vineName').html( `"<span class="blue">${randomSong()}</span>"` );
    $('.vineName').animate({
      opacity: '1'
    }, 100)
  });
});

  $('.another-button').addClass('animated tada')
  setTimeout(function(){ $('.another-button').removeClass('tada') }, 1000)
