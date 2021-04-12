import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario-table-template',
  templateUrl: './scenario-table-template.component.html',
  styleUrls: ['./scenario-table-template.component.scss']
})
export class ScenarioTableTemplateComponent implements OnInit {
  display = false;
  public num:number = 0;
  public tabs:any = ["Series A"];
  public tabtitle:string = 'Unnamed Round';

  constructor() { }

  ngOnInit(): void {
  }

  onPress() {
    this.display = !this.display;
  }

  activeTab = 'unnamed-tab';

  search(activeTab:any){
    this.activeTab = activeTab;
  }

  result(activeTab:any){
    this.activeTab = activeTab;
    this.inc();
  }

  private inc() {
    if(this.num > 0){
      this.num == 0;
    }

    this.num++;
    this.tabs.push(this.tabtitle);
  }
}
