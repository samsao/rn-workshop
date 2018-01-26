# React-Native workshop repository

This repository is used for the workshop at Samsao.

## Preparation
1. Clone the repository
1. Run `yarn install` to install necessary dependencies
1. Run `yarn ios` or `yarn android` for IOS or Android, respectively.
    - For Android to run, an emulator or device must be connected.
    - You may get the following error 
    
      > SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable.
    
      You can solve this by adding a `local.properties` file inside the `android` with the content
    
      > sdk.dir = /Users/USERNAME/Library/Android/sdk
    
      And replace `USERNAME` with your user name.
