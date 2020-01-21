import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { HttpClient } from '@angular/common/http';
import { Recommend } from '../recommend';
import { RecommendService } from '../service/recommend.service';
import { RouterService } from '../service/router.service';
import { count } from 'rxjs-compat/operator/count';
@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  userId: string;
  i: number;
  userEmail: string;
  user: any;
  recommendArray: Array<Recommend> = [];
  recommendArray1: Array<Recommend> = [];
  recommends1: Array<any> = [];
  recommends: Array<any> = [];
  recommendation: Array<any> = [];
  recommendation1: Array<any> = [];
  counts: Array<any> = [];
  countArray: any;
  recCount: Array<any> = [];
  k: number;
  j: any;
  constructor(private recommendService: RecommendService, private router: RouterService) { }
  ngOnInit() {
    this.recommendService.getRecommendationCount();
  }

  // getUserRec(): boolean {
  //   this.recommendService.recCount.forEach(result => {
  //     result.email.forEach(element => {
  //       if(element == sessionStorage.getItem("email")) {
  //         if(result.bookId) == this.
  //       }        
  //     });
  //   })
  // }
 
   getAllByUserEmail() {
      this.recommendService.getAllByUserId(this.user).subscribe(data => {
      this.recommendArray1 = data;
      console.log(data)
      for (this.i = 0; this.i < data.length; this.i++) {
        //this.recommends1['email'] = this.recommendArray1[this.i].email;
        this.recommends1['email'] = sessionStorage.getItem('email');
        console.log(this.recommendArray1[this.i].email);
        this.recommends1['bookId'] = this.recommendArray1[this.i].bookId;
        this.recommends1['title'] = this.recommendArray1[this.i].title;
        this.recommends1['name'] = this.recommendArray1[this.i].name;
        this.recommends1['userId'] = this.recommendArray1[this.i].userId.toString();
        console.log(this.recommendArray[this.i].userId.toString());
        // console.log(this.recommends['bookId']);
        this.recommends1['authors'] = this.recommendArray1[this.i].authors;
        this.recommends1['smallThumbnail'] = this.recommendArray1[this.i].smallThumbnail;
        this.recommends1['recId'] = this.recommendArray1[this.i].recId;
        this.recommends1['count'] = this.counts[this.i];
        console.log(this.recommends1)
        this.recommendation1.push(this.recommends1);
        this.recommends1 = [];
      }
    },
      error => console.log(error)
    );
  }
  unrecommend(recId: string) {
    this.recommendService.unrecommend(recId).subscribe();
    //  this.recommends=new Book();
    console.log(recId);
    this.del(recId);
  }
  del(recId: string) {
    var element = this.recommendation.findIndex(c => c.recId === recId);
    if (element > -1) {
      this.recommendation.splice(element, 1);
      this.recommendService.getRecommendationCount();
    }
  }
}





