/**
 * AddressBlock for address fields.
 * @class AddressBlock
 * @param {Object} t keystone.Types
 * @constructor
 *
 */
module.exports = function AddressBlock(t) {

	return {

		name: {
			type: t.Name
		},
		phone: {
			type: t.Text,
			match: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})?[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
			label: 'Phone'

		},
		company: {
			type: String
		},
		street1: {
			type: t.Text,
			label: 'Address Line1',
			match: /.{1,128}/,

		},
		street2: {
			type: t.Text,
			label: 'Address Line2',
			match: /.{0,128}/,

		},
		code: {

			type: t.Text,
			label: 'Postal/Zip Code',
			match: /\w{2,8}/,

		},
		city: {
			type: t.Text,
			label: 'City',
			match: /\w{2,32}/,
		},
		country: {
			type: t.Text,
			label: 'Country',
			match: /\w{2,32}/,
		}
	};

};
