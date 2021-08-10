module.exports = function toReadable (number) {
    let units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundreds = 'hundred';
    let result;
    if (number===0) {
        result = 'zero'
    }
    if (number<=19 && number>0) {
        for (let i=1; i<units.length+1; i++) {
            if (i==number){
                result=units[i-1];
            }
        }
    }
    if (number>=20 && number<=99) {
        for (let i=2; i<dozens.length+2; i++) {
            if (i==Math.floor(number/10)){
                result=dozens[i-2];
            }
        }
        if (number%10!=0) {
            for (let i=0; i<units.length; i++) {
                if (i==number%10){
                    result+=' ' + units[i-1]
                }
            }
        }
    }
    if (number>=100 && number<=999) {
        for (let i=0; i<units.length; i++) {
            if (i==Math.floor(number/100)){
                result=units[i-1] + ' ' + hundreds
            }
        }

        if (number%100>=20 && number%100<=99) {
            for (let i=2; i<dozens.length+2; i++) {
                if (i==Math.floor(number%100/10)){
                    result+= ' ' + dozens[i-2];
                }
            }
            if (number%100%10!=0) {
                for (let i=0; i<units.length; i++) {
                    if (i==number%100%10){
                        result+=' ' + units[i-1]
                    }
                }
            }
        }

        if (number%100>=1 && number%100<=19) {
            for (let i=1; i<units.length+1; i++) {
                if (i==number%100){
                    result+=' ' + units[i-1];
                }
            }
        }
    }
    return result
}
