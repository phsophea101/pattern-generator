export default function (plop) {

	plop.setHelper('genPackage', function (text) {
		return text.replace(/\./g, "/");
	});
	plop.setGenerator('mvc', {
		description: 'spring application generator.',
		prompts: [{
			type: 'input',
			name: 'package',
			message: "package's name?"
		},
		{
			type: 'input',
			name: 'service',
			message: "service's name?"
		}
		],
		actions: [
			{
				type: 'add',
				path: 'src/main/java/{{genPackage package}}/web/{{lowerCase service}}/app/App{{titleCase service}}Controller.java',
				templateFile: 'templates/mvc/controller/app/ApplicationController.hbs'
			},
			{
				type: 'add',
				path: 'src/main/java/{{genPackage package}}/web/{{lowerCase service}}/portal/Portal{{titleCase service}}Controller.java',
				templateFile: 'templates/mvc/controller/portal/ApplicationController.hbs'
			},
			{
				type: 'add',
				path: 'src/main/java/{{genPackage package}}/web/{{lowerCase service}}/vo/request/{{titleCase service}}CreateRequestVO.java',
				templateFile: 'templates/mvc/controller/vo/request/ApplicationCreateRequestVO.hbs'
			},
			{
				type: 'add',
				path: 'src/main/java/{{genPackage package}}/web/{{lowerCase service}}/vo/request/{{titleCase service}}UpdateRequestVO.java',
				templateFile: 'templates/mvc/controller/vo/request/ApplicationUpdateRequestVO.hbs'
			},
			{
				type: 'add',
				path: 'src/main/java/{{genPackage package}}/web/{{lowerCase service}}/vo/request/{{titleCase service}}PageableRequestVO.java',
				templateFile: 'templates/mvc/controller/vo/request/ApplicationRequestPageableVO.hbs'
			},
			{
				type: 'add',
				path: 'src/main/java/{{genPackage package}}/web/{{lowerCase service}}/vo/response/{{titleCase service}}ResponseVO.java',
				templateFile: 'templates/mvc/controller/vo/response/ApplicationResponseVO.hbs'
			},
			{
				type: 'add',
				path: 'src/main/java/{{genPackage package}}/web/{{lowerCase service}}/vo/response/{{titleCase service}}ItemResponseVO.java',
				templateFile: 'templates/mvc/controller/vo/response/ApplicationItemResponseVO.hbs'
			},
			{
				type: 'add',
				path: 'src/main/java/{{genPackage package}}/core/dao/{{titleCase service}}DAO.java',
				templateFile: 'templates/mvc/dao/ApplicationDAO.hbs'
			},
			{
				type: 'add',
				path: 'src/main/java/{{genPackage package}}/core/dto/{{titleCase service}}DTO.java',
				templateFile: 'templates/mvc/dto/ApplicationDTO.hbs'
			},
			{
				type: 'add',
				path: 'src/main/java/{{genPackage package}}/core/entity/{{titleCase service}}Entity.java',
				templateFile: 'templates/mvc/entity/ApplicationEntity.hbs'
			},
			{
				type: 'add',
				path: 'src/main/java/{{genPackage package}}/core/mapper/{{titleCase service}}Mapper.java',
				templateFile: 'templates/mvc/mapper/ApplicationMapper.hbs'
			},
			{
				type: 'add',
				path: 'src/main/java/{{genPackage package}}/core/service/{{titleCase service}}Service.java',
				templateFile: 'templates/mvc/service/ApplicationService.hbs'
			},
			{
				type: 'add',
				path: 'src/main/java/{{genPackage package}}/core/service/impl/{{titleCase service}}ServiceImpl.java',
				templateFile: 'templates/mvc/service/impl/ApplicationServiceImpl.hbs'
			}
		]
	});
	plop.setGenerator('hexagonal', {
		description: 'spring application generator.',
		prompts: [{
			type: 'input',
			name: 'package',
			message: "package's name?"
		},
		{
			type: 'input',
			name: 'service',
			message: "service's name?"
		}
		],
		actions: [
			{
				type: 'add',
				path: 'src/main/java/{{genPackage package}}/web/{{lowerCase service}}/app/App{{titleCase service}}Controller.java',
				templateFile: 'templates/mvc/controller/app/ApplicationController.hbs'
			}
		]
	});
};