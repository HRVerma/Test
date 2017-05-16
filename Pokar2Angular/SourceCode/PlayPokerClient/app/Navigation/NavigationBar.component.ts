/**
 * Created by akumar18 on 2/14/2017.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'navigationMenu',
    templateUrl:'NavigationBar.html'
})
export class NavigationBar{
    constructor(private router: Router) { }
    logOut()
    {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }
}