const calculator = {
    add : function(a, b){
      return a + b;
    },
    sub : function(a, b){
      return a - b;
    },
    multi : function(a, b){
      return a * b;
    },
    div : function(a, b){
      return a / b;
    },
    power : function(a, b){
      return a ** b;
    }
  };
  
  const addition = calculator.add(5, 5);
  const substration = calculator.sub(5, 5);
  const multiplication = calculator.multi(5, 5);
  const division = calculator.div(5, 5);
  const exponent = calculator.power(5, 5);
  
  console.log(addition);
  console.log(substration);
  console.log(multiplication);
  console.log(division);
  console.log(exponent);