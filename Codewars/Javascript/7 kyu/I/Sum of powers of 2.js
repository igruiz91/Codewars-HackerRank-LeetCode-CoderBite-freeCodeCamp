const powers = n => {
    if (n === 1) return [1]
    let pow2 = 1
    let nums = []
    let resp = []
    if (n % 2 != 0) nums.push(1)
    while (n >= pow2) {
        pow2 *= 2
        pow2 > n ? null : nums.push(pow2)
    }
    let sum = 0
    nums = nums.reverse()
    for (let i = 0; i < nums.length; i++) {
        if (sum + nums[i] <= n) {
            resp.push(nums[i])
            sum += nums[i]
        }
    }
    return resp.reverse()
};

function powers2(n) {
    return n.toString(2).split``.reverse().map((v, i) => +v ? 2 ** i : 0).filter(v => v)
}

function raiz(num) {
    return Math.floor(Math.sqrt(num))
}

console.log(powers2(688));