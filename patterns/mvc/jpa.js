var actions = [
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/{{lowerCase service}}/web/app/App{{titleCase service}}Controller.java',
		templateFile: '../templates/mvc/jpa/controller/app/ApplicationController.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/{{lowerCase service}}/web/portal/Portal{{titleCase service}}Controller.java',
		templateFile: '../templates/mvc/jpa/controller/portal/ApplicationController.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/{{lowerCase service}}/web/vo/request/{{titleCase service}}CreateRequestVO.java',
		templateFile: '../templates/mvc/jpa/controller/vo/request/ApplicationCreateRequestVO.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/{{lowerCase service}}/web/vo/request/{{titleCase service}}UpdateRequestVO.java',
		templateFile: '../templates/mvc/jpa/controller/vo/request/ApplicationUpdateRequestVO.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/{{lowerCase service}}/web/vo/request/{{titleCase service}}PageableRequestVO.java',
		templateFile: '../templates/mvc/jpa/controller/vo/request/ApplicationRequestPageableVO.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/{{lowerCase service}}/web/vo/response/{{titleCase service}}ResponseVO.java',
		templateFile: '../templates/mvc/jpa/controller/vo/response/ApplicationResponseVO.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/{{lowerCase service}}/web/vo/response/{{titleCase service}}ItemResponseVO.java',
		templateFile: '../templates/mvc/jpa/controller/vo/response/ApplicationItemResponseVO.hbs'
	},
	// {
	// 	type: 'add',
	// 	path: 'src/main/java/{{genPackage package}}/{{lowerCase service}}/biz/dao/{{titleCase service}}DAO.java',
	// 	templateFile: '../templates/mvc/jpa/dao/ApplicationDAO.hbs'
	// },
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/{{lowerCase service}}/biz/dto/{{titleCase service}}DTO.java',
		templateFile: '../templates/mvc/jpa/dto/ApplicationDTO.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/{{lowerCase service}}/biz/entity/{{titleCase service}}Entity.java',
		templateFile: '../templates/mvc/jpa/entity/ApplicationEntity.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/{{lowerCase service}}/biz/mapper/{{titleCase service}}Mapper.java',
		templateFile: '../templates/mvc/jpa/mapper/ApplicationMapper.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/{{lowerCase service}}/biz/service/{{titleCase service}}Service.java',
		templateFile: '../templates/mvc/jpa/service/ApplicationService.hbs'
	},
	{
		type: 'add',
		path: 'src/main/java/{{genPackage package}}/{{lowerCase service}}/biz/service/impl/{{titleCase service}}ServiceImpl.java',
		templateFile: '../templates/mvc/jpa/service/impl/ApplicationServiceImpl.hbs'
	}
];
export {
	actions
};