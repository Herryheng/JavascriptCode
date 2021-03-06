var _method = {
	/**
	 * 判断是否为空数组
	 * @param  {[type]}
	 * @return {Boolean}
	 */
	isArrayEmpty(a) {
		if (!a) return false;
		var arr = a;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] instanceof Array) {
				return isArrayEmpty(arr[i]);
			} else {
				if (arr[i]) {
					return false; //不为空
				}
			}
		}
		return true; //为空
	},
	/**
	 *替换非数字字符
	 * @param {}
	 * @return {String}
	 */
	ReplaceStr(str, s) {
		if (typeof str != "string") {
			throw new Error(('arguments Type Error'))
		}
		return str.replace(/[^\d.]/g, s);
	},
	/**
	 * 时间格式转换
	 * ****-**-** **:** 
	 * @param {Date}
	 * @param {String}
	 * @return {String}
	 */
	formatTime(date, str) {
		const _this = this;
		var year = date.getFullYear()
		var month = date.getMonth() + 1
		var day = date.getDate()

		var hour = date.getHours()
		var minute = date.getMinutes()
		var second = date.getSeconds()

		return [year, month, day].map(_this.formatNumber).join(str) + ' ' + [hour, minute, second].map(formatNumber).join(':')
	},
	/**
	 * 加零
	 * @param {String}
	 * @return {String}
	 */
	formatNumber(n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	},
	/**
	 * 转换html为 text文本
	 * @param {String}
	 * @return {String}
	 */
	escapeHTML(text) {
		return text.replace(/[<>"&]/g, function (match, pos, originalText) {
			switch (match) {
				case '<':
					return '&lt;';
				case '>':
					return '&gt;';
				case '&':
					return '&amp;';
				case '"':
					return '&quot;';
			}
		});
	},
	/*
	 * 获取location.search 地址参数
	 * params n 参数名
	 */
	locationSearch(n) {
		var ls = location.search;
		var lo = '';
		var r = new RegExp("[\?\&]" + n + "=([^&?]*)(\\s||$)", "gi");
		var r1 = new RegExp(n + "=", "gi");
		if (ls.indexOf('?') > -1) {
			lo = ls.match(r);
			if (lo == null) {
				return "";
			} else {
				return typeof (lo[0].split(r1)[1]) == 'undefined' ? '' : decodeURIComponent(lo[0].split(r1)[1]);
			}
		}
		return lo
	},
	getCookie(key) {
		let reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
		let token = '';
		if (typeof document !== 'undefined') {
			token = document.cookie.match(reg);
		}
		if (token) {
			return token[2];
		}
		return '';
	}
}