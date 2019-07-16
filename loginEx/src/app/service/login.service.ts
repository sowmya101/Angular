import {Injectable, Inject} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";
@Injectable()
export class loginService{
constructor(private _http:Http){}

public authenticate(obj:any):any{
    return this._http.post("http://localhost:8080/staticfile",obj)
            .map((res:Response)=>{
                return res.json();
            }).catch(this._handleError)
}
public _handleError(err){
    console.error("error raised...!!");
    return Observable.throw(err ||"Internal server error");
}
}