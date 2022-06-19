# 멋쟁이 사자처럼 10기 FE 4주차 과제 🦁

# 실습 1번문제

InputSample 컴포넌트는 name과 nickname을 입력받아서 render시키는 컴포넌트 입니다. 해당 기능을 수행하기 위해 주석이 있는 부분을 채워 기능을 완성시켜 봅시다<br>
![image](https://user-images.githubusercontent.com/77886826/167911379-d2877351-6507-4c26-8b49-fbb647980b0d.png)<br>
![image](https://user-images.githubusercontent.com/77886826/167911449-35a018d5-8405-42d2-ad4c-56e88af3a5e8.png)<br>

주석을 채워서 name과 nickname 을 입력받아 봅시다!
해당하는 페이지는 /component/input 페이지 입니다.

ex) <br>
![image](https://user-images.githubusercontent.com/77886826/167907952-0b89c5e1-db78-40c0-90f6-8e2ee8b54d88.png)
<br>
현재 상태입니다.<br>

https://user-images.githubusercontent.com/77886826/167908055-e3287bcf-5176-4188-8222-0773abc215d5.mov

<br>
다음과 같이 입력받을 때 name, nickname 등이 수정되도록 바꾸어 주세요 또한 reset 버튼을 사용하면 모든 입력값이 초기화되도록 해주세요!<br>
쉽게 말해서 위의 동영상과 완벽히 동일하게 구현하시면 됩니다!
<br>
+) 해당 페이지에서 useState()를 한번만 사용하신다면 선착순!! 제가 커피한잔 사드리겠습니다!

### 제출방법

앞선 과제들과 마찬가지로 pr에 해당문제의 번호와 동영상을 적어주세요!

# 실습 2번문제

우리를 아주 거슬리게 하는 경고가 있습니다...ㅠ

![image](https://user-images.githubusercontent.com/77886826/167908932-02e6913b-02e6-4774-8939-43125eb32082.png)
![image](https://user-images.githubusercontent.com/77886826/167909006-f5dfa5c9-b7b2-49c9-a71f-16db78a9dd4f.png)
경고를 직접 읽어보시고 문제를 해결해주세요!! 해당 오류를 읽어보면 useEffect의 deps에 count가 없다고 하는데 과연...?!

<br>
 ### 목표)
 해당 button을 클릭할 때마다 숫자가 count되어 올라가도록 만들어주세요!(오류 수정후에도)
 해당 경고의 발생원인과 해결방법을 꼭 적어주세요!
 해당 경고를 완벽하게 지워주세요!!

### 제한조건

- 해당 문제는 useState 와 useEffect를 모두 사용해야 합니다.
- useEffect의 deps에 해당하는 부분에서 eslint를 무시하는 방법은 사용하면 안됩니다.

# 실습 3번문제

대망의 끝판왕 계산기 컴포넌트를 제작합니다!
어떤 방법을 사용하셔도 괜찮습니다. 이번에는 통상적으로 알고있는 계산기로서의 기능이 다 들어가 있기만 하면 됩니다!! 디자인에 너무 부담가지지 않으셔도 좋습니다.

https://user-images.githubusercontent.com/77886826/167910647-88da0576-8467-4b1b-9849-48f78da49c15.mov

### 제한조건

- useState를 필수적으로 사용합니다.
- 마지막 = 버튼을 사용할 때 useEffect를 이용하여 값을 출력시킵니다.

***
### 해결방법
> + 실행코드
<img src="https://user-images.githubusercontent.com/102943250/174480505-0d10bbef-2528-44a8-833e-40e2c02a4024.jpg" />
<img src="https://user-images.githubusercontent.com/102943250/174480508-4dd6b3b9-cbe5-4a66-9128-da00aeee484a.jpg" />
<img src="https://user-images.githubusercontent.com/102943250/174480513-6383f391-c5c3-4eac-b028-0c2c1f570f7f.jpg" />
<img src="https://user-images.githubusercontent.com/102943250/174480519-fe6fa8fa-65dc-4c97-abae-caa2eb0849a0.jpg" />
<img src="https://user-images.githubusercontent.com/102943250/174480523-4ab58be5-47ed-407e-8ccb-85f4be3d0d53.jpg" />

+ 동영상 실행결과
<img src="https://user-images.githubusercontent.com/102943250/169687867-4e96bc8a-c678-4e53-9441-7e4afa1fda04.mp4">
- 누르면 나오긴하니 깨진 아이콘을 꼭 눌러볼것
