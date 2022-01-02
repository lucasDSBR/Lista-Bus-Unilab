import { Http, Response, RequestOptions, Headers  } from '@angular/http';
import 'rxjs/add/operator/toPromise';


import { URL_API_LISTAS } from '../api/api.api';
import { Listas } from '../Model/listas.model';
export class ListasService{
    private url_api = URL_API_LISTAS;

    constructor(private http: Http){
        
    }
    //Buscar todos os usuarios:
    public getListas(): Promise<Listas[]>{
        return this.http.get(this.url_api)
        .toPromise()
        .then((resposta: any) => resposta.json())
    }

}