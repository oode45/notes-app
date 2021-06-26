# language: ru
Функционал: Как залогиненный пользователь,
  я хочу добавлять/удалять друзей, чтобы 
  видеть или скрывать их заметки

  Предыстория: Пользователь зашел в учетную запись
    Допустим я нахожусь на странице входа
    Если я ввожу в форму данные:
      | field    | value |
      | name     | user1 |
      | password | 123   |
    И нажимаю на кнопку "Log in"
    То вижу уведомление "Login successful"

    @addFriend
    Сценарий: Добавление друга
      Допустим я нахожусь на главной странице
      И нажимаю на кнопку "Add"
      И вижу текст "Author: user2"
      И вижу текст "dolor amet"
      То вижу текст "REMOVE"

    @removeFriend
    Сценарий: Удаление друга
      Допустим я нахожусь на главной странице
      И нажимаю на кнопку "Remove"
      И не вижу текст "Author: user3"
      И не вижу текст "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, vel?"
      То вижу текст "ADD"

