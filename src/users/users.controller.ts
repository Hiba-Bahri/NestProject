import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { debug } from 'console';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Post()
    addUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.userService.addUser(createUserDto);
    }

    @Get(':id')
    findUserById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findUserById(id);
    }

    @Get(':email')
    findUserByEmail(@Param('email') email: string) {
        return this.userService.findUserByEmail(email);
    }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
        return this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUser(id);
    }
}
