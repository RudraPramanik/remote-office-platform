import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('offices')
export class OfficesController {
    constructor(){}
    @Post()
    postOffices(){
        return 'post a office'
    }
    @Get()
    getOffices(){
        return 'get offices'
    }
    @Get(":id")
    getOfficebyId(@Param('id')id:string){
        return 'get offices by id'
    }
    @Patch(":id")
    editOfficeById(@Param('id')id:string){
        return 'edit office by id'
    }
    @Delete(":id")
    deleteOfficeById(){
        return 'delete office by id'
    }
  

}



// constructor(){}
// @Post("")
// postFeedback(){
//     return "post a feedback"
// }
// @Get("")
// getFeedack(){
//     return "get feedback"
// }
// @Get(":id")
// getFeedbackById(@Param('id') id:string ){
//     return "get feedback by id"
// }
// @Delete(":id")
// deleteFeedbackById(@Param('id')id:string){
//     return "delete feedback by id"
// }