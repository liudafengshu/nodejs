#! /usr/bin/env node

// 使用模块化

const { program } = require("commander");

const myHelp = require("./../lib/core/help");
myHelp(program);

const myCreate = require("./../lib/core/create");
myCreate(program);

// 根据获取的参数打印信息，输入mycli --help 打印详细的help信息
program.parse(process.argv);
