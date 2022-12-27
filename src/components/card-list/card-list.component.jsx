import './card-list.styles.css';
import Card from '../card/card.component';

const CardList = (props) => {
	const { monsters } = props;

	return (
		<div className='card-list'>
			{monsters.map((monster) => {
				return <Card monster={monster} key={monster.id} />;
			})}
		</div>
	);
};

export default CardList;
