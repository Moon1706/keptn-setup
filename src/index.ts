import * as core from '@actions/core';
import { main } from 'keptn-install';

const version = core.getInput('keptn-version');
const url = 'https://get.keptn.sh';
main(url, version);
