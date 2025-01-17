const path = require('path')
 
const buildEslintCommand = (filenames) =>
  `pnpm lint --max-warnings 0 --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`
 
module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}