import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseEntriesComponent } from './browse-entries.component';

describe('BrowseEntriesComponent', () => {
  let component: BrowseEntriesComponent;
  let fixture: ComponentFixture<BrowseEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
