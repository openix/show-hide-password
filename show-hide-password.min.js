// Name      : Show Hide Password
// Version   : 1.0.0
// Developer : Ekrem KAYA
// Website   : https://openix.io
// GitHub    : https://github.com/openix/show-hide-password

!function(n){"use strict";n.fn.showHidePassword=function(s){n.extend(this,s);var i=n(this),a=i.parent().hasClass("input-group");a?i.css({borderTopRightRadius:"4px",borderBottomRightRadius:"4px"}):i.wrap('<div class="password-container"></div>'),i.after('<span class="show-hide-password"><i class="fa fa-eye"></i></span>'),n(".password-container").css({position:"relative"});var e=i.parent().find(".show-hide-password");n(e).css({position:"absolute",display:"none",top:"0",right:"0",height:i.outerHeight(!0)-2,marginTop:"1px",padding:"6px 11px",cursor:"pointer",zIndex:"999",color:"black"}),i.keyup(function(s){var t=n(this);0<t.val().length?(t.css({paddingRight:"34px"}),a&&n(e).css({padding:"8px 11px"}),t.parent().find(e).show()):""==i.val()&&t.parent().find(e).hide()}),i.trigger("keyup"),n(e).on("click",function(){n(this).find("i").toggleClass("fa-eye fa-eye-slash");var s=n(this).parent().find("input");"password"==s.attr("type")?s.attr("type","text"):s.attr("type","password")})}}(window.jQuery);