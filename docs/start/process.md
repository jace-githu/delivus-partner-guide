---
title: 배송 프로세스 한눈에
---

# 배송 프로세스 한눈에

주문 접수부터 완료·반송까지의 전체 판단 흐름입니다. <span class="pf-legend-item pf-legend-decision">◆ 파란 노드</span>는 분기 조건, <span class="pf-legend-item pf-legend-done">● 초록 노드</span>는 완료 지점이며, <span class="pf-legend-item pf-legend-issue">⚠ 이슈 태그</span>를 누르면 해당 처리 시나리오로 이동합니다.

<div class="pf-tree">

<div class="pf-node">
  <span class="pf-stage">Stage 1</span>
  <strong>주문 접수 · 정보 등록</strong>
  <p>주문 데이터 연동 — 수취인 주소·연락처·공동현관 출입정보 등록</p>
  <a class="pf-issue" href="/policy/undelivered">⚠ 출입정보 미기재 · 주소 오류</a>
</div>
<div class="pf-line"></div>

<div class="pf-node">
  <span class="pf-stage">Stage 2</span>
  <strong>출고 · 인계</strong>
  <p>화주사 물량 인계 — 미인계 건은 출고 완료 확인 후 배송 전환</p>
  <a class="pf-issue" href="/policy/claims">⚠ 배송 누락 · 일부 제품 누락</a>
</div>
<div class="pf-line"></div>

<div class="pf-node">
  <span class="pf-stage">Stage 3</span>
  <strong>허브 분류 · 스캔</strong>
  <p>물품 단위 스캔·라우트 배정 — 분류 완료 시 배송 시작 알림톡 자동 발송</p>
  <a class="pf-issue" href="/policy/claims">⚠ 스캔 누락 · 분실</a>
</div>
<div class="pf-line"></div>

<div class="pf-node">
  <span class="pf-stage">Stage 4 · 18:00~</span>
  <strong>배송 출발 · 배송 시도</strong>
  <p>기본 배송 장소는 문 앞 — 고객 협의 없는 임의 배송 불가. 악천후 시 안전 우선, 익일 전환 및 지연 안내 문자 발송</p>
</div>
<div class="pf-line"></div>

<div class="pf-decision">
  <strong>공동현관 출입 가능?</strong>
  <p>비밀번호 미기재·시간대 출입 불가 건물 여부 확인</p>
</div>

<div class="pf-branch">
  <span class="pf-branch-label pf-yes">가능</span>
  <div class="pf-done">
    <strong>문 앞 배송 완료</strong>
    <p>완료 사진 등록 → 완료 알림톡 자동 발송</p>
    <div class="pf-issues">
      <a class="pf-issue" href="/policy/claims">⚠ 오배송</a>
      <a class="pf-issue" href="/policy/claims">⚠ 완료 후 분실</a>
      <a class="pf-issue" href="/policy/claims">⚠ 고객 불만</a>
    </div>
  </div>
</div>

<div class="pf-line pf-line-labeled"><span>출입 불가</span></div>

<div class="pf-node">
  <span class="pf-stage">대응배송 · Step 1</span>
  <strong>고객 연락 → 5분 대기</strong>
  <p>22시 이전: 전화·세대 호출 / 22시 이후: 문자 발송</p>
</div>
<div class="pf-line"></div>

<div class="pf-decision">
  <strong>고객 응답?</strong>
</div>

<div class="pf-branch">
  <span class="pf-branch-label pf-yes">응답</span>
  <div class="pf-done">
    <strong>원하는 장소에 배송 완료</strong>
    <p>단, 주소지 변경은 불가</p>
  </div>
</div>

<div class="pf-line pf-line-labeled"><span>미응답</span></div>

<div class="pf-node">
  <span class="pf-stage">대응배송 · Step 2</span>
  <strong>대응배송 장소 순차 시도</strong>
  <p><b>1 무인택배함</b> → <b>2 경비실</b> → <b>3 우편함</b></p>
  <p class="pf-note">무인택배함: 비밀번호는 고객 연락처 뒤 4자리 · 지정 장소 외 임의 배송 불가<br>단독주택: 유동 인구 많은 대문 앞 불가, 우편함 대응만 허용</p>
</div>
<div class="pf-line"></div>

<div class="pf-decision">
  <strong>대응 가능한 장소 있음?</strong>
</div>

<div class="pf-branch">
  <span class="pf-branch-label pf-yes">있음</span>
  <div class="pf-done">
    <strong>대응배송 완료</strong>
    <p>배송 위치 촬영 + 앱 내 배송 장소 변경 등록</p>
  </div>
</div>

<div class="pf-line pf-line-labeled"><span>없음</span></div>

<div class="pf-node pf-alert">
  <span class="pf-stage">미배송 · 1차 시도 종료</span>
  <strong>미배송 처리 · 물품 반납</strong>
  <p>미배송 알림톡 즉시 발송 → 업무 종료 후 거점 반납</p>
  <a class="pf-issue" href="/policy/undelivered">⚠ 미배송 처리 시나리오</a>
</div>
<div class="pf-line"></div>

<div class="pf-decision">
  <strong>D+1 고객 컨택 성공?</strong>
  <p>고객센터에서 출입정보·대응 배송 장소 확인</p>
</div>

<div class="pf-branch">
  <span class="pf-branch-label pf-yes">성공</span>
  <div class="pf-done">
    <strong>2차 배송(재배송) 완료</strong>
    <p>확보한 출입정보로 D+1 배송 타임에 재배송</p>
  </div>
</div>

<div class="pf-line pf-line-labeled"><span>D+1 연락 불가 · 부재</span></div>

<div class="pf-node pf-alert">
  <span class="pf-stage">반송 · D+2</span>
  <strong>화주사 공유 후 반송</strong>
  <p>2회 시도 종료 — 다음 회수 간선을 통해 D+2에 화주사로 반송</p>
  <a class="pf-issue" href="/policy/returns">⚠ 반품 · 반납 시나리오</a>
</div>

</div>

## 대응배송 한눈에

| 구분 | 당일배송 기준 |
|---|---|
| 고객 연락 방법 | 22시 이전 전화·세대 호출 / 22시 이후 문자 발송 |
| 대기 시간 | 연락(발송) 후 **5분** |
| 고객 응답 시 | 고객이 원하는 장소에 배송 (주소지 변경 불가) |
| 고객 미응답 시 | 무인택배함 → 경비실 → 우편함 순 대응배송 |
| 대응 장소 없을 경우 | 미배송 처리(1차 종료) → D+1 고객 컨택 → 연락 성공 시 2차 배송 시도 |
| 최종 부재 시 | D+1 연락 불가·부재 시 반송 확정 → **D+2 화주사 반송** (총 2회 시도) |
