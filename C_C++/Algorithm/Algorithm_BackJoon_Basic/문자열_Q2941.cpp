#ifdef _MSC_VER
#define _CRT_SECURE_NO_WARNINGS
#endif

#include <cstdio>
#include <cstring>

int main() {
	
	char str[101] = { 0, };
	char* p1 = str , *p2 = str;
	int cnt = 0, strLen =0;
	

	scanf("%s", str);
	strLen = strlen(str);

	while (*p1 != '\0') {
		p2 = p1 + 1;
		if (*p2 == '=' || *p2 == '-') {
			p1 = p2;
		}
		else if (*p2 == 'j') {
			if (*p1 == 'l' || *p1 == 'n')
				p1 = p2;
		}
		else if (*p2 == 'z') {
			if (*p1 == 'd') {
				p2++;
				if (*p2 == '=')
					p1 = p2;
			}
		}
		cnt++;
		p1++;
	}

	printf("%d", cnt);
	
	return 0;
}