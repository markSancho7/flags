const containerFlagsElement = document.getElementById('containerFlags');
const flagElement = document.getElementById('flag');
const flagNameElement = document.getElementById('flagName');
const flagNativeNameElement = document.getElementById('flagNativeName');
const flagOfficialNameElement = document.getElementById('flagOfficialName');

const flagsData = async url => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

const getAllFlags = async () => {
	const getFlags = await flagsData(
		`https://restcountries.com/v3.1/all?fields=name,flags`
	);
	console.log(getFlags);
	for (let i = 0; i < getFlags.length; i++) {
		const imageFlag = document.createElement('img');
		imageFlag.id = i;
		imageFlag.src = getFlags[i].flags.png;
		imageFlag.addEventListener('click', checkFlag);
		containerFlagsElement.append(imageFlag);
	}
};
getAllFlags();

const checkFlag = async event => {
	const getFlags = await flagsData(
		`https://restcountries.com/v3.1/all?fields=name,flags`
	);
	flagNameElement.textContent = getFlags[event.target.id].name.common;
	flagNativeNameElement.textContent =
		getFlags[event.target.id].name.nativeName.official;
	console.log(getFlags[event.target.id]);
};
