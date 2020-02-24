(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.IdGenerator = factory());
}(this, (function () { 'use strict';

	class IdGenerator {
	    constructor(initValue = 0) {
	        this.current = () => {
	            return this.value;
	        };
	        this.skip = (value = 1) => {
	            if (value < 1) {
	                value = 1;
	            }
	            this.value += value;
	            return ++this.value;
	        };
	        this.next = () => {
	            return ++this.value;
	        };
	        this.value = this.initValue = initValue;
	    }
	}

	return IdGenerator;

})));
