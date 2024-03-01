# Cook_Book
Web-приложение для просмотра рецептов, сортировки их по кол-ву ингредиентов и времени готовки.

Установка:
Настроить переменные окружения (см. .env.example).
npm i
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
Далее 2 терминала:
npm run webpack
npm run dev
