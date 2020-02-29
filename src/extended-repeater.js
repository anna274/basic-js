module.exports = function repeater(str, options) {
    if(!("separator" in options)){
        options.separator = '+';
    }
    if(!("additionSeparator" in options)){
        options.additionSeparator = '|';
    }

    if("addition" in options){      
        let additionstr = options.addition;

        for(let i = 1; i < options.additionRepeatTimes; i++){
            additionstr += options.additionSeparator + options.addition;
        }

        str += additionstr;
    }

    let result = str;

    for(let i = 1; i < options.repeatTimes; i++){
        result += options.separator + str;
    }

    return result;
};
  