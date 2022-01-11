function upload() {
    fileInput = document.getElementById('FileInput')
    var xhttp = new XMLHttpRequest();
    xhttp.open('POST', encodeURI('/upload/storage/' + document.getElementById('DirInput').value + '/' + fileInput.files[0].name), true)
    xhttp.send(fileInput.files[0])
}
