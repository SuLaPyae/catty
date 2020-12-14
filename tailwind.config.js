module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        tooltipArrows: theme => ({
            'danger-arrow': {
                borderColor: theme('colors.red.400'),
                borderWidth: 1,
                backgroundColor: theme('colors.red.200'),
                size: 10,
                offset: 10
            },
        }),
        extend: {

        },
        zIndex: {
            auto: 'auto',
            'negative': '-1',
            0: '0',
            10: '10',
            20: '20',
            30: '30',
            40: '40',
            50: '50',
        },

    },
    variants: {
        extend: {
            maxHeight: ['focus'],
        },
    },
    plugins: [
        require('tailwindcss-elevation')(['responsive']),

        require('tailwindcss-tooltip-arrow-after')(),

    ],
}