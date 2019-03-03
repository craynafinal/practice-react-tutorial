const Card = (props) => {
	return (
  	<div style={{margin: 'lem'}}>
    	<img width='75' src ={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
      	<div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

let data = [
	{ name: "Paul O’Shannessy",
  	avatar_url: "https://avatars1.githubusercontent.com/u/8445?v=4",
    company: "Facebook" },
  { name: "Blake Mizerany",
  	avatar_url: "https://avatars2.githubusercontent.com/u/46?v=4",
    company: "null" }
];

const CardList = (props) => {
	return (
  	<div>
    	{props.cards.map(card => <Card {...card} />)}
    </div>
  );
};

ReactDOM.render(<CardList cards={data} />, mountNode);
