var fs = require('fs');

const name = process.argv.slice(2)[0];

if (name) {

  const stageName = `stage_${name}.txt`;
  const srcPath = `src/stages/${stageName}`;
  console.log(`Preparing to build ${stageName} as ${srcPath}`);

  // TODO: retrieve the stage data to build

  fs.writeFile(srcPath, stage, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(`${stageName} written successfully!`);
  });

} else {
  console.log('Must provide a name');
}
