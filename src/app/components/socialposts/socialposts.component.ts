import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-socialposts',
  templateUrl: './socialposts.component.html',
  styleUrls: ['./socialposts.component.css']
})
export class SocialpostsComponent {
AllPosts:Post [] = [ 
  {
    title:"I am hungry",
    thought:"I haven't been fed in 7 days",
    votes: 9001
  },
  {
    title:"Shut up cat",
    thought: "I fed you 30 minutes ago",
    votes: -1
  }
];

GetPostsByNewest():Post[]{
  return this.AllPosts.reverse();
}

AddPost(newPost:Post):void{
  this.AllPosts.push(newPost);
}
RemovePost(target:Post):void{
  let index: number = this.AllPosts.findIndex((p:Post) => p ==target);
  this.AllPosts.splice(index,1);
}


}
