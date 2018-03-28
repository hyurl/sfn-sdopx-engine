import { Sdopx } from "sdopx";
import { TemplateEngine, TemplateOptions } from "sfn";

export interface SdopxOptions extends TemplateOptions {
    /** default: `{`. */
    left_delimiter?: string;
    /** default: `}`. */
    right_delimiter?: string;
    /** The opposite to `cache`. */
    force_compile?: boolean;
    /** Watch the file and recompile when it's been modified. */
    compile_check?: boolean;
}

export class SdopxEngine extends TemplateEngine {
    options: SdopxOptions;

    constructor(options: SdopxOptions = {}) {
        super(options);
        this.options.force_compile = !this.options.cache;
    }

    renderFile(filename: string, vars: { [name: string]: any } = {}): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                let opx = new Sdopx();

                for (let x in this.options) {
                    opx[x] = this.options[x];
                }

                for (let key in vars) {
                    opx.assign(key, vars[key]);
                }

                resolve(opx.display("file:" + filename));
            } catch (err) {
                reject(err);
            }
        });
    }
}