"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const keptn_install_1 = require("keptn-install");
const version = core.getInput('keptn-version');
const url = 'https://get.keptn.sh';
(0, keptn_install_1.main)(url, version);
