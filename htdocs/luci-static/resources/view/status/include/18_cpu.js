'use strict';
'require baseclass';
'require fs';

return baseclass.extend({
	title : _('CPU Load'),

	load  : function() {
		return L.resolveDefault(fs.read('/proc/stat'), null);
	},

	render: function(cpuData) {
		if(!cpuData) return;

		let cpuStatArray     = [];
		let statItemsArray = cpuData.trim().split('\n').filter(s => s.startsWith('cpu'));

		for(let str of statItemsArray) {
			let arr = str.split(/\s+/).slice(0, 8);
			arr[0]  = (arr[0] === 'cpu') ? Infinity : arr[0].replace('cpu', '');
			arr     = arr.map(e => Number(e));
			cpuStatArray.push([
				arr[0],
				arr[1] + arr[2] + arr[3] + arr[5] + arr[6] + arr[7],
				arr[4],
			]);
		};

		cpuStatArray.sort((a, b) => a[0] - b[0]);

		let cpuTable = E('table', { 'class': 'table' });

		// For single-core CPU (hide 'total')
		if(cpuStatArray.length === 2) {
			cpuStatArray = cpuStatArray.slice(0, 1);
		};

		cpuStatArray.forEach((c, i) => {
			let loadAvg = 0;
			if('cpuStatusStatArray' in window) {
				let idle = c[2] - window.cpuStatusStatArray[i][2];
				let sum  = c[1] - window.cpuStatusStatArray[i][1];
				loadAvg  = Math.round(100 * sum / (sum + idle));
			};

			cpuTable.append(
				E('tr', { 'class': 'tr' }, [
					E('td', { 'class': 'td left', 'width': '33%' },
						(cpuStatArray[i][0] === Infinity) ? _('Total Load') : _('CPU') + ' ' + cpuStatArray[i][0]),

					E('td', { 'class': 'td' },
						E('div', {
								'class': 'cbi-progressbar',
								'title': ('cpuStatusStatArray' in window) ? loadAvg + '%' : _('Calculating') + '...',
							},
							E('div', { 'style': 'width:' + loadAvg + '%' })
						)
					),
				])
			);
		});

		window.cpuStatusStatArray = cpuStatArray;

		return cpuTable;
	},
});
