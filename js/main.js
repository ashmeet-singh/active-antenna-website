function logViewAddLine(s) { logView.innerText = s + '\n' + logView.innerText; }
function upload() {
    fileInput = document.getElementById('FileInput')
    logView = document.getElementById('LogView')

    var filePath = document.getElementById('DirInput').value + fileInput.files[0].name;

    logViewAddLine('Preparing to upload file: ' + filePath);

    var xhttp = new XMLHttpRequest();

    xhttp.addEventListener("load", transferComplete);
    xhttp.addEventListener("error", transferFailed);

    function transferComplete(e) {
        logViewAddLine('File uploaded: ' + filePath);
    }

    function transferFailed(e) {
        logViewAddLine('File upload failed: ' + filePath);
    }

    xhttp.open('POST', encodeURI('/upload/storage/' + filePath), true)
    xhttp.send(fileInput.files[0])

    logViewAddLine('Uploading file: ' + filePath);
}
