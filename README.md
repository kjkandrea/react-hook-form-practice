# react-hook-form-practice
react-hook-form 요래조래 다루어보기

## 용어 사전

* 양식 : form 과 같은 제출가능한 서식을 의미

## 유지보수 측면에서의 양식

* field 들을 재사용성 있게 컴포넌트 단위로 **조합이 가능하도록** 구성하고싶다.
* Form 을 field 들의 집합으로 바라보고 각 필드의 validation 등 세부사항을 최대한 은닉하고 싶다.

### field 들을 재사용성 있게 컴포넌트 단위로 **조합이 가능하도록** 구성하고싶다.

Dot Notation 으로 구성된 React 컴포넌트로 각 필드들을 `Field.Email`, `FieldSet.Password` 등으로 명시적으로 제공하면 어떨까함

## 기술적 측면에서의 양식

* 값을 입력할 때에 rerender 등 성능 누수가 없도록 계층을 구성하고 싶다.

## 검색 용도의 양식

* queryParam 바인딩 등 검색 양식이 갖추어야하는 세부사항을 은닉하고 싶다.

