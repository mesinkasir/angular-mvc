import { Component, OnInit } from '@angular/core';
import { Nav } from '../model/nav.model';
@Component({
  selector: 'my-nav',
  templateUrl: '../view/widget/nav/nav.component.html',
})
export class NavComponent implements OnInit {
  Navs: Nav[] = [
    new Nav('Home', '/'),
    new Nav('About', '/about'),
    new Nav('Services', '/services'),
    new Nav('Contact', '/contact'),
  ];

  constructor() {}
  ngOnInit() {}
}
