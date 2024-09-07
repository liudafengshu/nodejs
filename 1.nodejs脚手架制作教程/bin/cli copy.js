#! /usr/bin/env node

const { program } = require("commander");

// console.log("mycli");

//process.argv用来获取mycli后接的参数
// console.log(process.argv);

/**
 * 添加命令 设置help信息
 * 通过-f或者-framwork命令，设置 <framwork>
 * 使用方式 mycli -f xxxxx
 */
program.option("-f --framwork <framwork>", "设置框架");

// 设置自定义操作命令
program
  .command("create <project> [other...]")
  .alias("crt")
  .description("创建项目")
  .action((project, args) => {
    // 命令行的执行逻辑代码
    console.log(project, args);
  });
// 根据获取的参数打印信息，输入mycli --help 打印详细的help信息
program.parse(process.argv);
