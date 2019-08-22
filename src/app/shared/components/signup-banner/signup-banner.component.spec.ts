import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupBannerComponent } from './signup-banner.component';

describe('SignupComponent', () => {
  let component: SignupBannerComponent;
  let fixture: ComponentFixture<SignupBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
