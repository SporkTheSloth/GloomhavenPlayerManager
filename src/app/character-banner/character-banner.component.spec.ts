import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBannerComponent } from './character-banner.component';

describe('CharacterBannerComponent', () => {
  let component: CharacterBannerComponent;
  let fixture: ComponentFixture<CharacterBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
