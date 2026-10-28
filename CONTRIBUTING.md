# Contributing

## Release setup

Do not change the pack version for routine contributions. A release must update the version in `pakku.json` and include a matching entry in `update-checker/meta.json`.

For each release:

1. Confirm the intended Minecraft, NeoForge, and project versions in `pakku-lock.json`.
2. Write player-visible changes in `update-checker/versions/{version}/changelog.txt`.
3. Add the version to `update-checker/meta.json` with its release time in Unix milliseconds. Add platform links when they are available.
4. Run `./publish --dry-run` and review the generated client and server files.

Group changelog entries under `Added`, `Changed`, `Fixed`, `Updated`, and `Removed`. State any change that can affect existing worlds or reset configuration.

## Publishing

`./publish` exports the pack with `pakku-mc`, checks the output files, then uploads to the target in `pakku-lock.json`. `./publish --dry-run` does not upload. When a required token is not set, the script runs as a dry run.

The current lockfile target is Modrinth. Add the pack's Modrinth project ID or slug to `publish.modrinth` in `pakku.json` before publishing. The repository does not contain that ID yet. The script requires a valid project ID even for a dry run.

Check `publish.release_type` before publishing. It must match the intended release channel (`release`, `beta`, or `alpha`).

Set `MODRINTH_TOKEN` in the environment, in `~/.pakku/publish.env`, or in the `publish` object of `~/.pakku/pakku.json`. Do not put tokens in the project `pakku.json`. Protect local token files so other users cannot read them.

The publisher uses Python 3 and the standard library. It creates exports under `build/`; do not commit generated files.

## GitHub release

After the release files are ready, run the **Release pack** workflow from the Actions tab on `main`. The release job runs only when the selected branch is `main`. It checks out that commit and creates a GitHub release with a tag that matches `pakku.json`. It uses the matching file from `publish.changelog` in `pakku.json` as the release notes and fails if that file is missing, if the tag already exists, or if the export does not contain exactly one `.mrpack` file and one server pack `.zip` file. Both files are attached to the release.
