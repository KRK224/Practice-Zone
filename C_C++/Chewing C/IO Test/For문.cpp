#ifdef _MSC_VER
#define _CRT_SECURE_NO_WARNINGS
#endif

#include <iostream>	
#include <cstdio>
using namespace std;

int main() {
	
	/*
	int N = 0;
	scanf("%d", &N);


	// �� �Ƕ�̵� �� ����ϱ�.

	for (int i = 0; i < N; ++i) {

		for (int k = 0; k < i; k++) {
			printf(" ");
		}
		for (int j = 0; j < 2 * (N - i) - 1; j++) {
			printf("*");
		}
		printf("\n");
	}

	// �Ƕ�̵� �� ����ϱ�.

	for (int i = 0; i < N; ++i) {
		for (int j = N - 1 - i; j > 0; --j) {
			printf(" ");
		}
		for (int k = 0; k < 2 * i + 1; ++k) {
			printf("*");
		}
		printf("\n");
	}

	*/
	
	// Q3 1000 ������ 3 �Ǵ� 5�� ����� �ڿ������� ���� ���Ѵ�.
	int sum = 0;
	int N = 0;

	scanf("%d", &N);

	for (int i = 1; i < N+1; ++i) {
		if (i % 3 == 0 or i % 5 == 0) {
			sum += i;

		}
		
	}

	printf("%d\n", sum);



	return 0;
}