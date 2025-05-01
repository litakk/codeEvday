# Настройка Prettier и ESLint

## 1. Установка Prettier
Prettier — это инструмент для автоматического форматирования кода.

### Установка
```sh
npm install --save-dev prettier
```

### Настройка
Создайте файл `.prettierrc` в корне проекта и добавьте настройки:
```json
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2
}
```

### Использование
Форматирование всех файлов в проекте:
```sh
npx prettier --write .
```

Проверка кода без изменений:
```sh
npx prettier --check .
```

### Интеграция с VS Code
1. Установите расширение **Prettier - Code formatter**.
2. В файле `settings.json` добавьте:
   ```json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode"
   }
   ```

---

## 2. Установка ESLint
ESLint — это инструмент для анализа кода, который помогает находить ошибки и следовать код-стайлу.

### Установка
```sh
npm install --save-dev eslint
```

### Инициализация
```sh
npx eslint --init
```
Выберите:
- **To check syntax and find problems**
- Формат **JSON**

### Настройка
Создайте или отредактируйте `.eslintrc.json`:
```json
{
  "extends": ["eslint:recommended"],
  "rules": {
    "quotes": ["error", "single"],
    "semi": ["error", "always"]
  }
}
```

### Использование
Проверка кода на ошибки:
```sh
npx eslint .
```

Автоматическое исправление ошибок:
```sh
npx eslint . --fix
```

### Интеграция с VS Code
1. Установите расширение **ESLint**.
2. В файле `settings.json` добавьте:
   ```json
   {
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     }
   }
   ```

---

## 3. Совместное использование Prettier и ESLint
Чтобы избежать конфликтов между инструментами, установите дополнительные пакеты:
```sh
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

Обновите `.eslintrc.json`:
```json
{
  "extends": ["eslint:recommended", "plugin:prettier/recommended"],
  "rules": {
    "quotes": ["error", "single"],
    "semi": ["error", "always"]
  }
}
```

Теперь Prettier и ESLint работают вместе без конфликтов! 🚀