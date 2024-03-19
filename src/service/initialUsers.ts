import { IUser } from './service';

// Cause there is delay to get data from the server
export const initialUsers: IUser[] = [
	{
		gender: 'male',
		name: {
			title: 'Mr',
			first: 'Leonard',
			last: 'Mangold',
		},
		location: {
			street: {
				number: 8313,
				name: 'Finkenweg',
			},
			city: 'Velden',
			state: 'Baden-Württemberg',
			country: 'Germany',
			postcode: 19532,
			coordinates: {
				latitude: '36.9944',
				longitude: '100.5465',
			},
			timezone: {
				offset: '-12:00',
				description: 'Eniwetok, Kwajalein',
			},
		},
		email: 'leonard.mangold@example.com',
		login: {
			uuid: 'c55e690e-9c04-4387-b37a-80d5e0144c57',
			username: 'purpleswan146',
			password: 'awful',
			salt: 'rsWuDXPf',
			md5: 'a0b91ab05f4c4d6386555cf288697c97',
			sha1: '558ad726c18de44d3a7795160f63889c8aac56ad',
			sha256:
				'874ee04186af5791b9e749a477a94db73afcc6b78d1a51e29215b2e4af044243',
		},
		dob: {
			date: '1984-06-19T17:33:30.100Z',
			age: 39,
		},
		registered: {
			date: '2011-09-17T00:05:05.955Z',
			age: 12,
		},
		phone: '0777-7027795',
		cell: '0175-5338774',
		id: {
			name: 'SVNR',
			value: '74 190684 M 159',
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/men/87.jpg',
			medium: 'https://randomuser.me/api/portraits/med/men/87.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/men/87.jpg',
		},
		nat: 'DE',
	},
	{
		gender: 'male',
		name: {
			title: 'Mr',
			first: 'Guillaume',
			last: 'Morin',
		},
		location: {
			street: {
				number: 1837,
				name: 'Avenue du Fort-Caire',
			},
			city: 'Dijon',
			state: 'Ille-et-Vilaine',
			country: 'France',
			postcode: 11807,
			coordinates: {
				latitude: '52.8653',
				longitude: '60.7035',
			},
			timezone: {
				offset: '-3:30',
				description: 'Newfoundland',
			},
		},
		email: 'guillaume.morin@example.com',
		login: {
			uuid: '11ad0b7d-bccc-413b-bf88-955ecb7d5f61',
			username: 'crazyladybug403',
			password: 'aikido',
			salt: 'yIvKwm39',
			md5: '80a48ad76e9b9e02f7840ea3233112fe',
			sha1: '1c7fac4d7907b209b8d298efd9d2f7157211fc34',
			sha256:
				'dc91c2534c123973b14c713879b3d589e163bbcfb15d86624bd7bd2036fe8de3',
		},
		dob: {
			date: '1951-02-26T04:48:06.533Z',
			age: 73,
		},
		registered: {
			date: '2014-06-25T20:41:11.524Z',
			age: 9,
		},
		phone: '01-13-88-21-82',
		cell: '06-88-05-94-52',
		id: {
			name: 'INSEE',
			value: '1510148585096 59',
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/men/84.jpg',
			medium: 'https://randomuser.me/api/portraits/med/men/84.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/men/84.jpg',
		},
		nat: 'FR',
	},
	{
		gender: 'male',
		name: {
			title: 'Mr',
			first: 'Batur',
			last: 'Saygıner',
		},
		location: {
			street: {
				number: 3183,
				name: 'Tunalı Hilmi Cd',
			},
			city: 'Kocaeli',
			state: 'Konya',
			country: 'Turkey',
			postcode: 97533,
			coordinates: {
				latitude: '-27.3282',
				longitude: '79.3120',
			},
			timezone: {
				offset: '+8:00',
				description: 'Beijing, Perth, Singapore, Hong Kong',
			},
		},
		email: 'batur.sayginer@example.com',
		login: {
			uuid: '52157068-5953-4ef1-8751-9d226cd31d3e',
			username: 'blackbear759',
			password: 'bears',
			salt: 'Qz0AYLUc',
			md5: '3fd9ed51b0d5de4067075999df592789',
			sha1: '78c736bb2e50f7be627b2b77db5665cc8f36ab88',
			sha256:
				'b4333001a709554482a0409a147464bd6c0be4232cb34b1a36366386ee8a5d0f',
		},
		dob: {
			date: '1945-01-08T08:48:57.956Z',
			age: 79,
		},
		registered: {
			date: '2003-03-24T02:40:13.952Z',
			age: 20,
		},
		phone: '(746)-391-0540',
		cell: '(490)-984-1736',
		id: {
			name: '',
			value: null,
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/men/72.jpg',
			medium: 'https://randomuser.me/api/portraits/med/men/72.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/men/72.jpg',
		},
		nat: 'TR',
	},
	{
		gender: 'female',
		name: {
			title: 'Miss',
			first: 'Jovana',
			last: 'Tomić',
		},
		location: {
			street: {
				number: 3164,
				name: 'Boračka',
			},
			city: 'Vlasotince',
			state: 'Šumadija',
			country: 'Serbia',
			postcode: 54143,
			coordinates: {
				latitude: '71.5498',
				longitude: '-152.8674',
			},
			timezone: {
				offset: '-3:00',
				description: 'Brazil, Buenos Aires, Georgetown',
			},
		},
		email: 'jovana.tomic@example.com',
		login: {
			uuid: '8e6946d8-d90f-4ad2-9bd5-a88fa6f6c9c0',
			username: 'blackpanda612',
			password: 'camper',
			salt: 'oZ5Yljuq',
			md5: 'e3747f05627c18fd9e4a46822ac36f39',
			sha1: '7038c88ce7162b57ccdedeaa2c3fb272e72b17f6',
			sha256:
				'6b0bfd117bf151bf8e9ed5f3627c1eff1ec4e6ed2eaf845d6f5282b7b8150d42',
		},
		dob: {
			date: '1947-09-21T11:30:31.739Z',
			age: 76,
		},
		registered: {
			date: '2019-07-24T10:27:17.195Z',
			age: 4,
		},
		phone: '024-1807-019',
		cell: '064-7842-076',
		id: {
			name: 'SID',
			value: '016601027',
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/women/81.jpg',
			medium: 'https://randomuser.me/api/portraits/med/women/81.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/women/81.jpg',
		},
		nat: 'RS',
	},
	{
		gender: 'male',
		name: {
			title: 'Mr',
			first: 'Bertram',
			last: 'Madsen',
		},
		location: {
			street: {
				number: 1958,
				name: 'Langgade',
			},
			city: 'Aaborg Øst',
			state: 'Sjælland',
			country: 'Denmark',
			postcode: 88697,
			coordinates: {
				latitude: '-67.5268',
				longitude: '-129.2850',
			},
			timezone: {
				offset: '+4:30',
				description: 'Kabul',
			},
		},
		email: 'bertram.madsen@example.com',
		login: {
			uuid: '0b00bc6a-5e20-4870-bf0e-d62c59dc5d05',
			username: 'happysnake552',
			password: 'martine',
			salt: '6b3EO1l9',
			md5: 'fd120293823d28f0d7207d57380bf1fb',
			sha1: '5437303bcee877726b975dc291795f0d37723d0d',
			sha256:
				'f5adb5f7bb4ae68d86affbbb760a615a2f16ce068a5c3e7463959081d2569ea9',
		},
		dob: {
			date: '1955-01-25T15:09:39.215Z',
			age: 69,
		},
		registered: {
			date: '2012-09-22T09:27:50.653Z',
			age: 11,
		},
		phone: '15074396',
		cell: '24604353',
		id: {
			name: 'CPR',
			value: '250155-6077',
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/men/82.jpg',
			medium: 'https://randomuser.me/api/portraits/med/men/82.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/men/82.jpg',
		},
		nat: 'DK',
	},
	{
		gender: 'female',
		name: {
			title: 'Ms',
			first: 'Afşar',
			last: 'Kunt',
		},
		location: {
			street: {
				number: 1827,
				name: 'Necatibey Cd',
			},
			city: 'Karabük',
			state: 'Karaman',
			country: 'Turkey',
			postcode: 50432,
			coordinates: {
				latitude: '-33.0586',
				longitude: '-147.7463',
			},
			timezone: {
				offset: '+3:30',
				description: 'Tehran',
			},
		},
		email: 'afsar.kunt@example.com',
		login: {
			uuid: 'ee73ded3-2543-42b9-8dd5-62d0c13e7bd7',
			username: 'brownbear837',
			password: 'gracie',
			salt: 'Zr6l4Y7K',
			md5: '42f32413c0506dba67986f0541df69c0',
			sha1: '7e219ce2f14b29781a2df7b09815c028f904f131',
			sha256:
				'8034f5e913b2a0e57bce1a4c0eb82d78fcd4f4536f9016c3cc5022d94c584900',
		},
		dob: {
			date: '1971-10-28T12:23:46.712Z',
			age: 52,
		},
		registered: {
			date: '2003-11-29T12:55:00.349Z',
			age: 20,
		},
		phone: '(858)-709-9489',
		cell: '(768)-459-4231',
		id: {
			name: '',
			value: null,
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/women/88.jpg',
			medium: 'https://randomuser.me/api/portraits/med/women/88.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/women/88.jpg',
		},
		nat: 'TR',
	},
	{
		gender: 'female',
		name: {
			title: 'Mrs',
			first: 'فاطمه',
			last: 'جعفری',
		},
		location: {
			street: {
				number: 7747,
				name: 'میدان قیام',
			},
			city: 'ایلام',
			state: 'کرمان',
			country: 'Iran',
			postcode: 11129,
			coordinates: {
				latitude: '-37.6533',
				longitude: '-177.1232',
			},
			timezone: {
				offset: '+7:00',
				description: 'Bangkok, Hanoi, Jakarta',
			},
		},
		email: 'ftmh.jaafry@example.com',
		login: {
			uuid: 'b902ab02-13b4-4527-a370-ade0e7ad2f96',
			username: 'sadelephant627',
			password: 'wyatt',
			salt: 'fp7Sj3fE',
			md5: '49d0e4f53cdb400ca3911c5639da1191',
			sha1: '2561b5e08fe8b6854ef04c3ea3d5993ddf63fd10',
			sha256:
				'739fcb20af6185a4f6f73f0c17d3b2d6a1f71ba94ebcac0b73ba0597c0d30f7d',
		},
		dob: {
			date: '1998-09-10T11:13:37.218Z',
			age: 25,
		},
		registered: {
			date: '2012-04-19T13:48:47.794Z',
			age: 11,
		},
		phone: '040-44900845',
		cell: '0988-601-9730',
		id: {
			name: '',
			value: null,
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/women/6.jpg',
			medium: 'https://randomuser.me/api/portraits/med/women/6.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/women/6.jpg',
		},
		nat: 'IR',
	},
	{
		gender: 'male',
		name: {
			title: 'Mr',
			first: 'Tristan',
			last: 'Jensen',
		},
		location: {
			street: {
				number: 2307,
				name: 'Main Road',
			},
			city: 'Chichester',
			state: 'Suffolk',
			country: 'United Kingdom',
			postcode: 'N9R 1GT',
			coordinates: {
				latitude: '57.0820',
				longitude: '0.8615',
			},
			timezone: {
				offset: '-5:00',
				description: 'Eastern Time (US & Canada), Bogota, Lima',
			},
		},
		email: 'tristan.jensen@example.com',
		login: {
			uuid: '28d280b7-4ea4-47a0-b684-a0cbed18f928',
			username: 'smallbird139',
			password: 'pringles',
			salt: 'C3pQHWvD',
			md5: '3765a2472bbcfe2cdd8de6be463007f7',
			sha1: '9312096196efceb4d0cd70091771bf7a2b9bb567',
			sha256:
				'0d9d29d210dde1b2d6a53f8966c19d1ba3990b650225ffc881725df08d34029e',
		},
		dob: {
			date: '1947-04-25T07:10:26.370Z',
			age: 76,
		},
		registered: {
			date: '2019-09-25T20:04:42.132Z',
			age: 4,
		},
		phone: '0117012 865 2784',
		cell: '07801 927507',
		id: {
			name: 'NINO',
			value: 'WX 79 26 33 Q',
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/men/5.jpg',
			medium: 'https://randomuser.me/api/portraits/med/men/5.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/men/5.jpg',
		},
		nat: 'GB',
	},
	{
		gender: 'female',
		name: {
			title: 'Miss',
			first: 'آدرینا',
			last: 'پارسا',
		},
		location: {
			street: {
				number: 2450,
				name: 'موحد دانش',
			},
			city: 'بجنورد',
			state: 'همدان',
			country: 'Iran',
			postcode: 16023,
			coordinates: {
				latitude: '84.8342',
				longitude: '134.6680',
			},
			timezone: {
				offset: '+10:00',
				description: 'Eastern Australia, Guam, Vladivostok',
			},
		},
		email: 'adryn.prs@example.com',
		login: {
			uuid: '7d4e2ecf-9630-4d71-ad8d-c0ff6cebae69',
			username: 'brownlion903',
			password: 'zaq123',
			salt: 'Wzbeehov',
			md5: '230356e5ff029f2679da1a0fe809db48',
			sha1: '052ed128e487af23f834681d0b84c9c16eaad75a',
			sha256:
				'988b7764c4fab3b9fd22f3556e77e2b077c0611b269ecdb8a0de22d33e6efef0',
		},
		dob: {
			date: '1964-05-06T22:28:59.761Z',
			age: 59,
		},
		registered: {
			date: '2015-03-26T04:20:18.782Z',
			age: 8,
		},
		phone: '028-64502116',
		cell: '0973-817-7036',
		id: {
			name: '',
			value: null,
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/women/62.jpg',
			medium: 'https://randomuser.me/api/portraits/med/women/62.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/women/62.jpg',
		},
		nat: 'IR',
	},
	{
		gender: 'female',
		name: {
			title: 'Ms',
			first: 'Jenny',
			last: 'Carter',
		},
		location: {
			street: {
				number: 6695,
				name: 'The Grove',
			},
			city: 'Stevenage',
			state: 'West Glamorgan',
			country: 'United Kingdom',
			postcode: 'N6I 6SE',
			coordinates: {
				latitude: '79.8342',
				longitude: '-29.9949',
			},
			timezone: {
				offset: '+7:00',
				description: 'Bangkok, Hanoi, Jakarta',
			},
		},
		email: 'jenny.carter@example.com',
		login: {
			uuid: '3629c91a-dcc2-4d01-8fb2-e17fb49f7161',
			username: 'whitefrog251',
			password: 'phish1',
			salt: 'spbHqmsl',
			md5: '5e5cf0d4c960b68f56fe714cff9d590e',
			sha1: 'd4116bc9610bd91f59199462c70dc98e83786722',
			sha256:
				'd4c0cf4b30e6fc53ec4ebc46af14fed0459778b4b78f70c66bffd1c59ae468e1',
		},
		dob: {
			date: '1965-02-06T00:07:49.320Z',
			age: 59,
		},
		registered: {
			date: '2007-10-12T02:24:56.078Z',
			age: 16,
		},
		phone: '015395 95292',
		cell: '07225 073718',
		id: {
			name: 'NINO',
			value: 'RE 78 84 37 C',
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/women/17.jpg',
			medium: 'https://randomuser.me/api/portraits/med/women/17.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/women/17.jpg',
		},
		nat: 'GB',
	},
];
