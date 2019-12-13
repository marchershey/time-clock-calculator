

$(document).ready(function () {

    $('input.timepicker').timepicker({
        timeFormat: 'HH:mm',
        startTime: new Date(0, 0, 0, 04, 30, 0),
        interval: 30,
        dropdown: false
    });

    $('.day .timepicker, .day .break').on('change', function () {
        var start = $('.start', $(this).parents('.day')).val();
        var end = $('.end', $(this).parents('.day')).val();
        var recess = $('.break', $(this).parents('.day')); // recess is break - can't call it break
        var time = addTime(start, end, recess);
        $(this).parents(".day").find('.total').html(time);
        updateTotal();
    });

    function addTime(start, end, recess) {
        var start = start.split(':');
        var end = end.split(':');
        var start_hours = parseInt(start[0], 10),
            end_hours = parseInt(end[0], 10),
            start_mins = parseInt(start[1], 10),
            end_mins = parseInt(end[1], 10);
        var hours = end_hours - start_hours, mins = 0;

        if (hours < 0) hours = 24 + hours;

        if (end_mins >= start_mins) {
            mins = end_mins - start_mins;
        }
        else {
            mins = (end_mins + 60) - start_mins;
            hours--;
        }

        mins = mins / 60;
        hours += mins;
        results = hours.toFixed(2);

        if (recess.is(':checked')) {
            results = (results - 0.50).toString();
        }

        if (!isNaN(results)) {
            return results = parseFloat(results).toFixed(2);
        } else {
            return '0.0';
        }
    }

    function updateTotal() {
        var total = 0.0;
        $('.total').each(function () {
            total += parseFloat($(this).text());
        });
        $('#total').text(total.toFixed(2));
    }

});

