import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Shared } from 'src/app/shared/shared.model';
import { Router } from '@angular/router';

import { TabDirective, TabsetComponent } from 'ngx-bootstrap/tabs';
import { GroupCalculation } from 'src/app/_model/group-calculation';

@Component({
  selector: 'app-scenario-table',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scenario-table.component.html',
  styleUrls: ['./scenario-table.component.scss'],
  template: '<app-scenario-table-template></app-scenario-table-template>'
})
export class ScenarioTableComponent implements OnInit {
  sharedItems: Shared[] = [];

  public show:boolean = false;
  public buttonName:any = 'Show';
  public display = false;
  //  public tabs:any = ["Series A"];
  public tabtitle:string = 'Unnamed Round';
  public tabId:string = "unnamed-tab";
  public num:number = 0;

  public tabStatus: string = 'active';

  public navLinks: any[] = [];
  public activeLinkIndex = -1;
  public activeTab = 'series-a';

  //@Input() tabs: GroupCalculation[] = [];

  
  ngOnInit(): void {
    var tabNew = new GroupCalculation();
    tabNew.name = "Add";
    tabNew.removable = false;
  }
  
 
  // addNewTab(): void {
  //   this.setAllTabsHeadingToFalse();
  //   var tabNew = new GroupCalculation();
  //   tabNew.name = "Unnamed Round";
  //   tabNew.removable = true;
  //   tabNew.removable = true;
    
  //   this.tabs.push(tabNew);
  // }

  // editHeading(index: any){
  //   this.setAllTabsHeadingToFalse();
  //   this.tabs[index].isEditingHeading = true;
  // }
  // setAllTabsHeadingToFalse(){
  //   if(this.tabs == null || this.tabs == undefined || this.tabs.length <= 0){
  //     return;
  //   }
  //   this.tabs.forEach((itemGroup: { isEditingHeading: boolean; })=>{
  //     itemGroup.isEditingHeading = false;
  //   });
  // }
 
  // removeTabHandler(tab: any): void {
    
  //   this.setAllTabsHeadingToFalse();
  //   this.tabs.splice(this.tabs.indexOf(tab), 1);
  //   console.log('Remove Tab handler');
  // }


  

  constructor(private router: Router) {

    this.navLinks = [
      {
          label: 'Series A',
          link: './series-a',
          index: 0
      }, {
          label: 'Unnamed Round',
          link: './unnamed-tab',
          index: this.num++
      }, 
    ];

   }

  search(activeTab:any){
    this.activeTab = activeTab;

  }

  // result(activeTab:any){
  //   this.activeTab = activeTab;
  //   this.inc();
  // }

  // ngOnInit(): void {
  //   // this.sharedItems = this.sharedService.getSharedElements();
  //   this.router.events.subscribe((res) => {
  //     this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  //   });
  // }

  activateTab(){
    this.show = !this.show;
    if(this.show){
      this.tabStatus = 'disabled';
    }else{
      this.tabStatus = 'active';
    }
  }

  generateId(){
    return this.tabId + this.num++;
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  //Display item when mouse is clicked
  public onPress() {
    this.display = !this.display;
  }

  //Delete tab items
  public dec() {
    this.tabs = this.tabs.slice(0, -1);
  }

  //Add tab items
  // private inc() {
  //   if(this.num > 0){
  //     this.num == 0;
  //   }

  //   this.num++;
  //   this.tabs.push(this.tabtitle);
  // }

  // public removeTab(index: number) {
  //   this.tabs.splice(index, 1);
  // } 


  tabs = ['Series A'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('Unnamed Round');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
