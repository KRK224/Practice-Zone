#ifdef _MSC_VER
#define _CRT_SECURE_NO_WARNINGS
#endif

#include <cstdio>
#include <cstdlib>

int main() {

	int num;
	char** pstr;

	scanf("%d", &num);

	pstr = (char**)calloc(sizeof(char*) * num);

	return 0;
}