/** @license Apache-2.0
 *
 * Copyright 2024 8 Hobbies, LLC <hong@8hobbies.com>
 *
 * Licensed under the Apache License, Version 2.0(the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Application, JSX, ParameterType } from "typedoc";

const optionName = "extraFooter" as const;

/** @ignore */
export function load(application: Application): void {
  application.options.addDeclaration({
    name: optionName,
    type: ParameterType.String,
    help: "Extra footer in the generated doc. Can be HTML.",
  });
  application.renderer.hooks.on("footer.end", (ctx) => {
    const extraFooter = ctx.options.getValue(optionName);
    if (typeof extraFooter !== "string") {
      throw TypeError(
        `Unexpected ${optionName} type: ${JSON.stringify(extraFooter)}`,
      );
    }
    if (extraFooter === "") {
      // Do nothing.
      return JSX.createElement(JSX.Fragment, {});
    }

    return JSX.createElement(
      "p",
      {
        class: "tsd-generator extra-footer",
      },
      JSX.createElement(JSX.Raw, { html: extraFooter }),
    );
  });
}
