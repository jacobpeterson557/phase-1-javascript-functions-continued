function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!` 
}

const mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}


function wrapAdjective(emphatic = '*'){
    return function (phrase = 'a hard worker'){
      return `You are ${emphatic}${phrase}${emphatic}!`
      }

  }