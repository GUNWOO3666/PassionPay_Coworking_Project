const countButton = document.getElementById('countButton');
const resetButton = document.getElementById('resetButton');
const calendar = document.getElementById('calendar');
const dateForm = document.getElementById('dateForm');

function showCalendar() {
    calendar.classList.remove('hidden');
    dateForm.classList.remove('hidden');
    countButton.setAttribute('hidden', true);
    resetButton.classList.remove('hidden'); // 초기화 버튼 보이기
}

function resetCalculator() {
    const resultElement = document.querySelector('#result');
    const targetDateInput = document.querySelector('#targetDate');

    // 입력값 초기화
    targetDateInput.value = '';
    // 결과 초기화
    resultElement.innerHTML = '';

    // 로컬 스토리지에서 저장된 값 제거
    localStorage.removeItem('remainingDays');
    localStorage.removeItem('targetDate');

    // 탭 숨김 처리
    calendar.classList.add('hidden');
    dateForm.classList.add('hidden');
    countButton.removeAttribute('hidden'); // "count D-day" 버튼 다시 표시
    resetButton.classList.add('hidden'); // 초기화 버튼 숨기기
}

countButton.addEventListener('click', showCalendar);
resetButton.addEventListener('click', function (event){
    event.preventDefault();
    resetCalculator();
});

function calculateRemainingDays() {
    const targetDateInput = document.querySelector('#targetDate');
    const targetDateValue = targetDateInput.value;
    const resultElement = document.querySelector('#result');

    if (!targetDateValue) { // 날짜를 입력하지 않았을 때 경고
        alert("날짜를 선택해주세요.");
        return;
    }
    const targetDate = new Date(targetDateValue); // 사용자가 선택한 날짜로 Date 객체 생성
    const currentDate = new Date(); // 현재 시간을 Date 객체로 생성
    const timeDifference = targetDate - currentDate; // 두 날짜 객체 사이의 차이 계산
    const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // 차이를 밀리초에서 일 단위로 변환

    // 결과를 표시
    console.log(remainingDays);
    if (remainingDays === 0) {
        resultElement.innerHTML = `D-day!`;
    }
    else if (remainingDays < 0){
        resultElement.innerHTML = `D+${-remainingDays}`;
    }
    else {
        resultElement.innerHTML = `D-${remainingDays}`;
    }

    // 로컬 스토리지에 디데이 결과 저장
    localStorage.setItem('remainingDays', remainingDays);
    localStorage.setItem('targetDate', targetDateValue);
}

// 페이지가 로드될 때 로컬 스토리지에서 디데이 결과를 가져와 표시
window.onload = function() {
    const storedRemainingDays = localStorage.getItem('remainingDays');
    const storedTargetDate = localStorage.getItem('targetDate');
    const resultElement = document.querySelector('#result'); // resultElement 변수 추가

    if (storedRemainingDays !== null) { // 로컬 스토리지에 값이 있을 경우
        if (parseInt(storedRemainingDays) === 0) {
            resultElement.innerHTML = `D-day!`;
        } else if (parseInt(storedRemainingDays) < 0){
            resultElement.innerHTML = `D+${-parseInt(storedRemainingDays)}`;
        } else {
            resultElement.innerHTML = `D-${storedRemainingDays}`;
        }

        // 저장된 날짜를 선택한 상태로 복원
        const targetDateInput = document.querySelector('#targetDate');
        targetDateInput.value = storedTargetDate;

        // 저장된 값들에 따라 탭을 보여주거나 숨김 처리
        if (storedRemainingDays) {
            calendar.classList.remove('hidden');
            dateForm.classList.remove('hidden');
            countButton.setAttribute('hidden', true); // 버튼 숨기기
            resetButton.classList.remove('hidden'); // 초기화 버튼 보이기
        } else {
            calendar.classList.add('hidden');
            dateForm.classList.add('hidden');
            countButton.removeAttribute('hidden'); // 버튼 보이기
            resetButton.classList.add('hidden'); // 초기화 버튼 숨기기
        }
    } else {
        // 로컬 스토리지에 값이 없을 경우 (새로고침 등)
        calendar.classList.add('hidden');
        dateForm.classList.add('hidden');
        countButton.removeAttribute('hidden'); // "count D-day" 버튼 보이기
        resetButton.classList.add('hidden'); // 초기화 버튼 숨기기
    }
};