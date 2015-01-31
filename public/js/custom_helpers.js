function select_option(select_id, value_to_select)
{
sel = document.getElementById(select_id);
    for(var i, j = 0; i = sel.options[j]; j++) {
        if(i.value == value_to_select) {
            sel.selectedIndex = j;
            break;
        }
    }
}


function GetModelWindowData(url)
{
   $.ajax({
            type: "GET",
            url: url,
            success: function (result) {
                $('#myModal').html(result);
            },
            error : function(error) {
                $('#myModal').html('<p>Some Error Occured.</p>');
            }
	});
}