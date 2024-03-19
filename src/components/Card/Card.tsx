import React from 'react';
import classes from './Card.module.css';
import {
	IUser,
	getUserAddress,
	getUserBirthday,
} from '../../service/interfaces';
import DeleteIcon from '@mui/icons-material/Delete';

interface ICardProps {
	user: IUser;
	onDelete: (user: IUser) => void;
}

const Card: React.FC<ICardProps> = ({ user, onDelete }) => {
	return (
		<div className={classes.card}>
			<div className={classes.top}>
				<div
					className={classes.image}
					style={{ backgroundImage: `url(${user.picture.large})` }}
				/>
				<div className={classes.text}>
					<p className={classes['head-text']}>
						{user.name.first + ' ' + user.name.last}
					</p>
					<p>{user.email}</p>
				</div>
				<div
					onClick={() => onDelete(user)}
					className={classes['delete-icon-wrapper']}
				>
					<DeleteIcon className={classes['delete-icon']} />
				</div>
			</div>
			<div className='mt-5'>
				<div className={classes['bottom-info']}>
					<label className={classes.key}>Phone No</label>
					<div className={classes.value}>{user.phone}</div>
				</div>
				<div className={classes['bottom-info']}>
					<label className={classes.key}>Birthday</label>
					<div className={classes.value}>{getUserBirthday(user)}</div>
				</div>
				<div className={classes['bottom-info']}>
					<label className={classes.key}>Address</label>
					<div className={classes.value}>{getUserAddress(user)}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
