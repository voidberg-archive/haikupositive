import uniqueRandomArray from 'unique-random-array';
import haikus from './haikus.json';

const randomHaiku = uniqueRandomArray(haikus);

module.exports = {
  all: haikus,
  random: (count) => {
    if (count === undefined) {
      return randomHaiku();
    }

    const randomHaikus = [];
    const max = count > haikus.length ? haikus.length : count;

    for (let i = 0; i < max; i++) {
      randomHaikus.push(randomHaiku());
    }

    return randomHaikus;
  },
};
