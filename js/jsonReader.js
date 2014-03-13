$(document).ready(function () {
  var map = {
    editBox: function(object) {
      return $("<div style='overflow: hidden; padding-right: 8px; padding-left: 8px' />").append( $("<input type='text' style='width: 100%' class='form-control'/>").attr('value', object.value) );
    },
    button: function(object, i) {
      return $("<input type='button' class='btn' />").attr('value', object.value).attr('style', 'float: ' + (i % 2 == 0) ? 'left' : 'right');
    }
  }

  $("#driver").click(function (event) {
    event.preventDefault();
    $('#content').html('<div class="form-horizontal"></div>');

    $.get('http://ec2-54-81-14-120.compute-1.amazonaws.com/api/dummyview', function (objects) {
      for (i in objects) {
        var object  = objects[i];
        var builder = map[object.viewType];
        $('#content .form-horizontal').append((typeof builder == 'function' ) ? builder(object, i) : '<p>Invalid type has been read.</p>');
      }
    });
  });
});
