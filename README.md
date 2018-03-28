# Sfn-Sdopx-Engine

**Sdopx template engine for [sfn](https://github.com/hyurl/sfn) framework.**

For more information about Sdopx, please visit 
[www.sdopx.com](http://www.sdopx.com/).

## Install

```sh
npm i sfn-sdopx-engine
```

## Example

```typescript
import { HttpController, route } from "sfn";
import { SdopxEngine } from "sfn-sdopx-engine";

var engine = new SdopxEngine();

export default class extends HttpController {
    engine: SdopxEngine = engine;

    @route.get("/sdopx-test")
    index() {
        return this.view("sdopx-test.opx");
    }
}
```

## API

### `new SdopxEngine(options?: SdopxOptions)`

Interface `NunjucksOptions` includes:

- `left_delimiter: string` default: `{`.
- `right_delimiter: string` default: `}`.
- `force_compile: boolean` The opposite to `cache`.
- `compile_check: boolean` Watch the file and recompile when it's been 
    modified.