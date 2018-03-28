"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdopx_1 = require("sdopx");
const sfn_1 = require("sfn");
class SdopxEngine extends sfn_1.TemplateEngine {
    constructor(options = {}) {
        super(options);
        this.options.force_compile = !this.options.cache;
    }
    renderFile(filename, vars = {}) {
        return new Promise((resolve, reject) => {
            try {
                let opx = new sdopx_1.Sdopx();
                for (let x in this.options) {
                    opx[x] = this.options[x];
                }
                for (let key in vars) {
                    opx.assign(key, vars[key]);
                }
                resolve(opx.display("file:" + filename));
            }
            catch (err) {
                reject(err);
            }
        });
    }
}
exports.SdopxEngine = SdopxEngine;
//# sourceMappingURL=index.js.map