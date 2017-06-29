import { NgModule } from '@angular/core';
import { IsBobValidator } from 'app/validators/isBob';

@NgModule({
    declarations: [IsBobValidator],
    exports: [IsBobValidator]
})
export class ValidatorsModule { }
