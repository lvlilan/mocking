# mocking

![Tests](https://github.com/lvlilan/mocking/actions/workflows/test.yml/badge.svg)

Функция `getLevel` возвращает текущий уровень пользователя или сообщение о недоступности.

Тесты используют `jest.mock('./http.js')` для подмены «тяжёлой» зависимости `fetchData`, чтобы не ходить в сеть.