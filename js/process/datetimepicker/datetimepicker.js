$(document).ready(function(){
    $('#datepicker-range, #datepicker-component, #datepicker-component2').datepicker();
    $('#datepicker-embeded').datepicker({
        daysOfWeekDisabled: "0,1"
    });
    $('#daterangepicker').daterangepicker({
        timePicker: true,
        timePickerIncrement: 30,
        format: 'MM/DD/YYYY h:mm A'
    }, function(start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
    });
    $('#timepicker').timepicker().on('show.timepicker', function(e) {
        var widget = $('.bootstrap-timepicker-widget');
        widget.find('.glyphicon-chevron-up').removeClass().addClass('pg-arrow_maximize');
        widget.find('.glyphicon-chevron-down').removeClass().addClass('pg-arrow_minimize');
    });
})
