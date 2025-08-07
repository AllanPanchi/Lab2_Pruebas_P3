export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            "0": [
                {
                    ecmaVersion: 2020,
                    sourceType: 'module'
                }
            ]
        },
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
