/**
 * @description 写了一个过滤className 局部变量的一个方法
 * @author xhq
 */
export class CS {
    constructor(style){
        this.style=style
    }
    m(classNames){
            if(!(typeof classNames == 'string'))return '';
            let classNamesArr=classNames.split(' ');
            let $classNamesArr=[];
            for(let i=0,len=classNamesArr.length;i<len;i++){
                if(!classNamesArr[i])continue;
                $classNamesArr.push(classNamesArr[i])
            };
            let _classNamesArr=[];
            for(let k=0,len2=$classNamesArr.length;k<len2;k++){
                if(this.style[$classNamesArr[k]]){
                    _classNamesArr.push(this.style[$classNamesArr[k]])
                }else{
                    _classNamesArr.push($classNamesArr[k]);
                }
            };
            return _classNamesArr.join(' ')
    }
}

