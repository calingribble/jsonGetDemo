$(document).ready(function () {
    $("#driver").click(function (event) {
        $.get('http://ec2-54-81-14-120.compute-1.amazonaws.com/api/dummyview', function (jsOb) {
            $('#content').html('<div class="form-horizontal">');
            var eboxText, buttonText, buttonFloat;
            //Iterates through to show all objects in JSON array
            for (i in jsOb) {
                if (jsOb[i].viewType == "editBox") {
                    eboxText = '<div style="overflow: hidden; padding-right: 8px; padding-left: 8px"><input name="text" style="width: 100%" class="form-control" value="' + jsOb[i].value + '"/></div>';
                } else if (jsOb[i].viewType == "button") {
                    //button pulls left or right dependent on its placement in array
                    if (i % 2 == 0) {
                        buttonFloat = 'left';
                    } else {
                        buttonFloat = 'right';
                    }
                    buttonText = '<button class="btn" style="float: ' + buttonFloat + '">' + jsOb[i].value + '</button>';
                } else {
                    $('#content').append('<p>Invalid type has been read.</p>');
                    break;
                }
                //In case of more than 2 elements, line break every 2
                if (i % 2 == 1) {
                    //Had to format this way instead of directly appending text due to style displaying incorrectly when button text box called before button
                    $('#content').append(buttonText + eboxText + '<br>');
                }
            }
            $('#content').append('</div>');
        });
    });
});