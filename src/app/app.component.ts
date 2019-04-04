import { FollowersGitService } from './services/followers-git';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  followers: any;

  constructor(private service: FollowersGitService) {}

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }
}
