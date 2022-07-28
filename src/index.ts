import { sync } from "replace-in-file";
import { execa } from "execa";
const download = require("download");

function replaceVersion(version: string, scriptFile: string): void {
  const options = {
    files: scriptFile,
    from: /##+/,
    to: `export KEPTN_VERSION=${version}`,
  };
  sync(options);
}

function installKeptn(scriptFilse: string): void {
  try {
    execa("bash", [scriptFilse]);
  } catch (error) {
    console.log(error);
  }
}

async function main(keptnUrl: string, version: string) {
  const scriptFile = "script.sh";
  await download(keptnUrl, scriptFile);
  if (version !== "latest" && version !== "") {
    replaceVersion(version, scriptFile);
  }
  await installKeptn(scriptFile);
}

const keptnUrl = "https://get.keptn.sh";
const version = "latest";
main(keptnUrl, version);
