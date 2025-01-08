# SQL it!: String Formatter VS Code Extension

This VS Code extension provides a command to format selected text into a string array. The selected text is transformed by adding single quotes around each line, removing leading/trailing spaces, and inlining the result with commas.

## Features

- **Format Selected Text**: Turn selected lines into a comma-separated list of quoted strings.
- **Trim Whitespace**: Automatically trims leading and trailing spaces from each line.
- **Remove Empty Lines**: Filters out any empty lines before formatting.
  
## Installation

1. Open VS Code.
2. Go to the Extensions view by clicking the Extensions icon in the Activity Bar on the side of the window.
3. Search for "String Formatter" and click Install.
4. Alternatively, download and install the `.vsix` file manually.

## Usage

1. Select the text you want to format in your active editor.
2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac) to open the Command Palette.
3. Search for `String Formatter: Format Strings` and select it.

The selected text will be formatted as follows:

### Example

Test
Test
Test
Test
Test

-> SQL it!

'Test','Test','Test','Test','Test'

## Extension Settings

This extension does not have any configurable settings at the moment.
