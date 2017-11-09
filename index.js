function freeStdOutToArray(data) {
  return (
    data
      .split('\n')
      .filter( line => line !== '')
      .map(line => line.split(' ').filter(value => value !== ''))
  )
}

module.exports = function(data) {
  let lines = freeStdOutToArray(data);
  let systemMemoryInfo = {}
  let iterator = 1;
  do {
    let memType = lines[iterator][0]
      .toLocaleLowerCase()
      .replace(':', '');
    systemMemoryInfo[memType] = {};
    lines[iterator].shift();
    iterator++;
  } while(iterator < lines.length);

  const memTypeProps = lines.shift();

  memTypeProps.forEach(prop => {
    Object.keys(systemMemoryInfo).forEach(memType => {
      systemMemoryInfo[memType][prop] = null;
    });
  });

  Object.keys(systemMemoryInfo).forEach((memType, typeIndex) => {
    Object.keys(systemMemoryInfo[memType]).forEach((prop, propIndex) => {
      if(lines[typeIndex] && lines[typeIndex][propIndex]) {
        systemMemoryInfo[memType][prop] = lines[typeIndex][propIndex];
      }
    });
  });
  
  return systemMemoryInfo;
}