import { getRandomAnimal } from '@acme/animal';
import { formatMessage } from '@acme/util';

export function zoo(): string {
  const { name, sound } = getRandomAnimal();

  const message = `${name} says ${sound}!`;

  return formatMessage('ZOO', message);
}
