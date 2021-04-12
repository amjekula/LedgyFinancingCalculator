import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import {PreRoundCapTableComponent} from './components/pre-round-cap-table/pre-round-cap-table.component';
import { SideMenuComponent } from './components/side-menu/side-menu/side-menu.component';
import { DownArrowComponent } from './components/down-arrow/down-arrow/down-arrow.component';
import { PostRoundTableComponent } from './components/post-round-table/post-round-table/post-round-table.component';
import { ScenarioTableComponent } from './components/scenario-table/scenario-table.component';
import { ScenarioTableTemplateComponent } from './components/scenario-table/scenario-table-template/scenario-table-template/scenario-table-template.component';
import { ConfirmDeleteComponent } from './components/scenario-table/confirm-delete/confirm-delete/confirm-delete.component';

const routes: Routes = [
  {path: 'components/pre-round-cap-table', component: PreRoundCapTableComponent},
  {path: 'components/side-menu', component: SideMenuComponent},
  {path: 'components/down-arrow', component: DownArrowComponent},
  {path: 'components/post-round-table', component: PostRoundTableComponent},
  {path: 'components/scenario-table', component: ScenarioTableComponent},
  {path: 'components/scenario-table-template', component: ScenarioTableTemplateComponent},
  {path: 'components/confirm-delete', component: ConfirmDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [PreRoundCapTableComponent, SideMenuComponent, DownArrowComponent, PostRoundTableComponent, 
                                  ScenarioTableComponent, ScenarioTableTemplateComponent, ConfirmDeleteComponent]
