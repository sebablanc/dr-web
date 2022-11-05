export default function calculateDifferenceInDays(date: string): number{
    // parsea la fecha enviada
    let dateSent: Date = new Date(date);

    // obtiene la fecha actual
    let today: Date = new Date();

    // calcula la diferencia en tiempo
    var differenceInTime = today.getTime() - dateSent.getTime();
  
    // calculo la diferencia del tiempo en días;
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);

    // devuelve la diferencia
    return differenceInDays;
}