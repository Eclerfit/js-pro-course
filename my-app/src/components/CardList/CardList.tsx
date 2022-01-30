import './CardList.css';

interface ICardListProps {
  items: Array<string>
}

function CardList(props: ICardListProps) {
  const items = props.items;
  const listItems = items.map((item, index) => (
    <li key={index}>  
      {item}
    </li>
  ));
  return (
  <ul>{listItems}</ul>
  )
}

let bottom: ICardListProps = { items: ['1 visit is cost 12BYN', '4 visits are cost 42BYN', '6 visits are cost 63BYN', '8 visits are cost 82BYN'] };
CardList(bottom);

export default CardList;
