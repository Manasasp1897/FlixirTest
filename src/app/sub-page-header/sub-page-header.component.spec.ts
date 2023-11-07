import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageHeaderComponent } from './sub-page-header.component';

describe('SubPageHeaderComponent', () => {
  let component: SubPageHeaderComponent;
  let fixture: ComponentFixture<SubPageHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubPageHeaderComponent]
    });
    fixture = TestBed.createComponent(SubPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
