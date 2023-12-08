function delay(id) {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id > 0) {
          resolve({ user: 1, name: "sanjoy" });
        } else {
          reject("The id is not available");
        }
      }, 2000);
    });
    return p;
  }
  
  //get the url from git hub based on an email id
  //get the list of repo from the url
  //Get the projects from the repo
  
  const resultpromise = delay(0);
  
  resultpromise.then((result) => {
    console.log(result);
  });
  resultpromise.catch((error) => {
    console.log(error);
  });