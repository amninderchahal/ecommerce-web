import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
import { AlertService } from '@core/services/alert.service';
import { asap } from 'rxjs/internal/scheduler/asap';
import { takeWhile } from 'rxjs/operators';
import { windowToken } from '@core/factories/window.provider';
import { ConstantService } from '@core/services/constant.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit, OnDestroy {
  public isSideNavbarOpen: boolean;
  public isLoggedIn: boolean;
  private isViewDestroyed = false;
  public constant;
  private destroyed$ = new Subject<void>();

  constructor(
    public authService: AuthService,
    private router: Router,
    private alertService: AlertService,
    public constantService: ConstantService,
    @Inject(windowToken) private window: any
  ) {
    this.constant = constantService.get();
    this.isSideNavbarOpen = false;
    this.authService.LogInState.pipe(
      takeWhile(() => !this.isViewDestroyed)
    ).subscribe(isLoggedIn =>
      asap.schedule(() => (this.isLoggedIn = isLoggedIn))
    );
  }

  ngOnInit() {
    const $ = this.window.$;
    $('.nav-link,.content-main').on('click', () => {
      $('.navbar-collapse').collapse('hide');
    });
  }

  onLogoutClick() {
    this.authService.logout();
    this.alertService.showSuccessAlert('You are logged out');
    this.router.navigate(['/'], { queryParams: { m: 'signin' } });
    return false;
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
