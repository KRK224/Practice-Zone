#include <string>
#include <vector>

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