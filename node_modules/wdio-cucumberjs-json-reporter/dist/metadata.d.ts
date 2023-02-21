import { AppData, BrowserData, MetadataObject, cjson_metadata } from './models';
import { DesiredCapabilitiesExtended, RunnerStatsExtended } from './types/wdio';
export declare class Metadata {
    determineMetadata(data: RunnerStatsExtended): MetadataObject;
    determineDeviceName(metadata: cjson_metadata, currentConfigCapabilities: WebDriver.DesiredCapabilities): string;
    determinePlatformName(metadata: cjson_metadata, currentCapabilities: WebDriver.DesiredCapabilities): string;
    determinePlatformVersion(metadata: cjson_metadata, currentCapabilities?: WebDriver.DesiredCapabilities): string;
    determineAppData(currentConfigCapabilities: DesiredCapabilitiesExtended, metadata: cjson_metadata): AppData;
    determineBrowserData(currentCapabilities: WebDriver.DesiredCapabilities, currentConfigCapabilities: WebDriver.DesiredCapabilities, metadata: cjson_metadata): BrowserData;
}
