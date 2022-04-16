 function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=None; Secure";
    };
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(";");
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            };
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            };
        };
        return "";
    };
    if(document.cookie){
        if(document.cookie.indexOf("vid=") != -1){
        } else {
            setCookie("vid", 100, 365);
        };
    } else {
        setCookie("vid", 100, 365);
    };
    pvolume = parseInt(getCookie("vid"));
    function isInArray(value, array) {
      return array.indexOf(value) > -1;
    };

    function extractHostname(url) {
      var hostname;
      if (url.indexOf("://") > -1) {
        hostname = url.split("/")[2];
      } else {
        hostname = url.split("/")[0];
      };
      hostname = hostname.split(":")[0];
      hostname = hostname.split("?")[0];
      return hostname;
    };

  
    function unsandbox(){
      
        if(typeof player.version === 'undefined'){ //clappr
          player.configure({source: "https://google.com"});
        } else {
          if(typeof player.unmute === 'undefined'){//jwplayer
            player.load("https://google.com");
          } else { //bitmovin
            player.load({source:"https://google.com"});
          }
        }

        $("body").html("<p class=\"sand\">Sandboxing is not allowed</p>");
        $("body").css("color","white");
        $(document).off( "click", "*" );
    };

      (function($){
    $.adblockDetector = {
      detect: function() {
        var deferred = new $.Deferred();
        var adBlock = true;
        var $dummy = $('<div class="adsbox">&nbsp;</div>').appendTo('body');
        setTimeout(function () {
          if ($dummy.height() > 0) {
              adBlock = false;
          }
          $dummy.remove();
          deferred.resolve(adBlock);
        }, 100);
        return deferred;
      }
    };
  })(jQuery);

  

  var popurl = "https://www.onclickalgo.com/jump/next.php?r=5472627"; //n pop | MainPop
  var popurl2 = "https://www.trustedcpmrevenue.com/z787xv4z?key=0c3f11af1a5aafa9dbb5223d2a7b06ca"; //n pop | MainPop

      var secondpop = 5;
    var nextpops = 17;
    var maxpops = 4;
  
  $.adblockDetector.detect().done(function(adblock){
    if(adblock){
      popurl = "https://appsdeportes.herokuapp.com/ads1.html";
      secondpop = 5;
      nextpops = 5;
      maxpops = 6;
        //$("#site-contenedor .raulito").prop("src", "< ?=$adblockurl?>");
      //if(typeof player !== 'undefined'){
      //  player.destroy();
      //}
      //$("body").html('<div style="text-align:center;color:#fff;font-size:1rem;padding:1rem;"><p><img src="https://addons.cdn.mozilla.net/user-media/addon_icons/532/532754-64.png?modified=d96e390b"></p><h1>Adblock not allowed</h1><p>Disable your adblocker and <a style="color:lightblue" href="#" onclick="location.reload();">refresh the page</a>.</p></div>');
    }
  });


bool = false;
var openedwin = false;
var volumeSet = false;
var loop = 0;
    
function getToVideo(e){
    if(!openedwin){
      if(window.open(popurl, '_blank')){
        openedwin = true;
        popurltmp = popurl;
        popurl = popurl2;
        popurl2 = popurltmp;
        $("#overlay").hide();
        loop++;
        if(loop == 1){
            var timer=setTimeout(function(){
                refreshdl();
            },secondpop*1000);
        } else {
          if(loop < (maxpops+1)){
              var timer=setTimeout(function(){
                  refreshdl();
              },nextpops*1000);
          }
        }
        e.preventDefault();
      }
    }
}

$(document).on('touchend click', "#overlay", function(e) {
    getToVideo(e);
    if(!volumeSet && typeof player !== 'undefined'){
      if(typeof player.version === 'undefined'){ //clappr
          player.configure({hideMediaControl: "true"});
      } else {
        if(typeof player.unmute !== 'undefined'){//jwplayer          
          player.unmute();
        } else {
          player.setMute(false);
        }
      }
      player.setVolume(pvolume);
      volumeSet = true;
    }
    e.stopImmediatePropagation();
});
$(document).ready(function() {
    if(!isiOS && !isEdge){
        $("body").append('<object data="data:application/pdf;base64,aG1t" width="1px" height="1px" style="position:absolute;top:-500px;left:-500px;visibility:hidden;" onerror="unsandbox();$(this).remove()"></object>');
    }
    if (!isInArray(hostname, whitelist)) {
      vwu();
      setInterval("vwu()", 300000);
    }
});

function refreshdl(){
    if(openedwin){
        openedwin = false;
        $("#overlay").show();
    }
}
/*
var timer=setTimeout(function(){
    $('.close').fadeIn(300);
},4000);
*/
var par = { url: "https://appsdeportes.herokuapp.com/ads3.html",
            canurl: "https://appsdeportes.herokuapp.com/ads2.html",
            mins: 0,
            method: "rdr",
            mob: "yes"
          };
