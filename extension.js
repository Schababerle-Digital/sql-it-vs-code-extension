// Importiere notwendige Module
const vscode = require('vscode');

/**
 * Aktiviert die Extension.
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    // Registriert den Befehl
    let disposable = vscode.commands.registerCommand('sql-it.formatStrings', function () {
        const editor = vscode.window.activeTextEditor;

        if (!editor) {
            vscode.window.showErrorMessage('Kein aktiver Editor gefunden!');
            return;
        }

        const document = editor.document;
        const selection = editor.selection;

        // Hole den ausgewählten Text
        const text = document.getText(selection);

        // Teile den Text in Zeilen auf, füge Anführungszeichen hinzu und inliniere ihn
        const formattedText = text
            .split('\n') // Teile in Zeilen
            .map(line => line.trim()) // Entferne Leerzeichen
            .filter(line => line.length > 0) // Entferne leere Zeilen
            .map(line => `'${line}'`) // Füge Anführungszeichen hinzu
            .join(', '); // Inliniere Strings

        // Ersetze den Text im Editor
        editor.edit(editBuilder => {
            editBuilder.replace(selection, formattedText);
        });
    });

    context.subscriptions.push(disposable);
}

/**
 * Deaktiviert die Extension.
 */
function deactivate() {}

module.exports = {
    activate,
    deactivate
};
