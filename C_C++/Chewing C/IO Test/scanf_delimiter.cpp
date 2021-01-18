#ifdef _MSC_VER
#define _CRT_SECURE_NO_WARNINGS
#endif

#include <iostream>
#include <cstdio	>
#include <cstdlib>
using namespace std;
/*
	scanf 구분자 vs EoT

	구분자: 여러 데이터를 입력받을 때, 데이터를 구분해주는 역할 => white space.
	EoT: 문자열을 입력받을 때, 문자열의 끝을 알리는 역할 => 기본적으로 \n

	*** 사용자가 입력을 끝내면, 입력 스트림에 \n이 남아있는데,
	문자형 외에는 다음 입력시 문제 없다.
	하지만 문자열과 문자는 어떻게 될까??
*/




int main() {

	int num1 = 0, num2 = 0;
	char a = ' ', b = ' ';

	char arry[100] = { 0, };
	// printf("%c \n", arry[0]); 아스키코드에서 0은 nul을 의미.


	// Case 1.

	/*
	scanf("%d", &num1);
	scanf("%d", &num2);

	printf("Num1: %d, Num2: %d\n", num1, num2);
	*/

	// 문자열이 아닌 숫자를 여러번 입력시에는 버퍼에 남아있는 \n 신경을 안써줘도 됨.

	// Case 2.

	/*
	scanf("%c", &a);
	scanf("%c", &b);

	printf("A: %c, B: %c\n", a, b);
	*/

	// A 입력 후, B를 입력받기 전에 자동으로 \n(개행 문자) 입력되어 출력됨.


	// Case 3.

	/*scanf("%c", &a);
	scanf("%d", &num1);

	printf("A: %c, Num1: %d\n", a, num1);*/


	// 문자 입력 후, 정수를 입력받으면 마찬가지로 \n 영향 없음.

	// Case 4.

	/*scanf("%99s", arry);
	scanf("%c", &a);

	printf("입력받은 문자열: %s, 입력받은 문자: %c\n", arry, a);*/

	// 마찬가지로, 문자열 다음은 \n 문자가 char 형에 입력됨.

	// Case 5. 

	//scanf("%99s", arry);
	////scanf("%c", &a);
	//scanf(" %c", &b);

	//printf("입력받은 문자열: %s, 입력받은 문자2: %c\n", arry, a, b);

	// 여기서 구분자 whitespace (space)가 앞의 \n을 구분해서 뒷 문자만 저장하게 함.



	// Case 6. 문자열의 EoT 지정하기.

	/*scanf("%99[a-z]s", arry);
	printf("%s\n", arry);*/

	// a-z 가 아닌 것들이 다 EoT로 작용하여 문자열 끝에 \0이 잘 들어가는 것을 알 수 있다.

	// Case 7. 문자열 EoT는 다음 입력 때 버퍼에 남아있는가?

	scanf("%99[a-z]s", arry);
	
	//scanf("%99[^\n]s", arry);  // \n이 아닌 모든 문자를 받아라 => \n만이 end of text.

	scanf("%c", &a);

	printf("%s\n", arry);
	printf("%c\n", a);

	// 마찬가지로, 지정된 EoT는 입력 마지막에 버퍼에 남게 된다.
	// 버퍼를 비우는 작업 필요.




}