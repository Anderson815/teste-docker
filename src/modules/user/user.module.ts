import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from '../../configdb/database.module';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'UserRepository',
      useFactory: (dataSorce: DataSource) => dataSorce.getRepository(User),
      inject: ['DATA_SORCE']
    }
  ],
})
export class UserModule {}
