
var dev    = localStorage['devconfirm'];
var test   = localStorage['test'];
var viewer = localStorage['viewer'];

$('#devconfirm').val(dev);
$('#test').val(test);
$('#reviewboard_user').val(viewer);

$('#rwsubmit').on('click', function() {
if($('#devconfirm').length > 0) {
    localStorage['devconfirm'] = $('#devconfirm').val();
}
if($('#test').length > 0) {
   localStorage['test'] = $('#test').val();
}

if ($('#reviewboard_user').length > 0) {
   localStorage['viewer'] = $('#reviewboard_user').val(); 
}
});
