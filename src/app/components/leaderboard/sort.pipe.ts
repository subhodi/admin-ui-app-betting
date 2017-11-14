import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
    transform(array: Array<any>, orderField: string, orderType: boolean): Array<string> {
        if (array) {
            array.sort((a: any, b: any) => {
                const first = a[orderField];
                const second = b[orderField];
                let result;
                if (first < second) {
                    result = 1;
                } else if (first > second) {
                    result = -1;
                } else {
                    result = 0;
                }
                return orderType ? result : -1 * result;
            });
        }
        return array;
    }
}
