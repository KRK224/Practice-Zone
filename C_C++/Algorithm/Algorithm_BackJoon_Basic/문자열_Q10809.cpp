#ifdef _MSC_VER
#define _CRT_SECURE_NO_WARNINGS
#endif

#include <iostream>
#include <cstring>
#include <cstdio>
#include <cstdlib>
using namespace std;

int main() {
	char result[26]; // ���ĺ� ���� �߰� ��ġ ����.
	char alphaCode[26]; // ���ĺ� �ƽ�Ű �ڵ� ����.
	char str[101] = { 0, }; // �Է� ���� ���ڿ�, nul�� �ʱ�ȭ.
	int i = 0; // str index �˻��.

	memset(result, -1, 26); // alphabet �迭 -1�� �ʱ�ȭ.


	for (int i = 0; i < 26; ++i) {
		alphaCode[i] = 'a' + i;
	} // �ҹ��� �ƽ�Ű �ڵ� ����.

	scanf("%s", str);

	
	while (str[i] != '\0') { // nul ���� �ƴ� ������ �˻�.
		for (int j = 0; j < 26; ++j) {
			if (str[i] == alphaCode[j]) { // ���� ��ġ�� ���� alphaCode ���ĺ��� ��ġ.
				if (result[j] == -1) { // ���� �߰����� �˻�.
					result[j] = i;
				}
				break; // ���� �ʰų�, ���� �߰��� �ƴ� �ÿ� ��������.
			}
			
		}
		++i;
	}

	for (int i = 0; i < 26; ++i) {
		printf("%d ", result[i]);
	}

	return 0;
}