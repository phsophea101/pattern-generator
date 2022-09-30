import * as mongoMVC from './mvc/mongo.js';
import * as jpaMVC from './mvc/jpa.js';
import * as sampleMVC from './mvc/sample.js';

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
				message: "package's name?"
			},
			{
				type: 'input',
				name: 'service',
				message: "module's name?"
			},
			{
				type: 'input',
				name: 'pattern',
				message: "what's your pattern?"
			},
			{
				type: 'input',
				name: 'data',
				message: "what's your data?"
			}
		],
		actions: function (data) {
			var actions = [];
			var pattern = sampleMVC;
			if (data.pattern == 'mvc') {
				if (data.data == 'mongo') {
					pattern = mongoMVC;
				} else if (data.data == 'jpa') {
					pattern = jpaMVC;
				} else {
					pattern = sampleMVC;
				}
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