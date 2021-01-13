const path = require('path');

const BASENAMES_PRECEDENCE = [
    /^LICENSE$/,
    /^LICENSE[\-_]\w+$/, // e.g. LICENSE-MIT
    /^MIT-LICENSE$/,
    /^LICENCE$/,
    /^LICENCE[\-_]\w+$/, // e.g. LICENCE-MIT
    /^COPYING$/,
    /^README$/,
];

// Find and list license files in the precedence order
module.exports = function (dirFiles) {
    const files = [];

    BASENAMES_PRECEDENCE.forEach((basenamePattern) => {
        dirFiles.some((filename) => {
            const basename = path.basename(filename, path.extname(filename)).toUpperCase();

            if (basenamePattern.test(basename)) {
                files.push(filename);
                return true;
            }

            return false;
        });
    });

    return files;
};
