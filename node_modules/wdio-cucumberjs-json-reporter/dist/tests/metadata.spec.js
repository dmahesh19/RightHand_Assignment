"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mocks_1 = require("./__mocks__/mocks");
const metadata_1 = require("../metadata");
const constants_1 = require("../constants");
describe('metadata', () => {
    let metadataClassObject;
    beforeAll(() => {
        metadataClassObject = new metadata_1.Metadata();
    });
    describe('determineAppData', () => {
        it('should return that no app metadata could be determined', () => {
            expect(metadataClassObject.determineAppData({}, {})).toMatchSnapshot();
        });
        it('should return that the app name and version based on the metadata', () => {
            expect(metadataClassObject.determineAppData({}, {
                app: {
                    name: 'metadata app name',
                    version: 'metadata version 1.2.3',
                },
            })).toMatchSnapshot();
        });
        it('should return that the app name based on the config.app', () => {
            expect(metadataClassObject.determineAppData({
                app: 'here/there/app.apk',
            }, {})).toMatchSnapshot();
        });
    });
    describe('determineBrowserData', () => {
        it('should return that no browser metadata could be determined', () => {
            expect(metadataClassObject.determineBrowserData({}, {}, {})).toMatchSnapshot();
        });
        it('should return that the browser name and version based on the metadata', () => {
            expect(metadataClassObject.determineBrowserData({}, {}, {
                browser: {
                    name: 'metadata browser name',
                    version: 'metadata version 1.2.3',
                },
            })).toMatchSnapshot();
        });
        it('should return that the browser name and version based on the capabilities when version is used', () => {
            expect(metadataClassObject.determineBrowserData({
                browserName: 'capabilities browser name',
                version: 'capabilities version',
            }, {}, {})).toMatchSnapshot();
        });
        it('should return that the browser name and version based on the capabilities when browserVersion is used', () => {
            expect(metadataClassObject.determineBrowserData({
                browserName: 'capabilities browser name',
                browserVersion: 'capabilities browserVersion',
            }, {}, {})).toMatchSnapshot();
        });
        it('should return that the browser name and version based on the configCapabilities', () => {
            expect(metadataClassObject.determineBrowserData({}, {
                browserName: 'configCapabilities browser name',
                browserVersion: 'configCapabilities browser version',
            }, {})).toMatchSnapshot();
        });
    });
    describe('determineDeviceName', () => {
        it('should be able to return the device metadata based on the metadata.device', () => {
            expect(metadataClassObject.determineDeviceName({ device: 'metadata.device' }, {})).toMatchSnapshot();
        });
        it('should be able to return the device metadata based on the current.config.capabilities.deviceName', () => {
            expect(metadataClassObject.determineDeviceName({}, { deviceName: 'current.config.capabilities.deviceName' })).toMatchSnapshot();
        });
        it('should be able to return the not known deviceName', () => {
            expect(metadataClassObject.determineDeviceName({}, {})).toMatchSnapshot();
        });
    });
    describe('determinePlatformName', () => {
        it('should be able to return the platform name based on the metadata.platform', () => {
            expect(metadataClassObject.determinePlatformName({
                platform: {
                    name: 'platform.name',
                },
            }, {})).toMatchSnapshot();
        });
        it('should be able to return the platform name based on the currentCapabilities.platformName', () => {
            expect(metadataClassObject.determinePlatformName({}, { platformName: 'currentCapabilities.platformName' })).toMatchSnapshot();
        });
        it('should be able to return the platform name based on the currentCapabilities.platformName for mac properly', () => {
            expect(metadataClassObject.determinePlatformName({}, { platformName: 'mac' })).toMatchSnapshot();
        });
        it('should be able to return the platform name based on the currentCapabilities.platformName for windows properly', () => {
            expect(metadataClassObject.determinePlatformName({}, { platformName: 'windows nt' })).toMatchSnapshot();
        });
        it('should be able to return the not known platform name', () => {
            expect(metadataClassObject.determinePlatformName({}, {})).toMatchSnapshot();
        });
    });
    describe('determinePlatformVersion', () => {
        it('should be able to return the platform version based on the metadata.platform', () => {
            expect(metadataClassObject.determinePlatformVersion({
                platform: {
                    version: 'platform.version',
                },
            })).toMatchSnapshot();
        });
        it('should be able to return the platform version based on the metadata.platform from desired capabilities', () => {
            expect(metadataClassObject.determinePlatformVersion({
                platform: {
                    version: undefined,
                },
            }, { platformVersion: '10.1' })).toMatchSnapshot();
        });
        it('should be able to return the not known platform version', () => {
            expect(metadataClassObject.determinePlatformVersion({})).toMatchSnapshot();
        });
    });
    describe('determineMetadata', () => {
        let determineAppDataSpy;
        let determineBrowserDataSpy;
        let determineDeviceNameSpy;
        let determinePlatformNameSpy;
        let determinePlatformVersionSpy;
        const appMockData = {
            app: {
                name: 'mock-appName',
                version: 'mock-appVersion',
            },
        };
        const browserMockData = {
            browser: {
                name: 'mock-browserName',
                version: 'mock-browserVersion',
            },
        };
        beforeEach(() => {
            delete global.browser;
            global.browser = {
                options: {
                    requestedCapabilities: {
                        w3cCaps: {
                            alwaysMatch: {
                                foo: true,
                            }
                        }
                    },
                },
            };
            determineAppDataSpy = jest.spyOn(metadataClassObject, 'determineAppData');
            determineBrowserDataSpy = jest.spyOn(metadataClassObject, 'determineBrowserData').mockReturnValue(browserMockData);
            determineDeviceNameSpy = jest.spyOn(metadataClassObject, 'determineDeviceName').mockReturnValue(constants_1.NOT_KNOWN);
            determinePlatformNameSpy = jest.spyOn(metadataClassObject, 'determinePlatformName').mockReturnValue(constants_1.NOT_KNOWN);
            determinePlatformVersionSpy = jest.spyOn(metadataClassObject, 'determinePlatformVersion').mockReturnValue(constants_1.NOT_KNOWN);
        });
        afterEach(() => {
            jest.clearAllMocks();
            delete global.browser;
        });
        it('should return app metadata based on the currentCapabilities.app', () => {
            mocks_1.FULL_RUNNER_STATS.capabilities.app = 'current.config.capabilities.app';
            determineAppDataSpy = jest.spyOn(metadataClassObject, 'determineAppData').mockReturnValue(appMockData);
            expect(metadataClassObject.determineMetadata(mocks_1.FULL_RUNNER_STATS)).toMatchSnapshot();
            expect(determineAppDataSpy).toHaveBeenCalledTimes(1);
            expect(determineDeviceNameSpy).toHaveBeenCalledTimes(1);
            expect(determinePlatformNameSpy).toHaveBeenCalledTimes(1);
            expect(determinePlatformVersionSpy).toHaveBeenCalledTimes(1);
            delete mocks_1.FULL_RUNNER_STATS.capabilities.app;
            determineAppDataSpy.mockClear();
        });
        it('should return app metadata based on the current.config.capabilities[\'cjson:metadata\'].app', () => {
            mocks_1.FULL_RUNNER_STATS.capabilities.cjson_metadata.app = {
                'name': 'mock-appName',
                'version': 'mock-appVersion',
            };
            determineAppDataSpy = jest.spyOn(metadataClassObject, 'determineAppData').mockReturnValue(appMockData);
            expect(metadataClassObject.determineMetadata(mocks_1.FULL_RUNNER_STATS)).toMatchSnapshot();
            expect(determineAppDataSpy).toHaveBeenCalledTimes(1);
            expect(determineDeviceNameSpy).toHaveBeenCalledTimes(1);
            expect(determinePlatformNameSpy).toHaveBeenCalledTimes(1);
            expect(determinePlatformVersionSpy).toHaveBeenCalledTimes(1);
            delete mocks_1.FULL_RUNNER_STATS.capabilities.cjson_metadata.app;
            determineAppDataSpy.mockClear();
        });
        it('should return metadata based on the data.config.capabilities["cjson:metadata"]', () => {
            global.browser = {
                options: {
                    capabilities: {},
                },
            };
            determineAppDataSpy = jest.spyOn(metadataClassObject, 'determineBrowserData').mockReturnValue(browserMockData);
            expect(metadataClassObject.determineMetadata(mocks_1.CAPS_METADATA_RUNNER_STATS)).toMatchSnapshot();
            determineAppDataSpy.mockClear();
        });
        it('should return metadata based on the requestedCapabilities.w3cCaps.alwaysMatch', () => {
            global.browser = {
                options: {
                    capabilities: {},
                    requestedCapabilities: {
                        w3cCaps: {
                            alwaysMatch: {
                                'cjson_metadata': {},
                            },
                        },
                    },
                },
            };
            determineAppDataSpy = jest.spyOn(metadataClassObject, 'determineBrowserData').mockReturnValue(browserMockData);
            expect(metadataClassObject.determineMetadata(mocks_1.WDIO6_RUNNER_STATS)).toMatchSnapshot();
            determineAppDataSpy.mockClear();
        });
        it('should return metadata based on the browser.options.capabilities if w3cCaps is empty', () => {
            global.browser = {
                options: {
                    requestedCapabilities: {
                        w3cCaps: {}
                    },
                    capabilities: {
                        browserName: 'chrome',
                        'cjson_metadata': {},
                    }
                },
            };
            determineAppDataSpy = jest.spyOn(metadataClassObject, 'determineBrowserData').mockReturnValue(browserMockData);
            expect(metadataClassObject.determineMetadata(mocks_1.WDIO6_RUNNER_STATS)).toMatchSnapshot();
            determineAppDataSpy.mockClear();
        });
        it('should return metadata based on the browser.options.capabilities', () => {
            global.browser = {
                options: {
                    capabilities: {
                        browserName: 'chrome',
                        'cjson_metadata': {},
                    },
                },
            };
            determineAppDataSpy = jest.spyOn(metadataClassObject, 'determineBrowserData').mockReturnValue(browserMockData);
            expect(metadataClassObject.determineMetadata(mocks_1.WDIO6_RUNNER_STATS)).toMatchSnapshot();
            determineAppDataSpy.mockClear();
        });
        it('should call determineBrowserData when there is no way to  determine the app data', () => {
            metadataClassObject.determineMetadata(mocks_1.SMALL_RUNNER_STATS);
            expect(determineAppDataSpy).toHaveBeenCalledTimes(0);
            expect(determineBrowserDataSpy).toHaveBeenCalledTimes(1);
            expect(determineDeviceNameSpy).toHaveBeenCalledTimes(1);
            expect(determinePlatformNameSpy).toHaveBeenCalledTimes(1);
            expect(determinePlatformVersionSpy).toHaveBeenCalledTimes(1);
        });
        it('should be able to return browser metadata', () => {
            expect(metadataClassObject.determineMetadata(mocks_1.SMALL_RUNNER_STATS)).toMatchSnapshot();
            expect(determineBrowserDataSpy).toHaveBeenCalledTimes(1);
            expect(determineDeviceNameSpy).toHaveBeenCalledTimes(1);
            expect(determinePlatformNameSpy).toHaveBeenCalledTimes(1);
            expect(determinePlatformVersionSpy).toHaveBeenCalledTimes(1);
        });
    });
});
//# sourceMappingURL=metadata.spec.js.map