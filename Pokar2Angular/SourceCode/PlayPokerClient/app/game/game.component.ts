import { Component ,Input} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpModule} from '@angular/http';
import { Story } from '../_models/story';
import { Game } from '../_models/game';
import { Deck } from '../_models/deck';
import { AlertService, GameService } from '../_services/index';
import {PassService} from '../_services/pass.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
    moduleId: module.id,
	selector: 'createGame',
    templateUrl: 'create-game.html',
	styleUrls:['../static/css/bootstrap.min.css','../static/css/ie10-viewport-bug-workaround.css','../static/css/offcanvas.css','../static/css/style-input.css','../static/css/customize.css'],
	providers:[HttpModule]
})

//export class GameComponent implements OnInit {
export class GameComponent{
public myForm: FormGroup;

	@Input() game: Game;

    public model: any={};
	public decks: Deck[]=[];
	public gameList: Game;
	//public story: any{};
	modelStoryArray: Story[]=[];
	modelStory: Story;
	loading = false;
	errorMessage: string;
	//isEdit:boolean=false;
	gguid: string;
	
	
	
    constructor(
        private router: Router,
        private gameService: GameService,
        private alertService: AlertService,private _fb: FormBuilder,private route: ActivatedRoute,
	private passService: PassService) {
		console.log(" ngOnInit====");
		 //this.decks = this.gameService.getDecks();
		console.log(" call decks===="+JSON.stringify(this.decks));
		
		this.gguid = route.snapshot.params['guid'];
		console.log("........>"+this.gguid);
		console.log("........>>>>>>>>>"+this.passService.userId);
		}
		
	ngOnInit() {
        this.myForm = this._fb.group({
            userId: [''],
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
			storyTimer: [''],
			calculateScore:[''],
			createdDate:[''],
			deckType:[''],
			storyCount:[''],
            stories: this._fb.array([
                this.initAddress()
            ])
        });
		
		 this.gameService.getDecks().subscribe(
            deck => this.decks = deck,
           error =>  this.errorMessage = <any>error);
		   console.log("inside decks "+JSON.stringify(this.decks));
		   
		   // this.gameService.getGameDetail(this.gguid).subscribe(p => {
		   // 		this.game = p;
			//    this.displayAddress();
		   // });
		   
		  // console.log("inside getGameDetail "+JSON.stringify(this.game));

    }
	
	initAddress() {
        return this._fb.group({
            storyId: [''],
			storyTitle: [''],
			storyDescription: [''],
			criteria: [''],
			effort: ['']
			
        });
    }
	
	addAddress() {
        const control = <FormArray>this.myForm.controls['stories'];
        control.push(this.initAddress());
    }

	// displayAddress() {
	// 	console.log("-------------- inside displayAddress() -------");
	// 	const control = <FormArray>this.myForm.controls['stories'];
	// 	console.log("control.length>>>>>"+control.length);
	// 	console.log("game.stories.length>>>>>"+this.game.stories.length);
	// 	let i:number=0;
	// 	while (i<this.game.stories.length-1) {
	// 		console.log(i);
	// 		control.push(this.initAddress());
	// 		i++;
	// 	}
	// }
	
	removeAddress(i: number) {
        const control = <FormArray>this.myForm.controls['stories'];
        control.removeAt(i);
    }

    register(dd: Game) {
        this.loading = true;
		console.log("--------- inside register");
		console.log(dd);
		console.log(JSON.stringify(dd));
			
			//this.model.stories=[this.modelStory];
			//console.log(this.model);
			
			console.log(this.modelStory);


		dd.userId=this.passService.userId;
        //this.gameService.create(this.model)
		this.gameService.create(dd)
            .subscribe(
                data => {
                    this.alertService.success('Game Created successfully', true);
                    this.router.navigate(['/dashboard']);
                },
                error => {
				console.log("inside eror");
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
	
	cancel() {
		console.log("cancel=========");
		this.router.navigate(['/dashboard/savedGames']);
	}
}
