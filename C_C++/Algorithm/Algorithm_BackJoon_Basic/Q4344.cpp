#ifdef _MSC_VER
#define _CRT_SECURE_NO_WARNINGS
#endif

#include <iostream>
#include <cstdio>
#include <cstdlib>
using namespace std;

int main() {

	int caseNum = 0;
	int* PstdNum;
	int* Pscore;
	double sum;
	double avg;
	double cntAvg;

	scanf("%d", &caseNum);
	PstdNum = (int*)calloc(sizeof(int), caseNum);

	for (int i = 0; i < caseNum; ++i) {
		sum = 0;
		avg = 0.;
		cntAvg = 0;

		scanf("%d", PstdNum + i);
		Pscore = (int*)calloc(sizeof(int), PstdNum[i]);

		for (int j = 0; j < PstdNum[i]; ++j) {
			scanf("%d", Pscore + j);
			sum += *(Pscore + j);
		}

		avg = sum / PstdNum[i];

		for (int j = 0; j < PstdNum[i]; ++j) {
			if (Pscore[j] > avg) // 평균을 넘는, 같은 학생은 포함하지 않음.
				cntAvg++;
		}

		printf("%.3f%%\n", cntAvg / PstdNum[i] * 100);

		free(Pscore);
	}

	free(PstdNum);

	return 0;
}