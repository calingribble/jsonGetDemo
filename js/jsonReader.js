$(document).ready(function () {
    $("#driver").click(function (event) {
        $.get('http://ec2-54-81-14-120.compute-1.amazonaws.com/api/dummyview', function (jsOb) {
            $('#content').html('<div class="form-horizontal">');
            var eboxText, buttonText, buttonFloat;
            //Iterates through to show all objects in JSON array
            for (i in jsOb) {
				//If viewType is editbox, display editbox and set text to current object value
                if (jsOb[i].viewType == "editBox") {
                    eboxText = '<div style="overflow: hidden; padding-right: 8px; padding-left: 8px"><input name="text" style="width: 100%" class="form-control" value="' + jsOb[i].value + '"/></div>';
                //If viewType is button, display button and set text to current object value
				} else if (jsOb[i].viewType == "button") {
                    //Button pulls left or right dependent on its placement in array
					//Set up to display only 2 components per line
                    if (i % 2 == 0) {
                        buttonFloat = 'left';
                    } else {
                        buttonFloat = 'right';
                    }
					//Used float to position button correctly while allowing text field to take up remainder of horizontal space
                    buttonText = '<button class="btn" style="float: ' + buttonFloat + '">' + jsOb[i].value + '</button>';
                } else {
					//In case of invalid data type
                    $('#content').append('<p>Invalid type has been read.</p>');
                    
                }
                //In case of more than 2 elements, line break every 2
                if (i % 2 == 1) {
                    //Had to format this way instead of directly appending text due to style displaying incorrectly when text box called before button
                    $('#content').append(buttonText + eboxText + '<br>');
                }
            }
            $('#content').append('</div>');
        });
    });
});