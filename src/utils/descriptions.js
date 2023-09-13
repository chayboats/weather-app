const iconMap = {
  sunny: 'fa-sun',
  'partly cloudy': 'fa-cloud-sun',
  cloudy: 'fa-cloud',
  clear: 'fa-moon',
  haze: 'fa-smog',
  overcast: 'fa-smog',
  mist: 'fa-smog',
  fog: 'fa-smog',
  thunder: 'fa-cloud-bolt',
  blizzard: 'fa-snowflake',
  snow: 'fa-snowflake',
  sleet: 'fa-snowflake',
  rain: 'fa-cloud-showers-heavy',
  drizzle: 'fa-cloud-showers-heavy',
};

export default function determineIcon(description) {
  description = description.toLowerCase();

  for (const key of Object.keys(iconMap)) {
    if (description.includes('thunder')) {
      return iconMap['thunder'];
    } else if (description.includes(key)) {
      return iconMap[key];
    }
  }

  console.log('error');
  return 'fa-cloud';
}
