// Verdier jeg trenger
// object høyde standard: 50
// object er mindre eller lik maks høyde på canvas
// samme verdi som object høyde
// object bredde standard: 50
// object bredde er mindre ller lik maks bredde på canvas
// samme verdi som object bredde
export function calculateGameSize() {
  let screenSizeHeight = window.screen.height;
  let screenSizeWidth = window.screen.width;
  console.log(screenSizeWidth);

  let units = {
    boxHeight: 50,
    maxCanvasHeight: 600,
    boxWidth: 50,
    maxCanvasWidth: 600,
    lineLength: 12,
  };
  let multiplier;

  if (screenSizeWidth > 1000 && screenSizeHeight > 900) {
    console.log("large");
    multiplier = 1.4;
    (units.boxHeight = units.boxHeight * multiplier),
      (units.maxCanvasHeight = units.maxCanvasHeight * multiplier),
      (units.boxWidth = units.boxWidth * multiplier),
      (units.maxCanvasWidth = units.maxCanvasWidth * multiplier),
      console.log(units);
    return units;
  } else if (screenSizeWidth >= 600) {
    console.log("medium");
    multiplier = 1;
    (units.boxHeight = units.boxHeight * multiplier),
      (units.maxCanvasHeight = units.maxCanvasHeight * multiplier),
      (units.boxWidth = units.boxWidth * multiplier),
      (units.maxCanvasWidth = units.maxCanvasWidth * multiplier),
      console.log(units);
    return units;
  } else if (screenSizeWidth <= 600) {
    console.log("small");
    multiplier = 0.6;
    (units.boxHeight = units.boxHeight * multiplier),
      (units.maxCanvasHeight = units.maxCanvasHeight * multiplier),
      (units.boxWidth = units.boxWidth * multiplier),
      (units.maxCanvasWidth = units.maxCanvasWidth * multiplier),
      console.log(units);
    return units;
  }
  console.log(units);
}
