import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root',
})
export class NavigateGuard implements CanLoad {
  constructor(private accountService: AccountService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.checkUserOnSession();
  }

  private checkUserOnSession(): boolean {
    if (this.accountService.userValue || localStorage.getItem('user')) {
      this.router.navigate(['/'], { replaceUrl: true });
      return false;
    }

    // Stay on Login Page
    return true;
  }
}
