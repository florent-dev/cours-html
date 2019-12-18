var currentProgress = 0;

$('#add').click(function () {
    currentProgress = parseInt(currentProgress) + 10;

    if (currentProgress >= 100) {
        currentProgress = 0;
    }

    updateProgressBar();
});


$('#init').click(function () {
    currentProgress = 0;
    updateProgressBar();
});

$('#progresstext').change(function () {
    if (this.value < 0) {
        currentProgress = 0;
    } else if (this.value > 100) {
        currentProgress = 100;
    } else {
        currentProgress = this.value;
    }

    updateProgressBar();
});

function updateProgressBar() {
    $('#progresstext').val(currentProgress);
    $('#progress-bar').css('width', currentProgress+'%');

    if (currentProgress <= 50) {
        $('#progress-bar').css('background-color', '#007bff');
    } else if (currentProgress >= 80) {
        $('#progress-bar').css('background-color', '#dc3545');
    } else {
        $('#progress-bar').css('background-color', '#dc9935');
    }
}