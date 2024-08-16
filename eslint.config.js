import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  stylistic: {
    indent: 2,
    quotes: 'single',
  },

  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: 1,
    }],
  },
})
