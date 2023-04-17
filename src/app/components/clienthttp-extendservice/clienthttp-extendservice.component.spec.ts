import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienthttpExtendserviceComponent } from './clienthttp-extendservice.component';

describe('ClienthttpExtendserviceComponent', () => {
  let component: ClienthttpExtendserviceComponent;
  let fixture: ComponentFixture<ClienthttpExtendserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienthttpExtendserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienthttpExtendserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
