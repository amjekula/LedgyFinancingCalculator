import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRoundCapTableComponent } from './pre-round-cap-table.component';

describe('PreRoundCapTableComponent', () => {
  let component: PreRoundCapTableComponent;
  let fixture: ComponentFixture<PreRoundCapTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreRoundCapTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreRoundCapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
