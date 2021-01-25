#ifdef _MSC_VER
#define _CRT_SECURE_NO_WARNINGS
#endif

#include <cstdio>
#include <cstdlib>
#include <cstring>

char mkUpper(char low);

int main() {
	int mostFreq = 0, chDup = 0;
	int result[26] = { 0, }; // error¿« ø¯¿Œ...
	int strLen;
	char* str;

	str = (char*)calloc(sizeof(char), 1000001);
	// printf("A: %d, a: %d \n", 'A', 'a'); // A: 65, a: 97

	scanf("%s", str);
	strLen = strlen(str);

	//printf("%d\n", strLen);

	for (int i = 0; i < strLen; ++i) {
		str[i] = mkUpper(str[i]);

		for (int j = 0; j < 26; ++j) {
			if (str[i] == 'A' + j) {
				result[j] += 1;
				break;
			}
		}

	}

	for (int i = 1; i < 26; ++i) {
		if (result[i] != 0) {
			if (result[i] > result[mostFreq]) {
				mostFreq = i;
				chDup = i;
			}
			else if (result[i] == result[mostFreq]) {
				mostFreq = i;
			}
			
		}
	}

	if (mostFreq == chDup) 
		printf("%c", 'A' + mostFreq);
	else
		printf("?");

	free(str);
	return 0;
}


char mkUpper(char low) {
	if ('a' <= low && low <= 'z')
		return low - 32;
	else if ('A' <= low && low <= 'Z')
		return low;
	
}