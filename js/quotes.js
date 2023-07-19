const quotes = [
    { main: "당신이 머물다 온 곳에서 눈은\n모든 걸 가두어 버리는 것이었다만\n이곳에서 폭설은\n좋은 것이라 해도 되겠지",
        sub: "/ 폭설, 김이강",
    },
    { main: "우리는 공원에 간다\n우리의 삶이 비슷하다는 것을 확인하려고",
    sub: "/ 한낮의 공원, 주민현",
    },
    { main: "저녁이 되면\n산은 고요해진다.\n바람이 곁을 달라고\n어두운 나무들을 흔들어보다가\n오히려 깊은 어둠에 갇혀 빠져나오지 못한다.",
    sub: "/김기택, 출퇴근길 풍경",
    },
    { main: "꿈속에서처럼 누가\n끈덕지게 나를 불러서 뒤를 돌아보았는데\n검은 물처럼\n아무도 없었다",
    sub: "/김행숙, 꿈속에서",
    },
    { main: "세상 모든 새들은\n잿빛 댐처럼 우주를 가둔 하늘을 틀어막고 있다",
    sub: "/김중일, 매일 무너지려는 세상",
    },
    { main: "나는 쓸쓸하다 다만\n무력할 뿐 무력한 세계에서\n건강할 뿐",
    sub: "/허수경, 우리는 같은 지붕 아래 사는가2",
    },

]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

// Math object : 수학 계산과 관련된 계산 기능을 포함한 객체
// Math.random() = 0~1사이의 숫자를 랜덤으로 송출함(0.4353423423)
// Math.random() * 10 = 1~10사이의 숫자를 송출 
// Matn.round(반올림), ceil(올림), floor(버림)

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

const formatQuote = (main, sub) => {
    const formattedMain = main.replace(/\n/g, "<br>");
    return `${formattedMain}<br>${sub}`;
  };
  
  quote.innerHTML = formatQuote(todaysQuote.main, todaysQuote.sub);
