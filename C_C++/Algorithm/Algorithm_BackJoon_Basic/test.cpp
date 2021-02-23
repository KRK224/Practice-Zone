#ifdef _MSC_VER
#define _CRT_SECURE_NO_WARNINGS
#endif

#include <string>
#include <vector>
#include <cstdio>

using namespace std;

void dfs_reculsive(int i, vector<int> nums, int result, int* answer) {
    if (i == nums.size() - 1) {
        if (result + nums[i] == 0) {
            (*answer) = *answer + 1;
        }
        else if (result - nums[i] == 0) {
            (*answer) = *answer + 1;
        }

        return;
    }


    dfs_reculsive(i + 1, nums, result + nums[i], answer);
    dfs_reculsive(i + 1, nums, result - nums[i], answer);
}

int solution(vector<int> numbers) {
    int answer = 0;
    int i = 0, result = 0;

    dfs_reculsive(i, numbers, result, &answer);



    return answer;
}

int main() {
    vector<int> numbers;
    int a =0;

    
    while (a != -1) {
        scanf("%d", &a);
        numbers.push(a);
    }
    
    return 0;
}