class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let n = nums.length;
        let map = new Map();

        for(let i = 0; i <n; i++){
           let need = target - nums[i];

              if(map.has(need)){
                return[map.get(need), i]
              }
              map.set(nums[i], i)
        }
        return [-1, -1]
    }
}
