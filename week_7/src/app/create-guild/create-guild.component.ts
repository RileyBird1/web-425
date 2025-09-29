import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule,
  FormSubmittedEvent,
} from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { GuildListComponent } from '../guild-list/guild-list.component';

export interface Guild {
  // guildName,description,type:competitive/casual/social educational
  guildName: string;
  description: string;
  type: 'competitive' | 'casual' | 'social' | 'educational';
  acceptTerms: boolean;
  notificationPreference: {
    email: boolean;
    sms: boolean;
    inApp: boolean;
  };
}
@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, GuildListComponent],
  template: `
    <!-- guildComp -->
    <div class="flex flex-col gap-4 w-100">
      <span>Guild</span>

      <div class="form-and-list flex-row gap-4">
        <form
          action=""
          class="guildForm flex flex-col gap-4 w-40"
          [formGroup]="guildFG"
          style
          (ngSubmit)="doSubmit($event)"
        >
          <div class="form-item flex flex-row">
            <label class="w-10" for="">Name: </label>
            <input
              class="flex-grow-1"
              type="text"
              formControlName="guildName"
            />
          </div>

          <div class="form-item flex flex-row">
            <label class="w-10" for="">Description: </label>
            <input
              class="flex-grow-1"
              type="text"
              formControlName="description"
            />
          </div>

          <div class="form-item flex flex-row">
            <label class="w-10" for=""> Type: </label>
            <select class="flex-grow-1" formControlName="type">
              <option value="">Select Type</option>
              <option *ngFor="let gType of guildTypes" [value]="gType.value">
                {{ gType.display }}
              </option>
            </select>
          </div>

          <div class="form-item flex flex-row">
            <label class="w-10" for=""> Acceptance: </label>
            <input
              class="flex-grow-1"
              type="checkbox"
              formControlName="acceptTerms"
            />
          </div>

          <form
            class="form-item flex flex-row gap-2"
            formGroupName="notificationPreference"
          >
            <label class="w-10" for=""> Notification: </label>
            <!-- class="flex-grow-1" option group -->
            <label class="w-10" for="notification.email" class="flex flex-row "
              >Email

              <input
                type="checkbox"
                id="notification.email"
                formControlName="email"
              />
            </label>

            <label class="w-10" for="notification.sms" class="flex flex-row "
              >Sms

              <input
                type="checkbox"
                id="notification.sms"
                formControlName="sms"
              />
            </label>

            <label class="w-10" for="notification.inApp" class="flex flex-row "
              >InApp

              <input
                type="checkbox"
                id="notification.inApp"
                formControlName="inApp"
              />
            </label>

            <!-- end notificationPreference form -->
          </form>

          <!-- submit -->
          <button class="submit-button" type="submit">Submit</button>
        </form>
        <app-guild-list [guildCharacters]="guildCharacters"></app-guild-list>

      </div>
    </div>
    <!-- end guildComp -->
  `,
  styles: ``,
})
export class CreateGuildComponent implements OnInit {
  guildCharacters: Guild[] = [];

  guildTypes = [
    { value: 'competitive', display: 'Competitive' },
    { value: 'casual', display: 'Casual' },
    { value: 'social', display: 'Social' },
    { value: 'educational', display: 'Educational' },
  ];

  guildFG: FormGroup = this.fb.group({
    guildName: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(5)]],
    type: [
      'casual',
      [
        Validators.required,
        Validators.pattern(/^(competitive|casual|social|educational)$/),
      ],
    ],
    acceptTerms: [false, [Validators.requiredTrue]],
    notificationPreference: this.fb.group({
      email: [true],
      sms: [false],
      inApp: [true],
    }),
  });

  constructor(private fb: FormBuilder) {
    this.guildFG.valueChanges.subscribe(() => {
      // value changes observed during development; intentionally left no-op for tests
    });
  }

  ngOnInit(): void {
    this.resetGuildForm();
  }

  doSubmit(event: Event) {
    event.preventDefault();
    // Submission handled; form value logged in dev only

    if (this.guildFG.invalid) {
      const invalidFields = Object.keys(this.guildFG.controls).filter(
        (key) => this.guildFG.get(key)?.invalid
      );
      return alert(JSON.stringify(invalidFields, null, 2));
    }

    this.guildCharacters.push(this.guildFG.value);
    this.resetGuildForm();
  }

  resetGuildForm() {
    this.guildFG.reset({
      guildName: '',
      description: '',
      type: 'casual',
      acceptTerms: false,
      notificationPreference: {
        email: false,
        sms: false,
        inApp: false,
      },
    });
  }
}
