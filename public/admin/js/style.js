const buttonStatus = document.querySelectorAll(`button[button-status]`);

if (buttonStatus.length > 0) {
	const url = new URL(window.location.href);
	buttonStatus.forEach(button => {
		button.addEventListener('click', () => {
			const status = button.getAttribute('button-status');
			if (status) {
				url.searchParams.set('status', status);
			} else url.searchParams.delete('status');
			window.location.href = url.href;
		});
	});

	const statusCurrent = url.searchParams.get('status') || '';
	const buttonCurrent = document.querySelector(`button[button-status = '${statusCurrent}' ]`);
	if (buttonCurrent) {
		buttonCurrent.classList.add('bg-[#4BC18F]', 'text-[white]')
	}
}

// Tim kiem
const formSearch = document.querySelector(`[form-search]`);

if (formSearch) {
	let url = new URL(window.location.href);
	formSearch.addEventListener('submit', (event) => {
		event.preventDefault();
		const value = event.target.elements.key.value;
		if (value) {
			url.searchParams.set('key', value);
		} else {
			url.searchParams.delete('key');
		}
		window.location.href = url.href;
	});
}
// Het Tim kiem

const buttonChangeStatus = document.querySelectorAll(`button[button-change-status]`);

if (buttonChangeStatus.length > 0) {
	buttonChangeStatus.forEach(button => {
		button.addEventListener('click', () => {
			const link = button.getAttribute('link');
			fetch(link, {
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
					},

				})
				.then(res => res.json())
				.then(data => {
					if (data.code == 200) {
						window.location.reload();
					}
				})

		});
	});
}

const checkAll = document.querySelector(`input[name='checkAll']`);
if (checkAll) {
	const checkItem = document.querySelectorAll(`input[name="checkItem"]`);
	checkAll.addEventListener('click', () => {
		checkItem.forEach(input => {
			input.checked = checkAll.checked
		});
	});

	if (checkItem.length > 0) {
		checkItem.forEach(input => {
			input.addEventListener('click', () => {
				let checked = document.querySelectorAll(`input[name="checkItem"]:checked`);
				if (checkItem.length == checked.length) {
					checkAll.checked = true
				} else {
					checkAll.checked = false
				}

			});
		});
	}
}


// box-actions

const boxActions = document.querySelector(`[box-actions]`);
if (boxActions) {
	const button = boxActions.querySelector('button');
	button.addEventListener('click', () => {
		const select = boxActions.querySelector('select');
		if (select) {
			const status = select.value;
			const ids = [];
			let checked = document.querySelectorAll(`input[name="checkItem"]:checked`);
			checked.forEach(input => {
				ids.push(input.value);
			});
			if (status && ids.length > 0) {
				const dataChangeMulti = {
					status: status,
					ids: ids
				};

				console.log(dataChangeMulti);
				

				fetch(`/admin/product/change-multi`, {
						method: 'PATCH',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(dataChangeMulti),

					})
					.then(res => res.json())
					.then(data => {
						if (data.code == 200) {

							window.location.reload();
						}

				});

			}

		}
	});

}