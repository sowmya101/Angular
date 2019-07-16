import {Component} from "@angular/core";
import {loginService} from "../service/login.service";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
    selector:"LoginApp",
    templateUrl:"./login.component.html"}
)

export class loginComponent{
    private result:any;
    constructor(private _service:loginService){}

    public login(obj:any):any{
        return this._service.authenticate(obj).subscribe(res=>{
            this.result = res;
        },(err:HttpErrorResponse)=>{
            if(err.error instanceof Error){
                console.log("client side error");
            }
            else{
                console.log("server side error");
            }
        });
    }
}