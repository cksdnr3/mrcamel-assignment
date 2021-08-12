const FIRST_KOR_CODE = 44032;
const LAST_KOR_CODE = 55204;
const INITIAL_SOUND_CODE = parseInt('0x1100', 16)

function countConsonant(str) {
    let result = {}
    for (let i = 0; i < 19; i++) {
        result[String.fromCharCode(INITIAL_SOUND_CODE + i)] = 0
    }

    const filtered = filterKorean(str);

    for (let i = 0; i < filtered.length; i++) {
        const initialSound = extractConsonant(filtered[i])
        result[initialSound] = result[initialSound] + 1
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
    const extractedCode = ((char.charCodeAt(0) - parseInt('0xac00', 16)) / 28) / 21;
	const initialSound = String.fromCharCode(extractedCode + INITIAL_SOUND_CODE);

	return initialSound;
}

// Test
console.log(countConsonant("사과1호랑이,고니 수박BT닭"))
