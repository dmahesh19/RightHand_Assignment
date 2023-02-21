"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEST_EMPTY_STATS = exports.TEST_SCENARIO_STATS_ERROR = exports.TEST_NO_KEYWORD_STATS = exports.TEST_SCENARIO_STATS = exports.STEP_HOOK_ONSTART_STATS = exports.STEP_TEST_ONSTART_ARGUMENT_STATS = exports.STEP_TEST_ONSTART_STATS = exports.SUITE_SCENARIO_STATS = exports.SUITE_FEATURE_UID = exports.SUITE_FEATURE_STATS = exports.CAPS_METADATA_RUNNER_STATS = exports.WDIO6_RUNNER_STATS = exports.FULL_RUNNER_STATS = exports.SMALL_RUNNER_STATS = exports.EMPTY_SCENARIO = exports.EMPTY_FEATURE = void 0;
const wdio_1 = require("../../types/wdio");
const reporter_1 = require("@wdio/reporter");
exports.EMPTY_FEATURE = {
    keyword: 'Feature',
    description: '',
    line: 2,
    name: 'Empty feature',
    tags: '',
    elements: [],
    id: 'empty-feature',
};
exports.EMPTY_SCENARIO = {
    keyword: 'Scenario',
    description: '',
    name: 'Open website',
    tags: '',
    id: 'create-passed-feature;open-website',
    steps: [],
};
exports.SMALL_RUNNER_STATS = {
    capabilities: {
        browserName: 'chrome',
        chromedriverVersion: '2.46.628411 (3324f4c8be9ff2f70a05a30ebc72ffb013e1a71e)',
        chromeOptions: {
            args: ['user-data-dir=/var/folders/rb/_hbqv7fn5114b206t2s05fs40000gn/T/.org.chromium.Chromium.uwkY0A'],
        },
        'goog:chromeOptions': {
            debuggerAddress: 'localhost:53158'
        },
        platform: 'Mac OS X',
        proxy: {},
        version: '75.0.3770.100',
    },
    config: {
        capabilities: {},
    },
    type: 'runner',
    start: new Date('2019-07-14T07:25:20.897Z'),
    _duration: 0,
    duration: 0,
    complete: () => {
    },
    cid: '0-0',
    sessionId: '',
    instanceOptions: {},
    sanitizedCapabilities: 'chrome.75_0_3770_100.macosx',
    specs: ['/Users/wswebcreation/Sauce/Git/webdriverio-cucumberjs/__tests__/features/passed.feature'],
    isMultiremote: false
};
exports.FULL_RUNNER_STATS = {
    type: 'runner',
    start: new Date('2019-07-14T07:25:20.897Z'),
    _duration: 0,
    cid: '0-0',
    capabilities: {
        cjson_metadata: {},
        acceptInsecureCerts: false,
        acceptSslCerts: false,
        applicationCacheEnabled: false,
        browserConnectionEnabled: false,
        browserName: 'chrome',
        chromedriverVersion: '2.46.628411 (3324f4c8be9ff2f70a05a30ebc72ffb013e1a71e)',
        chromeOptions: {
            args: ['user-data-dir=/var/folders/rb/_hbqv7fn5114b206t2s05fs40000gn/T/.org.chromium.Chromium.uwkY0A'],
        },
        cssSelectorsEnabled: true,
        databaseEnabled: false,
        'goog:chromeOptions': {
            debuggerAddress: 'localhost:53158'
        },
        handlesAlerts: true,
        javascriptEnabled: true,
        locationContextEnabled: true,
        mobileEmulationEnabled: false,
        nativeEvents: true,
        pageLoadStrategy: 'normal',
        platform: 'Mac OS X',
        proxy: {},
        rotatable: false,
        setWindowRect: true,
        strictFileInteractability: false,
        timeouts: {
            implicit: 0,
            pageLoad: 300000,
            script: 30000,
        },
        unexpectedAlertBehaviour: 'ignore',
        version: '75.0.3770.100',
        webStorageEnabled: true,
        'webdriver.remote.sessionid': 'b2e560a6ed31a6551fa3509109b71f14'
    },
    sanitizedCapabilities: 'chrome.75_0_3770_100.macosx',
    config: {
        hostname: '127.0.0.1',
        port: 4444,
        protocol: 'http',
        specs: ['/Users/wswebcreation/Sauce/Git/webdriverio-cucumberjs/__tests__/**/passed.feature'],
        suites: {},
        exclude: [],
        outputDir: undefined,
        logLevel: 'silent',
        logLevels: {},
        baseUrl: 'http://webdriver.io',
        bail: 0,
        waitforInterval: 500,
        waitforTimeout: 20000,
        framework: 'cucumber',
        reporters: ['spec'],
        maxInstances: 100,
        maxInstancesPerCapability: 100,
        filesToWatch: [],
        connectionRetryTimeout: 90000,
        connectionRetryCount: 3,
        execArgv: [],
        runnerEnv: {},
        runner: 'local',
        mochaOpts: {
            timeout: 10000,
        },
        cucumberOpts: {
            timeout: 60000,
            backtrace: false,
            colors: true,
            snippets: true,
            source: true,
            tagExpression: 'not @wip and not @ignore',
            failAmbiguousDefinitions: false,
            ignoreUndefinedDefinitions: false
        },
        onPrepare: [],
        before: [],
        beforeSession: [],
        beforeSuite: [],
        beforeHook: [],
        beforeTest: [],
        beforeCommand: [],
        afterCommand: [],
        afterTest: [],
        afterHook: [],
        afterSuite: [],
        afterSession: [],
        after: [],
        onComplete: [],
        onReload: [],
        services: [],
        capabilities: {},
        jsonFolder: '',
        language: 'en',
        cjson_metadata: {
            app: {
                name: 'test',
                version: '1'
            }
        },
        logFile: '',
        stdout: true,
        writeStream: {},
    },
    specs: ['/Users/wswebcreation/Sauce/Git/webdriverio-cucumberjs/__tests__/features/passed.feature'],
    sessionId: 'b2e560a6ed31a6551fa3509109b71f14',
    isMultiremote: false,
    retry: 0,
    duration: 0,
    complete: () => {
    },
    instanceOptions: {}
};
exports.WDIO6_RUNNER_STATS = {
    type: 'runner',
    start: new Date('2020-04-27T13:24:19.166Z'),
    _duration: 0,
    cid: '0-0',
    capabilities: {
        acceptInsecureCerts: false,
        browserName: 'chrome',
        browserVersion: '81.0.4044.122',
        chromedriverVersion: '2.46.628411 (3324f4c8be9ff2f70a05a30ebc72ffb013e1a71e)',
        chromeOptions: {
            args: ['user-data-dir=/var/folders/rb/_hbqv7fn5114b206t2s05fs40000gn/T/.org.chromium.Chromium.uwkY0A'],
        },
        'goog:chromeOptions': { debuggerAddress: 'localhost:56189' },
        pageLoadStrategy: 'normal',
        platformName: 'mac os x',
        proxy: {},
        setWindowRect: true,
        strictFileInteractability: false,
        timeouts: { implicit: 0, pageLoad: 300000, script: 30000 },
        unhandledPromptBehavior: 'dismiss and notify',
        'webdriver.remote.sessionid': '27e5b2b068aa1612e60d90a9e5164a7d',
    },
    sanitizedCapabilities: 'chrome.81_0_4044_122.macosx',
    config: {
        jsonFolder: '',
        language: 'en',
        cjson_metadata: {},
        logFile: '',
        stdout: true,
        writeStream: {},
        capabilities: {}
    },
    specs: ['/Users/wimselles/Git/cucumberjs-json-demo/google.feature'],
    sessionId: '27e5b2b068aa1612e60d90a9e5164a7d',
    isMultiremote: false,
    retry: 0,
    duration: 0,
    complete: () => {
    },
    instanceOptions: {},
};
exports.CAPS_METADATA_RUNNER_STATS = {
    type: 'runner',
    start: new Date('2020-04-27T13:24:19.166Z'),
    _duration: 0,
    cid: '0-0',
    capabilities: {},
    sanitizedCapabilities: 'chrome.81_0_4044_122.macosx',
    config: {
        capabilities: {
            browserName: 'chrome',
            'cjson:metadata': {
                device: 'Test Device',
                browser: {
                    name: 'safari',
                    version: '14.1',
                },
                platform: {
                    name: 'ios',
                    version: '14',
                }
            }
        }
    },
    specs: ['/Users/wimselles/Git/cucumberjs-json-demo/google.feature'],
    sessionId: '27e5b2b068aa1612e60d90a9e5164a7d',
    isMultiremote: false,
    retry: 0,
    duration: 0,
    complete: () => {
    },
    instanceOptions: {},
};
exports.SUITE_FEATURE_STATS = {
    type: 'feature',
    start: new Date('2019-07-15T14:40:50.761Z'),
    uid: 'Create passed feature2',
    cid: '0-0',
    title: 'Create passed feature',
    fullTitle: undefined,
    tests: [],
    hooks: [],
    suites: [],
    duration: 0,
    _duration: 0,
    hooksAndTests: [],
    complete: () => {
    },
    file: '',
    parent: undefined,
    description: '',
};
exports.SUITE_FEATURE_UID = {
    type: 'feature',
    start: new Date('2019-07-15T14:40:50.761Z'),
    _duration: 0,
    uid: '',
    cid: '0-0',
    title: 'Create passed feature',
    fullTitle: undefined,
    tests: [],
    hooks: [],
    suites: [],
    hooksAndTests: [],
    complete: () => {
    },
    file: '',
    duration: 0,
    parent: undefined,
    description: '',
};
exports.SUITE_SCENARIO_STATS = {
    type: 'scenario',
    start: new Date('2019-07-15T14:40:50.761Z'),
    uid: 'Open website2',
    cid: '0-0',
    title: 'Open website',
    fullTitle: undefined,
    tests: [],
    hooks: [],
    suites: [],
    duration: 0,
    _duration: 0,
    hooksAndTests: [],
    complete: () => {
    },
    file: '',
    parent: 'sample.feature:2:1',
    description: '',
};
const test = {
    type: 'test:start',
    title: '',
    parent: '',
    fullTitle: '',
    pending: false,
    cid: '',
    specs: [],
    uid: '',
};
const STEP_TEST_ONSTART_STATS_Initial = new wdio_1.TestStatsExtended(test);
STEP_TEST_ONSTART_STATS_Initial.id = "create-passed-feature;hook-this-is-doing-nothing-because-it's-a-background\"";
STEP_TEST_ONSTART_STATS_Initial.keyword = 'Given';
STEP_TEST_ONSTART_STATS_Initial.uid = 'I open "http://webdriver.io/"6';
STEP_TEST_ONSTART_STATS_Initial.title = 'Given I open "http://webdriver.io/"';
STEP_TEST_ONSTART_STATS_Initial.name = 'I open "http://webdriver.io/"6';
exports.STEP_TEST_ONSTART_STATS = STEP_TEST_ONSTART_STATS_Initial;
const STEP_TEST_ONSTART_ARGUMENT_STATS_Initial = new wdio_1.TestStatsExtended(test);
STEP_TEST_ONSTART_ARGUMENT_STATS_Initial.argument = {
    'rows': [
        {
            'cells': [
                'Cucumber',
                'Cucumis sativus'
            ]
        },
        {
            'cells': [
                'Burr Gherkin',
                'Cucumis anguria'
            ]
        }
    ]
};
STEP_TEST_ONSTART_ARGUMENT_STATS_Initial.keyword = 'Given';
STEP_TEST_ONSTART_ARGUMENT_STATS_Initial.uid = 'I open "http://webdriver.io/"6';
STEP_TEST_ONSTART_ARGUMENT_STATS_Initial.title = 'Given I open "http://webdriver.io/"';
STEP_TEST_ONSTART_ARGUMENT_STATS_Initial.name = 'Given I open "http://webdriver.io/"';
exports.STEP_TEST_ONSTART_ARGUMENT_STATS = STEP_TEST_ONSTART_ARGUMENT_STATS_Initial;
exports.STEP_HOOK_ONSTART_STATS = {
    'type': 'hook',
    'start': new Date('2019-07-19T21:15:01.172Z'),
    '_duration': 0,
    'uid': 'all.steps.js43',
    'cid': '0-0',
    'title': 'Hook',
    'parent': 'Create failed feature: Open website',
    'keyword': '',
    duration: 0,
    complete: () => {
    }
};
test.title = "Hook This is doing nothing because it's a background\"";
exports.TEST_SCENARIO_STATS = new reporter_1.TestStats(test);
const TEST_NO_KEYWORD_STATS_Initial = new reporter_1.TestStats(test);
TEST_NO_KEYWORD_STATS_Initial.uid = '13';
TEST_NO_KEYWORD_STATS_Initial.title = 'I load the Swag Labs demo website';
TEST_NO_KEYWORD_STATS_Initial.state = 'passed';
TEST_NO_KEYWORD_STATS_Initial._duration = 555;
exports.TEST_NO_KEYWORD_STATS = TEST_NO_KEYWORD_STATS_Initial;
const TEST_SCENARIO_STATS_ERROR_Initial = new reporter_1.TestStats(test);
TEST_SCENARIO_STATS_ERROR_Initial.state = 'failed';
TEST_SCENARIO_STATS_ERROR_Initial.errors = [{
        name: 'Error',
        message: '\u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoEqual\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // deep equality\u001b[22m\n\nExpected: \u001b[32m"bar"\u001b[39m\nReceived: \u001b[31m"foo"\u001b[39m',
        stack: 'Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoEqual\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // deep equality\u001b[22m\n\nExpected: \u001b[32m"bar"\u001b[39m\nReceived: \u001b[31m"foo"\u001b[39m\n    at World.<anonymous> (/Users/wimselles/Git/cucumberjs-json-demo/steps.js:17:19)'
    }];
TEST_SCENARIO_STATS_ERROR_Initial.error = {
    name: 'Error',
    message: '\u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoEqual\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // deep equality\u001b[22m\n\nExpected: \u001b[32m"bar"\u001b[39m\nReceived: \u001b[31m"foo"\u001b[39m',
    stack: 'Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoEqual\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // deep equality\u001b[22m\n\nExpected: \u001b[32m"bar"\u001b[39m\nReceived: \u001b[31m"foo"\u001b[39m\n    at World.<anonymous> (/Users/wimselles/Git/cucumberjs-json-demo/steps.js:17:19)'
};
exports.TEST_SCENARIO_STATS_ERROR = TEST_SCENARIO_STATS_ERROR_Initial;
test.title = '';
const TEST_EMPTY_STATS_Initial = new reporter_1.TestStats(test);
TEST_EMPTY_STATS_Initial.title = '';
exports.TEST_EMPTY_STATS = TEST_EMPTY_STATS_Initial;
//# sourceMappingURL=mocks.js.map