import Raven from "raven-js";

function init() {
    Raven.config("https://667509f8455143928ad206fc55932a0d@o1236755.ingest.sentry.io/6386862", {
        release: '1-0-0',
        environment: 'development-test'
    }).install();
}

function log(error) {
    Raven.captureException('Logging the error', error);
}

export default {
    init,
    log
}