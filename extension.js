// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    const LOREM = [
        'loworem', 'ipsuwum', 'dowolowor', 'sit', 'amet', 'cowonsectetuwur', 'adipiscing', 'elit', 'cuwurabituwur', 'vel', 'hendrerit', 'liberowo', 'eleifend', 'blandit', 'nuwunc', 'owornare', 'owodiowo', 'uwut', 'oworci', 'gravida', 'imperdiet', 'nuwullam', 'puwuruwus', 'lacinia', 'a', 'pretiuwum', 'quwuis', 'cowonguwue', 'praesent', 'sagittis', 'laoworeet', 'auwuctowor', 'mauwuris', 'nowon', 'velit', 'erowos', 'dictuwum', 'prowoin', 'accuwumsan', 'sapien', 'nec', 'massa', 'vowoluwutpat', 'venenatis', 'sed', 'euwu', 'mowolestie', 'lacuwus', 'quwuisquwue', 'poworttitowor', 'liguwula', 'duwui', 'mowollis', 'tempuwus', 'at', 'magna', 'vestibuwuluwum', 'tuwurpis', 'ac', 'diam', 'tinciduwunt', 'id', 'cowondimentuwum', 'enim', 'sowodales', 'in', 'hac', 'habitasse', 'platea', 'dictuwumst', 'aenean', 'nequwue', 'fuwusce', 'auwuguwue', 'leowo', 'eget', 'semper', 'mattis', 'towortowor', 'scelerisquwue', 'nuwulla', 'interduwum', 'telluwus', 'malesuwuada', 'rhowoncuwus', 'poworta', 'sem', 'aliquwuet', 'et', 'nam', 'suwuspendisse', 'powotenti', 'vivamuwus', 'luwuctuwus', 'fringilla', 'erat', 'dowonec', 'juwustowo', 'vehicuwula', 'uwultricies', 'variuwus', 'ante', 'primis', 'fauwucibuwus', 'uwultrices', 'powosuwuere', 'cuwubilia', 'cuwurae', 'etiam', 'cuwursuwus', 'aliquwuam', 'quwuam', 'dapibuwus', 'nisl', 'feuwugiat', 'egestas', 'class', 'aptent', 'taciti', 'sowociowosquwu', 'ad', 'litowora', 'toworquwuent', 'per', 'cowonuwubia', 'nowostra', 'inceptowos', 'himenaeowos', 'phaselluwus', 'nibh', 'puwulvinar', 'vitae', 'uwurna', 'iacuwulis', 'lowobowortis', 'nisi', 'viverra', 'arcuwu', 'moworbi', 'pellentesquwue', 'metuwus', 'cowommowodowo', ':3', 'uwut', 'facilisis', 'felis', 'tristiquwue', 'uwullamcoworper', 'placerat', 'aenean', 'cowonvallis', 'sowollicituwudin', 'integer', 'ruwutruwum', 'duwuis', 'est', 'etiam', 'bibenduwum', 'dowonec', 'pharetra', 'vuwulpuwutate', 'maecenas', 'mi', 'fermentuwum', 'cowonsequwuat', 'suwuscipit', 'aliquwuam', 'habitant', 'senectuwus', 'netuwus', 'fames', 'quwuisquwue', 'euwuismowod', 'cuwurabituwur', 'lectuwus', 'elementuwum', 'tempowor', 'risuwus', 'cras', ':3'
    ];

    for(let i = 0; i < 6; i++) {
        LOREM.push("uwu");
        LOREM.push("owo");
    }

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let loworemCommand = vscode.commands.registerCommand('loworem-ipsuwum.loworem', async function () {
        const editor = vscode.window.activeTextEditor;
        if(!editor) {
		    vscode.window.showErrorMessage('Error: Must have editable editor open.');
            return;
        }

        let len = await vscode.window.showInputBox({
            prompt: "Pwease enter how many words to generate.",
        });

        if((isNaN(len) && len !== "") || len < 0) {
		    vscode.window.showErrorMessage('Please enter a valid number.');
            return;   
        }
        
        if(len === "" || len == 0) {
            len = 30; // Default
        } else if(len > 5000) {
            len = 5000; // Max 5000
        }

        let loworem = "Loworem ipsuwum dolowor sit amet cowonsectetur adipisicing elit ";

        // Default 8 words, trimmed down to exact value
        if(len <= 8) {
            let words = loworem.split(' ');

            for(let i = 8 - len; i >= 0; i--) {
                words.pop();
            }
            loworem = words.join(" ");

        // More than 8 words, appened to the 8 default ones
        } else {
            loworem = loworem.trim();
            loworem += ". ";
            let capitalize = true;

            for(let i = len - 8; i > 0; i--) {

                let seed = Math.floor(Math.random()*LOREM.length);

                if(capitalize) {
                    loworem += LOREM[seed].charAt(0).toUpperCase();
                    loworem += LOREM[seed].slice(1);
                    capitalize = false;
                } else {
                    loworem += LOREM[seed];
                }

                // Random punctuation
                const FREQ = 30;
                switch(seed % FREQ) {
                    case 0: case 1:
                        loworem += ", ";
                        break;
                    case 2: case 3:
                        loworem += ". ";
                        capitalize = true;
                        break;
                    case 4:
                        loworem += "? ";
                        capitalize = true;
                        break;
                    case 5:
                        loworem += "! ";
                        capitalize = true;
                        break;
                    default:
                        loworem += " ";
                        break;
                }
            }
        }

        // Trailing space and punctuation
        loworem = loworem.trim();

        let char = loworem.slice(-1);
        if(char === ",") {
            loworem = loworem.substring(0, loworem.length - 2);
            loworem += ".";

        } else if(char !== "!" && char !== "?" && char !== ".") {
            loworem += ".";   
        }

        editor.edit((selectedText) => {
            selectedText.replace(editor.selection, loworem)
        })
	});

	context.subscriptions.push(loworemCommand);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
