/*Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E,
замість div з'являється textarea з тим же текстом, який тепер можна редагувати. ' +
'При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.
 */

const textDiv = document.createElement('div');
textDiv.id = 'text-div';
textDiv.textContent = 'some your text';
document.body.appendChild(textDiv);

const textArea = document.createElement('textarea');
let userText = textDiv.textContent;



document.addEventListener("keydown", function (event){
    if (event.ctrlKey && event.key === 'e') {
        textDiv.style.display = 'none';
        textArea.textContent = userText;
        document.body.appendChild(textArea);
        textArea.focus();
        event.preventDefault()
    }
    if (event.ctrlKey && event.key === 's') {
        userText = textArea.value;
        document.body.removeChild(textArea);
        textDiv.textContent = userText;
        textDiv.style.display = 'block';
        event.preventDefault();
    }
});