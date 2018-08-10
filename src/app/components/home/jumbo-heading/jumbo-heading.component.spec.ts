import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboHeadingComponent } from './jumbo-heading.component';

describe('JumboHeadingComponent', () => {
  let component: JumboHeadingComponent;
  let fixture: ComponentFixture<JumboHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumboHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
