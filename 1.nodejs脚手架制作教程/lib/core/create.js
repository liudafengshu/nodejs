const inquirer = require("inquirer");
const download = require("download-git-repo");
const ora = require("ora");
const chalk = require("chalk");

function myCreate(program) {
  program
    .command("create <project> [other...]")
    .alias("crt")
    .description("创建项目")
    .action((project, args) => {
      // 命令行的执行逻辑代码

      console.log(project, args);
      //  设置问答
      inquirer.default
        .prompt([
          {
            type: "input",
            name: "userName",
            message: "请输入你的名字",
          },
          {
            type: "list",
            name: "framwork",
            choices: ["express", "koa"],
            message: "请选择你使用的框架",
          },
        ])
        .then((answer) => {
          //获取问题答案
          console.log(answer);

          //   开始loading
          const spinner = ora("开始下载。。。。。").start();
          download(
            "liudafengshu/Web3-Frontend-Bootcamp", //路径
            "test/tmp", //下载到test/tmp路径
            function (err) {
              //回调函数
              console.log(err ? "Error" : "Success");
              //   结束loading
              if (err) {
                spinner.fail("下载失败");
                console.log(chalk.red("Hello world!"));
              } else {
                spinner.succeed("下载成功");
                console.log(chalk.green("Hello world!"));
              }
            }
          );
        })
        .catch((err) => {
          console.log(err);
        });
    });
}
module.exports = myCreate;
