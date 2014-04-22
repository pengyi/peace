

var fillInputs = function() {
    var $inputs = $('input[type=text]');
    $inputs.each(function(index, item) {
        var $input = $(item);
        var name   = $input.attr('name');
        var oldVal = $input.val();
        if (name !== undefined) {
            var savedVal = localStorage[name];
            if (savedVal) {
                 $input.val(savedVal);
            }
        }
   });
}


var saveValue = function() {
    var $inputs = $('input[type=text]');
    $inputs.each(function(index, item) {
        var $input = $(item);
        var name   = $input.attr('name');
        if (name !== undefined) {
            $input.on('blur', function() {
                var val = $input.val();
                if (val) {
                    localStorage[name] = val;
                }
            });
        }
    });
}

saveValue();
fillInputs();
