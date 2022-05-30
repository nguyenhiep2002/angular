import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderbaComponent } from './siderba.component';

describe('SiderbaComponent', () => {
  let component: SiderbaComponent;
  let fixture: ComponentFixture<SiderbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiderbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
