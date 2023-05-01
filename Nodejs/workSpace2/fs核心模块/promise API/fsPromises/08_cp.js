const fsPromises = require("fs/promises");
const path = require('path');

async function copyDirectory() {
  try {
    await fsPromises.cp(
      "../../../data/copy_source/02_copyFolder",
      "../../../data/copy_destination/02_copyFolder",
      {
        recursive: true,
        force: true,
        // filter: (src) => {
        //   console.log(src);
        //   !src.includes("02_copyFolder");
        // },
        transform: (src, dest) => path.join(dest, 'new_subdirectory', path.basename(src))
      }
    );
    console.log("Copy successful");
  } catch (err) {
    console.log(err);
  }
}
copyDirectory();
