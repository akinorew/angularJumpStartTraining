import { RouterModule } from '@angular/router';
import { ContactsAppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactsListComponent } from './contacts-list';
import { ContactsDetailComponent } from './contacts-detail';
import { ContactsEditorComponent } from './contacts-editor';
import { ContactsAppComponent } from './contacts.component';
import { ContactService } from './services/contact.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';

//same same
import { ContactsHeaderComponent } from './contacts-header';
// import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsListComponent,
    ContactsDetailComponent,
    ContactsEditorComponent,
    ContactsHeaderComponent
  ],
  providers: [ContactService],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ContactsAppRoutes)
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
