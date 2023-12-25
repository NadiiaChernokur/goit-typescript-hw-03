class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }
  getSignature() {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
}

abstract class House {
  door: boolean;
  key: Key;
  tenants: object[];

  constructor(door: boolean, key: Key) {
    this.door = door;
    this.key = key;
  }
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(Person);
    }
  }
  abstract openDoor(enteredKey: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(false, key);
  }
  openDoor(enteredKey: Key): void {
    if (enteredKey.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is opened.");
    } else {
      console.log("Invalid key. The door remains closed.");
    }
  }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};

// Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, яка генерується
//  випадково при створенні об'єкта цього класу (наприклад Math.random()).
//  Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.

// Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key і зберігає їх
//  у приватному властивості key. Клас Person повинен мати метод getKey, який повертає збережений ключ.

// Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути
//  відкрита (true), або закрита (false), і key, яка зберігає об'єкт класу Key. У цьому класі також повинен
//   бути метод comeIn, який додає об'єкт класу Person у масив tenants, якщо door відкрита. Ваш абстрактний
//   клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.

// Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House.
//  Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем,
//   збереженим як key, то двері відчиняються.
