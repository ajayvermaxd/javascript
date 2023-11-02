
      console.log(" This is my first js");
      var feedback1 = 5;
      var feedback2 = 3;
      var feedback3 = 4;
      var feedback4 = 5;
      var feedback5 = 2;
      var average;
      average = (feedback1 + feedback2 + feedback3 + feedback4 + feedback5) / 5;
      if (average > 4) {
        console.log("The feedback is good");
      } else {
        console.log("The feedback is bad");
      }
      console.log(average);

      function calculateAverage() {
        sum = 0;
        for (let i = 0; i < 5; i++) {
          sum = sum + feedbacks[i];
        }
        average = sum / 5;
        return average;
      }
      average = calculateAverage();
      console.log(average);