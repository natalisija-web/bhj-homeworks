const elements = [...document.querySelectorAll('.has-tooltip')];

let activeTooltip = null;

elements.forEach(element => {
	element.addEventListener('click', (event) => {
		event.preventDefault();

		if (element.contains(document.querySelector('.tooltip_active.tooltip'))) {
			element.querySelector('.tooltip_active.tooltip').remove();
			return;
		}

		if (activeTooltip) {
			activeTooltip.remove();
		}

		const tooltip = document.createElement('div');
		tooltip.classList.add('tooltip_active', 'tooltip');
		tooltip.textContent = element.getAttribute('title');
		element.insertAdjacentElement('afterEnd', tooltip)

		const rect = element.getBoundingClientRect();

		tooltip.style.left = `${rect.left + window.scrollX}px`;
		tooltip.style.top = `${rect.bottom + window.scrollY}px`;

		activeTooltip = tooltip;
	});
});