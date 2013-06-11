if( !window.O2S){
    window.O2S = {
        tab : function(layer){
            var t = '';
            for(var i=0; i<layer; i++){
                t+='\t';
            }
            return t;
        },
        stringify : function(vContent,vLayer) {
            if ( !vLayer ){
                vLayer = 0;
            }
            if (vContent instanceof Object) {
                var sOutput = "";
                if (vContent.constructor === Array) {
                    for (var nId = 0; nId < vContent.length; sOutput += this.stringify(vContent[nId]) + ",", nId++);
                    
                    return "[" + sOutput.substr(0, sOutput.length - 1) + "]";
                }
                if (vContent.constructor === Function){
                    return vContent.toString().replace(/"/g, "\\$&").replace(/\n/g,'\n\t');;
                }
                if (vContent.toString !== Object.prototype.toString) {
                    return "\"" + vContent.toString().replace(/"/g, "\\$&") + "\"";
                }
                var arrOutput = [];
                vLayer ++;
                for (var sProp in vContent) {
                    arrOutput.push(this.tab(vLayer)+"\"" + sProp.replace(/"/g, "\\$&") + "\":" + this.stringify(vContent[sProp],vLayer));
                    //sOutput += this.tab(vLayer)+ "\"" + sProp.replace(/"/g, "\\$&") + "\":" + this.stringify(vContent[sProp],this.layer) + ",";
                }
                return "{" + '\n'+ arrOutput.join(',\n')+ '\n' +this.tab(vLayer-1)+ "}";
            }
            return typeof vContent === "string" ? "\"" + vContent.replace(/"/g, "\\$&") + "\"": String(vContent);
        }
    }
}
 