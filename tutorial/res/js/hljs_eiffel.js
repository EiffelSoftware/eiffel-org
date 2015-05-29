function hljs_eiffel(h) {
	/* Note, the identifier are shortname due to hljs+revealjs integration */
		var b={cN:"comment",b:'--',e:'$'};
		var c={cN:"string",b:'"',e:'"'};
		var a={cN:"symbol",b:"'\\w[\\w\\d_]*(?!')"};
		var e={cN:"type",b:"\\b[A-Z][A-Z0-9_]*",r:0};
		var i={cN:"class",bK:"deferred frozen expanded class",e:/[:={\[(\n;]/,c:[{cN:'keyword',bK:"inherit"}]};
		return{
			k:{	literal:"True False Void Current Result",
				keyword: 'across agent alias all attached as assign attribute check ' +
		'class convert create debug deferred detachable do else elseif end ' +
		'ensure expanded export external feature from frozen if inherit ' +
		'inspect invariant like local loop not note obsolete old once ' +
		'Precursor redefine rename require rescue retry select separate ' +
		'some then undefine until variant when' +
		'and implies or xor'
			},
			c:[c,a,e,i,b]
			}
}

function initHighlightingForEiffel(hljs) {
	  hljs.registerLanguage ("eiffel", hljs_eiffel);
}
