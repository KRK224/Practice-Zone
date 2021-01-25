#ifdef _MSC_VER
#define _CRT_SECURE_NO_WARNINGS
#endif

#include <cstdio>
#include <cstdlib>
#include <cstring>

int main() {
	
	char str[16] = { 0, };
	int* ph;
	int strLen = 0, time = 0;

	scanf("%s", str);
	strLen = strlen(str);

	ph = (int*)malloc(sizeof(int) * strLen);

	for (int i = 0; i < strLen; ++i) {
		switch (str[i]) {
		case 'A': case 'B': case 'C':
			ph[i] = 2;
			break;
		case 'D': case 'E': case 'F':
			ph[i] = 3;
			break;
		case 'G': case 'H': case 'I':
			ph[i] = 4;
			break;
		case 'J': case 'K': case 'L':
			ph[i] = 5;
			break;
		case 'M': case 'N': case 'O':
			ph[i] = 6;
			break;
		case 'P': case 'Q': case 'R': case 'S':
			ph[i] = 7;
			break;
		case 'T': case 'U': case 'V':
			ph[i] = 8;
			break;
		case 'W': case 'X': case 'Y': case 'Z':
			ph[i] = 9;
			break;
		}
	}

	for (int j = 0; j < strLen; ++j) {
		time += ph[j] + 1;
	}

	printf("%d", time);


	return 0;
}
