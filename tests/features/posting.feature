# language: ru
Функционал: Как залогиненный пользователь,
  я хочу добавлять и удалять свои заметки

  Предыстория: Пользователь зашел в учетную запись
    Допустим я нахожусь на странице входа
    Если я ввожу в форму данные:
      | field    | value |
      | name     | user1 |
      | password | 123   |
    И нажимаю на кнопку "Log in"
    То вижу уведомление "Login successful"

  @addNote
  Сценарий: Добавление заметки
    Допустим я нахожусь на главной странице
    Если я ввожу в форму данные:
      | field | value                  |
      | text  | тестовый текст заметки |
    И нажимаю на кнопку "Send"
    То вижу текст "тестовый текст заметки"

  @removeNote
  Сценарий: Удаление заметки
    Допустим я нахожусь на главной странице
    И вижу текст "lorem ipsum dolor sit amet"
    И нажимаю на кнопку "Delete"
    То не вижу текст "lorem ipsum dolor sit amet"