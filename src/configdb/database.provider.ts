import { DataSource } from 'typeorm';

export const databaseProvider = [
    {
        provide: 'DATA_SORCE',
        useFactory: async() => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3307,
                username: 'root',
                password: 'root',
                database: 'teste',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true,
            })

            return dataSource.initialize();
        }
    }
];