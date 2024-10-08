document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы модального окна
    var modal = document.getElementById('popupModal');
    var closeBtn = document.getElementsByClassName('close')[0];

    // Ловим событие отправки формы
    document.getElementById('recommendationForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Предотвращаем отправку формы и перезагрузку страницы

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        // Проверяем, если поле с отзывом заполнено
        if (message.trim() !== "") {
            // Создаем новый элемент для отзыва
            const recommendationList = document.getElementById('recommendationList');
            const newRecommendation = document.createElement('div');
            newRecommendation.classList.add('recommendation');

            // Добавляем HTML-содержимое нового отзыва
            newRecommendation.innerHTML = `
                <p>"${message}"</p>
                <p><strong>— ${name || 'Anonymous'}</strong></p>
            `;

            // Добавляем новый отзыв в список отзывов
            recommendationList.appendChild(newRecommendation);

            // Показываем модальное окно с благодарностью
            modal.style.display = 'block';

            // Очищаем форму
            document.getElementById('recommendationForm').reset();
        } else {
            alert('Please fill out the recommendation field.');
        }
    });

    // Закрытие модального окна при нажатии на крестик
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    // Закрытие модального окна при клике вне его
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
