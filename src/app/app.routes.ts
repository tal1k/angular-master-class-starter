import { Route } from "@angular/router";

import { ContactsListComponent } from "./contacts-list/contacts-list.component";
import { ContactsDetailComponent } from "./contacts-detail/contacts-detail.component";

export const APP_ROUTES: Route[] = [
    { path: '', component: ContactsListComponent },
    { path: 'contact/:id', component: ContactsDetailComponent },
    { path: '**', redirectTo: '/' }
];