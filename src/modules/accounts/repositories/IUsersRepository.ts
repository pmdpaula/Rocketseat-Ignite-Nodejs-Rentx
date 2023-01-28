import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>; // Create user

  findByEmail(email: string): Promise<User>; // Find user by email

  findById(id: string): Promise<User>; // Find user by id

  // list(): Promise<User[]>; // List all users
}

export { IUsersRepository };
