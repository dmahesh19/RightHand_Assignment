"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileExists = void 0;
const fs_extra_1 = require("fs-extra");
const fileExists = (filePath) => {
    try {
        (0, fs_extra_1.accessSync)(filePath);
        return true;
    }
    catch (err) {
        return false;
    }
};
exports.fileExists = fileExists;
//# sourceMappingURL=fileExists.js.map