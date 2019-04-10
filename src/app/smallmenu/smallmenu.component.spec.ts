import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallmenuComponent } from './smallmenu.component';

describe('SmallmenuComponent', () => {
  let component: SmallmenuComponent;
  let fixture: ComponentFixture<SmallmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
