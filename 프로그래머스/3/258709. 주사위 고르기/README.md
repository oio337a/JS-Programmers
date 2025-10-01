# [level 3] 주사위 고르기 - 258709 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/258709) 

### 성능 요약

메모리: 44.2 MB, 시간: 861.61 ms

### 구분

코딩테스트 연습 > 2024 카카오 겨울 인턴십

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 10월 02일 01:39:15

### 문제 설명

<p>A와 B가 <code>n</code>개의 주사위를 가지고 승부를 합니다. 주사위의 6개 면에 각각 하나의 수가 쓰여 있으며, 주사위를 던졌을 때 각 면이 나올 확률은 동일합니다. 각 주사위는 1 ~ <code>n</code>의 번호를 가지고 있으며, 주사위에 쓰인 수의 구성은 모두 다릅니다. </p>

<p>A가 먼저 <code>n / 2</code>개의 주사위를 가져가면 B가 남은 <code>n / 2</code>개의 주사위를 가져갑니다. 각각 가져간 주사위를 모두 굴린 뒤, 나온 수들을 모두 합해 점수를 계산합니다. 점수가 더 큰 쪽이 승리하며, <strong>점수가 같다면 무승부</strong>입니다.</p>

<p>A는 자신이 <strong>승리할 확률</strong>이 가장 높아지도록 주사위를 가져가려 합니다.</p>

<p>다음은 <code>n</code> = 4인 예시입니다.</p>
<table class="table">
        <thead><tr>
<th>주사위</th>
<th>구성</th>
</tr>
</thead>
        <tbody><tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#1</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">[1, 2, 3, 4, 5, 6]</font></font></td>
</tr>
<tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#2</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">[3, 3, 3, 3, 4, 4]</font></font></td>
</tr>
<tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#3</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">[1, 3, 3, 4, 4, 4]</font></font></td>
</tr>
<tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#4</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">[1, 1, 4, 4, 5, 5]</font></font></td>
</tr>
</tbody>
      </table>
<ul>
<li>예를 들어 A가 주사위 #1, #2를 가져간 뒤 6, 3을 굴리고, B가 주사위 #3, #4를 가져간 뒤 4, 1을 굴린다면 A의 승리입니다. (6 + 3 &gt; 4 + 1)</li>
</ul>

<p>A가 가져가는 주사위 조합에 따라, 주사위를 굴린 1296가지 경우의 승패 결과를 세어보면 아래 표와 같습니다.</p>
<table class="table">
        <thead><tr>
<th>A의 주사위</th>
<th>승</th>
<th>무</th>
<th>패</th>
</tr>
</thead>
        <tbody><tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#1, #2</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">596</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">196</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">504</font></font></td>
</tr>
<tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#1, #3</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">560</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">176</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">560</font></font></td>
</tr>
<tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#1, #4</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">616</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">184</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">496</font></font></td>
</tr>
<tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#2, #3</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">496</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">184</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">616</font></font></td>
</tr>
<tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#2, #4</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">560</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">176</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">560</font></font></td>
</tr>
<tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#3, #4</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">504</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">196</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">596</font></font></td>
</tr>
</tbody>
      </table>
<p>A가 승리할 확률이 가장 높아지기 위해선 주사위 #1, #4를 가져가야 합니다.</p>

<p>주사위에 쓰인 수의 구성을 담은 2차원 정수 배열 <code>dice</code>가 매개변수로 주어집니다. 이때, 자신이 승리할 확률이 가장 높아지기 위해 A가 골라야 하는 주사위 번호를 <strong>오름차순으로</strong> 1차원 정수 배열에 담아 return 하도록 solution 함수를 완성해 주세요. 승리할 확률이 가장 높은 주사위 조합이 유일한 경우만 주어집니다. </p>

<hr>

<h5>제한사항</h5>

<ul>
<li>2 ≤ <code>dice</code>의 길이 = <code>n</code> ≤ 10

<ul>
<li><code>n</code>은 2의 배수입니다.</li>
<li><code>dice[i]</code>는 <code>i+1</code>번 주사위에 쓰인 6개의 수를 담고 있습니다.</li>
<li><code>dice[i]</code>의 길이 = 6</li>
<li>1 ≤ <code>dice[i]</code>의 원소 ≤ 100</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">주사위</font></font></th>
<th><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">결과</font></font></th>
</tr>
</thead>
        <tbody><tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">[[1, 2, 3, 4, 5, 6], [3, 3, 3, 3, 4, 4], [1, 3, 3, 4, 4, 4], [1, 1, 4, 4, 5, 5]]</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">[1, 4]</font></font></td>
