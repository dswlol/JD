const mixins = {
	filters: {
        tofix (val) {
          return val.toFixed(2)
        },
        omitted (val) {
          return val > 10000 ? parseInt(val / 10000) + '.' + parseInt((val % 10000) / 1000) + '万' : val
        },
        cartFix (val) {
          return val > 99 ? 99 + '+' : val
        }
      }
}

export default mixins
