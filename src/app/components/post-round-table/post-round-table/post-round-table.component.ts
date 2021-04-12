import { Component, OnInit } from '@angular/core';
import { SharedService } from "src/app/shared/shared.service";
import { Shared } from 'src/app/shared/shared.model';

@Component({
  selector: 'app-post-round-table',
  templateUrl: './post-round-table.component.html',
  styleUrls: ['./post-round-table.component.scss']
})
export class PostRoundTableComponent implements OnInit {
  sharedElements: Shared[] = [];
  a: number = 0;
  count: number = 0;

  constructor(private sharedService: SharedService) { 
  }

  ngOnInit() {
    this.sharedElements = this.sharedService.getSharedElements();
  }

  getTotalShares(): number{
    if(this.a > 0 && this.count > 0){
      this.a = 0;
      this.count = 0;
    }
    for(let addShares of this.sharedElements){
      if(this.count < this.sharedElements.length){
        this.a += addShares.shares;
        Math.round(this.a);

        this.count++;
      }
    }
    return this.a;
  }

  getTotalInvestments(): number{
    if(this.a > 0 && this.count > 0){
      this.a = 0;
      this.count = 0;
    }
    for(let addInvestment of this.sharedElements){
      if(this.count < this.sharedElements.length){
        this.a += addInvestment.investment;

        this.count++;
      }
    }
    return this.a;
  }

}
