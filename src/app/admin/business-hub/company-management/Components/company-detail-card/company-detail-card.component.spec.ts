import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailCardComponent } from './company-detail-card.component';

describe('CompanyDetailCardComponent', () => {
  let component: CompanyDetailCardComponent;
  let fixture: ComponentFixture<CompanyDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyDetailCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
