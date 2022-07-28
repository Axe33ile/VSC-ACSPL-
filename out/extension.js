"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    context.subscriptions.push(vscode.commands.registerCommand("acspl.helloWorld", () => {
        vscode.window.showInformationMessage("Hello World from acspl1!");
    }));
    context.subscriptions.push(vscode.commands.registerCommand("acspl.askQuestion", async () => {
        const answer = await vscode.window.showInformationMessage("how's the extenstion,do you enjoy?", "yes", "no");
        if (answer === "no") {
            vscode.window.showInformationMessage("sorry to hear that, you can address you problem to barpupco@gmail.com");
        }
        else {
            vscode.window.showInformationMessage("great to hear :)");
        }
    }));
    //handler
    //   getDiagnostic
    // const diagnosticCollection = vscode.languages.createDiagnosticCollection('types-insta')
    // const handler = async(doc:vscode.TextDocument) => {
    //   if(!doc.fileName.endsWith('package.json')){
    //     return;
    //   }
    //   const diagnostics = await getDiagnostics(doc);
    //   diagnostics.set(doc.uri, diagnostics);
    // }
    // const didOpen= vscode.workspace.onDidOpenTextDocument(doc => handler(doc));
    // const didChange= vscode.workspace.onDidOpenTextDocument(doc => handler(e.document));
} //end of activate
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map