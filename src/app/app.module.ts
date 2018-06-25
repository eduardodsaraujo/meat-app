import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ROUTES } from "./app.route";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantComponent } from "./restaurants/restaurant/restaurant.component";
import { RestaurantService } from "./restaurants/restaurants.service";
import { RestaurantDetailComponent } from "./restaurants/restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "./restaurants/restaurant-detail/menu/menu.component";
import { ShoppingCartComponent } from "./restaurants/restaurant-detail/shopping-cart/shopping-cart.component";
import { MenuItemComponent } from "./restaurants/restaurant-detail/menu-item/menu-item.component";
import { ReviewsComponent } from "./restaurants/restaurant-detail/reviews/reviews.component";
import { ShoppingCartService } from "./restaurants/restaurant-detail/shopping-cart/shopping-cart-service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent
  ],
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(ROUTES)],
  providers: [
    RestaurantService,
    ShoppingCartService,
    { provide: LOCALE_ID, useValue: "pt-BR" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
