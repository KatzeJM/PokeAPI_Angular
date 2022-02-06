import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeStacksComponent } from './poke-stacks.component';

describe('PokeStacksComponent', () => {
  let component: PokeStacksComponent;
  let fixture: ComponentFixture<PokeStacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeStacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeStacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
