export default [
    {
        files: ['**/*.js'],
        languageOptions: [
            {
                ecmaVersion: 2020,
                sourceType: 'module'
            }
        ],
        rules: {
            "0": ["error", {
                "semi": [
                    "error",
                    "always"
                ],
                "quotes": [
                    "error",
                    "single"
                ]
            }]
        }
    }
]
