#ifdef _MSC_VER
#define _CRT_SECURE_NO_WARNINGS
#endif

#include <iostream>
#include <cstring>
#include <cstdio>
#include <cstdlib>
using namespace std;

int main() {
	char result[26]; // 알파벳 최초 발견 위치 저장.
	char alphaCode[26]; // 알파벳 아스키 코드 저장.
	char str[101] = { 0, }; // 입력 받을 문자열, nul로 초기화.
	int i = 0; // str index 검사용.

	memset(result, -1, 26); // alphabet 배열 -1로 초기화.


	for (int i = 0; i < 26; ++i) {
		alphaCode[i] = 'a' + i;
	} // 소문자 아스키 코드 저장.

	scanf("%s", str);

	
	while (str[i] != '\0') { // nul 값이 아닐 때까지 검사.
		for (int j = 0; j < 26; ++j) {
			if (str[i] == alphaCode[j]) { // 현재 위치의 값이 alphaCode 알파벳과 일치.
				if (result[j] == -1) { // 최초 발견인지 검사.
					result[j] = i;
				}
				break; // 같지 않거나, 최초 발견이 아닐 시에 빠져나옴.
			}
			
		}
		++i;
	}

	for (int i = 0; i < 26; ++i) {
		printf("%d ", result[i]);
	}

	return 0;
}