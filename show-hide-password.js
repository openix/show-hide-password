// Name      : Show Hide Password
// Version   : 1.0.1
// Developer : Ekrem KAYA
// Website   : https://openix.io
// GitHub    : https://github.com/openix/show-hide-password

(function($) {
  'use strict';
  $.fn.showHidePassword = function(option) {
    $.extend(this, option);

    var element = $(this);

    // Check bootstrap input group
    var inputGroupCheck = element.parent().hasClass('input-group');

    if (inputGroupCheck) {
      element.css({
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px'
      });
    } else {
      element.wrap('<div class="password-container"></div>');
    }

    element.after('<span class="show-hide-password"><i class="fa fa-eye"></i></span>');

    // Add postion css password container
    $('.password-container').css({position: 'relative'});

    var showHideIcon = element.parent().find('.show-hide-password');

    // Add eye icon css
    $(showHideIcon).css({
      position: 'absolute',
      display: 'none',
      top: '0',
      right: '0',
      height: element.outerHeight(true) - 2,
      marginTop: '1px',
      padding: '6px 11px',
      //borderLeft: '1px solid #CCC',
      cursor: 'pointer',
      zIndex : '999',
      color : 'black'
    });

    // Show eye icon when you start entering password
    element.keyup(function(event) {
      var keyUp = $(this);
      var passwordVal = keyUp.val();

      if (passwordVal.length > 0) {
        // Add padding password input
        keyUp.css({paddingRight : '34px'});

        if (inputGroupCheck) {
          $(showHideIcon).css({padding: '8px 11px'});
        }

        // Show eye icon
        keyUp.parent().find(showHideIcon).show();
      } else if (element.val() == '') {
        // If is empty hide eye icon
        keyUp.parent().find(showHideIcon).hide();
      }
    });

    // If is not empty show eye icon
    element.trigger('keyup');

    // Change eye icon class
    $(showHideIcon).on('click', function() {
      var iconElement = this;

      // Change eye icon
      $(iconElement).find('i').toggleClass('fa-eye fa-eye-slash');

      var findInputPassword = $(iconElement).parent().find('input');
      var passwordFieldType = findInputPassword.attr('type');

      // Show Hide Password
      if (passwordFieldType == 'password') {
        findInputPassword.attr('type', 'text');
      } else {
        findInputPassword.attr('type', 'password');
      }
    });
  }
})(window.jQuery);