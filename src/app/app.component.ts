import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular';

    userObject ={ 
      name: 'Sitssal',
      age:'32',
      id: 0
    };


    showUser: boolean = true;


    // async pipe
    posts:any = this.httpService.getRequest("https://jsonplaceholder.typicode.com/posts")

    jsonObject = {}

    constructor(private httpService: HttpService){}
  
  
    ngOnInit(): void {
    //this.getPosts();
  }

    // handleEvent() {
    // this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1')
    // .subscribe(
    //   (response) => {
    //   this.jsonObject=response
    // }
    // );
   
  // getPosts():any{
  //   this.httpService.getRequest("https://jsonplaceholder.typicode.com/posts")
  //   .subscribe(
  //     (response)=> 
  //     {this.posts = response;
  //     }
  //   )
  // }


    handleEvent(event:any){
        console.log(event);
    }

  

}
