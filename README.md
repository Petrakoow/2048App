### 2048 Игра (Мини-проект)
**Petrakov Egor**

#### Описание проекта:
Игра 2048 — это веб-реализация популярной головоломки. Основная цель — объединять плитки с одинаковыми числами, чтобы достичь плитки со значением 2048. Проект был создан в рамках серии мини-проектов, направленных на практику JavaScript, работу с двумерными массивами и изучение архитектуры MVC (Model-View-Controller).

#### Основные особенности:
- **Механика игры:** Игроки могут перемещать плитки с помощью стрелок (влево, вправо, вверх, вниз) для объединения плиток с одинаковыми значениями.
- **Управление доской:** Игра динамически обновляет и отрисовывает сетку 4x4, на которой после каждого хода появляются новые плитки.
- **Отслеживание счёта:** Счёт увеличивается при объединении плиток, и он отображается и обновляется в реальном времени.
- **Обнаружение конца игры:** Игра определяет момент, когда больше нет доступных ходов, и предлагает начать заново.

#### Учебные цели:
1. **Практика синтаксиса JavaScript:** Практика с функциями, объектно-ориентированным программированием и манипуляциями с DOM.
2. **Двумерные массивы и логика:** Управление сеткой 4x4 для представления доски, реализация алгоритмов для перемещения и объединения плиток.
3. **Архитектура MVC:** Структурирование кода для разделения логики игры (Модель), визуального отображения (Вид) и обработки ввода (Контроллер).
4. **Обработка событий:** Обработка событий клавиатуры для управления игровым процессом и обновления доски.
5. **Динамическое обновление интерфейса:** Отрисовка доски и счёта в зависимости от взаимодействий пользователя.

#### Структура проекта:
- **Модель (GameModel):** Управляет состоянием игры, включая сетку, счёт и логику перемещения и объединения плиток.
- **Вид (GameView):** Обрабатывает визуальное отображение доски и интерфейса, динамически обновляя DOM для отражения состояния игры.
- **Контроллер (GameController):** Связывает модель и вид, обрабатывая ввод пользователя (нажатия клавиш) и управление обновлениями игры.

#### Будущие возможные улучшения (2048APP-v1):
- Реализация анимаций для плавных переходов плиток.
- Добавление звуковых эффектов для большей вовлечённости.

