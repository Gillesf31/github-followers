import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FollowersGitService extends DataService {
    constructor(http: HttpClient) {
        super('https://api.github.com/users/mosh-hamedani/followers', http);
    }
}