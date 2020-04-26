module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ['eslint-plugin-react'],
	rules: {
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-constant-condition': 'error',
		'no-control-regex': 'error',
		'no-dupe-args': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty-character-class': 'error',
		'no-ex-assign': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-semi': 'error',
		'no-func-assign': 'error',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-obj-calls': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-unexpected-multiline': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'use-isnan': 'error',
		'valid-typeof': 'error',
		eqeqeq: 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-empty-pattern': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-fallthrough': 'error',
		'no-global-assign': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-iterator': 'error',
		'no-loop-func': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-restricted-properties': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-throw-literal': 'error',
		'no-useless-escape': 'error',
		'no-unused-vars': 'error',
		'no-with': 'error',
		'prefer-promise-reject-errors': 'error',
		radix: 'error',
		'require-await': 'error',
		strict: ['error', 'global'],
		'no-delete-var': 'error',
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-use-before-define': [
			'error',
			{
				functions: false,
				classes: false,
				variables: false
			}
		],
		'new-cap': 'error',
		'no-bitwise': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		'comma-dangle': ['error', 'never'],
		'object-curly-spacing': ['error', 'always'],
		'constructor-super': 'error',
		'no-class-assign': 'error',
		'no-confusing-arrow': 'error',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-duplicate-imports': 'error',
		'no-new-symbol': 'error',
		'no-this-before-super': 'error',
		'require-yield': 'error',

		// react
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error'
	},
	env: {
		node: true,
		browser: true,
		jest: true,
		es6: true
	}
};
