#ifdef _MSC_VER
#define _CRT_SECURE_NO_WARNINGS
#endif

#include <iostream>
#include <cstdio	>
#include <cstdlib>
using namespace std;
/*
	scanf ������ vs EoT

	������: ���� �����͸� �Է¹��� ��, �����͸� �������ִ� ���� => white space.
	EoT: ���ڿ��� �Է¹��� ��, ���ڿ��� ���� �˸��� ���� => �⺻������ \n

	*** ����ڰ� �Է��� ������, �Է� ��Ʈ���� \n�� �����ִµ�,
	������ �ܿ��� ���� �Է½� ���� ����.
	������ ���ڿ��� ���ڴ� ��� �ɱ�??
*/




int main() {

	int num1 = 0, num2 = 0;
	char a = ' ', b = ' ';

	char arry[100] = { 0, };
	// printf("%c \n", arry[0]); �ƽ�Ű�ڵ忡�� 0�� nul�� �ǹ�.


	// Case 1.

	/*
	scanf("%d", &num1);
	scanf("%d", &num2);

	printf("Num1: %d, Num2: %d\n", num1, num2);
	*/

	// ���ڿ��� �ƴ� ���ڸ� ������ �Է½ÿ��� ���ۿ� �����ִ� \n �Ű��� �Ƚ��൵ ��.

	// Case 2.

	/*
	scanf("%c", &a);
	scanf("%c", &b);

	printf("A: %c, B: %c\n", a, b);
	*/

	// A �Է� ��, B�� �Է¹ޱ� ���� �ڵ����� \n(���� ����) �ԷµǾ� ��µ�.


	// Case 3.

	/*scanf("%c", &a);
	scanf("%d", &num1);

	printf("A: %c, Num1: %d\n", a, num1);*/


	// ���� �Է� ��, ������ �Է¹����� ���������� \n ���� ����.

	// Case 4.

	/*scanf("%99s", arry);
	scanf("%c", &a);

	printf("�Է¹��� ���ڿ�: %s, �Է¹��� ����: %c\n", arry, a);*/

	// ����������, ���ڿ� ������ \n ���ڰ� char ���� �Էµ�.

	// Case 5. 

	//scanf("%99s", arry);
	////scanf("%c", &a);
	//scanf(" %c", &b);

	//printf("�Է¹��� ���ڿ�: %s, �Է¹��� ����2: %c\n", arry, a, b);

	// ���⼭ ������ whitespace (space)�� ���� \n�� �����ؼ� �� ���ڸ� �����ϰ� ��.



	// Case 6. ���ڿ��� EoT �����ϱ�.

	/*scanf("%99[a-z]s", arry);
	printf("%s\n", arry);*/

	// a-z �� �ƴ� �͵��� �� EoT�� �ۿ��Ͽ� ���ڿ� ���� \0�� �� ���� ���� �� �� �ִ�.

	// Case 7. ���ڿ� EoT�� ���� �Է� �� ���ۿ� �����ִ°�?

	scanf("%99[a-z]s", arry);
	
	//scanf("%99[^\n]s", arry);  // \n�� �ƴ� ��� ���ڸ� �޾ƶ� => \n���� end of text.

	scanf("%c", &a);

	printf("%s\n", arry);
	printf("%c\n", a);

	// ����������, ������ EoT�� �Է� �������� ���ۿ� ���� �ȴ�.
	// ���۸� ���� �۾� �ʿ�.




}