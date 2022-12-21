// class : ES6부터 자바스크립트에서도 class 키워드를 지원함
// constructor(매개변수) : 자바스크립트의 생성자

// ES6 예제
class Shape {
  // 정적 멤버로 선언
  static create(x, y) {
    return new Shape(x, y);
  }
  // 클래스 멤버 변수, 생성자 안에서 this.name를 선언한 것과 같은 의미
  name = 'Shape';

  // 생성자
  // 생성자 안에서 this.변수명 으로 클래스의 멤버 변수를 선언함
  constructor(x, y) {
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  area() {
    return 0;
  }
}

var s = new Shape(0, 0);
var s1 = Shape.create(0, 0);
s.area(); // 0

// extends : 클래스를 상속받기 위한 키워드
class Circle extends Shape {
  constructor(x, y, radius) {
    // 부모 클래스의 생성자를 호출
    super(x, y);
    // 클래스 멤버 변수 radius 선언 및 매개변수의 값을 대입
    this.radius = radius;
  }
  area() {
    if (this.radius === 0) return super.area();
    return this.radius * this.radius;
  }
}

var c = new Circle(0, 0, 10);
c.area(); // 100
