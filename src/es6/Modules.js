// export : 변수, 함수, 클래스를 다른 파일에서 사용할 수 있도록 설정
// default export는 파일 하나당 하나만 가능함
// 사용법 :
// export 변수명;
// export {변수1, 변수2, ...};
// export default 변수명;

// import : 다른 파일이 제공하는 변수, 함수, 클래스를 불러와서 사용하도록 설정
// 사용법:
// import {변수1, 변수2, ...} from 파일명; // 일반 export로 지정된 것을 가져옴
// import 변수명; // default export로 설정된 것을 가져옴

import MyModule from './MyModule';
import { ModuleName } from './MyModule';
import { ModuleName as RenamedModuleName } from './MyModule';

function Func() {
  MyModule();
}
export const CONST_VALUE = 0;
export class MyClass {}
export default new Func();
