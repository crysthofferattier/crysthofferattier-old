import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtyShellComponent } from './tty-shell.component';

describe('TtyShellComponent', () => {
  let component: TtyShellComponent;
  let fixture: ComponentFixture<TtyShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtyShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TtyShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
