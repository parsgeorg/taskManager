https://parsgeorg.github.io/taskManager/

Для запуска проекта:

1) Склонировать в свою рабочую папку на диске проект - git clone https://github.com/parsgeorg/taskManager.git

2) Установить необходимые зависимочти - npm i

3) Запустить проект - npm start

Примечания по работе с проектом как пользователь:

1)Редактирование задач срабатывает без всяких кнопок на лету - необходимо изменить любые значения полей Текст и Статус и просто кликнуть мышкой вне данного поля.

2)Доступно множественное редактирование - то есть редактирование любых значений полей Текст и Статус

3)Кнопка Добавить Таск не активна пока все обязательные поля не пройдут валидацию системы.

Примечания по работе с проектом как разработчик:

1)В проекте не применяется технолгия управления состоянием - Redux или MOBX ввиду требования написания меньшим кодом и не столь глобальной задачи.

2)При необходимости расширения проекта могу применить redux thunk или saga для работы с асинхронными запросами, side эффектами.

3)В проекте сделан уклон на функциональные компоненты, применяются хуки.

4)На данный момент пагинация и сортировка также производятся специальными функциями на клиенте - при необходимости могу переписать.


