import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RandomColor } from 'angular-randomcolor';

@Component({
  selector: 'app-scenario-table',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scenario-table.component.html',
  styleUrls: ['./scenario-table.component.scss'],
  template: '<app-scenario-table-template></app-scenario-table-template>'
})
export class ScenarioTableComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'Show';
  public display = false;
  public tabtitle:string = 'Unnamed Round';
  public tabId:string = "unnamed-tab";
  public active:boolean = false;


  public showText:boolean =false;

  public tabStatus: string = 'active';
  
  ngOnInit(): void {
  }

  public showTextBtn():string{
    this.showText = !this.showText;
    if(this.showText == false){
      return "Pre";
    }else{
      return "Post";
    }
  }

  public showLabel():string{
    if(this.showText == false){
      return "Post-money valuation";
    }else{
      return "Pre-money valuation";
    }
  }

  activateTab(){
    this.show = !this.show;
    if(this.show){
      this.tabStatus = 'disabled';
    }else{
      this.tabStatus = 'active';
    }
  }

  showConvertable(){
    this.active = !this.active;
    this.toggle();
  }

  toggle() {
    this.show = !this.show;

    //CHANGE THE NAME OF THE BUTTON.
    // if(this.show)  
    //   this.buttonName = "Hide";
    // else
    //   this.buttonName = "Show";
  }

  //Display item when mouse is clicked
  public onPress() {
    this.display = !this.display;
  }


  tabs = ['Series A'];
  selected = new FormControl(0);

  addTab() {
    this.tabs.push('Unnamed Round');

    this.selected.setValue(this.tabs.length - 1);
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

}
