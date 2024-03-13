import React from 'react';
import classes from './RefreshButton.module.css';

interface IRefreshButtonProps {
	click: () => void;
}

const RefreshButton: React.FC<IRefreshButtonProps> = ({ click }) => {
	return (
		<div onClick={() => click()} className={classes['refresh-button']}>
			Refresh Users
		</div>
	);
};

export default RefreshButton;
