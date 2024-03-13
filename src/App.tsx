import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import {
	IAgeStat,
	IGenderStat,
	IUser,
	countStatistics,
} from './service/interfaces';

import { initialUsers } from './service/initialUsers';

function App() {
	const [users, setUsers] = useState<IUser[]>([]);
	const [genderStat, setGenderStat] = useState<IGenderStat>();
	const [ageStat, setAgeStat] = useState<IAgeStat>();

	useEffect(() => {
		const foo = async () => {
			// const data = await axios.get('https://randomuser.me/api/?results=500');
			// const users = data.data.results as IUser[];
      const users = initialUsers;

			setUsers(users);

			const stat = countStatistics(users);

			setGenderStat(stat.genderStat);
			setAgeStat(stat.ageStat);
		};

		foo();
	});

	console.log({ users, ageStat, genderStat });

	return <></>;
}

export default App;
