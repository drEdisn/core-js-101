function getIdGeneratorFunction(startFrom) {
  let num = startFrom;
  return () => {
    num += 1;
    return num - 1;
  };
}

const f0 = getIdGeneratorFunction(0);
for (let i = 0; i < 10; i += 1) {
  f0();
}
