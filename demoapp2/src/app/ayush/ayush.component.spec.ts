import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyushComponent } from './ayush.component';

describe('AyushComponent', () => {
  let component: AyushComponent;
  let fixture: ComponentFixture<AyushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AyushComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AyushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
