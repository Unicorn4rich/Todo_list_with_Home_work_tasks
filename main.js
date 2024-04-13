#! /usr/bin/env node
import inquirer from "inquirer";
let save = [];
let condition = true;
//<------------------------------------ Options ------------------------------------>
while (condition === true) {
    let todos = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "Please select option to add opration in your todo list?",
            choices: ["Add", "Delete", "Update", "Read"]
        }
    ]);
    //<------------------------------------ Add ------------------------------------>
    if (todos.options === "Add") {
        let add = await inquirer.prompt([
            {
                name: "adding",
                message: "What you want to add in your todo list?",
                type: "input"
            },
        ]);
        if (add.adding !== '') {
            save.push(add.adding);
            console.log(save);
        }
    }
    //<------------------------------------ Delete ------------------------------------>
    if (todos.options === "Delete") {
        let del = await inquirer.prompt([
            {
                name: "delete",
                message: "What you want to delete?",
                type: "list",
                choices: save
            }
        ]);
        let index_delete = save.indexOf(del.delete);
        if (index_delete >= 0) {
            save.splice(index_delete, 1);
            console.log('You delete : ', del.delete);
            console.log("list after delete value : ", save);
        }
    }
    ;
    //<------------------------------------ Update ------------------------------------>
    if (todos.options === "Update") {
        let Up = await inquirer.prompt([
            {
                name: "update",
                message: "what you want Update?",
                type: "list",
                choices: save
            },
            {
                name: "change",
                message: "Please write your Updte changes",
                type: "input"
            }
        ]);
        let index_update = save.indexOf(Up.update);
        save[index_update] = Up.change;
        console.log("Your list after update value : ", save);
    }
    //<------------------------------------ Read ------------------------------------>
    if (todos.options === "Read") {
        console.log("Read your list : ", save);
        condition = false;
    }
    //<------------------------------------ loop condition ------------------------------------>
    let user_chose = await inquirer.prompt([
        {
            name: "repeat",
            message: "Do you want to add more?",
            type: "confirm",
            default: "true"
        }
    ]);
    if (user_chose.repeat === false) {
        condition = false;
        console.log('Final list : ', save);
    }
}
