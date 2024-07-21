import isObject from './is-object';

export default function hashClasses(dataForRender, styles) {
  const dataWithHashedClasses = dataForRender;

  for (let key in dataWithHashedClasses) {
    if (key.toLowerCase().includes('class')) {
      const classes = dataWithHashedClasses[key].split(' ');
      const classesWithHash = classes.map(
        (className: string) => styles[className],
      );

      dataWithHashedClasses[key] = classesWithHash.join(' ');
    }

    if (isObject(dataWithHashedClasses[key])) {
      hashClasses(dataWithHashedClasses[key], styles);
    }

    if (Array.isArray(dataWithHashedClasses[key])) {
      dataWithHashedClasses[key].forEach((el) => hashClasses(el, styles));
    }
  }

  return dataWithHashedClasses;
}
