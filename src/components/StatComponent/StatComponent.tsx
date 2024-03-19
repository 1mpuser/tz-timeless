/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import classes from './StatComponent.module.css';
import { IAgeStat, IGenderStat } from '../../service/service';

interface IStat {
	ageStat?: IAgeStat;
	genderStat?: IGenderStat;
}

const StatComponent: React.FC<IStat> = ({ ageStat, genderStat }) => {
	return (
		<div className={classes['stat-ovr']}>
			<div className={classes['stat-big-label']}>500 users</div>
			<div className={classes['stat-big-label']}>
				Age Groups
				<div className='mt-2'>
					{ageStat
						? Object.entries(ageStat).map(([key, value]) => {
								const arr = key.split('to');

								const keyString = arr.length > 1 ? arr.join(' to ') : arr[0];

								return (
									<div className={classes.info}>
										<label className={classes.key}>{keyString}</label>
										<div className={classes.value}>{value}</div>
									</div>
								);
						  })
						: null}
				</div>
			</div>
			<div className={classes['stat-big-label-tmp']}>
				Gender Groups
				{genderStat && (
					<div className='mt-2'>
						<div className={classes.info}>
							<label className={classes.key}>Male</label>
							<div className={classes.value}>{genderStat.male}</div>
						</div>
						<div className={classes.info}>
							<label className={classes.key}>Female</label>
							<div className={classes.value}>{genderStat.female}</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default StatComponent;
