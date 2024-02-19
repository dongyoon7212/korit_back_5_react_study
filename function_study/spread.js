const slime = {
    name: "슬라임",
};

const cuteSlime = {
    ...slime,
    attribute: "cute",
};

const purpleCuteSlime = {
    ...cuteSlime,
    color: "purple",
    name: "slime",
};

console.log(purpleCuteSlime);

// 배열 spread

const nums = [1, 2, 3, 4, 5];
const nums2 = [...nums, 6, 7, 8, 9, 10];
const nums3 = [...nums2.filter((n) => n % 2 === 0), 11, 12, 13, 14, 15];

console.log(nums3);
