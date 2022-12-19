module.exports = {
    // ...
    globals: {
        'ts-jest': {
            babelConfig: {
                presets: ['@babel/preset-react', '@babel/preset-typescript'],
            },
        },
    },
    // ...
}