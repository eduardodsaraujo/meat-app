import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RestaurantService } from "../../restaurants.service";
import { MenuItem } from "../menu-item/menu-item.model";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "mt-menu",
  templateUrl: "./menu.component.html"
})
export class MenuComponent implements OnInit {
  menu: Observable<MenuItem[]>;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.menu = this.restaurantService.menuOfRestaurant(
      this.route.parent.snapshot.params["id"]
    );
    console.log(this.menu);
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }
}
