import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//import { LayoutcltPageComponent } from "./pages/layoutclt-page/layoutclt-page.component";
//import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ProductoComponent } from "./components/producto/producto.component";

const routes: Routes = [
    {
        path: 'admin',
        component: ProductoComponent,
        //children: [
        //    { path:'inicio', component:HomePageComponent },
        //    { path:'**', redirectTo:'inicio'  }
        //]
    },
    {
        path:"**",
        redirectTo:'admin'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AdminRoutingModule {
    
}