import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPhotoComponent } from './current-photo.component';

describe('CurrentPhotoComponent', () => {
  let component: CurrentPhotoComponent;
  let fixture: ComponentFixture<CurrentPhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentPhotoComponent]
    });
    fixture = TestBed.createComponent(CurrentPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
