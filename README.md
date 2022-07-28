# Setup GitHub Action

This repository contains an action for use with GitHub Actions, which installs a specified version of the `keptn` CLI.

**Main code** of this tool storage in `develop` branch.

`keptn` is installed with [the official script](https://get.keptn.sh).

## Usage

Install the latest version of the Keptn CLI:

```yaml
- name: Install Keptn CLI
  uses: Moon1706/keptn-setup@v1
```

Install a specific version of the Keptn CLI:

```yaml
- name: Install Keptn CLI
  uses: Moon1706/keptn-setup@v1
  with:
    keptn-version: 0.16.0
```

## Configuration

The action can be configured with the following arguments:

- `keptn-version` (optional) - The version of the Keptn CLI to install. Default is `latest`. Accepts semver style values.
