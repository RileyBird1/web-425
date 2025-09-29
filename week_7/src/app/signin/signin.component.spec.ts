import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';

class MockAuthService {
  signin(email: string, password: string) {
    return of(true);
  }
}

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninComponent, RouterModule.forRoot([])]
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signin method on form submit', () => {
    const signInSpy = spyOn((component as any).authService,'signin').and.callThrough();
    component.signinForm.controls['email'].setValue('test@example.com');
    component.signinForm.controls['password'].setValue('Password123');
    component.signin();
    expect(signInSpy).toHaveBeenCalledWith('test@example.com', 'Password123');
  });  
});
