function romanToInt(s: string): number {
    const splitString = s.split('');
    
    let num = 0;
    
    for(let i = 0; i < splitString.length; i++) {
        
        const str = splitString[i];
        const next = splitString[i + 1];
                
        switch(str){
            case 'I':
                switch(next){
                    case 'V':
                        num += 4
                        i++;
                        break;
                    case 'X':
                        num += 9
                        i++;
                        break;
                    default:
                        num += 1;
                        break;
                }
                break;
            case 'V':
                num += 5;
                break;
            case 'X':
                switch(next){
                    case 'L':
                        num += 40
                        i++;
                        break;
                    case 'C':
                        num += 90
                        i++;
                        break;
                    default:
                        num += 10;
                        break;
                }
                break;
            case 'L':
                num += 50;
                break;
            case 'C':
                switch(next){
                    case 'D':
                        num += 400
                        i++;
                        break;
                    case 'M':
                        num += 900
                        i++;
                        break;
                    default:
                        num += 100;
                        break;
                }
                break;
            case 'D':
                num += 500;
                break;
            case 'M':
                num += 1000;
                break;
            default:
                return;
        }
    }
    
    return num;
};