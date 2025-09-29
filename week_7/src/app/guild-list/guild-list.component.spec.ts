import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Guild } from '../create-guild/create-guild.component';
import { CommonModule } from '@angular/common';
import { GuildListComponent } from './guild-list.component';

describe('GuildListComponent', () => {
  let component: GuildListComponent;
  let fixture: ComponentFixture<GuildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildListComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should display newly created guilds', () => {
      const testGuild: Guild[] = [
        { guildName: 'Heroes', description: 'Brave warriors', type: 'casual', acceptTerms: true, notificationPreference: {email: true, sms: false, inApp: true}},
        { guildName: 'Mages', description: 'Wise spellcasters', type: 'competitive', acceptTerms: true, notificationPreference: {email: true, sms: true, inApp: false}}
      ];
      component.guildCharacters = testGuild;
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelectorAll('tr').length).toBe(3);
      expect(compiled.textContent).toContain('Heroes');
      expect(compiled.textContent).toContain('Mages');
    });

    it('should display a message when no guilds are present', () => {
      component.guildCharacters = [];
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.textContent).toContain('No guilds available.');
    });
});
