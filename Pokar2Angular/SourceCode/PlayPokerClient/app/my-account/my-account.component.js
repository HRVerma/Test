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
var http_1 = require("@angular/http");
var index_1 = require("../_services/index");
var pass_service_1 = require("../_services/pass.service");
var forms_1 = require("@angular/forms");
var myAccount_service_1 = require("../_services/myAccount.service");
var MyAccountComponent = (function () {
    function MyAccountComponent(router, myAccountService, alertService, _fb, route, passService) {
        this.router = router;
        this.myAccountService = myAccountService;
        this.alertService = alertService;
        this._fb = _fb;
        this.route = route;
        this.passService = passService;
        this.model = {};
        console.log("MyAccountComponent ngOnInit====");
    }
    MyAccountComponent.prototype.ngOnInit = function () {
        console.log("inside NgOnit myAccount ");
    };
    MyAccountComponent.prototype.updatePlayerName = function () {
        var _this = this;
        this.model.userId = this.passService.getUserId();
        //this.model.playerName=this.model.playername;
        console.log("5467462313456d-->" + this.model.playername + "  userid " + this.passService.getUserId() + ":" + this.model.id);
        this.myAccountService.updatePlayerName(this.model).subscribe(function (data) {
            console.log("-*-*-*-*-* inside myaccountcomponent *-*-*-*-*--*");
            _this.alertService.success("Name has been updated Successfully.", false);
        }, function (error) {
            console.log("inside eror");
            _this.alertService.error("Somthing went wrong");
        });
    };
    MyAccountComponent.prototype.changePassword = function () {
        var _this = this;
        this.model.userId = this.passService.getUserId();
        //this.model.playerName=this.model.playername;
        console.log("5467462313456d-->" + this.model.playername + "  userid " + this.passService.getUserId() + ":" + this.model.id);
        if (this.passService.currentPassword === this.model.currentPassword) {
            if (this.model.newPassword === this.model.confirmNewPassword) {
                if (this.model.newPassword !== this.model.currentPassword) {
                    this.myAccountService.changePassword(this.model).subscribe(function (data) {
                        console.log("-*-*-*-*-* inside myaccountcomponent *-*-*-*-*--*");
                        _this.model.newPassword = '';
                        _this.model.confirmNewPassword = '';
                        _this.model.currentPassword = '';
                        _this.alertService.success("Password has been updated Successfully.", false);
                    }, function (error) {
                        console.log("inside eror");
                        _this.alertService.error("Somthing went wrong");
                    });
                }
                else {
                    this.alertService.error("New Password must be different from Current Password.", false);
                }
            }
            else {
                this.alertService.error("New Password and confirm password are not same.", false);
            }
        }
        else {
            this.alertService.error("Current Password is wrong.Please Enter Correct current Password.", false);
        }
    };
    MyAccountComponent.prototype.deleteAccount = function () {
        var _this = this;
        this.model.userId = this.passService.userId;
        this.myAccountService.deleteAccount(this.model.userId).subscribe(function (data) {
            console.log("-*-*-*-*-* inside deleteAccount *-*-*-*-*--*");
            _this.alertService.success("Account has been deleted Successfully.", false);
            _this.passService.setUserId(null);
            _this.router.navigate(['/login']);
        }, function (error) {
            console.log("inside eror");
            _this.alertService.error("Somthing went wrong");
        });
    };
    return MyAccountComponent;
}());
MyAccountComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'myAccount',
        templateUrl: 'my-account.html',
        styleUrls: ['../static/css/bootstrap.min.css', '../static/css/ie10-viewport-bug-workaround.css', '../static/css/offcanvas.css', '../static/css/style-input.css', '../static/css/customize.css'],
        providers: [http_1.HttpModule]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        myAccount_service_1.MyAccountService,
        index_1.AlertService, forms_1.FormBuilder, router_1.ActivatedRoute,
        pass_service_1.PassService])
], MyAccountComponent);
exports.MyAccountComponent = MyAccountComponent;
//# sourceMappingURL=my-account.component.js.map