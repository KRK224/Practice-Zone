#ifdef _MSC_VER
#define _CRT_SECURE_NO_WARNINGS
#endif

#include <cstdio>
#include <cstdlib>

int selfNumber(int num);

int main() {

	int a[10001] = { 0, };
	int n;

	for (int i = 1; i < 10001; ++i) {
	
		n = i;
		if (a[n] == 1)
			continue;

		while (1) {
			n = selfNumber(n);
			if (n > 10000)
				break;
			else {
				if (a[n] == 0)
					a[n] = 1;
				else
					break;
			}
			
		}
	}

	for (int j = 1; j < 10001; ++j) {
		if (a[j] == 0)
			printf("%d\n", j);
	}

	return 0;
}

int selfNumber(int num) {
	int ans = num;
	
	do {
		ans += num % 10;
		num /= 10;
	} while (num != 0);

	return ans;	
}