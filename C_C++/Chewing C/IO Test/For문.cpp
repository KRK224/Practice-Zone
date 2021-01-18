#ifdef _MSC_VER
#define _CRT_SECURE_NO_WARNINGS
#endif

#include <iostream>	
#include <cstdio>
using namespace std;

int main() {
	
	for (int i = 0, j = 9; i < 9; i++, j--) {
		printf("i = %d, j = %d\n", i,j);
	}

	return 0;
}