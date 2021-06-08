import { Component, OnInit } from '@angular/core';

// will live in global scope
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'summer-camp';

  ngOnInit(){
    particlesJS.load('particles', 'assets/particles.json', () => {
      console.log('particles.js config loaded');
    });
  }

}
