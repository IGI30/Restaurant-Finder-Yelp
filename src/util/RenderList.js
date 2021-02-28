const renderCategory = (category, i) => {
	return (
		<span className="restaurant-category" key={i}>{ category.title }</span>
	)
}

const renderItem = (item, i) => {
	return (
		<span key={i}>{ item.replaceAll('_', ' ') }</span>
	)
}

export const renderCategories = (categories) => {
	categories = categories.map(renderCategory)

    var output = []
	categories.forEach(function(category, i) {
		// if list is more than one item and this is the last item, prefix with 'and '
		// if (categories.length > 1 && i === categories.length - 1) output.push('and ')
		// output the item
		output.push(category)
		// if list is more than 2 items, append a comma to all but the last item
		if (categories.length > 2 && i < categories.length - 1) output.push(',')
		// if list is more than 1 item, append a space to all but the last item
		if (categories.length > 1 && i < categories.length - 1) output.push(' ')
	})

	return output
}

export const renderList = (items) => {
	items = items.map(renderItem)

    var output = []
	items.forEach(function(item, i) {
		// if list is more than one item and this is the last item, prefix with 'and '
		if (items.length > 1 && i === items.length - 1) output.push('and ')
		// output the item
		output.push(item)
		// if list is more than 2 items, append a comma to all but the last item
		if (items.length > 2 && i < items.length - 1) output.push(',')
		// if list is more than 1 item, append a space to all but the last item
		if (items.length > 1 && i < items.length - 1) output.push(' ')
	})

	return output
}
