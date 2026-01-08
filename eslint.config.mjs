import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  // Ignorar carpetas de build y logs
  {
    ignores: ["node_modules/", "dist/", "coverage/", "playwright-report/", "test-results/", "**/*.min.js"]
  },
  // Reglas recomendadas de ESLint
  pluginJs.configs.recommended,
  // Configuración general
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs", // Por defecto el proyecto usa require/module.exports
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off" // Permitimos console.log para este proyecto simple
    }
  },
  // Configuración específica para Backend (Node.js + Jest)
  {
    files: ["server/**/*.js", "*.js", "e2e/**/*.js"], // Incluye raíz y e2e
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest, // Para pruebas con Jest
      }
    }
  },
  // Configuración específica para Frontend (Browser)
  {
    files: ["client/**/*.js"],
    languageOptions: {
      sourceType: "script", // Script normal para cliente (no modules por defecto en este setup)
      globals: {
        ...globals.browser
      }
    }
  }
];
