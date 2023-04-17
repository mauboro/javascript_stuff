const chicken = () => egg();

const egg = () => chicken();

console.log(`${chicken()} came first.`)

