const fs = require("fs");
(async () => {
  fs.promises
    .access("../../../data/05_notwritable.txt", fs.constants.W_OK)
    .then((res) => console.log("文件存在且可写",res))
    .catch(() => console.log("文件不存在或不可写"));
})();
