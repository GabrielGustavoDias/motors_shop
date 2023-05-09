export const translateToPt = (timeString: string): string => {
  let ptString = "";

  const s = timeString.split(" ");
  if (s[1] === "years") {
    ptString += s[0] + " anos atrás";
  }

  if (s[1] === "year") {
    ptString += s[0] + " ano atrás";
  }

  if (s[1] === "months") {
    ptString += s[0] + " meses atrás";
  }

  if (s[1] === "month") {
    ptString += s[0] + " mes atrás";
  }

  if (s[1] === "days") {
    ptString += s[0] + " dias atrás";
  }

  if (s[1] === "day") {
    ptString += s[0] + " dia atrás";
  }

  if (s[1] === "hours") {
    ptString += s[0] + " horas atrás";
  }

  if (s[1] === "hour") {
    ptString += s[0] + " hora atrás";
  }

  if (s[1] === "minutes") {
    ptString += s[0] + " minutos atrás";
  }

  if (s[1] === "minute") {
    ptString += s[0] + " minuto atrás";
  }

  if (s[1] === "seconds") {
    ptString += s[0] + " segundos atrás";
  }

  if (s[1] === "second") {
    ptString += s[0] + " segundo atrás";
  }

  return ptString;
};
