function getLFromRgbValue(value) {
  var normalizedValue = value / 255;
  return 0.03928 > normalizedValue
    ? normalizedValue / 12.92
    : Math.pow((normalizedValue + 0.055) / 1.055, 2.4);
}

function getLFromRgbColor(r, g, b) {
  return (
    0.2126 * getLFromRgbValue(r) +
    0.7152 * getLFromRgbValue(g) +
    0.0722 * getLFromRgbValue(b)
  );
}

function getLFromHex(hex) {
  var [, r, g, b] = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return getLFromRgbColor(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16));
}

export default function isTextLegibleOverBackground(
  textColor,
  backgroundColor
) {
  var textLightness = getLFromHex(textColor),
    backgroundLightness = getLFromHex(backgroundColor);
  var contrast =
    (Math.max(textLightness, backgroundLightness) + 0.05) /
    (Math.min(textLightness, backgroundLightness) + 0.05);
  return contrast >= 3;
}
