import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('feedbacks')
export class FeedbacksController {
    constructor(){}
    @Post("")
    postFeedback(){
        return "post a feedback"
    }
    @Get("")
    getFeedack(){
        return "get feedback"
    }
    @Get(":id")
    getFeedbackById(@Param('id') id:string ){
        return "get feedback by id"
    }
    @Delete(":id")
    deleteFeedbackById(@Param('id')id:string){
        return "delete feedback by id"
    }


}

// @Get(':id')
// findOne(@Param('id') id: string) {
//   return this.postService.findOne(id);
// }

// @Patch(':id')
// update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
//   return this.postService.update(id, updatePostDto);
// }

// @Delete(':id')
// remove(@Param('id') id: string) {
//   return this.postService.remove(id);
// }