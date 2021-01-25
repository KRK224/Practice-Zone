#ifdef _MSC_VER
#define _CRT_SECURE_NO_WARNINGS
#endif

#include <cstdio>
#include <cstdlib>
#include <cstring>

int main() {

	char* str;
	int strLen = 0, blnkCnt = 0;

	str = (char*)calloc(1000001, 1);
	scanf("%[^\n]s", str);
	strLen = strlen(str);

	for (int i = 0; i < strLen; ++i) {
		if (str[i] == ' ') {
			if (i != 0 && i != strLen-1)
				blnkCnt++;
		}
	}

	if (strLen == 1 && str[0] == ' ') {
		printf("0");
	}
	else
		printf("%d", ++blnkCnt);
	
	free(str);


	return 0;
}