import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @Inject('UserRepository')
    private userRepository: Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) {

    const bd: User = await this.userRepository.save(createUserDto);

    return bd;
  }

  async findAll() {

    const listUser : User[] = await this.userRepository.find();

    return listUser;
  }

  async findOne(id: number) {
    
    const user: User = await this.userRepository.findOne({
      where: {
        id
      }
    })
    
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {

    await this.userRepository.update(
      {
        id
      },
      updateUserDto
    )

    const userUpdated = await this.findOne(id);


    return userUpdated;
  }

  async remove(id: number) {
    
    await this.userRepository.delete({
      id
    });

  }
}
