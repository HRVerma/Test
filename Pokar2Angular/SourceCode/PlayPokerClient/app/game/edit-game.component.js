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
var game_1 = require("../_models/game");
var index_1 = require("../_services/index");
var pass_service_1 = require("../_services/pass.service");
var forms_1 = require("@angular/forms");
var EditGameComponent = (function () {
    function EditGameComponent(router, gameService, alertService, _fb, route, passService) {
        this.router = router;
        this.gameService = gameService;
        this.alertService = alertService;
        this._fb = _fb;
        this.route = route;
        this.passService = passService;
        this.model = {};
        this.decks = [];
        //public story: any{};
        this.modelStoryArray = [];
        this.loading = false;
        this.isEdit = true;
        console.log(" ngOnInit====");
        //this.decks = this.gameService.getDecks();
        console.log(" call decks====" + JSON.stringify(this.decks));
        this.gguid = route.snapshot.params['guid'];
        console.log("........>" + this.gguid);
    }
    EditGameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = this._fb.group({
            userId: [''],
            gameId: [''],
            guid: [''],
            gameName: [''],
            description: [''],
            teamVelocity: [''],
            shareVelocity: [''],
            effortEstimation: [''],
            autoFlip: [''],
            voteAfterReveal: [''],
            deckId: [''],
            status: [''],
            createdDate: [''],
            //storyTimer: [''],
            //calculateScore:[''],
            deckType: [''],
            stories: this._fb.array([])
        });
        this.gameService.getDecks().subscribe(function (deck) { return _this.decks = deck; }, function (error) { return _this.errorMessage = error; });
        console.log("inside decks " + JSON.stringify(this.decks));
        this.gameService.getGameDetail(this.gguid).subscribe(function (p) {
            _this.game = p;
            console.log("--->Returned Json--->" + _this.game);
            _this.displayAddress();
        });
        console.log("inside getGameDetail " + JSON.stringify(this.game));
    };
    EditGameComponent.prototype.initAddress = function () {
        return this._fb.group({
            storyId: [''],
            storyTitle: [''],
            storyDescription: ['']
        });
    };
    EditGameComponent.prototype.addAddress = function () {
        var control = this.myForm.controls['stories'];
        control.push(this.initAddress());
    };
    EditGameComponent.prototype.displayAddress = function () {
        console.log("-------------- inside displayAddress() -------");
        var control = this.myForm.controls['stories'];
        console.log("control.length>>>>>" + control.length);
        console.log("game.stories.length>>>>>" + this.game.stories.length);
        var i = 0;
        while (i <= this.game.stories.length - 1) {
            console.log(i);
            console.log('displayAddress this.game.stories[i].storyTitle] ' + this.game.stories[i].storyTitle);
            control.push(this._fb.group({
                storyId: [this.game.stories[i].storyId],
                storyTitle: [this.game.stories[i].storyTitle],
                storyDescription: [this.game.stories[i].storyDescription]
            }));
            i++;
        }
        //(<FormGroup>this.myForm)
        //	.setValue(this.game, { onlySelf: true });
        //this.myForm.controls['gameName'].setValue('anthing here');
        this.myForm.setValue(this.game);
        //this.myForm.controls['stories'].setValue(this.game.stories)
    };
    EditGameComponent.prototype.removeAddress = function (i) {
        var control = this.myForm.controls['stories'];
        control.removeAt(i);
    };
    EditGameComponent.prototype.editGame = function (dd) {
        var _this = this;
        this.loading = true;
        console.log("--------- inside editGame");
        console.log(dd);
        console.log(JSON.stringify(dd));
        //this.model.stories=[this.modelStory];
        //console.log(this.model);
        console.log(this.modelStory);
        dd.userId = this.passService.userId;
        //this.gameService.create(this.model)
        this.gameService.editGame(dd)
            .subscribe(function (data) {
            _this.alertService.success('Game Edited successfully', true);
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            console.log("inside eror");
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    EditGameComponent.prototype.cancel = function () {
        console.log("cancel=========");
        this.router.navigate(['/dashboard/savedGames']);
    };
    return EditGameComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", game_1.Game)
], EditGameComponent.prototype, "game", void 0);
EditGameComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'createGame',
        templateUrl: 'edit-game.html',
        styleUrls: ['../static/css/bootstrap.min.css', '../static/css/ie10-viewport-bug-workaround.css', '../static/css/offcanvas.css', '../static/css/style-input.css', '../static/css/customize.css'],
        providers: [http_1.HttpModule, index_1.GameService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.GameService,
        index_1.AlertService, forms_1.FormBuilder, router_1.ActivatedRoute,
        pass_service_1.PassService])
], EditGameComponent);
exports.EditGameComponent = EditGameComponent;
//# sourceMappingURL=edit-game.component.js.map