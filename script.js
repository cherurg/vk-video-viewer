(function () {
    var videoElement = $("#video-place");

    var videoTextInput = $("#video-text-input");

    $("#video-input")
        .submit(function (e) {

            videoElement.html(videoTextInput.val());

            e.preventDefault();
        });
}());