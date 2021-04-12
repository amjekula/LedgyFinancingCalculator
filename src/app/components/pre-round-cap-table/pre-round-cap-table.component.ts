import { Component, OnInit } from '@angular/core';
import{SharedService} from 'src/app/shared/shared.service';
import { Shared } from 'src/app/shared/shared.model';

@Component({
  selector: 'app-pre-round-cap-table',
  templateUrl: './pre-round-cap-table.component.html',
  styleUrls: ['./pre-round-cap-table.component.scss']
})
export class PreRoundCapTableComponent implements OnInit {
  public editCell:any;
  public count:number = 0;
  public idValue:number = 5;
  public show:boolean = false;
  public buttonName:any = 'Show';
  private lastIdValue:number = 3;
  public clickCounter = 3;

  headElements = ['Stakeholder name *', 'Amount of shares *	', 'Investment (USD)'];
  sharedElements: Shared[]  =  [];


  investor: Shared={
    id: this.idValue,
    stakeholder: '',
    shares: 0,
    investment: 0
  }

  toggle() {
    this.show = !this.show;
    //change the value of the button.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(){
    this.sharedElements = this.sharedService.getSharedElements();
  }

  saveInvestor(){
    this.sharedService.save(this.investor);
  }

  startEdit(id:number){
    this.editCell = id;
  }

  stopEdit():void{
    this.editCell=null;
  }

  private add() {
    for(let x = 0; x <= this.sharedElements.length; x++){
      if(this.sharedElements.length >= 0){
        this.count++;
      }
    }

    if(this.lastIdValue != this.idValue){
      this.sharedElements.push({id:this.investor.id, stakeholder:this.investor.stakeholder, shares: this.investor.shares, investment:this.investor.investment});
      this.lastIdValue = this.idValue;
      this.idValue++;
    }
  }

  public incrementCounter(): number{
    this.clickCounter++;
    var result = 0;

    if(this.clickCounter%3 == 0){
      this.add();
      return this.clickCounter%3;
      
    }else{
      return this.clickCounter%3;
    }
  }
}
