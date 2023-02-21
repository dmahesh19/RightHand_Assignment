import { ErrorMessage, Step } from './models';
import { HookStats, TestStats } from '@wdio/reporter';
export default class Utils {
    getStepKeywords(language: string): string[];
    getFailedMessage(testObject: TestStats | HookStats): ErrorMessage;
    containsSteps(steps: Step[], language: string): boolean;
    keywordStartsWith(title: string, language: string): string | undefined;
}
