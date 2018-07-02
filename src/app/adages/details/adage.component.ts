import {Component, OnInit} from '@angular/core';
import {AdagesService} from '../services/adages.service';

import {ActivatedRoute, Params, Router} from '@angular/router';

import {Adage} from '../Adage';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-adage',
  templateUrl: './adage.component.html',
  styleUrls: ['./adage.component.css']
})
export class AdageComponent implements OnInit {
  adage: Observable<Adage>;

  constructor(
    private adagesService: AdagesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.adage = adagesService.adage;
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const id = params['id'];
      this.adagesService.find(id);
    });
  }

}
