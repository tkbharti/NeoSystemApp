const helperService = {

 	wait: (ms) => { 
		return new Promise(resolve => setTimeout(resolve, ms));
	},	 
}

export {helperService}; 