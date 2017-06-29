import { forwardRef, Directive, Input, Attribute } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
    selector: '[isBob]',
    providers: [
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => IsBobValidator)
        }
    ]
})
export class IsBobValidator implements Validator {
    validate(c: FormControl) {
        if (!c.value || c.value.split(' ')[0] === 'Bob') {
            return null;
        }
        return { isBob: false };
    }
}
