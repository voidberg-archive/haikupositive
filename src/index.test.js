import { expect } from 'chai';
import lib from './index';

describe('haikupositive', () => {
  describe('all', () => {
    it('should return 38 haikus', () => {
      expect(lib.all.length).to.equal(38);
    });
  });

  describe('all', () => {
    it('should return a haiku', () => {
      const haiku = lib.random();

      expect(lib.all).to.include(haiku);
    });

    it('should not return more than 38', () => {
      const haikus = lib.random(2000);

      expect(haikus.length).to.equal(38);
    });
  });
});
