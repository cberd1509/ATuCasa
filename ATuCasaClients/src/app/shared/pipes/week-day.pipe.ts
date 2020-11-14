import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekDay'
})
export class WeekDayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    switch(value)
    {
      case 1: return "Lunes";
      case 2: return "Martes";
      case 3: return "Miércoles";
      case 4: return "Jueves";
      case 5: return "Viernes";
      case 6: return "Sábado";
      case 7: return "Domingo";
    }

    return null;
  }

}
