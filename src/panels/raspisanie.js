import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import {Group, Div, Button} from '@vkontakte/vkui/dist';

import './main.css';

const osName = platform();

const raspisanie = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Расписание - Специальность
		</PanelHeader>
		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={props.go} data-to="pd">
					ПД - Правоохранительная деятельность
				</Button>
			</Div>
			<Div>
				<Button size="xl" level="2" onClick={props.go} data-to="y">
					Ю - Право и организация социального обеспечения
				</Button>
			</Div>
			<Div>
				<Button size="xl" level="2" onClick={props.go} data-to="psa">
					ПСА - Право и судебное администрирование
				</Button>
			</Div>
		</Group>
	</Panel>
);

raspisanie.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default raspisanie;
