#!/bin/bash
#
# This is a hacky approach that grabs the docs from cometbft different branches, and formats them to be used in the docusaurus site.
# The ideal approach would be to have them use docusaurus directly upstream, then we can just pull in. Similar to cosmos-sdk and IBC-Go.
#

CURRENT_DIR=$(pwd)
source ./sync_helpers.sh
DOCS_NAME=cometbft

DOCS_DIR_TARGET=dsource-cometbft
DOCS_DIR=$CURRENT_DIR/$DOCS_DIR_TARGET

# CMBFT_VERSIONS=("v1.x" "v0.34.x" "v0.37.x" "v0.38.x")
CMBFT_VERSIONS=("v1.x" "v0.38.x")

main() {
    # pre req: we need multiple branches from the cometbft repo, but are cloning a shallow copy.
    # this sets our config so we don;'t get missing matching files for fetched branches'
    git config remote.origin.fetch '+refs/heads/*:refs/remotes/origin/*'

    download_docs_source

    copy_over_core
    # update_sidebar
    # HACK_fix_relative_links
}

# == HELPER FUNCTIONS ==
unsafe_cleanup_cosmossdk() {
    # useful for testing this script locally and resetting state
    rm -rf ./$DOCS_NAME ./${DOCS_NAME}_versioned_sidebars ./${DOCS_NAME}_versioned_docs # ./static/img/$DOCS_NAME/ ./src/components/$DOCS_NAME/
    rm -rf ./$DOCS_DIR ./${DOCS_NAME}_versions.json
}

download_docs_source() {
    # Downloads documentation source for the repo
    git -C "$DOCS_DIR_TARGET" pull || git clone --depth 1 https://github.com/cometbft/cometbft.git $DOCS_DIR_TARGET

    if [ -z "$DOCS_NAME" ]; then
        echo "DOCS_NAME is unset. Set it to the name of the docs you are syncing (i.e. cometbft)."
        panic
    fi

    mkdir -p ./$DOCS_NAME ./${DOCS_NAME}_versioned_sidebars ./${DOCS_NAME}_versioned_docs # ./static/img/$DOCS_NAME/ ./src/components/$DOCS_NAME/
}

