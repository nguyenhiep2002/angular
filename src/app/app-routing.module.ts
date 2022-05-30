import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './main/detail/detail.component';
import { ShopComponent } from './main/shop/shop.component';

const routes: Routes = [
  { path: '', component: ShopComponent},
  {path:'detail/:id',component:DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
