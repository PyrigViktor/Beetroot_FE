const resizeBox = document.createElement('div');
resizeBox.id = 'resize-box';
document.body.appendChild(resizeBox);

const resizeP = document.createElement('p');
resizeP.textContent = 'Resize box';
resizeP.id = 'resize-p';
resizeBox.appendChild(resizeP);


let resize = document.getElementById('resize-box');
resize.style.resize = 'both';
resize.style.overflow = 'auto';