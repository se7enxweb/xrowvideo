/* do: set player options */
LBP.options = {
    //focusFirstOnInit: true, // focus first (video) player on initialization
    showSources: true, // if switch between available video qualities should be possible
    defaultTimerFormat: "PASSED_HOVER_REMAINING", // default timer format, could be "PASSED_DURATION" (default), "PASSED_REMAINING", "PASSED_HOVER_REMAINING"
    defaultLanguage: 'de',
    hideControls: false
};

/*Feature #5636*/
$(document).ready(function(){
    function supports_video() { return !!document.createElement('video').canPlayType; }
    if (supports_video()) 
    {
        $('.video_with_nohtml5').hide();
    } else {
        $('.video_with_html5').hide();
    }
   
    $('.video-download').bind('click', function()
    {
           $('.download-info').toggle();
           $('.download-info').css("float","left");
           $('.download-info').css("cursor","hand");
    });
    
    $('.flash-version').bind('click', function()
    {
          $('.leanback-player-video').remove();
          $('.extra-flash-video').css("display","block");
          $('.flash-version').remove();
          $('.separator-video').remove();
    });
    
    var bro=$.browser;
    var binfo="";
    if(bro.msie) {binfo="Microsoft Internet Explorer";}
    if(bro.mozilla) {binfo="Mozilla Firefox";}
    if(bro.safari) {binfo="Apple Safari";}
    if(bro.opera) {binfo="Opera";}
    if(binfo == "Microsoft Internet Explorer")
    {
        $('.extra-flash-video').attr("classid","clsid:D27CDB6E-AE6D-11cf-96B8-444553540000");
    }
});
