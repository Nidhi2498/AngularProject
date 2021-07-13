import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency, getCurrencySymbol } from '@angular/common';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipePipe implements PipeTransform {

  transform(
    value: any,
    currencyCode: string ,
    display:
        | 'code'
        | 'symbol'
        | 'symbol-narrow'
        | string
        | boolean = 'symbol',
    digitsInfo: string,
    locale: string,
): string | null {

    switch(value) {
      case 'USD' : value.symbol('$'+ value);
                    break;
      case 'INR' : value.symbol('₹');
                    break;
      case 'CAD' : value.symbol('C$');
                    break;
      case 'EUR' : value.symbol('€');
                    break;
    }
  
    return formatCurrency(
      value,
      locale,
      getCurrencySymbol(currencyCode, 'wide'),
      currencyCode,
      digitsInfo,
    );
}

}
