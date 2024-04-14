# typedoc-plugin-extra-footer: Add Extra Footer to TypeDoc-Generated Docs

[![npm version](https://badge.fury.io/js/typedoc-plugin-extra-footer.svg)](https://badge.fury.io/js/typedoc-plugin-extra-footer)

[GitHub](https://github.com/8hobbies/typedoc-plugin-extra-footer) | [GitLab](https://gitlab.com/8hobbies/typedoc-plugin-extra-footer)

This plugin adds an extra footer to HTML files generated by [TypeDoc][].

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
  "extraFooter": "&copy; [year] <a href=\"https://example.com/\">My Name</a>"
}
```

By default, the extra footer is wrapped by `<p class="tsd-generator extra-footer"></p>`.

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

[GitHub]: https://github.com/8hobbies/typedoc-plugin-extra-footer
[TypeDoc]: https://typedoc.org/
[issue tracker]: https://github.com/8hobbies/typedoc-plugin-extra-header/issues
[pull request]: https://github.com/8hobbies/typedoc-plugin-extra-header/pulls
