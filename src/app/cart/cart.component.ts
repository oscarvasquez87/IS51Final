import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { CastExpr } from '@angular/compiler';

export interface Iinventory {
  id: number;
  image: string;
  description: number;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  inventory: Array<Iinventory> = [];
  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
    this.inventory = await this.loadinventoryFromJson();
  }

  async loadinventoryFromJson() {
    const inventory = await this.http.get('assets/inventory.json').toPromise();
    return inventory.json();
  }

  addbike1() {
    const inventory: Iinventory = {
      id: null,
      image: null,
      description: null,
      price: null,
      quantity: null,
    };
    this.inventory.unshift(inventory);
  }
}
