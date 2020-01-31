// import { SqlServerConnectionOptions } from "typeorm/driver/sqlserver/SqlServerConnectionOptions";
import { ConnectionOptions } from "typeorm";

export const TypeOrmConfig : ConnectionOptions = {
    type: 'mssql',
    host: 'localhost\\IMPLEDGE-L1004',
    port: 1443,
    username: 'sa',
    password: 'Impledge@123',
    database: 'student-course-management',
    entities: [__dirname  + './../**/*.entity.ts'],
    synchronize: true
}