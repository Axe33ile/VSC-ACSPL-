"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const execFile = require("child_process");
const fs = require("fs"); //check if file is exist in file system.
var acsc_lib = require("../ACSC");
const x = require("");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    context.subscriptions.push(vscode.commands.registerCommand("acspl.askQuestion", async () => {
        const answer = await vscode.window.showInformationMessage("how's the extenstion,do you enjoy?", "yes", "no");
        if (answer === "no") {
            vscode.window.showInformationMessage("sorry to hear that, you can address you problem to barpupco@gmail.com");
        }
        else {
            vscode.window.showInformationMessage("great to hear :)");
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand("acspl.OpenMMI", () => {
        const path = '"C:\\Program Files (x86)\\ACS Motion Control\\SPiiPlus ADK Suite v3.13 Alpha\\SPiiPlus MMI Application Studio\\ACS.Framework.exe"';
        try {
            if (!fs.existsSync(path)) {
                //file exists
                vscode.window.showInformationMessage("Opening MMI");
                var MMI = execFile.exec('"C:\\Program Files (x86)\\ACS Motion Control\\SPiiPlus ADK Suite v3.13 Alpha\\SPiiPlus MMI Application Studio\\ACS.Framework.exe"'); //open calculator
            }
            else {
                vscode.window.showInformationMessage("MMI does not exist");
            }
        }
        catch (err) {
            vscode.window.showInformationMessage("MMI does not exist");
            console.error(err);
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand("acspl.OpenUserModeDrive", () => {
        const path = '"C:\\Program Files (x86)\\ACS Motion Control\\SPiiPlus Runtime Kit\\User Mode Driver\\ACSCSRV.exe"';
        try {
            if (!fs.existsSync(path)) {
                //file exists
                vscode.window.showInformationMessage("Opening User mode drive");
                var UMD = execFile.exec('"C:\\Program Files (x86)\\ACS Motion Control\\SPiiPlus Runtime Kit\\User Mode Driver\\ACSCSRV.exe"'); //open calculator
            }
            else {
                vscode.window.showInformationMessage("User mode drive does not exist");
            }
        }
        catch (err) {
            vscode.window.showInformationMessage("User mode drive does not exist");
            console.error(err);
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