abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  talk() {
    console.log('talking melee')
  }

  specialMove() {
    console.log('specialmove melee')
  }
}

class LongRangeCharacter extends Character {
  talk() {
    console.log('talking long range')
  }

  specialMove() {
    console.log('specialmove long range')
  }
}

function presentation(character: Character) {
  character.talk();
  character.specialMove();
}

presentation(new MeleeCharacter);
presentation(new LongRangeCharacter);
