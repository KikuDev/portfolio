import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersosComponent } from './persos.component';

describe('PersosComponent', () => {
  let component: PersosComponent;
  let fixture: ComponentFixture<PersosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
