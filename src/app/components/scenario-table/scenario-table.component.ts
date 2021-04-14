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
  public active:boolean = false;
  public buttonStatus:string = 'Pre';
  public showText:boolean =false;
  public showSubMenu:boolean = false;
  public tabs = ['Series A'];
  public selected = new FormControl(0);
  
  ngOnInit(): void {
  }

  public showTextBtn(){
    this.showText = !this.showText;

    if(this.showText == false){
      this.buttonStatus = "Pre";
    }else{
      this.buttonStatus = "Post";
    }
  }

  public showLabel():string{
    if(this.showText == true){
      return "Post-money valuation";
    }else{
      return "Pre-money valuation";
    }
  }

  public activateButton(){
    this.showSubMenu = !this.showSubMenu;
  }

  public showConvertable(){
    this.active = !this.active;
    this.toggle();
  }

  public toggle() {
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

  public addTab() {
    this.tabs.push('Unnamed Round');
    this.selected.setValue(this.tabs.length - 1);
  }

  public removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

}
