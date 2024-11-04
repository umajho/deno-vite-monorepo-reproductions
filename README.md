## 1

Based on [@cam-mcevenue]'s Reproduction with SvelteKit for [#26138].

[@cam-mcevenue]: https://github.com/cam-mcevenue
[#26138]: https://github.com/denoland/deno/issues/26138

```sh
git submodule update --init
cd 1
docker build -t deno-vite-monorepo-reproduction-1 .
docker run --rm -it -p 127.0.0.1:5173:5173 deno-vite-monorepo-reproduction-1
```

And then visit `localhost:5173`.

### CLI error message

```
Error: The following dependencies are imported but could not be resolved:

  @scope/foo (imported by /run/deno-monorepo-repro/apps/web/src/routes/+page.ts)

Are they installed?
    at file:///run/deno-monorepo-repro/node_modules/.deno/vite@5.4.8/node_modules/vite/dist/node/chunks/dep-CDnG8rE7.js:50604:15
    at eventLoopTick (ext:core/01_core.js:175:7)
    at async file:///run/deno-monorepo-repro/node_modules/.deno/vite@5.4.8/node_modules/vite/dist/node/chunks/dep-CDnG8rE7.js:50109:26
```

### Website message

```
Cannot find module '@scope/foo' imported from '/run/deno-monorepo-repro/apps/web/src/routes/+page.ts'
Error: Cannot find module '@scope/foo' imported from '/run/deno-monorepo-repro/apps/web/src/routes/+page.ts'
    at nodeImport (file:///run/deno-monorepo-repro/node_modules/.deno/vite@5.4.8/node_modules/vite/dist/node/chunks/dep-CDnG8rE7.js:52990:19)
    at ssrImport (file:///run/deno-monorepo-repro/node_modules/.deno/vite@5.4.8/node_modules/vite/dist/node/chunks/dep-CDnG8rE7.js:52857:22)
    at eval (/run/deno-monorepo-repro/apps/web/src/routes/+page.ts, <anonymous>:3:50)
    at instantiateModule (file:///run/deno-monorepo-repro/node_modules/.deno/vite@5.4.8/node_modules/vite/dist/node/chunks/dep-CDnG8rE7.js:52915:11
```

## 2

My own reproduction with SolidJS.

```sh
cd 2
docker build -t deno-vite-monorepo-reproduction-2 .
docker run --rm -it -p 127.0.0.1:5173:5173 deno-vite-monorepo-reproduction-2
```

And then visit `localhost:5173`.

### CLI error message

```
Error: The following dependencies are imported but could not be resolved:

  @scope/counter (imported by /run/workspace/website/src/App.tsx)

Are they installed?
    at file:///run/workspace/node_modules/.deno/vite@5.4.10/node_modules/vite/dist/node/chunks/dep-BWSbWtLw.js:50666:15
    at eventLoopTick (ext:core/01_core.js:175:7)
    at async file:///run/workspace/node_modules/.deno/vite@5.4.10/node_modules/vite/dist/node/chunks/dep-BWSbWtLw.js:50171:26
```

### Website message

```
[plugin:vite:import-analysis] Failed to resolve import "@scope/counter" from "src/App.tsx". Does the file exist?
/run/workspace/website/src/App.tsx:5:24
18 |  import "./App.css";
19 |  import solidLogo from "./assets/solid.svg";
20 |  import { Counter } from "@scope/counter";
   |                           ^
21 |  export default App;
22 |  if (import.meta.hot) {
    at TransformPluginContext._formatError (/run/workspace/node_modules/.deno/vite@5.4.10/node_modules/vite/dist/node/chunks/dep-BWSbWtLw.js:49255:41)
    at TransformPluginContext.error (/run/workspace/node_modules/.deno/vite@5.4.10/node_modules/vite/dist/node/chunks/dep-BWSbWtLw.js:49250:16)
    at normalizeUrl (/run/workspace/node_modules/.deno/vite@5.4.10/node_modules/vite/dist/node/chunks/dep-BWSbWtLw.js:64041:23)
    at Object.runMicrotasks (ext:core/01_core.js:672:26)
    at processTicksAndRejections (ext:deno_node/_next_tick.ts:59:10)
    at runNextTicks (ext:deno_node/_next_tick.ts:76:3)
    at eventLoopTick (ext:core/01_core.js:182:21)
    at async /run/workspace/node_modules/.deno/vite@5.4.10/node_modules/vite/dist/node/chunks/dep-BWSbWtLw.js:64173:39
    at undefined
    at async TransformPluginContext.transform (/run/workspace/node_modules/.deno/vite@5.4.10/node_modules/vite/dist/node/chunks/dep-BWSbWtLw.js:64100:7)
    at async PluginContainer.transform (/run/workspace/node_modules/.deno/vite@5.4.10/node_modules/vite/dist/node/chunks/dep-BWSbWtLw.js:49096:18)
    at async loadAndTransform (/run/workspace/node_modules/.deno/vite@5.4.10/node_modules/vite/dist/node/chunks/dep-BWSbWtLw.js:51929:27
```
