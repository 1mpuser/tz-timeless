export interface IUser {
	gender: 'male' | 'female';
	cell: string;
	email: string;
	nat: string;
	phone: string;
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
	registered: {
		date: string;
		age: number;
	};
	dob: {
		date: string;
		age: number;
	};
    login: {
        uuid: string;
        md5: string;
        password: string;
        salt: string;
        sha1: string;
        sha256: string;
        username: string;
    }
	location: {
		city: string;
		country: string;
        state: string;
		coordinates: {
			latitude: string;
			longitude: string;
		};
		postcode: number | string;
		street: {
			number: number;
			name: string;
		};
		timezone: {
			offset: string;
			description: string;
		};
	};
	id: {
		name: string;
		value: string | null
	};
	name: {
		title: string;
		first: string;
		last: string;
	};
}

export interface IAgeStat {
	[key: string]: number;
}
export interface IGenderStat {
	male: number;
	female: number;
}

export const countStatistics = (users: IUser[]) => {
	const ageStat: IAgeStat = {
		'11to20': 0,
		'21to30': 0,
		'31to40': 0,
		'41to50': 0,
		'51+': 0,
	};
	const genderStat = {
		male: 0,
		female: 0,
	};

	for (const user of users) {
		if (user.gender === 'male') genderStat.male += 1;
		else genderStat.female += 1;
		for (const key of Object.keys(ageStat)) {
			if (key.includes('51')) {
				if (user.dob.age >= 51) ageStat['51+'] = ageStat['51+'] + 1;
			} else {
				const [first, last] = key.split('to');

				if (user.dob.age >= +first && user.dob.age <= +last) {
					ageStat[key] = +ageStat[key] + 1;
				}
			}
		}
	}

	return {
		genderStat,
		ageStat,
	};
};
