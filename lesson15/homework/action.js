function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.querySelector('.image-preview');
        output.style.backgroundImage = 'url(' + reader.result + ')';
    }
    reader.readAsDataURL(event.target.files[0]);
}