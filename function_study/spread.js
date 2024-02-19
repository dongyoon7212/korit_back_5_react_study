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

console.log(purpleCuteSlime)