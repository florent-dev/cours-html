var currentProgress = 0;

$('#add').click(function () {
    if (currentProgress === 100) {
        $('#progress-bar').css('width', '0%');
        currentProgress = 0;
    } else {
        currentProgress = currentProgress + 10;
        $('#progress-bar').css('width', currentProgress+'%');
    }
});


$('#init').click(function () {
    currentProgress = 0;
    $('#progress-bar').css('width', '0%');
});