import { Component, OnInit } from '@angular/core';
import { AnimationService } from '@core/services/animation.service';
import { asap } from 'rxjs/internal/scheduler/asap';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public isLoading: boolean;

  constructor(
    private animationService: AnimationService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private meta: Meta,
    private title: Title
  ) {
    this.meta.addTags([
      {
        name: 'eCommerce.',
        content:
          'A new way to be healthy. Live well, ethical sourcing, local products, the brands you know and love. Healthy living, modernized.'
      },
      {
        name: 'Cookies',
        content: 'Cookies | eCommerce. - Simplicity in Healthy Living'
      },
      {
        name: 'Home',
        content: 'eCommerce. | eCommerce. - Simplicity in Healthy Living'
      },
      {
        name: 'Privacy',
        content: 'Privacy | eCommerce. - Simplicity in Healthy Living'
      },
      {
        name: 'Terms of Service',
        content: 'Terms of Service | eCommerce. - Simplicity in Healthy Living'
      },
      {
        name: 'About',
        content: 'About | eCommerce. - Simplicity in Healthy Living'
      }
    ]);
  }

  ngOnInit() {
    this.animationService.spinnerState.subscribe(isLoading =>
      asap.schedule(() => (this.isLoading = isLoading))
    );
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => this.activeRoute),
      map((route: any) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route: any) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    ).subscribe((event: any) => {
      this.animationService.addNavbarTransparentOnScrollEffect();
      this.title.setTitle(event['title']);
    });
  }
}
