import { Component, OnInit , EventEmitter, Input, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { PostService } from './../post.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.scss'],
})
export class UtentiComponent implements OnInit {
  @Input() p!: Post;
  utenti: Post[] = [];
  persona: Post[] = [];

  constructor(private postSrv: PostService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getData();
    this.route.snapshot.paramMap.get('id');
  }

  getData() {
    this.utenti = this.postSrv.getUtenti();
    this.persona = this.postSrv.getprofile();
  }
}
