const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@api": path.resolve(__dirname, "src/api"),
    // "@common": path.resolve(__dirname, "src/components/common"),
    "@components/*": path.resolve(__dirname, "src/components/*"),
    "@constants": path.resolve(__dirname, "src/constants"),
    "@contexts": path.resolve(__dirname, "src/contexts"),
    // "@forms": path.resolve(__dirname, "src/components/forms"),
    "@helpers": path.resolve(__dirname, "src/helpers"),
    "@hoc": path.resolve(__dirname, "src/hoc"),
    "@hooks": path.resolve(__dirname, "src/hooks"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@types": path.resolve(__dirname, "src/types"),
    "@utils": path.resolve(__dirname, "src/utils"),
  })
);