import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostAttiviComponent } from './post-attivi/post-attivi.component';
import { PostInattiviComponent } from './post-inattivi/post-inattivi.component';
import { PostComponent } from './post/post.component';
import { UtentiComponent } from './utenti/utenti.component';
import { CardutentiComponent } from './cardutenti/cardutenti.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'post',
    component: PostComponent,
  },
  {
    path: 'utenti/id',
    component: UtentiComponent,
  },

  {
    path: 'post/attivi',
    component: PostAttiviComponent,
  },
  {
    path: 'post/inattivi',
    component: PostInattiviComponent,
  },
  {
    path: 'utenti',
    component: UtentiComponent,
  },
  {
    path: 'cardutenti',
    component: CardutentiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
