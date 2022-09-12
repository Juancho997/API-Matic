export default function (
    /** @type {import('plop').NodePlopAPI} */ plop) {

        plop.setGenerator('basics', {
        description: 'API generator',
        prompts: [
            {
                type : "input",
                name : "proyect_author",
                message : "Hi developer! What is your name / GitHub User ?" 
            },
            {
                type : "input",
                name : "proyect_name",
                message : "How would you like to call your proyect?"
            },
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
                path: "api/src/models/{{properCase parentModelName}}.js",
                templateFile: "templates/models/parentDbModel.template.hbs"
            },
            {
                type: "add",
                path: "api/src/models/{{properCase childModelName}}.js",
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
            // test
            {
                type: "add",
                path : "api/tests/{{parentPluralName}}.routes.test.js",
                templateFile : "templates/test/parentRoutesTest.template.hbs"
            },
            // src/index.js
            {
                type: "add",
                path : "api/index.js",
                templateFile : "templates/app/index.template.hbs"
            },
            // swaggerOptions
            {
                type : "add",
                path : "api/swaggerOptions.js",
                templateFile : "templates/app/swaggerOptions.template.hbs"
            },
            // .env
            {
                type: "add",
                path : "api/.env",
                templateFile : "templates/app/env.template.hbs"
            },
            // package.json
            {
                type : "add",
                path : "api/package.json",
                templateFile : "templates/app/packageJson.template.hbs"
            }

        ]
    });

    plop.setHelper("snake_case", (str) => {
        return str
            .replace(/\W+/g, " ")
            .split(/ |\B(?=[A-Z])/)
            .map((word) => word.toLowerCase())
            .join("_");
    });

};