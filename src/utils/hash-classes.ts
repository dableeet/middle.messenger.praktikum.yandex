import isObject from './is-object';

export default function hashClasses(
  dataForRender: Record<string, unknown>,
  styles: Record<string, string>,
) {
  const dataWithHashedClasses = { ...dataForRender };

  for (let key in dataWithHashedClasses) {
    let value = dataWithHashedClasses[key];

    if (typeof value === 'string' && key.toLowerCase().includes('class')) {
      const classes = value.split(' ');
      const classesWithHash = classes.map(
        (className: string) => styles[className],
      );

      dataWithHashedClasses[key] = classesWithHash.join(' ').trim();
    }

    if (isObject(value)) {
      dataWithHashedClasses[key] = hashClasses(value, styles);
    }

    if (Array.isArray(value)) {
      dataWithHashedClasses[key] = value.map((el) => hashClasses(el, styles));
    }
  }

  return dataWithHashedClasses;
}
