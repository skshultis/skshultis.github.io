$(document).ready(function() {
  $('#fullpage').fullpage({

    //Navigation
    menu: '#myMenu',
    lockAnchors: false,
    anchors:['main', 'about', 'projects', 'contactme'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['introSlide', 'dcCrimeMapper', 'KardashBash', 'more'],
    showActiveTooltip: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',


    //background colors
    sectionsColor: ['#1E002D', '#1E002D', '#374a67', '#1E002D']
  });

});
