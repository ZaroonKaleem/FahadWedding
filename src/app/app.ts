import { Component } from '@angular/core';
import { TapOverlayComponent } from './sections/tap-overlay/tap-overlay.component';
import { HeroComponent } from './sections/hero/hero.component';
import { CountdownComponent } from './sections/countdown/countdown.component';
import { ScheduleComponent } from './sections/schedule/schedule.component';
import { LocationComponent } from './sections/location/location.component';
import { DividerComponent } from './sections/divider/divider.component';
import { GiftsAndAttireComponent } from './sections/gifts-and-attire/gifts-and-attire.component';
import { RsvpBannerComponent } from './sections/rsvp-banner/rsvp-banner.component';
import { RsvpFormComponent } from './sections/rsvp-form/rsvp-form.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [TapOverlayComponent, HeroComponent, CountdownComponent, ScheduleComponent, LocationComponent, DividerComponent, GiftsAndAttireComponent, RsvpBannerComponent, RsvpFormComponent, FooterComponent],
  templateUrl: './app.html',
})
export class App {}