copy_over_core() {
    # docs

    # move over main docs
    cd $DOCS_DIR && git checkout main && cd ../
    cp -r $DOCS_DIR/docs ./cometbft

    cp -r $DOCS_DIR/spec ./cometbft/docs
    # TODO: may need to be more specific
    # replace "./${DOCS_NAME}/docs/" "../../../spec/" "../../spec/" # going to try that first

    # versioned docs
    # cp $DOCS_DIR/versions.json ./cometbft_versions.json
    # cp -r $DOCS_DIR/versioned_sidebars/* ./cometbft_versioned_sidebars
    # cp -r $DOCS_DIR/versioned_docs/* ./cometbft_versioned_docs

    # create a new file with [] as $DOCS_NAME_versions.json

    # core
    # TODO: for now we have to manually version the docs because not docusaurus
    # https://github.com/cometbft/cometbft-docs/blob/main/VERSIONS
    cd $DOCS_DIR_TARGET
    root_version_file=../${DOCS_NAME}_versions.json
    echo "[]" > $root_version_file


    for version in ${CMBFT_VERSIONS[@]}; do
        echo "Copying over docs version: $version"
        git fetch origin $version --depth 1
        git checkout $version

        # append to the root version file
        jq ". += [\"$version\"]" $root_version_file > tmp.json && mv tmp.json $root_version_file

        # copy docs to a versioned docs
        new_dir=../${DOCS_NAME}_versioned_docs/version-${version}; mkdir -p $new_dir; cp -r ./docs/* $new_dir

        new_dir=../${DOCS_NAME}_versioned_docs/version-${version}/spec; mkdir -p $new_dir; cp -r ./spec/* $new_dir

        # create sidebars for versions
        # TODO: we can dynamnically generate this in the future (or the migration to dsaurus removes this from our end)
        echo '{
  "defaultSidebar": [
    {
      "type": "autogenerated",
      "dirName": "."
    }
  ]
}
' > ../${DOCS_NAME}_versioned_sidebars/version-${version}-sidebars.json

    echo '/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  defaultSidebar: [{ type: "autogenerated", dirName: "." }],
};

module.exports = sidebars;
' > ../${DOCS_NAME}/sidebars.js

    done

    # TODO: hacks - Remove the following bc docusaurus no likey.
    # It does not like this, needs to be removed upstream
    replace "../${DOCS_NAME}_versioned_docs" ".Consensus.DoubleSignCheckHeight" ""
    replace "../${DOCS_NAME}" ".Consensus.DoubleSignCheckHeight" ""

    replace "../${DOCS_NAME}_versioned_docs" ".BaseConfig.Mode" ""
    replace "../${DOCS_NAME}" ".BaseConfig.Mode" ""

    replace "../${DOCS_NAME}_versioned_docs" ".PageContent table {margin: 0;}" ""
    replace "../${DOCS_NAME}" ".PageContent table {margin: 0;}" ""

    replace "../${DOCS_NAME}_versioned_docs" "<br>" ""
    replace "../${DOCS_NAME}" "<br>" ""

    replace "../${DOCS_NAME}_versioned_docs" "</br>" ""
    replace "../${DOCS_NAME}" "</br>" ""

    replace "../${DOCS_NAME}_versioned_docs" "<a id=note1></a>" ""
    replace "../${DOCS_NAME}" "<a id=note1></a>" ""


    ## Proper fixes based on the location
    replace "../${DOCS_NAME}/docs/references" "../../../spec/" "../../spec/"
    replace "../${DOCS_NAME}/docs/explanation" "../../../spec/" "../../spec/"
    replace "../${DOCS_NAME}/docs/references" "../../../spec/" "../../spec/"


    echo '#Fix me' > ../cometbft/docs/spec/consensus/time.md
    echo '#Fix me' > ../cometbft/docs/spec/p2p/implementation/peer_manager.md
    echo '#Fix me' > ../cometbft/docs/spec/p2p/reactor-api/README.md
    for version in ${CMBFT_VERSIONS[@]}; do
        echo "Copying over docs version: $version"
        echo '#Fix me' > ../cometbft_versioned_docs/version-${version}/spec/consensus/time.md
        echo '#Fix me' > ../cometbft_versioned_docs/version-${version}/spec/p2p/implementation/peer_manager.md
        echo '#Fix me' > ../cometbft_versioned_docs/version-${version}/spec/p2p/reactor-api/README.md

        replace "../${DOCS_NAME}_versioned_docs/version-${version}/explanation/" "../spec/abci/" "../../spec/abci/"
        replace "../${DOCS_NAME}_versioned_docs/version-${version}/explanation/" "../../../spec/abci/" "../../spec/abci/"
        replace "../${DOCS_NAME}_versioned_docs/version-${version}/guides/" "../explanation/" "../../explanation/"
    done
}

# update_sidebar() {
    # TODO: done in the core copy over atm as we have to gernate it manually. Move over in the future
    # # modify the sidebar dirNames -> match the new location format (due to multiple nested versions)
    # # We replace the " as well as to not modify the name of the sidebars, just the location contents
    # replace "./cometbft/sidebars.js" '"learn"' '"docs/learn"'
    # replace "./cometbft/sidebars.js" '"build"' '"docs/build"'
    # replace "./cometbft/sidebars.js" '"user"' '"docs/user"'
    # replace "./cometbft/sidebars.js" '"tutorials"' '"docs/tutorials"'
# }

# TODO: ideally we do not have to do this, but some links are broken upstream.
# HACK_fix_relative_links() {
    # cometbft nested docs, pull in as references
    # BASE_DIR=./cometbft/docs/build/modules/bank/v2; mkdir -p $BASE_DIR; cp $MAIN_SDK_DIR/x/bank/v2/README.md $BASE_DIR
    # BASE_DIR=./cometbft/docs/build/modules/tx; mkdir -p $BASE_DIR; cp $MAIN_SDK_DIR/x/tx/README.md $BASE_DIR
    # BASE_DIR=./cometbft/docs/build/modules/validate; mkdir -p $BASE_DIR; cp $MAIN_SDK_DIR/x/validate/README.md $BASE_DIR

    # # This is just cosmetic so the docs engine doesn't throw a 'Docs markdown link couldn't be resolved' error fiel filenames in backticks.
    # # e.g. `CHANGELOG.md`.
    # touch ./cometbft/docs/build/migrations/CHANGELOG.md
    # touch ./cometbft_versioned_docs/version-{0.50,0.47}/build/migrations/CHANGELOG.md

    # # this excludes a dir because of bad relative paths used in only 1 location.
    # replace "./cometbft_versioned_docs" "\./01-app-go-v2.md" "../../build/building-apps/01-app-go-v2.md" "building-apps/"
    # replace "./cometbft" "../run-node" "../../user/run-node/"

    # # TODO: is this the correct location of this? the latest docs?
    # OLD_PATH="../../architecture/"; NEW_PATH="../../build/architecture/"
    # replace "./cometbft" "$OLD_PATH" "$NEW_PATH"
    # replace "./cometbft_versioned_docs" "$OLD_PATH" "$NEW_PATH"
# }


# == MAIN ==
main
