"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const gherkin_1 = require("@cucumber/gherkin");
const strip_ansi_1 = __importDefault(require("strip-ansi"));
class Utils {
    getStepKeywords(language) {
        const dialect = gherkin_1.dialects[language];
        return []
            .concat(dialect.given, dialect.when, dialect.then, dialect.and)
            .map(keyword => keyword.replace(/\s*$/, ''));
    }
    getFailedMessage(testObject) {
        if (testObject.state === constants_1.FAILED) {
            return {
                error_message: (0, strip_ansi_1.default)(testObject.error.stack),
            };
        }
        return {};
    }
    containsSteps(steps, language) {
        const stepKeywords = this.getStepKeywords(language);
        return steps.some(step => stepKeywords.includes(step.keyword));
    }
    keywordStartsWith(title, language) {
        const stepKeywords = [].concat(this.getStepKeywords(language), ['After', 'Before']);
        const escapedStepKeywords = stepKeywords.map((keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        const regex = new RegExp(`^(${escapedStepKeywords.join('|')})\\s`);
        return (regex.exec(title) || []).pop();
    }
}
exports.default = Utils;
//# sourceMappingURL=utils.js.map