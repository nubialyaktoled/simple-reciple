import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SweetPage } from './sweet.page';

describe('SweetPage', () => {
  let component: SweetPage;
  let fixture: ComponentFixture<SweetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SweetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
