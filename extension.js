// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "loworem-ipsuwum" is now active!');

    let LOREM = ['loworem', 'ipsuwum', 'dowolowor', 'sit', 'amet', 'cowonsectetuwur', 'adipiscing', 'elit', 'cuwurabituwur', 'vel', 'hendrerit', 'liberowo', 'eleifend', 'blandit', 'nuwunc', 'owornare', 'owodiowo', 'uwut', 'oworci', 'gravida', 'imperdiet', 'nuwullam', 'puwuruwus', 'lacinia', 'a', 'pretiuwum', 'quwuis', 'cowonguwue', 'praesent', 'sagittis', 'laoworeet', 'auwuctowor', 'mauwuris', 'nowon', 'velit', 'erowos', 'dictuwum', 'prowoin', 'accuwumsan', 'sapien', 'nec', 'massa', 'vowoluwutpat', 'venenatis', 'sed', 'euwu', 'mowolestie', 'lacuwus', 'quwuisquwue', 'poworttitowor', 'liguwula', 'duwui', 'mowollis', 'tempuwus', 'at', 'magna', 'vestibuwuluwum', 'tuwurpis', 'ac', 'diam', 'tinciduwunt', 'id', 'cowondimentuwum', 'enim', 'sowodales', 'in', 'hac', 'habitasse', 'platea', 'dictuwumst', 'aenean', 'nequwue', 'fuwusce', 'auwuguwue', 'leowo', 'eget', 'semper', 'mattis', 'towortowor', 'scelerisquwue', 'nuwulla', 'interduwum', 'telluwus', 'malesuwuada', 'rhowoncuwus', 'poworta', 'sem', 'aliquwuet', 'et', 'nam', 'suwuspendisse', 'powotenti', 'vivamuwus', 'luwuctuwus', 'fringilla', 'erat', 'dowonec', 'juwustowo', 'vehicuwula', 'uwultricies', 'variuwus', 'ante', 'primis', 'fauwucibuwus', 'uwultrices', 'powosuwuere', 'cuwubilia', 'cuwurae', 'etiam', 'cuwursuwus', 'aliquwuam', 'quwuam', 'dapibuwus', 'nisl', 'feuwugiat', 'egestas', 'class', 'aptent', 'taciti', 'sowociowosquwu', 'ad', 'litowora', 'toworquwuent', 'per', 'cowonuwubia', 'nowostra', 'inceptowos', 'himenaeowos', 'phaselluwus', 'nibh', 'puwulvinar', 'vitae', 'uwurna', 'iacuwulis', 'lowobowortis', 'nisi', 'viverra', 'arcuwu', 'moworbi', 'pellentesquwue', 'metuwus', 'cowommowodowo', 'uwut', 'facilisis', 'felis', 'tristiquwue', 'uwullamcoworper', 'placerat', 'aenean', 'cowonvallis', 'sowollicituwudin', 'integer', 'ruwutruwum', 'duwuis', 'est', 'etiam', 'bibenduwum', 'dowonec', 'pharetra', 'vuwulpuwutate', 'maecenas', 'mi', 'fermentuwum', 'cowonsequwuat', 'suwuscipit', 'aliquwuam', 'habitant', 'senectuwus', 'netuwus', 'fames', 'quwuisquwue', 'euwuismowod', 'cuwurabituwur', 'lectuwus', 'elementuwum', 'tempowor', 'risuwus', 'cras'];

    for(let i = 0; i < 10; i++) {
        LOREM.push("uwu");
        LOREM.push("owo");
        LOREM.push(":3");
    }

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('loworem-ipsuwum.helloWorld', async function () {
		// The code you place here will be executed every time your command is executed
        const editor = vscode.window.activeTextEditor;
        if(!editor) return

        let len = await vscode.window.showInputBox()

        if(isNaN(len)) {
		    vscode.window.showInformationMessage('Please enter a valid number.');
            return   
        }

        len = len > 5000 ? 5000 : len;

        let loworem = "Loworem ipsuwum dolowor sit amet cowonsectetur adipisicing elit. "

        // Default 8 words, trimmed down to exact value
        if(len < 8) {
            let words = loworem.split(' ');

            for(let i = 8 - len; i > 0; i--) {
                words.pop();
            }
            loworem = words.join(" ");

        // More than 8 words, appened to the 8 default ones
        } else {
            let capitalize = false;
            for(let i = len - 8; i > 0; i--) {

                let seed = Math.floor(Math.random()*LOREM.length);

                if(capitalize) {
                    loworem += LOREM[seed].charAt(0).toUpperCase();
                    loworem += LOREM[seed].slice(1);
                    cap = false;
                } else {
                    loworem += LOREM[seed];
                }

                // Random punctuation
                const FREQ = 15;
                switch(seed % FREQ) {
                    case 0 || 1:
                        loworem += ",";
                        break;
                    case 2 || 3:
                        loworem += ".";
                        capitalize = true;
                        break;
                    case 4:
                        loworem += "?";
                        capitalize = true;
                        break;
                    case 5:
                        loworem += "!";
                        capitalize = true;
                        break;
                    default:
                        break;
                }

                loworem += " ";

            }

        }

        loworem = loworem.trim();
        loworem += ".";
        


        editor.edit((selectedText) => {
            selectedText.replace(editor.selection, loworem)
        })


		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Loworem Ipsuwum!');
	});

	context.subscriptions.push(disposable);

}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
