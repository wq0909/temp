if( !window.S2O){
    window.S2O = {
    	objectify : function( string ){
    		try{
    			var o = eval('('+string+')');
    			return o;
    		}catch(e){
    			return null;	
    		}
    	}
    }
}