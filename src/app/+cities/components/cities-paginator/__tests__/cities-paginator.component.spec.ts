import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CitiesPaginatorComponent } from '../cities-paginator.component';

describe('CitiesPaginatorComponent', () => {
  let component: CitiesPaginatorComponent;
  let fixture: ComponentFixture<CitiesPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatPaginatorModule],
      declarations: [CitiesPaginatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesPaginatorComponent);
    component = fixture.componentInstance;
    component.pageNumber = 3;
    component.pageSizeOptions = [5, 10, 25, 100];
    component.size = 10;
    component.totalElements = 230;
    fixture.detectChanges();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should emit page info on page change', () => {
    const pageChangeSpy = jest.spyOn(component.pageChange, 'emit');
    const pageEvent = {
      pageIndex: 2,
      pageSize: 20,
      length: 300,
    };
    expect(pageChangeSpy).not.toHaveBeenCalled();
    component.onPageChange(pageEvent);
    expect(pageChangeSpy).toHaveBeenCalledTimes(1);
    expect(pageChangeSpy).toHaveBeenCalledWith(pageEvent);
  });
});
