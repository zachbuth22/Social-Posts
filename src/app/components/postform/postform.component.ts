import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent {
  newPost: Post = {} as Post;
  @Output() PostCreated = new EventEmitter<Post>();
  displayForm:boolean = false;

  toggleForm():void{
    this.displayForm = !this.displayForm;
  }

  submitPost():void{
    this.newPost.votes = 0;
    //{... this.newPost} automatically assigns properties
    let result:Post = {... this.newPost};
    this.PostCreated.emit(result);
  }
}
