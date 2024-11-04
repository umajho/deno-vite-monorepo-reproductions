/* @refresh reload */
import { render } from "solid-js/web";

import { Counter } from "@scope/counter";

render(() => <Counter />, document.getElementById("root") as HTMLElement);
