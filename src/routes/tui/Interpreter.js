import {getParent} from "treezy";
import tree from "./FolderTree.json"
import alias from "./alias.json";

function Execute(inp, curr) {
    let inputArr = inp.split(" ");
    let outp = {
      op: [],
      do: "",
      curr: null
    }  

    switch (inputArr[0]) {
      case "echo":
        outp.op = echo(inputArr)
        break;
        
      case "cd":
        outp = cd(inputArr,tree,curr)
        break;
      
      case "ls":
        outp.op = ls(curr)
        break;
        
      case "clear":  
        if (inputArr.length > 1) {
          outp.op.push("Error: Too many arguments")  
          break;  
        }
        outp.do = "c";
        break;
      
      case "alias":
        if(inputArr.length > 1){
          outp.op.push("Error: Too many arguments");
          break;
        }
      
        for (var key in alias) {
          outp.op.push(`${key}: ${alias[key]}`);
        } 
        break;

      case "goto":
        if (inputArr.length > 2) {
          outp.op.push("Error: Too many arguments");
          break;
        } else if (inputArr.length === 1) {
          outp.op.push("Error: Not enough arguments");
          break;
        }
        
        if (!(inputArr[1] in alias)){
          outp.op.push("Error: invalid alias")
          break;  
        }

        outp.do = "g";
        outp.link = alias[inputArr[1]];
        break;

      case "help":
        if (inputArr.length > 1) {
          outp.op.push("Error: Too many arguments");
          break;
        }

        outp.do = "m";
        outp.name = "help"; 
        break;

      case "man":
        if (inputArr.length > 2) {
          outp.op.push("Error: Too many arguments");
          break;
        } else if (inputArr.length === 1) {
          outp.op.push("Error: Not enough arguments");
          break;
        }
        
        if (curr.children.filter((item) => item.id === inputArr[1]).length === 0) {
          outp.op.push("Error: File not found, make sure you are in correct directory");
          break;
        }

        outp.do = "m";
        outp.name = inputArr[1]; 
        break;

      default:
        outp.op = ["Error: Command Not Found"]
    }

    return outp
}

function ls(curr) {
  let outp = [];

  curr.children.forEach(x => outp.push(x.id))

  return outp;
}

function cd(inputArr, tree, curr) {
  let outp = {
    op: [],
    do: "",
    curr: null,
  }

  if (inputArr.length == 1) {
    outp.curr = tree;
    return;
  }
  
  const command = inputArr[1];
  
  const commandArr = command.split("/");

  for (let i=0;i<commandArr.length;i++){
    if  (commandArr[i] === ".." || commandArr[i] === ".."){
      if (curr.id === "~") {
        outp.push("Error: path does not exist");
        return outp;
      }  
      curr = getParent(tree, {testFn: (x) => x.id === curr.id})
    }
    else {
      const filteredArr = curr.children.filter((obj) => obj.id === commandArr[i])

      console.log(filteredArr)

      if (filteredArr.length == 0) {
        outp.op.push("Error: path does not exist");
        return outp;
      } else if (filteredArr[0].dir === false) {
        outp.op.push(`Error: ${filteredArr[0].id} is not a directory`);
        return outp;
      }
      
      curr = filteredArr[0];
      }
  }
  outp.curr = curr;
  
  
  return outp;
}

function echo(inputArr) {
  let outp = []

  if (inputArr.length > 2) {
    outp.push("Error: Too Many Arguments");
  } else if (inputArr.length == 1){
    outp.push("Error: Not Enough Arguments");
  } else {
    outp.push(inputArr[1]);
  }

  return outp;
}

export default Execute;
