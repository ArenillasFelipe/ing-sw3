exports.config = {
    tests: './*_test.js',
    output: './output',
    helpers: {
        Puppeteer: {
            url: 'https://evening-escarpment-64577-f01b2da16e33.herokuapp.com/',
            show: false,
            windowSize: '1200x900',
            waitForAction: 2000,
        },
        REST: {
            endpoint: 'https://pacific-wave-13397-31b04e68149c.herokuapp.com/',
            onRequest: (request) => {
                request.headers.auth = '123';
            }
        },
        JSONResponse: {}
    },
    include: {
        I: './steps_file.js'
    },
    bootstrap: null,
    mocha: {},
    name: 'frontend',
    plugins: {
        pauseOnFail: {},
        retryFailedStep: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        }
    }
};