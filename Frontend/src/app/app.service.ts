import {Injectable} from '@angular/core';
import {environment} from './../environments/environment';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    private apiurl = environment.api;

    constructor(private router: Router, private http: HttpClient) {
    }


    getUsers(pageNumber) {
        return this.http.get(this.apiurl + 'users/' + pageNumber)
    }

    getUserFriends(userId) {
        return this.http.get(this.apiurl + 'users/' + userId + '/friends')
    }
}
