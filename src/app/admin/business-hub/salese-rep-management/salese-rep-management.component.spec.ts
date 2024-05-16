import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleseRepManagementComponent } from './salese-rep-management.component';

describe('SaleseRepManagementComponent', () => {
  let component: SaleseRepManagementComponent;
  let fixture: ComponentFixture<SaleseRepManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaleseRepManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaleseRepManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
