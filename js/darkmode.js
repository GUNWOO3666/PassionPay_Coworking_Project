const STORAGE_KEY = "user-color-scheme";
const COLOR_MODE_KEY = "--color-mode";

const darkmodeBtn = document.querySelector("#darkmode-btn");

// CSS Custom Property를 가져오는 함수
const getCSSCustomProp = (propKey) => {
  let response = getComputedStyle(document.documentElement).getPropertyValue(
    propKey
  );

  // 값이 있을 경우 문자열 가공
  if (response.length) {
    response = response.replace(/\'|"/g, "").trim();
  }

  // 기본적으로 문자열 response 반환
  return response;
};

// 사용자 설정을 적용하는 함수
const applySetting = (currentSetting) => {
  // 만약 로컬 스토리지에 저장된 값이 없을 경우 기본값을 "light"로 설정
  currentSetting = currentSetting || "light";

  // 사용자 설정을 HTML 요소에 반영
  document.documentElement.setAttribute("data-user-color-scheme", currentSetting);
  setButtonLabel(currentSetting);
};

// 설정을 변경하는 함수
const toggleSetting = () => {
  let currentSetting = localStorage.getItem(STORAGE_KEY);

  // 로컬 스토리지에 값이 없을 경우, 시스템 설정을 확인하여 대비적으로 반전
  currentSetting = currentSetting || (getCSSCustomProp(COLOR_MODE_KEY) === "dark" ? "light" : "dark");

  // 변경된 설정을 로컬 스토리지에 저장
  localStorage.setItem(STORAGE_KEY, currentSetting);

  // 변경된 설정 반환
  return currentSetting;
};

// 버튼 레이블 설정 함수
const setButtonLabel = (currentSetting) => {
  // 버튼 레이블을 설정에 따라 "☀" 또는 "☾"로 변경
  darkmodeBtn.innerText = currentSetting === "dark" ? "☀" : "☾";
};

// 다크 모드 버튼 클릭 이벤트 설정
darkmodeBtn.addEventListener("click", (evt) => {
  evt.preventDefault();

  // 설정 변경 후 적용
  const currentSetting = toggleSetting();
  applySetting(currentSetting);
});

// 초기 설정 적용 (로컬 스토리지에 저장된 값이 없을 경우 "light"로 시작)
applySetting(localStorage.getItem(STORAGE_KEY));
