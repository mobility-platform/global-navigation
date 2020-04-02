function getLuminanceFromRgbValue(value) {
  const normalizedValue = value / 255;
  return 0.03928 > normalizedValue
    ? normalizedValue / 12.92
    : Math.pow((normalizedValue + 0.055) / 1.055, 2.4);
}

function getLuminanceFromRgbColor(r, g, b) {
  return (
    0.2126 * getLuminanceFromRgbValue(r) +
    0.7152 * getLuminanceFromRgbValue(g) +
    0.0722 * getLuminanceFromRgbValue(b)
  );
}

function getLuminanceFromHex(hex) {
  const [, r, g, b] = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return getLuminanceFromRgbColor(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16));
}

export function isTextLegibleOverBackground(textColor, backgroundColor) {
  const textLightness = getLuminanceFromHex(textColor),
    backgroundLightness = getLuminanceFromHex(backgroundColor);
  const contrast =
    (Math.max(textLightness, backgroundLightness) + 0.05) /
    (Math.min(textLightness, backgroundLightness) + 0.05);
  return contrast >= 4.5;
}

export function isDark(background) {
  return isTextLegibleOverBackground("#ffffff", background);
}

export function isLight(background) {
  return !isDark(background);
}

export function getContrastColor(background) {
  return isDark(background) ? "#ffffff" : "#333333";
}
