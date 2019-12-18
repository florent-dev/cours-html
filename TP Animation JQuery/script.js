var currentProgress = 0;

$('#add').click(function () {
    if (currentProgress === 100) {
        $('#progress-bar').css('width', '0%');
        currentProgress = 0;
    } else {
        currentProgress = currentProgress + 10;
        $('#progress-bar').css('width', currentProgress+'%');
    }
    $('#progresstext').val(currentProgress);
});


$('#init').click(function () {
    currentProgress = 0;
    $('#progress-bar').css('width', '0%');
    $('#progresstext').val(currentProgress);
});

$('#progresstext').change(function () {
    if (this.value < 0) {
        currentProgress = 0;
    } else if (this.value > 100) {
        currentProgress = 100;
    } else {
        currentProgress = this.value;
    }

    $('#progresstext').val(currentProgress);
    $('#progress-bar').css('width', currentProgress+'%');
});