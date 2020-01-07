import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CrudService {
    url: string;

    constructor(private http: HttpClient){

    }

    getAll(): Observable<any>{
        return this.http.get(this.url);
    }

    add(entity): Observable<any>{
        return this.http.post(this.url, entity);
    }

    update(entity): Observable<any>{
        
    }
}