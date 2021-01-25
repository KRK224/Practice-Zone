#ifdef _MSC_VER
#define _CRT_SECURE_NO_WARNINGS
#endif

#include <cstdio>
#include <cstdlib>

int main() {
	
	char a[4] = { 0, };
	char b[4] = { 0, };
	char tmp;
	int num1, num2;

	scanf("%s %s", a, b);

	tmp = a[0];
	a[0] = a[2];
	a[2] = tmp;

	tmp = b[0];
	b[0] = b[2];
	b[2] = tmp;

	num1 = atoi(a);
	num2 = atoi(b);

	if (num1 > num2)
		printf("%d", num1);
	else
		printf("%d", num2);

	return 0;
}