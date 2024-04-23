#! /usr/bin/node env

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.blueBright("\t\tWellcome To Word Counter Project !"));

const answer = await inquirer.prompt([{
    name : "sentence",
    type : "input",
    message : "Enter Your Alphabetics Word for Count : ",

}]);

const word = answer.sentence.trim().split(" ");

console.log(`\nYour total type of alphabetic word : ${word}`);

console.log(`\nYour total word count number is : ` + chalk.bold.redBright (word.length));