
    console.log(" This is my first js");
    
    names =["Ajay","jai","vijay","hero","virad"];
    
    feedbacks =[5,1,3,2,1];
    
    console.log(feedbacks[0]);
    
    for(let i=0; i<5;i++){
        if(feedbacks[i]>4){
            console.log(names[i]+" gave good feedback");
        }else if(feedbacks[i]>3)
        console.log(names[i]+ " gave average feedback")
        else{
            console.log(names[i]+" gave bad feedback");
        }

      }