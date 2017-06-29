import { HomeComponent } from 'app/pages/home/home.component';
import { NgModule } from '@angular/core';
import { ContactComponent } from 'app/pages/contact/contact.component';

@NgModule({
    declarations: [ContactComponent],
    exports: [ContactComponent]
})
export class ContactModule { }
