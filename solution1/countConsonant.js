const CONSONANT = [
    "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ",
    "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ",
    "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ",
    "ㅋ", "ㅌ", "ㅍ", "ㅎ",
];

const FIRST_KOR_CODE = 44032;
const LAST_KOR_CODE = 55204

function countConsonant(str) {
    let result = {}
    CONSONANT.forEach(el => {
        result[el] = 0;
    })

    const filtered = filterKorean(str);

    for (let i = 0; i < filtered.length; i++) {
        const extracted = extractConsonant(filtered[i])
        result[extracted] = result[extracted] + 1
    }

    return result;
}

function filterKorean(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    const CHAR_CODE = str.charCodeAt(i);
    if (FIRST_KOR_CODE <= CHAR_CODE && CHAR_CODE < LAST_KOR_CODE) {
        result.push(str[i]);
    }
  }

  return result;
}

function extractConsonant(char) {
    let result;
    const INTERVAL = 588;
    const CHAR_CODE = char.charCodeAt(0)

    for (let i = 0; i < CONSONANT.length; i++) {

        if ((FIRST_KOR_CODE + INTERVAL * i) <= CHAR_CODE && CHAR_CODE < FIRST_KOR_CODE + INTERVAL * (i + 1)) {
            result = CONSONANT[i];
            break;
        }
    }
    return result;
}

console.log(countConsonant("한글 문자를 입력해주세요."))