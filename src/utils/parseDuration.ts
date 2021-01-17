export const parseDuration = (duration: string): string => {
  const cleared = duration.slice(2).slice(0, -1);
  const durationArr = cleared.split(/[A-Z]/);
  
  if(durationArr.length < 2) {
    durationArr.unshift("00");
  }

  return durationArr.map((unit, index) => {
    if(index > 0 && unit.length < 2) {
      return `0${unit}`;
    }
    return unit;
  }).join(":");
}