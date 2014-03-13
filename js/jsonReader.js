$(document).ready(function () {
  var map = {
    editBox: function(object) {
      var element = $("<input type='text' style='width: 100%' class='form-control'/>")
      element.attr('value', object.value);
      return $("<div style='overflow: hidden; padding-right: 8px; padding-left: 8px' />").append( element );
    },
    button: function(object, i) {
      var element = $("<input type='button' class='btn' />");
      element.attr('value', object.value);
      element.attr('style', 'float: ' + (i % 2 == 0) ? 'right' : 'left');
      return element;
    }
  }

  $("#driver").click(function (event) {
    event.preventDefault();
    $('#content').html('<div class="form-horizontal"></div>');

    $.get('http://ec2-54-81-14-120.compute-1.amazonaws.com/api/dummyview', function (objects) {
      for (i in objects) {
        var object = objects[i];
        var builder = map[object.viewType];

        if (typeof builder == 'function' ) {
          $('#content .form-horizontal').append(builder(object, i));
        } else {
          $('#content .form-horizontal').append('<p>Invalid type has been read.</p>');
        }
      }
    });
  });
});
