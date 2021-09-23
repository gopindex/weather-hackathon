state = {
    task: "2",
    tasks: [],
  };
  
  deleteTodo = () => {
    let mycurrenttasks = ["1","2"];
    tasks=["1","2"];
    let task1 = "1";
    mycurrenttasks=  tasks.filter((task)=>{return task!=task1;})
    return mycurrenttasks;
  };

  console.log(deleteTodo());