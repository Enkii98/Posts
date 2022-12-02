import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() p!: Post;

  utenti: Post[] = [];

  constructor(private postSrv: PostService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.utenti = this.postSrv.getprofile();
  }
}
