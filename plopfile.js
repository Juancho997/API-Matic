export default function (
    /** @type {import('plop').NodePlopAPI} */ plop) {
    // create your generators here
    plop.setGenerator('basics', {
        description: 'API generator',
        prompts: [
            {
                type: "input",
                name: "parentModelName",
                message: "Name your parent DB model"
            },
            {
                type: "input",
                name: "parentPluralName",
                message: "Type your parent's DB model name, in plural"
            },
            {
                type: "input",
                name: "childModelName",
                message: "Name your child DB model"
            },            
            {
                type: "input",
                name: "childPluralName",
                message: "Type your child's DB model name, in plural"
            },
        ],
        actions: [
            // models
            {
                type: "add",
                path: "api/src/models/{{snake_case parentModelName}}.model.js",
                templateFile: "templates/models/parentDbModel.template.hbs"
            },
            {
                type: "add",
                path: "api/src/models/{{snake_case childModelName}}.model.js",
                templateFile: "templates/models/childDbModel.template.hbs"
            },
            // routers
            {
                type: "add",
                path: "api/src/routes/index.routes.js",
                templateFile: "templates/routes/indexRoutes.template.hbs"
            },
            {
                type: "add",
                path: "api/src/routes/{{snake_case parentPluralName}}.routes.js",
                templateFile: "templates/routes/parentRoutes.template.hbs"
            },
            {
                type: "add",
                path: "api/src/routes/{{snake_case childPluralName}}.routes.js",
                templateFile: "templates/routes/childRoutes.template.hbs"
            },
            // routes controllers
            {
                type : "add",
                path: "api/src/controllers/routes/{{parentPluralName}}.controllers.js",
                templateFile : "templates/routes/controllers/parentRoutesControllers.template.hbs"
            },
            {
                type : "add",
                path: "api/src/controllers/routes/{{childPluralName}}.controllers.js",
                templateFile : "templates/routes/controllers/childRoutesControllers.template.hbs"
            },
            // database index
            {
                type: "add",
                path : "api/src/database/index.js",
                templateFile: "templates/database/index.template.hbs"
            },
            // 

        ]
    });

    // plop.setHelper("TitleCase", (str) => {
    //     return str.replace(/\w\S*/g, function (txt) {
    //         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    //     });
    // });

    plop.setHelper("snake_case", (str) => {
        return str
            .replace(/\W+/g, " ")
            .split(/ |\B(?=[A-Z])/)
            .map((word) => word.toLowerCase())
            .join("_");
    });

};