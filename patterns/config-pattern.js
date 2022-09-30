import * as mongoMVC from './mvc/mongo.js';
import * as jpaMVC from './mvc/jpa.js';
import * as sampleMVC from './mvc/sample.js';

const isNotEmptyFor = (prompt) => (value) => {
	if (!value) return prompt + " is required";
	return true;
};

export default function (plop) {

	plop.setHelper('genPackage', function (text) {
		return text.replace(/\./g, "/");
	});
	plop.setGenerator('', {
		description: 'spring application generator.',
		prompts: [
			{
				type: 'input',
				name: 'package',
				message: "package's name?",
				validate: isNotEmptyFor("package"),
			},
			{
				type: 'input',
				name: 'service',
				message: "module's name?",
				validate: isNotEmptyFor("service"),
			},
			{
				type: 'rawlist',
				name: 'pattern',
				message: "Choose your pattern?",
				choices: [
					{ name: "MVC pattern", value: "mvc" },
					{ name: "Hexagonal pattern", value: "hexagonal" }
				],
				validate: isNotEmptyFor("pattern"),
			},
			{
				type: 'input',
				name: 'data',
				message: "what's your data?",
				validate: isNotEmptyFor("data"),
			}
		],
		actions: function (data) {
			var actions = [];
			var pattern = null;;
			if (data.pattern == 'mvc') {
				if (data.data == 'mongo') {
					pattern = mongoMVC;
				} else if (data.data == 'jpa') {
					pattern = jpaMVC;
				} else {
					pattern = sampleMVC;
				}
			}
			if (pattern == null) {
				console.log('\x1B[31m*Oop, something went wrong! we will back to fix soon.\x1B[34m -_-');
				return actions;
			}
			for (var i = 0; i < pattern.actions.length; i++) {
				actions.push({
					type: pattern.actions[i].type,
					path: pattern.actions[i].path,
					templateFile: pattern.actions[i].templateFile
				});
			}
			return actions;
		}
	});
};