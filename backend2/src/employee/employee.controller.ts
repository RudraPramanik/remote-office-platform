import { Controller, Get, Post } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    constructor(){}
    @Get()
    getEmploryy(){
        return  'employee'
    }
    @Post()
    postEmployee(){
        return 'post employee'
    }
}
