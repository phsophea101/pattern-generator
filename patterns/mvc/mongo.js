var actions = [
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/web/{{lowerCase service}}/app/App{{titleCase service}}Controller.java',
		templateFile: '../templates/mvc/mongo/controller/app/ApplicationController.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/web/{{lowerCase service}}/portal/Portal{{titleCase service}}Controller.java',
		templateFile: '../templates/mvc/mongo/controller/portal/ApplicationController.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/web/{{lowerCase service}}/vo/request/{{titleCase service}}CreateRequestVO.java',
		templateFile: '../templates/mvc/mongo/controller/vo/request/ApplicationCreateRequestVO.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/web/{{lowerCase service}}/vo/request/{{titleCase service}}UpdateRequestVO.java',
		templateFile: '../templates/mvc/mongo/controller/vo/request/ApplicationUpdateRequestVO.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/web/{{lowerCase service}}/vo/request/{{titleCase service}}PageableRequestVO.java',
		templateFile: '../templates/mvc/mongo/controller/vo/request/ApplicationRequestPageableVO.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/web/{{lowerCase service}}/vo/response/{{titleCase service}}ResponseVO.java',
		templateFile: '../templates/mvc/mongo/controller/vo/response/ApplicationResponseVO.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/web/{{lowerCase service}}/vo/response/{{titleCase service}}ItemResponseVO.java',
		templateFile: '../templates/mvc/mongo/controller/vo/response/ApplicationItemResponseVO.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/core/dao/{{titleCase service}}DAO.java',
		templateFile: '../templates/mvc/mongo/dao/ApplicationDAO.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/core/dto/{{titleCase service}}DTO.java',
		templateFile: '../templates/mvc/mongo/dto/ApplicationDTO.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/core/entity/{{titleCase service}}Entity.java',
		templateFile: '../templates/mvc/mongo/entity/ApplicationEntity.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/core/mapper/{{titleCase service}}Mapper.java',
		templateFile: '../templates/mvc/mongo/mapper/ApplicationMapper.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/core/service/{{titleCase service}}Service.java',
		templateFile: '../templates/mvc/mongo/service/ApplicationService.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/core/service/impl/{{titleCase service}}ServiceImpl.java',
		templateFile: '../templates/mvc/mongo/service/impl/ApplicationServiceImpl.hbs'
	}
];
export {
	actions
};