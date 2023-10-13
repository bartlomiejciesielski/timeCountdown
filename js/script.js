const settings = document.querySelector('.settings')
const settingsBtn = document.querySelector('.settings-btn')
const imageSection = document.querySelector('.image-section')
const eventName = document.querySelector('#event-name')
const eventDay = document.querySelector('#event-day')
const eventMonth = document.querySelector('#event-month')
const eventYear = document.querySelector('#event-year')
const eventImg = document.querySelector('#event-image')
const daysCount = document.querySelector('.days-count')
const hoursCount = document.querySelector('.hours-count')
const minutesCount = document.querySelector('.minutes-count')
const secondsCount = document.querySelector('.seconds-count')
const saveBtn = document.querySelector('.save')
const eventSpan = document.querySelector('.event')
const eventDayInput = document.getElementById('event-day')
const eventMonthInput = document.getElementById('event-month')
const eventYearInput = document.getElementById('event-year')
let usersTime

eventDayInput.addEventListener('input', () => {
	if (eventDayInput.value < 1) {
		eventDayInput.value = 1
	} else if (eventDayInput.value > 31) {
		eventDayInput.value = 31
	}
})

eventMonthInput.addEventListener('input', () => {
	if (eventMonthInput.value < 1) {
		eventMonthInput.value = 1
	} else if (eventMonthInput.value > 12) {
		eventMonthInput.value = 12
	}
})

eventYearInput.addEventListener('input', () => {
	if (eventYearInput.value < 1) {
		eventYearInput.value = 1
	} else if (eventYearInput.value > 9999) {
		eventYearInput.value = 9999
	}
})

const setTime = () => {
	const currentTime = new Date()
	const result = usersTime - currentTime
	const days = Math.floor(result / 1000 / 60 / 60 / 24)
	const hours = Math.floor(result / 1000 / 60 / 60) % 24
	const minutes = Math.floor(result / 1000 / 60) % 60
	const seconds = Math.floor(result / 1000) % 60

	daysCount.textContent = days
	hoursCount.textContent = hours
	minutesCount.textContent = minutes
	secondsCount.textContent = seconds
}

const appUpdate = () => {
	eventSpan.textContent = eventName.value
	usersTime = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}`)
    imageSection.style.backgroundImage = `url('${eventImg.value}')`;
	setTime()
}
appUpdate()


settingsBtn.addEventListener('click', () => {
	settings.classList.toggle('active')
})

saveBtn.addEventListener('click', appUpdate)


setInterval(setTime, 1000)
