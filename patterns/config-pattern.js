import * as mongoMVC from './mvc/mongo.js';
import * as jpaMVC from './mvc/jpa.js';
import * as mybatis from './mvc/mybatis.js';

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
				message: "what's package?",
				help: 'Decides whether or not to generate a client',
				validate: isNotEmptyFor("package"),
			},
			{
				type: 'input',
				name: 'service',
				message: "what's your module name?",
				validate: isNotEmptyFor("service"),
			},
			{
				type: 'rawlist',
				name: 'pattern',
				message: "Choose number for your pattern?",
				choices: [
					{ name: "MVC pattern", value: "mvc" },
					{ name: "Hexagonal pattern", value: "hexagonal" }
				],
				validate: isNotEmptyFor("pattern"),
			},
			{
				type: 'rawlist',
				name: 'data',
				message: "Choose number for your data type?",
				choices: [
					{ name: "JPA Data", value: "jpa" },
					{ name: "Mongo Data", value: "mongo" },
					{ name: "MyBatis Data", value: "mybatis" }
				],
				validate: isNotEmptyFor("pattern"),
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
				} else if (data.data == 'mybatis') {
					pattern = mybatis;
				}
			} else if (data.data == 'hexagonal') {
// TODO
			}
			if (pattern == null) {
				console.log('\x1B[31m*Oop, something went wrong! we will back to fix soon.\x1B[34m *_*');
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