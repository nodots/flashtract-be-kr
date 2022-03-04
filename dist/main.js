"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const apiPrefix = process.env.KANBAN_API_PREFIX || 'api';
    const apiVersion = process.env.KANBAN_API_VERSION || '1';
    const port = process.env.KANBAN_API_PORT || 3333;
    const host = process.env.KANBAN_API_HOST || 'localhost';
    const apiRoot = apiPrefix + '/' + apiVersion;
    app.setGlobalPrefix(apiRoot);
    await app.listen(port, () => {
        common_1.Logger.log('Listening at http://' + host + ':' + port + '/' + apiRoot);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map