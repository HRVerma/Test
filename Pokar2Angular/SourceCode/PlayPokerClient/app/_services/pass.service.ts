/**
 * Created by uvats on 2/2/2017.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'


@Injectable()
export class PassService {

   userId:number;
   public currentPassword:string;

    setUserId(id:number){
        this.userId=id;
}
    getUserId(): number{
        return this.userId;
    }
}