<h1 align="center">로또 대장장이(Lotto Smithy)</h1>

> -   링크 : <https://lotto-smithy.netlify.app/>

---

## 사용한 언어(라이브러리)

    * React, typeScript, redux

## 제작기간

    * 1개월

---

## 개발하게 된 이유

    * 평소 로또 당첨 번호를 보면서 내가 일일이 번호를 선택할 경우에 발생하는 뭘 선택해야 할 지에 대한 고민을 하는 시간이 어려웠습니다. 거기에 로또 번호를 자동으로 선택할 경우에 숫자를 미리 확인하지 못하는 점이 아쉽게 느껴졌습니다.   그래서 6가지 로또 숫자 배열을 생성해내는 로직을 구현했습니다. 이를 통해 번호 선택에 대한 고민을 줄였고, 자동으로 숫자를 뽑을 때 미리 숫자를 볼 수 있다는 느낌으로 고민했던 점을 구현했습니다.   특정 조건에서 각각 다른 숫자 배열을 획득하고 이를 사용자가 선택하고 다시 조합하면서 당첨 확률을 높이고자 하였습니다.   거기에 추가적으로 최근 당첨번호를 표시하고, 마지막에 추천번호 배열을 표시함으로써 생성 이외에 추가적인 기능을 제공하였습니다.

---

## 문제해결

    * 로또 당첨 결과 값을 가져오기 위해서 url을 연결해서 데이터를 가져오려 했을때 당연하게도 CORS 문제에 걸렸습니다. 이번 프로젝트를 진행할때 백엔드 개발은 고려하고 있지 않았기 때문에 어떻게 할까 고민을 했습니다.   결국 서버 데이터를 받기 위한 proxy용 서버를 만들고 git-pages를 이용해서 데이터를 가져오는 루트로 설정하였습니다.
