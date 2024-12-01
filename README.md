# typedoc-plugin-extra-footer: Add Extra Footer to TypeDoc-Generated Docs

[![npm version](https://badge.fury.io/js/typedoc-plugin-extra-footer.svg)](https://badge.fury.io/js/typedoc-plugin-extra-footer)
[![Pipeline](https://github.com/8hobbies/typedoc-plugin-extra-footer/actions/workflows/runtime.yml/badge.svg)](https://github.com/8hobbies/typedoc-plugin-extra-footer/actions/workflows/runtime.yml)

[GitHub](https://github.com/8hobbies/typedoc-plugin-extra-footer) | [GitLab](https://gitlab.com/8hobbies/typedoc-plugin-extra-footer)

_Since TypeDoc v0.26.0, it is advisable to use the builtin [customFooterHtml][] and
[customFooterHtmlDisableWrapper][] options instead. Therefore, this plugin will not support TypeDoc
0.26.0+. Also check out
[this page](https://forum.8hob.io/t/how-do-i-add-a-copyright-footer-to-a-typedoc-generated-doc/35)
if you need help adding a copyright footer._

**The last version 1.0.4 of this plugin was released on Dec 1, 2024, shortly after the release of
TypeDoc 0.27. No further updates will be provided. Please update to TypeDoc v0.26+ and use the
builtin features provided by TypeDoc as noted above.**

This plugin adds extra content to the footer to HTML files generated by [TypeDoc][]. This is
typically suitable for content such as [information about the author of the section, copyright data
or links to related documents][MDN footer doc].

## Install

```
npm install --save-dev typedoc-plugin-extra-footer
```

## Usage

Pass `--plugin typedoc-plugin-extra-footer` when invoking the `typedoc` command:

```
typedoc --plugin typedoc-plugin-extra-footer
```

Or add the plugin to your typedoc.json file:

```
// typedoc.json
{
  "plugin": ["typedoc-plugin-extra-footer"]
}
```

## Configuration

This plugin recognizes an `extraFooter` option in your `typedoc.json`. You can specify the content
of the extra footer there (can be HTML):

```json
{
  "extraFooter": "My Extra Footer"
}
```

This can be a copyright footer:

```json
{
  "extraFooter": "&copy; [year] <a href=\"https://example.com/\">My Name</a>"
}
```

By default, the extra footer is wrapped by `<p class="tsd-generator extra-footer"></p>`. If you
prefer to have full control of the footer without the wrapper, you can specify

```json
{
  "extraFooterNoDefaultWrapper": true,
  "hideGenerator": true
}
```

In this case, setting [`hideGenerator`][] is recommended but not mandatory.

## Live Example

[The document of this plugin](https://typedoc-extra-footer.8hob.io) itself is a live example.
Check out the footer on the page.

## Contributing

Source code is available on [GitHub][].

To report a bug, visit the [issue tracker][].

To run test, run `npm run test-all`. To display test coverage, run `npm run coverage`. To build for
production, run `npm pack`. To build the documentation, run `npm run doc`.

To send your contribution, open a [pull request][].

## License

```text
Copyright 2024 8 Hobbies, LLC <hong@8hobbies.com>

Licensed under the Apache License, Version 2.0(the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[`hideGenerator`]: https://typedoc.org/options/output/#hidegenerator
[GitHub]: https://github.com/8hobbies/typedoc-plugin-extra-footer
[MDN footer doc]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer
[TypeDoc]: https://typedoc.org/
[issue tracker]: https://github.com/8hobbies/typedoc-plugin-extra-footer/issues
[pull request]: https://github.com/8hobbies/typedoc-plugin-extra-footer/pulls
[customFooterHtml]: https://typedoc.org/options/output/#customfooterhtml
[customFooterHtmlDisableWrapper]: https://typedoc.org/options/output/#customfooterhtmldisablewrapper
