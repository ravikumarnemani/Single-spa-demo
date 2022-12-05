import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';
import { LoadingService } from './loading.service';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let loadingService : LoadingService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoadingComponent],
            providers: [
                LoadingService
            ]
        })
            .compileComponents();
    fixture = TestBed.createComponent(LoadingComponent);
    loadingService = jasmine.createSpyObj<LoadingService>(['loaderState']);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be ngOnInit', () => {
    component.ngOnInit();
    expect(component.ngOnInit).toBeTruthy();
  });
  
  it('should be ngOnDestroy', () => {
    component.ngOnDestroy();
    expect(component.ngOnDestroy).toBeTruthy();
  });

});
