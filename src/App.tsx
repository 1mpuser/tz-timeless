import { useEffect, useState } from 'react';
import './App.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios';
import {
	IAgeStat,
	IGenderStat,
	IUser,
	countStatistics,
	getUserAddress,
	getUserBirthday,
} from './service/interfaces';
import SearchInput from './components/SearchInput/SearchInput';
import RefreshButton from './components/RefreshButton/RefreshButton';

import { initialUsers } from './service/initialUsers';

function App() {
	const [users, setUsers] = useState<IUser[]>([]);
	const [genderStat, setGenderStat] = useState<IGenderStat>();
	const [ageStat, setAgeStat] = useState<IAgeStat>();
	const [search, setSearch] = useState('');
	const [refreshCounter, setRefreshCounter] = useState(0);

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
	}, [refreshCounter]);

	const searchUsers = users.filter((user) => {
		const str = `${Object.values(user.name).join(' ')} ${user.email} ${
			user.phone
		} ${getUserAddress(user)} ${getUserBirthday(user)}`;
		return str.includes(search);
	});

	return (
		<>
			<div className='flex justify-between m-[32px] '>
				<SearchInput search={search} setSearch={(str) => setSearch(str)} />
				<RefreshButton
					click={() => {
						setRefreshCounter(refreshCounter + 1);
					}}
				/>
			</div>
		</>
	);
}

export default App;
