import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuildComponent, Guild } from './create-guild.component';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have formgroup with empty name,description,type=casual', () => {
    expect(component.guildFG.value.guildName).toBe('');
    expect(component.guildFG.value.description).toBe('');
    expect(component.guildFG.value.type).toBe('casual');

    component.doSubmit(new Event('submit'));
    expect(component.guildFG.valid).toBeFalse();
  });

  it('should block when invalid form is submitted', () => {
    spyOn(component, 'doSubmit').and.callThrough();
    // Stub window.alert so tests don't open a dialog
    spyOn(window, 'alert');

    // Ensure the form is invalid initially and calling submit will trigger alert
    expect(component.guildFG.valid).toBeFalse();

    // Call the submit handler directly to avoid DOM timing issues in tests
    component.doSubmit(new Event('submit'));
    fixture.detectChanges();

    expect(component.doSubmit).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalled();
    expect(component.guildFG.valid).toBeFalse();
  });

  it('should have new field with name from valid form m when submitted', () => {
    spyOn(component, 'doSubmit').and.callThrough();

    const data: Guild = {
      guildName: 'Test Guild',
      description: 'Test Description',
      type: 'casual',
      acceptTerms: true,
      notificationPreference: { email: true, sms: false, inApp: false },
    };

    // Patch top-level values and nested notificationPreference explicitly
    component.guildFG.patchValue({ ...data });
    const notifGroup = component.guildFG.get('notificationPreference');
    if (notifGroup) {
      notifGroup.patchValue(data.notificationPreference);
    }

    fixture.detectChanges();

    // Form should be valid before submission
    expect(component.guildFG.valid).toBeTrue();

    // Call the submit handler directly to avoid DOM timing issues in tests
    component.doSubmit(new Event('submit'));
    fixture.detectChanges();

    // doSubmit should have been invoked and should have pushed a guild
    expect(component.doSubmit).toHaveBeenCalled();
    expect(component.guildCharacters?.length).toBeGreaterThan(0);
    expect(component.guildCharacters?.[0].guildName).toMatch(
      new RegExp(data.guildName, 'i')
    );

    // After submit the form is reset and therefore invalid
    expect(component.guildFG.valid).toBeFalse();
  });
});
