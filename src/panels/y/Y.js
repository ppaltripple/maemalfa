import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import {Group, Div, Button} from '@vkontakte/vkui/dist';

const osName = platform();

const pd = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="raspisanie">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Расписание - Номер
		</PanelHeader>
		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={props.go} data-to="raspisanie">
					Ю-228а
				</Button>
			</Div>
			<Div>
				<Button size="xl" level="2" onClick={props.go} data-to="meropriyatia">
					Ю-188
				</Button>
			</Div>
		</Group>
	</Panel>
);

pd.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default pd;
