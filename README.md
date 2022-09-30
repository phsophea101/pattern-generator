# Hexagen
## _Hexagen! see you again ^^_

Hexagen is a command line to generate spring boot project with mvc or hexagonal pattern structure.
## Installation

Hexagen requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and run hexagen command

```sh
cd hexagen
npm install
sudo npm install -g .
```

## Usage

```sh
cd spring-application
pattern {package} {module} {patterns} {data-mapper}
```
Example: 
patterns is "mvc", package is "com.wingmoney.inventory", module is "deportment" and data mapper is "mongo"
```sh
pattern com.wingmoney.inventory tax mvc mongo
```
## Development

Want to contribute? Great!
