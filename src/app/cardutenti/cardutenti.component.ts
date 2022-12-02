import { Component, EventEmitter, Input,Output , OnInit } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-cardutenti',
  templateUrl: './cardutenti.component.html',
  styleUrls: ['./cardutenti.component.scss'],
})
export class CardutentiComponent implements OnInit {
  @Input() p!: Post;

  persona:any

  constructor(private utenti:PostService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  this.persona=this.utenti.getUtenti()
  this.route.snapshot.paramMap.get('id')
  }
}
