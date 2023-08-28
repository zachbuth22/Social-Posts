import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent {
  @Input() post: Post = {} as Post;
  @Output() delete = new EventEmitter<Post>();

  addVote():void{
    this.post.votes++;
  }

remove() :void{
  this.delete.emit(this.post);
}
















}