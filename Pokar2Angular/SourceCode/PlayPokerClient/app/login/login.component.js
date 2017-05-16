"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../_services/index");
var pass_service_1 = require("../_services/pass.service");
var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService, passService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.passService = passService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        /*  this.authenticationService.logout();
  
          // get return url from route parameters or default to '/'
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';*/
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.userName, this.model.password)
            .subscribe(function (loginRes) {
            /*this.getData=JSON.stringify(data),
                ()=>console.log(this.getData),*/
            // this.loginRes=data.getAt(1);
            if (loginRes.userName == 'true') {
                _this.alertService.success('invalid username or password', true);
                _this.router.navigate(['/login']);
            }
            else {
                /*   this.alertService.success('', false);
                   this.passService.setUserId(loginRes.userId);
                   this.router.navigate(['/dashboard']);*/
                if (localStorage.getItem('currentUser') == loginRes.email) {
                    _this.passService.setUserId(loginRes.email);
                    _this.router.navigate(['/dashboard']);
                    _this.alertService.success('User already Login', true);
                }
                //this.alertService.success('', false);
                _this.passService.setUserId(loginRes.userId);
                _this.passService.currentPassword = loginRes.password;
                _this.router.navigate(['/dashboard']);
                localStorage.setItem('currentUser', loginRes.email);
            }
            /*  this.a
              ()=>console.log("Finished")*/
        });
        /* error => {
             this.alertService.error(error);
             this.loading = false;
         });*/
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'login.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        index_1.AuthenticationService,
        index_1.AlertService,
        pass_service_1.PassService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map