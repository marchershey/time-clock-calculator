# Time Clock Calculator

## Version 1.0.0 - [ [changelog](https://github.com/marchershey/Time-Clock-Calculator/blob/master/CHANGELOG.md) ] [ [demo](https://marchershey.github.io/Time-Clock-Calculator/demo/) ]

The time clock calculator allows you to enter the start and end time of your shifts for the week to get the total hours worked.

![demo image](https://i.imgur.com/5Cx3ceK.gif)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you how to get a development env running

- **Setting up development environment**

    1. Clone the repo to your preferred folder
        > git clone https://github.com/marchershey/Time-Clock-Calculator

    1. Update the dependencies
        > npm update
    
    1. **You're all set!**
    
    1. Optional: Build the project
        > npm run build
        - The npm script that I have set to build the project is `npm run build` which builds the project and places an `app.js` file in the `/dist` folder.

- **Deploying for production**

    1. Follow the 4 steps above
    
    1. Upload all the contents in the `/dist` folder to your `public_html` folder on your server. 
    
    1. **You're all set!**

## Dependencies

**Development Dependencies**

    - [webpack ^4.41.2](https://www.npmjs.com/package/webpack)
    - [webpack-cli ^3.3.10](https://www.npmjs.com/package/webpack-cli)
    - [style-loader ^1.0.1](https://www.npmjs.com/package/style-loader)
    - [sass-loader ^8.0.0](https://www.npmjs.com/package/sass-loader)
    - [postcss-loader ^3.0.0](https://www.npmjs.com/package/postcss-loader)
    - [node-sass ^4.13.0](https://www.npmjs.com/package/node-sass)
    - [css-loader ^3.3.2](https://www.npmjs.com/package/css-loader)
    - [autoprefixer ^9.7.3](https://www.npmjs.com/package/autoprefixer)

**Dependencies**

    - [jquery ^3.4.1](https://www.npmjs.com/package/jquery)
    - [bootstrap ^4.4.1](https://www.npmjs.com/package/bootstrap)
    - [popper.js ^1.16.0](https://www.npmjs.com/package/popper.js)
    - [jquery-timepicker ^1.3.3](https://www.npmjs.com/package/jquery-timepicker)

### Credits

- **jQuery Time Picker v1.3.5** - [ [www](https://timepicker.co/) ] [ [github](https://github.com/wvega/timepicker/releases) ]

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
