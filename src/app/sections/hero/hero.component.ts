import { AfterViewInit, Component, ViewEncapsulation, inject } from '@angular/core';
import { TildaService } from '../../tilda.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HeroComponent implements AfterViewInit {
  private readonly tilda = inject(TildaService);

  ngAfterViewInit(): void {
    this.tilda.zeroBlock('2487446043');
    this.watchAndPlayVideo();
  }

  private watchAndPlayVideo(): void {
    const playVideo = (video: HTMLVideoElement) => {
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.play().catch(() => {});
    };

    // Play any video already in the DOM
    const existing = document.querySelector('#rec2487446043 video') as HTMLVideoElement | null;
    if (existing) playVideo(existing);

    // Watch for Tilda re-rendering the HTML element and inserting the video
    const observer = new MutationObserver(() => {
      const video = document.querySelector('#rec2487446043 video') as HTMLVideoElement | null;
      if (video && video.paused) playVideo(video);
    });

    const host = document.getElementById('rec2487446043');
    if (host) {
      observer.observe(host, { childList: true, subtree: true });
      // Disconnect after 8s — block should have settled by then
      setTimeout(() => observer.disconnect(), 8000);
    }

    // Fallback retries
    [600, 1500, 3000, 5000].forEach(delay =>
      setTimeout(() => {
        const video = document.querySelector('#rec2487446043 video') as HTMLVideoElement | null;
        if (video && video.paused) playVideo(video);
      }, delay)
    );
  }
}
