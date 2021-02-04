#ifdef _MSC_VER
#define _CRT_SECURE_NO_WARNINGS
#endif

#include <cstdio>
#include <cstdlib>
#include <cstring> // streln Çì´õ

int main() {
	int answer = 0, num;
	int mod = 0;

	scanf("%d", &num);
	while (num != 0) {
		mod = num % 10;
		num /= 10;
		answer += mod;
		
	}
	printf("%d", answer);
	return answer;
}
