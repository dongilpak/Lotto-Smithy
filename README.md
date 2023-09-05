<h1 align="center">로또 대장간(Lotto Smithy)</h1>

> -   링크 : <https://lotto-smithy.netlify.app/>

---

## 기술스택

### Enviroment

<div>
    <img src="https://img.shields.io/badge/visualstudiocode-007acc?style=for-the-badge&logo=visualstudiocode&logoColor=white">
    <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
    <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>

### Config

<div>
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
</div>

### Development

<div>
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
    <img src="https://img.shields.io/badge/typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white">
    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
    <img src="https://img.shields.io/badge/redux-764abc?style=for-the-badge&logo=redux&logoColor=white">
</div>

---

## 제작기간

-   2개월

---

## 개발하게 된 이유

평소 로또를 구매하면서 일일이 번호를 선택하는 것에 대한 어려움을 항상 가지고 있었습니다.

로또가 무작위 숫자를 조합하여 당첨이 된다는 것은 알고 있지만 그래도 사람인지라 거기서 법칙을
찾아내어 숫자를 조합하는데 어느정도 도움이 되는 것이 있으면 좋겠다는 생각이 들었습니다.

그래서 생각한 것이 로또를 자동으로 구매할 때의 방식을 구현해서 개별적인 번호 조합이 아닌
번호의 목록의 조합을 선택하는 방식을 택하여 로또 구매시 번호에 대한 고민을 조금 줄여보자는
생각에 이 프로젝트를 개발하게 되었습니다.

## 주요기능

### 회차정보 표시

-   기본적인 회차 정보 표시 - 날짜, 당첨금, 당첨번호, 다음 로또 구매까지 남은 시간 표시

### 번호 추출 기능

-   원하는 로직 및 게임 수 선택
-   선택된 정보에 따라 생성된 로또 번호 목록 표시

<p>
  <img src="https://github.com/dongilpak/Lotto-Smithy/assets/96467200/f6569c0e-40e9-443b-a4ae-d7efe513a302">
</p>

### 번호 저장 및 삭제

-   원하는 번호 목록 저장 및 삭제 가능
-   필요에 따라 번호 목록 이미지 저장 가능(PC)
-   모바일의 경우 저장 할 수 있게 이미지로 표시

<p>
  <img src="https://github.com/dongilpak/Lotto-Smithy/assets/96467200/a7c1943b-cc9e-4f9d-93a2-87faf380078e">
</p>

### 추천번호 목록

-   6개의 로직 중 5개를 선택하여 표시, 새로고침 가능

---

## 문제해결

로또 당첨 결과 값을 가져오기 위해서 url을 연결해서 데이터를 가져오려 했을때 CORS 문제에 걸렸습니다.

이번 프로젝트를 진행할때 백엔드 개발은 고려하고 있지 않았기 때문에 어떻게 할까 고민을 했습니다.

결국 서버 데이터를 받기 위한 proxy용 서버를 expressjs를 이용해서 만들고 git-pages를 이용해서
연결할 수 있는 외부 서버를 설정하고 데이터를 가져오는 루트로 설정하였습니다.
