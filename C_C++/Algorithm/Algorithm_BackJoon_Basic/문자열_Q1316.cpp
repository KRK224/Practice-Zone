#ifdef _MSC_VER
#define _CRT_SECURE_NO_WARNINGS
#endif

#include <cstdio>
#include <cstdlib>
#include <cstring> // streln 헤더

int main() {
	
	int strNum = 0, result = 0;
	char** dp_str;
	// int alphaGroup[26];

	scanf("%d", &strNum);
	dp_str = (char**)malloc(sizeof(char*) * strNum);

	// 각 str 크기 101 생성 및 입력 받음.
	for (int i = 0; i < strNum; ++i) {
		dp_str[i] = (char*)calloc(101,sizeof(char));
		scanf("%s", dp_str[i]);
	}
	
	for (int i = 0; i < strNum; ++i) {
		int strt = 0, end = 0, breakFlag = 0;
		int* alphaGroup = (int*)calloc(sizeof(int), 26);
		
		// 그룹 단어 체크
		while (dp_str[i][strt] != '\0' && breakFlag != 1) {
			for (int j = 0; j < 26; ++j) {
				if (dp_str[i][strt] == 'a' + j) {
					if (alphaGroup[j] != 0) {
						breakFlag = 1;
						break;
					}
					else {
						
						do {
							end++;
						} while (dp_str[i][end]==dp_str[i][strt]);

						alphaGroup[j] = end - strt;
						strt = end;
						break;
					}
					
				}				
			}
		}

		if (breakFlag != 1)
			result++;
		free(alphaGroup);
	}

	printf("%d", result);
	

	free(dp_str);
	


	return 0;
}