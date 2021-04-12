import { Component, ChangeDetectionStrategy  } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  providers: [SharedService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title= "Financing Scenario";
  public isEditable = false;

  constructor() {}


  ngOnInit(): void { }

  public onEditClick(){
    this.isEditable =true;
  }

  public onSave(){
    this.isEditable = false;
  }
}
