import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';

const Home = ({ id, go, Prof, Sklad, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Space Colonizator</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Connect">
			<ListItem
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</ListItem>
		</Group>}

		<Group title='Navigation Example'>
			<Div style={{display: 'flex'}}>
		        <Button size="l" mode="Primary" stretched style={{ marginRight: 8 }} onClick={Prof}>Мой профиль</Button>
		        <Button sizq="l" mode="Primary" stretched mode="secondary" onClick={Sklad}>Склад</Button>
		    </Div>
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Мой профиль
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
