import { ContactsListComponent } from "./contacts-list/contacts-list.component";
import { Route } from "@angular/router";

export const APP_ROUTES: Route[] = [
    { path: '', component: ContactsListComponent },
    { path: '**', redirectTo: '' }
];