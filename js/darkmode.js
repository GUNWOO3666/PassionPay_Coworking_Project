const STORAGE_KEY = "user-color-scheme";
const COLOR_MODE_KEY = "--color-mode";

const darkmodeBtn = document.querySelector("#darkmode-btn");

const getCSSCustomProp = (propKey) => {
  let response = getComputedStyle(document.documentElement).getPropertyValue(
    propKey
  );

  // Tidy up the string if there’s something to work with
  if (response.length) {
    response = response.replace(/\'|"/g, "").trim();
  }

  // Return the string response by default
  return response;
};

const applySetting = (passedSetting) => {
  let currentSetting = passedSetting || localStorage.getItem(STORAGE_KEY);

  if (!currentSetting) {
    // 만약 로컬 스토리지에 저장된 값이 없을 경우 기본값을 "light"로 설정
    currentSetting = "light";
  }

  document.documentElement.setAttribute("data-user-color-scheme", currentSetting);
  setButtonLabel(currentSetting);
};

const toggleSetting = () => {
  let currentSetting = localStorage.getItem(STORAGE_KEY);

  switch (currentSetting) {
    case null:
      currentSetting =
        getCSSCustomProp(COLOR_MODE_KEY) === "dark" ? "light" : "dark";
      break;
    case "light":
      currentSetting = "dark";
      break;
    case "dark":
      currentSetting = "light";
      break;
  }

  localStorage.setItem(STORAGE_KEY, currentSetting);

  return currentSetting;
};

const setButtonLabel = (currentSetting) => {
  darkmodeBtn.innerText = currentSetting === "dark" ? "☀" : "☾";
};

darkmodeBtn.addEventListener("click", (evt) => {
  evt.preventDefault();

  applySetting(toggleSetting());
});

applySetting(); // 로컬 스토리지에 저장된 값이 없을 경우 "light"로 시작
