import { sync } from 'replace-in-file';
import * as execa from 'execa';
const download = require('download');

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
        execa.sync('bash', [scriptFilse]);
    } catch (error) {
        console.log(error);
    }
}

export async function main(keptnUrl: string, version: string) {
    const scriptFile = 'script.sh';
    await download(keptnUrl, scriptFile);
    if (version !== 'latest' && version !== '') {
        replaceVersion(version, scriptFile);
    }
    await installKeptn(scriptFile);
}
