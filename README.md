## Tes Lab React Native App

# Если сломается API мок данные - https://docs.google.com/document/d/1J3cuLnq7eiENLzrtreDMj570rARz_QDqaqWFIh-ekjg/edit?usp=sharing
Это пример приложения React Native под названием "Tes Lab", демонстрирующий базовое использование React Navigation, Redux Toolkit и Axios для получения данных новостей. Приложение отображает список новостных статей и позволяет пользователям просматривать подробности в модальном окне.

Установите зависимости:

```bash
npm install
```
Запустите проект:

```bash
npm start + i
```

## Зависимости
- React Navigation (@react-navigation/native, @react-navigation/stack): Используется для навигации в приложении.
- Redux Toolkit (@reduxjs/toolkit, react-redux): Управление состоянием приложения.
- Axios (axios): HTTP-клиент для выполнения запросов к API.
- React Native Fast Image (react-native-fast-image): Предоставляет компонент для быстрого отображения изображений.
- React Native Gesture Handler (react-native-gesture-handler): Необходим для жестовых взаимодействий.
- React Native Responsive Screen (react-native-responsive-screen): Обеспечивает адаптивный дизайн.
- React Native Safe Area Context (react-native-safe-area-context): Гарантирует отображение контента в безопасных областях экрана.
- React Native Screens (react-native-screens): Помогает с компонентами экранов навигации.

# Структура проекта
Структура проекта следует общему подходу React Native:

- src/: Содержит исходный код приложения.
- Screens/: Хранит компоненты экранов.
- Store/: Управляет хранилищем Redux и связанными файлами.
- Types/: Хранятся типы.
- Utils/: Включает в себя вспомогательные функции.
- App.tsx: Главная точка входа в приложение.