</tr>
<tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">[[1, 2, 3, 4, 5, 6], [2, 2, 4, 4, 6, 6]]</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">[2]</font></font></td>
</tr>
<tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">[[40, 41, 42, 43, 44, 45], [43, 43, 42, 42, 41, 41], [1, 1, 80, 80, 80, 80], [70, 70, 1, 1, 70, 70]]</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">[1, 3]</font></font></td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<p>문제 예시와 같습니다.</p>

<p><strong>입출력 예 #2</strong></p>
<table class="table">
        <thead><tr>
<th><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">주사위</font></font></th>
<th><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">구성</font></font></th>
</tr>
</thead>
        <tbody><tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#1</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">[1, 2, 3, 4, 5, 6]</font></font></td>
</tr>
<tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#2</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">[2, 2, 4, 4, 6, 6]</font></font></td>
</tr>
</tbody>
      </table>
<p>A가 주사위 #2를 가져갔을 때 승리할 확률이 가장 높습니다. A가 #2, B가 #1 주사위를 굴린 결과에 따른 승패는 아래 표와 같습니다.</p>
<table class="table">
        <thead><tr>
<th>주사위 결과</th>
<th><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">1 (나)</font></font></th>
<th><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">2(나)</font></font></th>
<th><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">3(나)</font></font></th>
<th><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">4(나)</font></font></th>
<th><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">5 (비)</font></font></th>
<th><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">6(나)</font></font></th>
</tr>
</thead>
        <tbody><tr>
<td><strong><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">2(아)</font></font></strong></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">승</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">무</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">패</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">패</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">패</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">패</font></font></td>
</tr>
<tr>
<td><strong><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">2(아)</font></font></strong></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">승</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">무</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">패</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">패</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">패</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">패</font></font></td>
</tr>
<tr>
<td><strong><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">4(아)</font></font></strong></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">승</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">승</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">승</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">무</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">패</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">패</font></font></td>
</tr>
<tr>
<td><strong><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">4(아)</font></font></strong></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">승</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">승</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">승</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">무</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">패</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">패</font></font></td>
</tr>
<tr>
<td><strong><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">6(아)</font></font></strong></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">승</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">승</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">승</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">승</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">승</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">무</font></font></td>
</tr>
<tr>
<td><strong><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">6(아)</font></font></strong></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">승</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">승</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">승</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">승</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">승</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">무</font></font></td>
</tr>
</tbody>
      </table>
<p><strong>입출력 예 #3</strong></p>
<table class="table">
        <thead><tr>
<th><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">주사위</font></font></th>
<th><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">구성</font></font></th>
</tr>
</thead>
        <tbody><tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#1</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">[40, 41, 42, 43, 44, 45]</font></font></td>
</tr>
<tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#2</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">[43, 43, 42, 42, 41, 41]</font></font></td>
</tr>
<tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#3</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">[1, 1, 80, 80, 80, 80]</font></font></td>
</tr>
<tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#4</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">[70, 70, 1, 1, 70, 70]</font></font></td>
</tr>
</tbody>
      </table>
<p><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">A가 가져가는 주사위 조합에 따라, 주사위를 굴린 1296가지 경우의 승패 결과를 세어보면 아래 표와 같습니다.</font></font></p>
<table class="table">
        <thead><tr>
<th><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">A의 주사위</font></font></th>
<th><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">승</font></font></th>
<th><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">무</font></font></th>
<th><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">패</font></font></th>
</tr>
</thead>
        <tbody><tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#1, #2</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">704</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">16</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">576</font></font></td>
</tr>
<tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#1, #3</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">936</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">24</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">336</font></font></td>
</tr>
<tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#1, #4</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">360</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">24</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">912</font></font></td>
</tr>
<tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#2, #3</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">912</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">24</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">360</font></font></td>
</tr>
<tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#2, #4</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">336</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">24</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">936</font></font></td>
</tr>
<tr>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">#3, #4</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">576</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">16</font></font></td>
<td><font dir="auto" style="vertical-align: inherit;"><font dir="auto" style="vertical-align: inherit;">704</font></font></td>
</tr>
</tbody>
      </table>
<p>따라서 A가 주사위 #1, #3을 가져갔을 때 승리할 확률이 가장 높습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges