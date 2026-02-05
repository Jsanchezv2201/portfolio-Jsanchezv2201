/**
 * @type {import('lint-staged').Configuration}
 */
const lintStagedConfig = {
  // Usamos 'eslint' directamente (o 'npx eslint') que sí acepta listas de archivos
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.mdx": "prettier --write",
};

export default lintStagedConfig;